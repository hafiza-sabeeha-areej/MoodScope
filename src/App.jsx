import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Predict from './pages/Predict';
import TrainModel from './pages/TrainModel';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/sign-in" 
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignIn onSignIn={handleSignIn} />} 
          />
          <Route 
            path="/sign-up" 
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignUp onSignUp={handleSignIn} />} 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            } 
          />
          <Route 
            path="/predict" 
            element={
              isAuthenticated ? (
                <Predict />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            } 
          />
          <Route 
            path="/train-model" 
            element={
              isAuthenticated ? (
                <TrainModel />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

