import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { AuthGuard } from './components/AuthGuard';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { CourseList } from './pages/CourseList';
import { CourseView } from './pages/CourseView';
import { Performance } from './pages/Performance';
import { AccountSettings } from './pages/AccountSettings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <AuthGuard>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/courses/:id" element={<CourseView />} />
                    <Route path="/performance" element={<Performance />} />
                    <Route path="/account" element={<AccountSettings />} />
                  </Routes>
                </Layout>
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;