import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl font-bold text-white mb-2">Himanshu Saini</h2>
    <p className="text-blue-400 mb-6 text-sm">Full Stack Developer | Problem Solver | Tech Enthusiast</p>

    <div className="flex flex-wrap justify-center gap-6 mb-6">
      <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-white transition">
        <FaGithub className="text-2xl mb-1" />
        <span className="text-xs">GitHub</span>
      </a>
      <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-yellow-400 transition">
        <SiLeetcode className="text-2xl mb-1" />
        <span className="text-xs">LeetCode</span>
      </a>
      <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-blue-500 transition">
        <FaLinkedin className="text-2xl mb-1" />
        <span className="text-xs">LinkedIn</span>
      </a>
      <a href="mailto:yourmail@example.com" className="flex flex-col items-center hover:text-red-400 transition">
        <FaEnvelope className="text-2xl mb-1" />
        <span className="text-xs">Email</span>
      </a>
      <a href="https://wa.me/91xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-green-400 transition">
        <FaWhatsapp className="text-2xl mb-1" />
        <span className="text-xs">WhatsApp</span>
      </a>
    </div>

    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Himanshu Saini. All rights reserved.</p>
    <p className="text-xs text-gray-500 mt-1">
      Built with 💙 using{' '}
      <a href="https://reactjs.org" className="text-blue-400 underline hover:text-blue-300">React</a> &{' '}
      <a href="https://tailwindcss.com" className="text-blue-400 underline hover:text-blue-300">Tailwind CSS</a>
    </p>
  </footer>
);
