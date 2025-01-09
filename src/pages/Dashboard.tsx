import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { BarChart2, BookOpen, Users } from 'lucide-react';
import type { Database } from '@/lib/database.types';

type Course = Database['public']['Tables']['courses']['Row'];

export function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .limit(5);
      
      if (!error && data) {
        setCourses(data);
      }
      setLoading(false);
    }

    fetchCourses();
  }, []);

  const stats = [
    { name: 'Total Courses', value: courses.length, icon: BookOpen },
    { name: 'In Progress', value: '3', icon: BarChart2 },
    { name: 'Active Students', value: '120', icon: Users },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium">Recent Courses</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {loading ? (
                <p>Loading courses...</p>
              ) : (
                courses.map((course) => (
                  <li key={course.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a href={`/courses/${course.id}`} className="hover:underline focus:outline-none">
                          {course.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}