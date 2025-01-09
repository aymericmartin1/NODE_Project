export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          instructor_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          instructor_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          instructor_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          content: string | null
          order: number
          created_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          content?: string | null
          order: number
          created_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          content?: string | null
          order?: number
          created_at?: string
        }
      }
      progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed: boolean
          last_accessed: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed?: boolean
          last_accessed?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed?: boolean
          last_accessed?: string
          created_at?: string
        }
      }
    }
  }
}