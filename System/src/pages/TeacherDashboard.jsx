import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

export default function TeacherDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Student', email: 'john@example.com', attendance: 92 },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', attendance: 88 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', attendance: 75 }
  ]);

  const [classes, setClasses] = useState([
    { id: 1, name: 'Mathematics 101', students: 30, schedule: 'MWF 9:00 AM' },
    { id: 2, name: 'Advanced Calculus', students: 25, schedule: 'TTh 10:00 AM' },
    { id: 3, name: 'Statistics', students: 28, schedule: 'MWF 1:00 PM' }
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
            <div className="user-avatar">👨‍🏫</div>
            <div>
              <p className="user-name">{user?.fullName}</p>
              <p className="user-role">Teacher</p>
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
            className={`nav-item ${activeSection === 'classes' ? 'active' : ''}`}
            onClick={() => setActiveSection('classes')}
          >
            📚 My Classes
          </button>
          <button
            className={`nav-item ${activeSection === 'students' ? 'active' : ''}`}
            onClick={() => setActiveSection('students')}
          >
            👥 Students
          </button>
          <button
            className={`nav-item ${activeSection === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveSection('assignments')}
          >
            ✏️ Create Assignment
          </button>
          <button
            className={`nav-item ${activeSection === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveSection('attendance')}
          >
            📋 Attendance
          </button>
          <button
            className={`nav-item ${activeSection === 'grading' ? 'active' : ''}`}
            onClick={() => setActiveSection('grading')}
          >
            📝 Grading
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
                  <h3>{classes.length}</h3>
                  <p>Classes Teaching</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>{students.length}</h3>
                  <p>Students</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-content">
                  <h3>12</h3>
                  <p>Assignments Created</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>8</h3>
                  <p>Pending Grades</p>
                </div>
              </div>
            </div>

            <div className="recent-section">
              <h3>Quick Actions</h3>
              <div className="activity-list">
                <div className="activity-item clickable">
                  <span className="activity-icon">➕</span>
                  <div>
                    <p className="activity-title">Create New Assignment</p>
                    <p className="activity-time">Post assignment for your classes</p>
                  </div>
                </div>
                <div className="activity-item clickable">
                  <span className="activity-icon">📊</span>
                  <div>
                    <p className="activity-title">View Student Performance</p>
                    <p className="activity-time">Check grades and progress</p>
                  </div>
                </div>
                <div className="activity-item clickable">
                  <span className="activity-icon">📋</span>
                  <div>
                    <p className="activity-title">Mark Attendance</p>
                    <p className="activity-time">Record student attendance</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Classes Section */}
        {activeSection === 'classes' && (
          <section className="dashboard-section">
            <h2>My Classes</h2>
            <div className="courses-grid">
              {classes.map((cls) => (
                <div key={cls.id} className="course-card">
                  <div className="course-header">
                    <h3>{cls.name}</h3>
                  </div>
                  <p className="course-info">Students: {cls.students}</p>
                  <p className="course-info">Schedule: {cls.schedule}</p>
                  <div className="card-actions">
                    <button className="action-btn">View Class</button>
                    <button className="action-btn secondary">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Students Section */}
        {activeSection === 'students' && (
          <section className="dashboard-section">
            <h2>My Students</h2>
            <div className="students-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Attendance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <span className="attendance-badge">{student.attendance}%</span>
                      </td>
                      <td>
                        <button className="action-link">View Progress</button>
                        <button className="action-link">Grade</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Create Assignment Section */}
        {activeSection === 'assignments' && (
          <section className="dashboard-section">
            <h2>Create New Assignment</h2>
            <form className="assignment-form">
              <div className="form-group">
                <label htmlFor="assign-title">Assignment Title</label>
                <input
                  id="assign-title"
                  type="text"
                  placeholder="Enter assignment title"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="assign-class">Select Class</label>
                  <select id="assign-class">
                    <option>Select a class</option>
                    {classes.map((cls) => (
                      <option key={cls.id}>{cls.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="assign-duedate">Due Date</label>
                  <input id="assign-duedate" type="date" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="assign-description">Description</label>
                <textarea
                  id="assign-description"
                  placeholder="Enter assignment description"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="auth-btn">
                Create Assignment
              </button>
            </form>
          </section>
        )}

        {/* Attendance Section */}
        {activeSection === 'attendance' && (
          <section className="dashboard-section">
            <h2>Mark Attendance</h2>
            <div className="attendance-section">
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="attendance-class">Select Class</label>
                <select id="attendance-class">
                  <option>Select a class</option>
                  {classes.map((cls) => (
                    <option key={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>

              <div className="attendance-list">
                {students.map((student) => (
                  <div key={student.id} className="attendance-item">
                    <span>{student.name}</span>
                    <div className="attendance-controls">
                      <button className="attendance-btn present">Present</button>
                      <button className="attendance-btn absent">Absent</button>
                      <button className="attendance-btn late">Late</button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="auth-btn">Save Attendance</button>
            </div>
          </section>
        )}

        {/* Grading Section */}
        {activeSection === 'grading' && (
          <section className="dashboard-section">
            <h2>Grade Submissions</h2>
            <div className="grading-table">
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Assignment</th>
                    <th>Submitted</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Student</td>
                    <td>Math Assignment 1</td>
                    <td>2026-03-18</td>
                    <td>
                      <span className="status-badge pending">Pending</span>
                    </td>
                    <td>
                      <button className="action-link">Grade</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Doe</td>
                    <td>Math Assignment 1</td>
                    <td>2026-03-17</td>
                    <td>
                      <span className="status-badge pending">Pending</span>
                    </td>
                    <td>
                      <button className="action-link">Grade</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mike Johnson</td>
                    <td>English Essay</td>
                    <td>2026-03-16</td>
                    <td>
                      <span className="status-badge graded">Graded</span>
                    </td>
                    <td>
                      <button className="action-link">Edit Grade</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
