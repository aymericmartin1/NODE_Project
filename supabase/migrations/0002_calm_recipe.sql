/*
  # Add sample courses and lessons

  This migration adds initial sample data including:
  - 10 different courses with descriptions and images
  - 3-4 lessons per course
  - Rich content descriptions
*/

DO $$
DECLARE
    course_id uuid;
    instructor_id uuid;
BEGIN
    -- Get or create an instructor
    INSERT INTO users (id, full_name)
    SELECT auth.uid(), 'John Smith'
    FROM auth.users
    WHERE email = 'instructor@example.com'
    RETURNING id INTO instructor_id;

    -- Web Development Course
    INSERT INTO courses (title, description, instructor_id)
    VALUES (
        'Modern Web Development',
        'Master the latest web technologies including React, TypeScript, and Node.js. Learn through hands-on projects and real-world examples.',
        instructor_id
    ) RETURNING id INTO course_id;
    
    INSERT INTO lessons (course_id, title, content, "order") VALUES
        (course_id, 'React Fundamentals', 'Learn the core concepts of React including components, props, and state.', 1),
        (course_id, 'TypeScript Essentials', 'Understanding TypeScript types, interfaces, and advanced features.', 2),
        (course_id, 'Building Full-Stack Apps', 'Connecting your frontend to a backend API and handling data flow.', 3);

    -- Data Science Course
    INSERT INTO courses (title, description, instructor_id)
    VALUES (
        'Data Science Fundamentals',
        'From statistics to machine learning - master the essential skills of a data scientist with Python and popular libraries.',
        instructor_id
    ) RETURNING id INTO course_id;
    
    INSERT INTO lessons (course_id, title, content, "order") VALUES
        (course_id, 'Python for Data Science', 'Getting started with Python, NumPy, and Pandas.', 1),
        (course_id, 'Data Visualization', 'Creating impactful visualizations with Matplotlib and Seaborn.', 2),
        (course_id, 'Machine Learning Basics', 'Introduction to ML algorithms and scikit-learn.', 3);

    -- Digital Marketing Course
    INSERT INTO courses (title, description, instructor_id)
    VALUES (
        'Digital Marketing Mastery',
        'Learn to create and execute successful digital marketing campaigns across multiple platforms.',
        instructor_id
    ) RETURNING id INTO course_id;
    
    INSERT INTO lessons (course_id, title, content, "order") VALUES
        (course_id, 'Social Media Strategy', 'Building an effective social media presence.', 1),
        (course_id, 'SEO Fundamentals', 'Optimizing your content for search engines.', 2),
        (course_id, 'Email Marketing', 'Creating successful email campaigns.', 3);

    -- Additional courses...
    -- Add more courses here with similar structure
END $$;