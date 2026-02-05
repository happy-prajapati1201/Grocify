import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? true : false;
  });

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Register user
  const register = (formData) => {
    // Check if user already exists
    const userExists = users.some(
      (u) => u.email === formData.email || u.name === formData.name
    );

    if (userExists) {
      return { success: false, message: 'User already exists' };
    }

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    setUsers([...users, newUser]);
    return { success: true, message: 'Registration successful' };
  };

  // Login user
  const login = (name, password) => {
    const foundUser = users.find((u) => u.name === name && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid name or password' };
  };

  // Logout user
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  // Check if user is logged in on mount
  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      setUser(JSON.parse(saved));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
