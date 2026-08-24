import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import PracticeAreaDetail from './pages/practice-areas/PracticeAreaDetail.tsx';
import Blog from './pages/Blog.tsx';
import BlogPostDetail from './pages/BlogPostDetail.tsx';
import AdminLogin from './pages/admin/AdminLogin.tsx';
import AdminDashboard from './pages/admin/AdminDashboard.tsx';
import AdminBlogEditor from './pages/admin/AdminBlogEditor.tsx';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<PracticeAreaDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin / Owner Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/new-post"
                element={
                  <ProtectedRoute>
                    <AdminBlogEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/edit/:id"
                element={
                  <ProtectedRoute>
                    <AdminBlogEditor />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;

