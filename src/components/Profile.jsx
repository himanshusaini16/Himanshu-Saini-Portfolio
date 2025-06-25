import { Typewriter } from 'react-simple-typewriter';
import { FiDownload } from 'react-icons/fi';

export const Profile = () => (
  <section className="flex flex-col items-center justify-center h-screen text-center px-4">
   <div className="relative group">
  <div className="w-50 h-70 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[4px] animate-pulse group-hover:rotate-3 transition-transform duration-300 ease-in-out">
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>

    <h1 className="text-5xl font-bold mb-2">Hi, I'm HIMANSHU SAINI</h1>
    
    <p className="text-xl mb-6 h-6 text-blue-400 font-semibold">
      <Typewriter
        words={['Full-Stack Developer', 'Software Engineer']}
        loop={0} // 0 = infinite
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        View My Project
      </a>
<div className="flex">
      {/* View Resume */}
      <a
        href="/Himanshu_Saini.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center border border-blue-400 bg-blue-600 text-white px-6 py-2 rounded-l-full hover:bg-blue-700 transition"
      >
        Resume
      </a>

      {/* Download Resume */}
      <a
        href="/Himanshu_Saini.pdf"
        download
        className="flex items-center border border-blue-400 bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 transition"
      >
        <FiDownload className="h-5 w-5" />
      </a>
    </div>

    </div>
  </section>
);
