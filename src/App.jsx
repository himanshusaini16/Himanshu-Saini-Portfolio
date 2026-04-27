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
      
 
      <Navbar />


      <main className="pt-20">
    
        <section id="home">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>


        <section id="skills">
          <Skills />
        </section>

 
        {/* <section id="experience">
          <Experience />
        </section> */}

             <section id="education">
          <College />
        </section>


        <section id="projects">
          <Project />
        </section>

        <section id="courses">
          <CertifiedCourses />
        </section>

        <section id="certificates">
          <Certificates />
        </section>


   

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;