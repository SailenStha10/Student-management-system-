import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPage.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const user = login(formData.email, formData.password);
      navigate(`/dashboard/${user.role}`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password || !formData.fullName || !selectedRole) {
      setError('Please fill in all fields and select a role');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const user = signup({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        role: selectedRole
      });
      navigate(`/dashboard/${user.role}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      {/* Animated Background Circles */}
      <div className="auth-floating-circle"></div>
      <div className="auth-floating-circle"></div>
      <div className="auth-floating-circle"></div>

      {/* Left Panel - Branding Section */}
      <div className="auth-left-panel">
        <div className="left-content">
          <p className="welcome-text">Welcome to</p>
          <h1 className="brand-title">VIDHYALAYA</h1>
          <p className="brand-description">The complete educational management system for modern institutions.</p>
          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Institutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Card */}
      <div className="auth-right-panel">
        {/* Centered Auth Card */}
        <div className="auth-card">
          <h2 className="auth-heading">{isLogin ? 'Welcome' : 'Create Account'}</h2>
          <p className="auth-subheading">
            {isLogin ? 'Sign in to your account or create a new one' : 'Fill in your details to get started'}
          </p>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(true);
              setError('');
              setSelectedRole(null);
              setFormData({ email: '', password: '', fullName: '' });
            }}
          >
            Sign In
          </button>
          <button
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(false);
              setError('');
              setFormData({ email: '', password: '', fullName: '' });
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="auth-btn">
              Sign In
            </button>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSignupSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <input
                id="signup-name"
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">Email Address</label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {/* Role Selection */}
            <div className="role-selection">
              <label>Select Your Role</label>
              <div className="role-buttons">
                <button
                  type="button"
                  className={`role-btn ${selectedRole === 'student' ? 'selected' : ''}`}
                  onClick={() => setSelectedRole('student')}
                >
                  <span className="role-icon">S</span>
                  Student
                </button>
                <button
                  type="button"
                  className={`role-btn ${selectedRole === 'teacher' ? 'selected' : ''}`}
                  onClick={() => setSelectedRole('teacher')}
                >
                  <span className="role-icon">T</span>
                  Educator
                </button>
              </div>
            </div>

            <button type="submit" className="auth-btn">
              Create Account
            </button>
          </form>
        )}

        <p className="auth-footer" >
           {isLogin
            ? "Don't have an account? "
            : 'Already have an account?'}
          <button
            className="auth-footer"
            style={{
              background: 'none',
              border: 'none',
              color: '#000000',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: 0
            }}
           
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setSelectedRole(null);
              setFormData({ email: '', password: '', fullName: '' });
            }}
          >
           
            {isLogin ? 'Create one!' : 'Sign in!'}
          </button>
        </p>
      </div>
      </div>
    </div>
  );
}
