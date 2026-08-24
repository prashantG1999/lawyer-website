import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../context/useAuth.ts';
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  const { login, user, isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already logged in, redirect to dashboard
  React.useEffect(() => {
    if (user) {
      const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError('Please provide both email and password.');
      return;
    }

    try {
      setIsSubmitting(true);
      await login(email.trim(), password);
      const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const errorObj = err as { code?: string; message?: string };
      if (errorObj?.code === 'auth/invalid-credential' || errorObj?.code === 'auth/wrong-password' || errorObj?.code === 'auth/user-not-found') {
        setError('Invalid owner email or password. Please verify your credentials.');
      } else if (errorObj?.code === 'auth/too-many-requests') {
        setError('Too many unsuccessful attempts. Please wait a few moments and try again.');
      } else {
        setError(errorObj?.message || 'Authentication failed. Please check your credentials.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Owner Portal Login | Juriva Legal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="admin-login-page">
        <div className="login-card">
          <div className="login-header">
            <span className="login-badge">Owner Access</span>
            <h1>Juriva Legal Admin</h1>
            <p>Sign in with your owner credentials to manage legal articles and blog publications.</p>
          </div>

          {!isConfigured && (
            <div className="config-warning-box">
              <strong>⚙️ Firebase Configuration Required</strong>
              Please enter your Firebase keys in the <code>.env</code> file to enable live authentication and cloud database publishing.
            </div>
          )}

          {error && <div className="login-error-alert">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Owner Email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="advocate@jurivalegal.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '🔒'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="login-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="login-footer-links">
            <NavLink to="/">&larr; Return to Public Website</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
