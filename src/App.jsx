import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import { UserProvider } from './Context/UseContext';
import { ToastContainer } from 'react-toastify';
import Team from './components/Team/Team';
import Live from './components/Live&Explore/Live';


const App = () => {
  return (
    <>
    
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Live />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/live-explore" element={<Home />} />
      </Routes>

       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </UserProvider>
    </>
  );
};

export default App;
