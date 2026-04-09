import React from 'react';
import { Navbar } from './components/Navbar';

import { Profile } from './components/Profile';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Experience from './components/Experience';
import { Project } from './components/Project';
import { CertifiedCourses } from './components/CertifiedCourse';
import { Certificates } from './components/Certificates';
import { College } from './components/College';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Main Content */}
      <main className="pt-20">
        
        {/* 🔹 Hero Section */}
        <section id="home">
          <Profile />
        </section>

        {/* 🔹 About */}
        <section id="about">
          <About />
        </section>

        {/* 🔹 Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* 🔹 Experience */}
        <section id="experience">
          <Experience />
        </section>

             <section id="education">
          <College />
        </section>

        {/* 🔹 Projects */}
        <section id="projects">
          <Project />
        </section>

        {/* 🔹 Certifications & Courses */}
        <section id="courses">
          <CertifiedCourses />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        {/* 🔹 Education */}
   

        {/* 🔹 Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* 🔹 Footer */}
      <Footer />

    </div>
  );
}

export default App;