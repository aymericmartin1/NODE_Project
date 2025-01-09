/*
  # Add additional courses

  This migration adds 7 new courses with their corresponding lessons:
  - UI/UX Design
  - Cloud Computing
  - Cybersecurity
  - Mobile App Development
  - Blockchain Fundamentals
  - Business Analytics
  - Game Development
*/

-- UI/UX Design Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000004',
  'UI/UX Design Fundamentals',
  'Master the principles of user interface and experience design. Learn industry-standard tools and methodologies.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000004', 'Design Thinking', 'Understanding the design thinking process and user-centered design.', 1),
  ('c0000000-0000-0000-0000-000000000004', 'Wireframing and Prototyping', 'Creating effective wireframes and interactive prototypes.', 2),
  ('c0000000-0000-0000-0000-000000000004', 'User Research Methods', 'Conducting user research and usability testing.', 3);

-- Cloud Computing Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000005',
  'Cloud Computing Essentials',
  'Learn cloud architecture, deployment models, and best practices using AWS and Azure.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000005', 'Cloud Fundamentals', 'Introduction to cloud computing concepts and services.', 1),
  ('c0000000-0000-0000-0000-000000000005', 'AWS Services', 'Working with core AWS services and tools.', 2),
  ('c0000000-0000-0000-0000-000000000005', 'Cloud Security', 'Implementing security best practices in the cloud.', 3);

-- Cybersecurity Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000006',
  'Cybersecurity Fundamentals',
  'Learn to protect systems and networks from cyber threats. Master security tools and techniques.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000006', 'Security Basics', 'Understanding common security threats and vulnerabilities.', 1),
  ('c0000000-0000-0000-0000-000000000006', 'Network Security', 'Implementing network security controls and monitoring.', 2),
  ('c0000000-0000-0000-0000-000000000006', 'Ethical Hacking', 'Learning ethical hacking techniques and tools.', 3);

-- Mobile App Development Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000007',
  'Mobile App Development',
  'Build cross-platform mobile applications using React Native and modern development tools.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000007', 'React Native Basics', 'Getting started with React Native development.', 1),
  ('c0000000-0000-0000-0000-000000000007', 'Mobile UI Components', 'Building custom UI components for mobile apps.', 2),
  ('c0000000-0000-0000-0000-000000000007', 'App Deployment', 'Publishing your app to app stores.', 3);

-- Blockchain Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000008',
  'Blockchain Fundamentals',
  'Understand blockchain technology, smart contracts, and decentralized applications.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000008', 'Blockchain Basics', 'Introduction to blockchain technology and cryptocurrencies.', 1),
  ('c0000000-0000-0000-0000-000000000008', 'Smart Contracts', 'Developing and deploying smart contracts.', 2),
  ('c0000000-0000-0000-0000-000000000008', 'DApp Development', 'Building decentralized applications.', 3);

-- Business Analytics Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000009',
  'Business Analytics',
  'Learn to make data-driven business decisions using analytics tools and techniques.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000009', 'Data Analysis', 'Understanding business data and analytics tools.', 1),
  ('c0000000-0000-0000-0000-000000000009', 'Business Intelligence', 'Working with BI tools and dashboards.', 2),
  ('c0000000-0000-0000-0000-000000000009', 'Predictive Analytics', 'Using data to forecast business trends.', 3);

-- Game Development Course
INSERT INTO courses (id, title, description, instructor_id, created_at, updated_at)
VALUES (
  'c0000000-0000-0000-0000-000000000010',
  'Game Development Fundamentals',
  'Create engaging games using modern game engines and development techniques.',
  '00000000-0000-0000-0000-000000000000',
  now(),
  now()
);

INSERT INTO lessons (course_id, title, content, "order") VALUES
  ('c0000000-0000-0000-0000-000000000010', 'Game Design', 'Understanding game design principles and mechanics.', 1),
  ('c0000000-0000-0000-0000-000000000010', 'Unity Basics', 'Getting started with Unity game engine.', 2),
  ('c0000000-0000-0000-0000-000000000010', 'Game Physics', 'Implementing physics and collision detection.', 3);