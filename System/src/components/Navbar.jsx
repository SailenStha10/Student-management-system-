import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  // Sample notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'assignment',
      message: 'New Math Assignment Posted',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'grade',
      message: 'Grade Released for English Essay',
      time: '4 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'announcement',
      message: 'Class Schedule Updated',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'submission',
      message: 'Assignment Submission Received',
      time: '2 days ago',
      read: true
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleInstitutionClick = () => {
    navigate('/institutions');
  };

  const handleNotificationClick = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Vidhyalaya Brand */}
        <div className="navbar-brand">
          <h1 className="navbar-title">VIDHYALAYA</h1>
        </div>

        {/* Center: Date */}
        <div className="navbar-center">
          <div className="navbar-date">
            <span className="date-icon">📅</span>
            <span className="date-text">{formatDate(currentDate)}</span>
          </div>
        </div>

        {/* Right: Notifications, Language, User Info */}
        <div className="navbar-right">
          <div className="navbar-notifications">
            <button
              className="notification-btn"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <span className="notification-icon">🔔</span>
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>

            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button
                    className="close-btn"
                    onClick={() => setShowNotifications(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className="notification-list">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`notification-item ${notif.read ? 'read' : 'unread'}`}
                        onClick={() => handleNotificationClick(notif.id)}
                      >
                        <div className="notification-content">
                          <p className="notification-msg">{notif.message}</p>
                          <p className="notification-time">{notif.time}</p>
                        </div>
                        {!notif.read && (
                          <div className="unread-indicator"></div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="empty-notifications">
                      <p>No notifications</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="navbar-language">
            <button
              className="language-btn"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              <span className="language-icon">🌐</span>
              <span className="language-text">English</span>
            </button>

            {showLanguage && (
              <div className="language-dropdown">
                <div className="language-option active">
                  <span>🇺🇸</span>
                  <span>English</span>
                </div>
                <div className="language-option">
                  <span>🇪🇸</span>
                  <span>Español</span>
                </div>
                <div className="language-option">
                  <span>🇫🇷</span>
                  <span>Français</span>
                </div>
                <div className="language-option">
                  <span>🇩🇪</span>
                  <span>Deutsch</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
