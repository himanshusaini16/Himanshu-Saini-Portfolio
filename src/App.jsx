import React from 'react';
import { Navbar } from './components/Navbar';

import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Project } from './components/Project';
import { Certificates } from './components/Certificates';
import { CertifiedCourses } from './components/CertifiedCourse';
import { College } from './components/College';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <div className="pt-20"> {/* Spacer for fixed navbar */}
        <Profile />
        <About/>
        <Skills/>
        <Project/>
        <College/>
        <CertifiedCourses/>
        <Certificates/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
