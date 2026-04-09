import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "courses", label: "Courses" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-800 px-6 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* 🔹 Logo */}
        <h1 className="text-2xl font-bold text-white">
          Himanshu's Portfolio
        </h1>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`hover:text-blue-400 transition ${
                  activeSection === section.id
                    ? "border-b-2 border-blue-400 pb-1 text-blue-400"
                    : ""
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-4 text-white font-medium bg-gray-800 pb-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block hover:text-blue-400 transition ${
                  activeSection === section.id
                    ? "border-b-2 border-blue-400 pb-1 text-blue-400"
                    : ""
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};