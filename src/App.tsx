import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

// Public pages statically imported for instant initial paint & zero CLS
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import PracticeAreaDetail from './pages/practice-areas/PracticeAreaDetail.tsx';
import Blog from './pages/Blog.tsx';
import BlogPostDetail from './pages/BlogPostDetail.tsx';

// Code-split admin and Firebase infrastructure (heavy dependencies loaded only for owner)
const AdminRouteWrapper = lazy(() => import('./components/AdminRouteWrapper.tsx'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin.tsx'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.tsx'));
const AdminBlogEditor = lazy(() => import('./pages/admin/AdminBlogEditor.tsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.tsx'));

// Subtle route transition fallback
const RouteLoadingFallback = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--secondary-color)',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    opacity: 0.8
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '36px',
        height: '36px',
        border: '3px solid rgba(168, 137, 91, 0.2)',
        borderTopColor: 'var(--secondary-color)',
        borderRadius: '50%',
        margin: '0 auto 1rem',
        animation: 'spin 0.8s linear infinite'
      }} />
      <span>Loading Juriva Legal...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<PracticeAreaDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin / Owner Routes (Firebase only loaded here) */}
              <Route
                path="/admin/login"
                element={
                  <AdminRouteWrapper>
                    <AdminLogin />
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRouteWrapper>
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/new-post"
                element={
                  <AdminRouteWrapper>
                    <ProtectedRoute>
                      <AdminBlogEditor />
                    </ProtectedRoute>
                  </AdminRouteWrapper>
                }
              />
              <Route
                path="/admin/edit/:id"
                element={
                  <AdminRouteWrapper>
                    <ProtectedRoute>
                      <AdminBlogEditor />
                    </ProtectedRoute>
                  </AdminRouteWrapper>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;

