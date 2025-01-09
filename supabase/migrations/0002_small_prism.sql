/*
  # Add sample courses and lessons

  1. New Data
    - Creates a default instructor user
    - Adds 3 initial courses with descriptions
    - Adds 3-4 lessons per course
    
  2. Security
    - Ensures instructor exists before adding courses
    - Maintains referential integrity
*/

-- First create the instructor
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  'instructor@example.com',
  '$2a$10$5RqMh6/oDTzYqNQvq8hP8eWyqsV6N1QZ9RKD0NlvYk.uW9b5hZmIi', -- password: instructor123
  now(),
  now(),
  now()
)
ON CONFLICT (id) DO NOTHING;

-- Create instructor profile
INSERT INTO public.users (id, full_name, created_at)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'John Smith',
  now()
)
ON CONFLICT (id) DO NOTHING;

-- Web Development Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000001',
  'Modern Web Development',
  'Master the latest web technologies including React, TypeScript, and Node.js. Learn through hands-on projects and real-world examples.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000001', 'React Fundamentals', 'Learn the core concepts of React including components, props, and state.', 1),
  ('c0000000-0000-0000-0000-000000000001', 'TypeScript Essentials', 'Understanding TypeScript types, interfaces, and advanced features.', 2),
  ('c0000000-0000-0000-0000-000000000001', 'Building Full-Stack Apps', 'Connecting your frontend to a backend API and handling data flow.', 3);

-- Data Science Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000002',
  'Data Science Fundamentals',
  'From statistics to machine learning - master the essential skills of a data scientist with Python and popular libraries.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000002', 'Python for Data Science', 'Getting started with Python, NumPy, and Pandas.', 1),
  ('c0000000-0000-0000-0000-000000000002', 'Data Visualization', 'Creating impactful visualizations with Matplotlib and Seaborn.', 2),
  ('c0000000-0000-0000-0000-000000000002', 'Machine Learning Basics', 'Introduction to ML algorithms and scikit-learn.', 3);

-- Digital Marketing Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000003',
  'Digital Marketing Mastery',
  'Learn to create and execute successful digital marketing campaigns across multiple platforms.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000003', 'Social Media Strategy', 'Building an effective social media presence.', 1),
  ('c0000000-0000-0000-0000-000000000003', 'SEO Fundamentals', 'Optimizing your content for search engines.', 2),
  ('c0000000-0000-0000-0000-000000000003', 'Email Marketing', 'Creating successful email campaigns.', 3);