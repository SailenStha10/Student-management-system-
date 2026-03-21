import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
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

  const [personalInfo, setPersonalInfo] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    department: '',
    qualifications: '',
    experience: '',
    specialization: '',
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
            <div className="user-avatar">T</div>
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
            Dashboard
          </button>
          <button
            className={`nav-item ${activeSection === 'classes' ? 'active' : ''}`}
            onClick={() => setActiveSection('classes')}
          >
            My Classes
          </button>
          <button
            className={`nav-item ${activeSection === 'students' ? 'active' : ''}`}
            onClick={() => setActiveSection('students')}
          >
            Students
          </button>
          <button
            className={`nav-item ${activeSection === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveSection('assignments')}
          >
            Create Assignment
          </button>
          <button
            className={`nav-item ${activeSection === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveSection('attendance')}
          >
            Attendance
          </button>
          <button
            className={`nav-item ${activeSection === 'grading' ? 'active' : ''}`}
            onClick={() => setActiveSection('grading')}
          >
            Grading
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
                  <h3>{classes.length}</h3>
                  <p>Classes</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>{students.length}</h3>
                  <p>Total Students</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-content">
                  <h3>12</h3>
                  <p>Assignments</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>8</h3>
                  <p>Pending</p>
                </div>
              </div>
            </div>

            <div className="recent-section">
              <h3>Quick Actions</h3>
              <div className="activity-list">
                <div className="activity-item clickable">
                  <span className="activity-icon">➕</span>
                  <div>
                    <p className="activity-title">Create Assignment</p>
                    <p className="activity-time">Post new assignment for classes</p>
                  </div>
                </div>
                <div className="activity-item clickable">
                  <span className="activity-icon">📊</span>
                  <div>
                    <p className="activity-title">Student Performance</p>
                    <p className="activity-time">Review grades and progress</p>
                  </div>
                </div>
                <div className="activity-item clickable">
                  <span className="activity-icon">📋</span>
                  <div>
                    <p className="activity-title">Mark Attendance</p>
                    <p className="activity-time">Record attendance for students</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-section">
              <h3>Activity Timeline</h3>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-dot">📝</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Assignment Graded</p>
                    <p className="timeline-description">You have graded 5 submissions from Mathematics Class 101</p>
                    <span className="timeline-type grade">Grade</span>
                    <span className="timeline-time">Today at 3:15 PM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">📢</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Announcement Posted</p>
                    <p className="timeline-description">New announcement about mid-term exams posted to all classes</p>
                    <span className="timeline-type announcement">Announcement</span>
                    <span className="timeline-time">Yesterday at 10:00 AM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">✅</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Attendance Recorded</p>
                    <p className="timeline-description">Attendance for Tuesday's Advanced Calculus class has been recorded</p>
                    <span className="timeline-type submission">Submission</span>
                    <span className="timeline-time">2 days ago</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot">👥</div>
                  <div className="timeline-content">
                    <p className="timeline-title">Class Material Updated</p>
                    <p className="timeline-description">Uploaded new lecture slides for Statistics - Chapter 4</p>
                    <span className="timeline-type assignment">Course</span>
                    <span className="timeline-time">1 week ago</span>
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
                  <label htmlFor="department">Department</label>
                  <input
                    id="department"
                    type="text"
                    name="department"
                    value={personalInfo.department}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your department"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    id="specialization"
                    type="text"
                    name="specialization"
                    value={personalInfo.specialization}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your specialization"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="qualifications">Qualifications</label>
                  <input
                    id="qualifications"
                    type="text"
                    name="qualifications"
                    value={personalInfo.qualifications}
                    onChange={handlePersonalInfoChange}
                    placeholder="E.g., B.Tech, M.Sc, PhD"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <input
                    id="experience"
                    type="number"
                    name="experience"
                    value={personalInfo.experience}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter years of experience"
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
    </>
  );
}
