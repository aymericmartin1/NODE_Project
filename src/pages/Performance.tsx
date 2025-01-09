import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';

type Progress = Database['public']['Tables']['progress']['Row'];

export function Performance() {
  const [progress, setProgress] = useState<Progress[]>([]);

  useEffect(() => {
    async function fetchProgress() {
      const { data: userProgress, error } = await supabase
        .from('progress')
        .select(`
          *,
          lessons (
            title,
            course_id,
            courses (
              title
            )
          )
        `);
      
      if (!error && userProgress) {
        setProgress(userProgress);
      }
    }

    fetchProgress();
  }, []);

  const completionOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Course Completion Progress'
    },
    xAxis: {
      categories: progress.map(p => p.lessons?.title || 'Unknown'),
      title: {
        text: 'Lessons'
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Completion (%)'
      }
    },
    series: [{
      name: 'Progress',
      data: progress.map(p => p.completed ? 100 : 0)
    }]
  };

  const timeSpentOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Time Spent Learning'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Hours'
      }
    },
    series: [{
      name: 'Study Time',
      data: progress.map(p => [
        new Date(p.last_accessed).getTime(),
        Math.random() * 4 // Mock data for demonstration
      ])
    }]
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Performance Analytics</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <HighchartsReact
            highcharts={Highcharts}
            options={completionOptions}
          />
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <HighchartsReact
            highcharts={Highcharts}
            options={timeSpentOptions}
          />
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {progress.map((p, idx) => (
              <li key={p.id}>
                <div className="relative pb-8">
                  {idx !== progress.length - 1 && (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${p.completed ? 'bg-green-500' : 'bg-gray-400'}`}>
                        <span className="text-white text-sm">
                          {idx + 1}
                        </span>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {p.completed ? 'Completed' : 'Started'}{' '}
                          <span className="font-medium text-gray-900">
                            {p.lessons?.title}
                          </span>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {new Date(p.last_accessed).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}