import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Mathematics Assignment 1',
      subject: 'Mathematics',
      dueDate: '2026-03-25',
      status: 'pending',
      grade: null
    },
    {
      id: 2,
      title: 'English Essay',
      subject: 'English',
      dueDate: '2026-03-20',
      status: 'submitted',
      grade: 'A'
    }
  ]);

  const [courses, setCourses] = useState([
    { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', progress: 75 },
    { id: 2, name: 'English', instructor: 'Ms. Johnson', progress: 85 },
    { id: 3, name: 'Science', instructor: 'Dr. Wilson', progress: 60 }
  ]);

  const [grades, setGrades] = useState([
    { assignment: 'Math Quiz 1', grade: 'A', percentage: 92 },
    { assignment: 'English Essay', grade: 'A', percentage: 88 },
    { assignment: 'Science Project', grade: 'B+', percentage: 82 }
  ]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>VIDHYALAYA</h2>
          <div className="user-info">
            <div className="user-avatar">👨‍🎓</div>
            <div>
              <p className="user-name">{user?.fullName}</p>
              <p className="user-role">Student</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            📊 Dashboard Overview
          </button>
          <button
            className={`nav-item ${activeSection === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveSection('courses')}
          >
            📚 My Courses
          </button>
          <button
            className={`nav-item ${activeSection === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveSection('assignments')}
          >
            ✏️ Assignments
          </button>
          <button
            className={`nav-item ${activeSection === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveSection('grades')}
          >
            📈 Grades
          </button>
          <button
            className={`nav-item ${activeSection === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveSection('schedule')}
          >
            📅 Schedule
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {user?.fullName}!</h1>
          <p className="header-subtitle">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Dashboard Overview */}
        {activeSection === 'overview' && (
          <section className="dashboard-section">
            <h2>Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <h3>{courses.length}</h3>
                  <p>Courses Enrolled</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✏️</div>
                <div className="stat-content">
                  <h3>{assignments.filter(a => a.status === 'pending').length}</h3>
                  <p>Pending Assignments</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h3>3.8</h3>
                  <p>Current GPA</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <h3>85%</h3>
                  <p>Overall Performance</p>
                </div>
              </div>
            </div>

            <div className="recent-section">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">📝</span>
                  <div>
                    <p className="activity-title">Assignment Submitted</p>
                    <p className="activity-time">English Essay - 2 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">📌</span>
                  <div>
                    <p className="activity-title">New Assignment Posted</p>
                    <p className="activity-time">Mathematics - 1 day ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">⭐</span>
                  <div>
                    <p className="activity-title">Grade Posted</p>
                    <p className="activity-time">Science Project - A grade</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Courses Section */}
        {activeSection === 'courses' && (
          <section className="dashboard-section">
            <h2>My Courses</h2>
            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h3>{course.name}</h3>
                    <span className="progress-badge">{course.progress}%</span>
                  </div>
                  <p className="course-instructor">Instructor: {course.instructor}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <button className="course-btn">View Course</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Assignments Section */}
        {activeSection === 'assignments' && (
          <section className="dashboard-section">
            <h2>My Assignments</h2>
            <div className="assignments-list">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="assignment-card">
                  <div className="assignment-header">
                    <h3>{assignment.title}</h3>
                    <span
                      className={`status-badge ${assignment.status}`}
                    >
                      {assignment.status.charAt(0).toUpperCase() +
                        assignment.status.slice(1)}
                    </span>
                  </div>
                  <p className="assignment-subject">{assignment.subject}</p>
                  <p className="assignment-due">
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </p>
                  {assignment.grade && (
                    <p className="assignment-grade">Grade: {assignment.grade}</p>
                  )}
                  <button className="assignment-btn">
                    {assignment.status === 'pending' ? 'Submit' : 'View'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Grades Section */}
        {activeSection === 'grades' && (
          <section className="dashboard-section">
            <h2>My Grades</h2>
            <div className="grades-table">
              <table>
                <thead>
                  <tr>
                    <th>Assignment</th>
                    <th>Grade</th>
                    <th>Percentage</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade, index) => (
                    <tr key={index}>
                      <td>{grade.assignment}</td>
                      <td>
                        <span className="grade-badge">{grade.grade}</span>
                      </td>
                      <td>{grade.percentage}%</td>
                      <td>
                        <button className="feedback-btn">View Feedback</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Schedule Section */}
        {activeSection === 'schedule' && (
          <section className="dashboard-section">
            <h2>Class Schedule</h2>
            <div className="schedule-grid">
              {[
                { day: 'Monday', time: '9:00 AM - 10:30 AM', course: 'Mathematics', room: 'Room 101' },
                { day: 'Tuesday', time: '10:00 AM - 11:30 AM', course: 'English', room: 'Room 203' },
                { day: 'Wednesday', time: '1:00 PM - 2:30 PM', course: 'Science', room: 'Lab 05' },
                { day: 'Thursday', time: '9:00 AM - 10:30 AM', course: 'Mathematics', room: 'Room 101' },
                { day: 'Friday', time: '2:00 PM - 3:30 PM', course: 'English', room: 'Room 203' }
              ].map((session, index) => (
                <div key={index} className="schedule-card">
                  <h3>{session.day}</h3>
                  <p className="time">{session.time}</p>
                  <p className="course">{session.course}</p>
                  <p className="room">{session.room}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
