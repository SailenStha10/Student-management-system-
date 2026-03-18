import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    const newUser = {
      id: Date.now(),
      email: userData.email,
      fullName: userData.fullName,
      role: userData.role, // 'student' or 'teacher'
      password: userData.password, // In production, hash this!
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  const login = (email, password) => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      throw new Error('User not found. Please sign up first.');
    }

    const user = JSON.parse(storedUser);
    if (user.email !== email || user.password !== password) {
      throw new Error('Invalid email or password.');
    }

    setUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
