import { Typewriter } from 'react-simple-typewriter';

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

      <a
        href="/RESUME1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
      >
        View Resume
      </a>

      <a
        href="/RESUME1.pdf"
        download
        className="border border-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </div>
  </section>
);
