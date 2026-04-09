import React from "react";

const Experience = () => {
  const experienceData = [
    {
      company: "IGAGE INFOSYSTEMS PRIVATE LIMITED",
      role: "Associate IT Support Engineer",
      duration: "Jul 2025 – Present",
      location: "Bengaluru, India",
      description: [
        "Provided technical support by diagnosing and resolving hardware, software, and system issues.",
        "Delivered desktop support including installation, configuration, and troubleshooting of OS and applications.",
        "Troubleshot network issues (LAN/WAN, IP configuration, internet access).",
        "Handled login, authentication, and access-related issues securely.",
        "Monitored system performance and minimized downtime.",
        "Performed basic routing and networking support.",
        "Managed IT assets and inventory tracking.",
        "Documented common issues to improve support efficiency.",
      ],
      tech: "Windows, Linux, Networking, TCP/IP, DNS, DHCP",
      image: "/Logo/logo4.png",
      link: "https://www.igageinfosystems.com/",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto border-l-4 border-blue-400">
        {experienceData.map((exp, index) => (
          <div className="relative pl-10 mb-12 group" key={index}>
            
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-125"></span>

            {/* Card */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start gap-4 group-hover:shadow-blue-400 transform transition duration-300 group-hover:scale-105">
              
              {/* Image */}
              <img
                src={exp.image}
                alt={exp.company}
                className="w-16 h-16 object-cover rounded-lg border border-blue-400 bg-white"
              />

              {/* Content */}
              <div>
                {/* Company Name with Link */}
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {exp.company}
                  </a>
                </h3>

                <p className="text-sm text-gray-300">{exp.role}</p>
                <p className="text-sm text-blue-300">{exp.duration}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.location}</p>

                {/* Bullet Points */}
                <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <p className="text-sm text-green-400 font-semibold mt-3">
                  {exp.tech}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;