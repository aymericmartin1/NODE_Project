import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle } from 'lucide-react';

type Course = Database['public']['Tables']['courses']['Row'];
type Lesson = Database['public']['Tables']['lessons']['Row'];
type Progress = Database['public']['Tables']['progress']['Row'];

export function CourseView() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<Record<string, Progress>>({});
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    async function fetchCourseData() {
      if (!id) return;

      const { data: courseData } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();

      if (courseData) {
        setCourse(courseData);
      }

      const { data: lessonsData } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', id)
        .order('order');

      if (lessonsData) {
        setLessons(lessonsData);
        if (lessonsData.length > 0) {
          setCurrentLesson(lessonsData[0]);
        }
      }

      const { data: progressData } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

      if (progressData) {
        const progressMap = progressData.reduce((acc, curr) => {
          acc[curr.lesson_id] = curr;
          return acc;
        }, {} as Record<string, Progress>);
        setProgress(progressMap);
      }
    }

    fetchCourseData();
  }, [id]);

  async function handleLessonComplete() {
    if (!currentLesson || !course) return;

    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const { data, error } = await supabase
      .from('progress')
      .upsert({
        user_id: user.id,
        lesson_id: currentLesson.id,
        completed: true,
        last_accessed: new Date().toISOString()
      })
      .select()
      .single();

    if (!error && data) {
      setProgress(prev => ({
        ...prev,
        [currentLesson.id]: data
      }));
    }
  }

  if (!course || !currentLesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4">
          <h2 className="font-semibold text-lg">{course.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{course.description}</p>
        </div>
        <nav className="px-2">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson)}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                currentLesson.id === lesson.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {progress[lesson.id]?.completed ? (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Circle className="mr-2 h-4 w-4 text-gray-400" />
              )}
              {lesson.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-4">{currentLesson.title}</h1>
          <div className="prose max-w-none">
            {currentLesson.content || 'No content available.'}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <Button
              onClick={() => {
                const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
                if (currentIndex > 0) {
                  setCurrentLesson(lessons[currentIndex - 1]);
                }
              }}
              disabled={lessons.indexOf(currentLesson) === 0}
            >
              Previous Lesson
            </Button>
            <Button
              variant="primary"
              onClick={handleLessonComplete}
              disabled={progress[currentLesson.id]?.completed}
            >
              {progress[currentLesson.id]?.completed ? 'Completed' : 'Mark as Complete'}
            </Button>
            <Button
              onClick={() => {
                const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
                if (currentIndex < lessons.length - 1) {
                  setCurrentLesson(lessons[currentIndex + 1]);
                }
              }}
              disabled={lessons.indexOf(currentLesson) === lessons.length - 1}
            >
              Next Lesson
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}