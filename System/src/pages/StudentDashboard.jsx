import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
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

  const [personalInfo, setPersonalInfo] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    rollNumber: '',
    section: '',
    parentContact: '',
    emergencyContact: '',
    bio: ''
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSavePersonalInfo = () => {
    alert('Personal information saved successfully!');
    console.log('Personal info saved:', personalInfo);
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-welcome">
            <p className="sidebar-welcome-label">Welcome Back</p>
            <p className="sidebar-welcome-text">{user?.fullName}</p>
          </div>
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
            Dashboard
          </button>
          <button
            className={`nav-item ${activeSection === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveSection('courses')}
          >
            My Courses
          </button>
          <button
            className={`nav-item ${activeSection === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveSection('assignments')}
          >
            Assignments
          </button>
          <button
            className={`nav-item ${activeSection === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveSection('grades')}
          >
            Grades
          </button>
          <button
            className={`nav-item ${activeSection === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveSection('schedule')}
          >
            Schedule
          </button>
          <button
            className={`nav-item ${activeSection === 'personalinfo' ? 'active' : ''}`}
            onClick={() => setActiveSection('personalinfo')}
          >
            Personal Information
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
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
                  <p>Pending Tasks</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h3>3.8</h3>
                  <p>GPA</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h3>85%</h3>
                  <p>Performance</p>
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
                    <p className="activity-title">New Task Posted</p>
                    <p className="activity-time">Mathematics - 1 day ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">⭐</span>
                  <div>
                    <p className="activity-title">Grade Released</p>
                    <p className="activity-time">Science Project - A grade</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-section">
              <h3>Activity Timeline</h3>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-dot">📚</div>
                  <div className="timeline-content">
                    <p className="timeline-title">New Course Material Added</p>
                    <p className="timeline-description">Mathematics: Chapter 5 - Calculus fundamentals has been added to your course</p>
                    <span className="timeline-type assignment">Course</span>
                    <span className="timeline-time">Today at 10:30 AM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">✏️</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Assignment Submitted Successfully</p>
                    <p className="timeline-description">Your English Essay has been submitted and is awaiting teacher review</p>
                    <span className="timeline-type submission">Submission</span>
                    <span className="timeline-time">Yesterday at 2:45 PM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">⭐</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Grade Released</p>
                    <p className="timeline-description">Your Science Project has been graded with an A. Excellent work!</p>
                    <span className="timeline-type grade">Grade</span>
                    <span className="timeline-time">3 days ago</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">📢</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Class Schedule Updated</p>
                    <p className="timeline-description">Class timing for Friday Mathematics has been changed to 2:00 PM - 3:30 PM</p>
                    <span className="timeline-type announcement">Announcement</span>
                    <span className="timeline-time">1 week ago</span>
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

        {/* Personal Information Section */}
        {activeSection === 'personalinfo' && (
          <section className="dashboard-section">
            <h2>Personal Information</h2>
            <form className="personal-info-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={personalInfo.fullName}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={personalInfo.gender}
                    onChange={handlePersonalInfoChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={personalInfo.dateOfBirth}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input
                    id="rollNumber"
                    type="text"
                    name="rollNumber"
                    value={personalInfo.rollNumber}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your roll number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="grade">Grade/Class</label>
                  <input
                    id="grade"
                    type="text"
                    name="grade"
                    value={personalInfo.grade}
                    onChange={handlePersonalInfoChange}
                    placeholder="E.g., 10th, 12th, B.Tech Year 2"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="section">Section</label>
                  <input
                    id="section"
                    type="text"
                    name="section"
                    value={personalInfo.section}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your section"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="parentContact">Parent/Guardian Contact</label>
                  <input
                    id="parentContact"
                    type="tel"
                    name="parentContact"
                    value={personalInfo.parentContact}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter parent/guardian phone"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact</label>
                  <input
                    id="emergencyContact"
                    type="tel"
                    name="emergencyContact"
                    value={personalInfo.emergencyContact}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter emergency contact number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio/About Yourself</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={personalInfo.bio}
                  onChange={handlePersonalInfoChange}
                  placeholder="Tell us about yourself"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="button"
                className="auth-btn"
                onClick={handleSavePersonalInfo}
              >
                Save Personal Information
              </button>
            </form>
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
    </>
  );
}
