import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

type Course = Database['public']['Tables']['courses']['Row'];

export function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  const columnDefs = useMemo(() => [
    { field: 'title', headerName: 'Course Title', flex: 2 },
    { field: 'description', headerName: 'Description', flex: 3 },
    { 
      field: 'created_at', 
      headerName: 'Created', 
      flex: 1,
      valueFormatter: (params: any) => {
        return new Date(params.value).toLocaleDateString();
      }
    },
    {
      headerName: 'Actions',
      flex: 1,
      cellRenderer: (params: any) => (
        <a
          href={`/courses/${params.data.id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          View Course
        </a>
      )
    }
  ], []);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      
      if (!error && data) {
        setCourses(data);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Courses</h1>
      </div>

      <div className="ag-theme-alpine h-[600px] w-full rounded-lg overflow-hidden">
        <AgGridReact
          rowData={courses}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
}