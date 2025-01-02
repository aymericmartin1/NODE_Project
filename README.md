# E-Learning Platform

A modern e-learning platform built with React, TypeScript, and Supabase. The platform allows users to access courses, track their progress, and view performance analytics.

## Features

- Course dashboard with AG-Grid integration
- Performance analytics with Highcharts
- Auto-save progress tracking
- User authentication and profile management
- Responsive design with Tailwind CSS

## Tech Stack

- Frontend:
  - React with TypeScript
  - AG-Grid for course listings
  - Highcharts for analytics
  - TailwindCSS for styling
  - React Router for navigation
  - Lucide React for icons

- Backend:
  - Supabase for database and authentication
  - PostgreSQL for data storage
  - Row Level Security for data protection

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── lib/           # Utilities and configurations
  └──  pages/         # Page components
```

## Database Schema

The application uses the following tables:

- `users` - Extended user profiles
- `courses` - Course information
- `lessons` - Individual lessons within courses
- `progress` - User progress tracking

## Students involved in the project

- MOLIN Tristan
- MARTIN Aymeric
- GUERANDEL Louis
- DURAND-SMET Hubert