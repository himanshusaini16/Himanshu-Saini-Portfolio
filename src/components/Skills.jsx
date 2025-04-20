import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaDocker,
  FaHtml5,
  FaRobot,
  FaCloud
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiSpringboot,
  SiPostgresql,
  SiJsonwebtokens,
  SiCplusplus,
  SiC,
  SiPostman,
  SiBootstrap,
  SiMysql,
  SiCss3,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: 80 },
    { name: "CSS", icon: <SiCss3 />, level: 85 },
    { name: "React.js", icon: <FaReact />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 65 },
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
    { name: "MySQL", icon: <SiMysql />, level: 80 },
    { name: "Docker", icon: <FaDocker />, level: 50 },
    { name: "Git & GitHub", icon: <FaGitAlt />, level: 90 },
    { name: "Postman", icon: <SiPostman />, level: 85 },
    { name: "Java", icon: <FaJava />, level: 95 },
    { name: "Python", icon: <FaPython />, level: 60 },
    { name: "C++", icon: <SiCplusplus />, level: 50 },
    { name: "C", icon: <SiC />, level: 50 },
    { name: "Bootstrap", icon: <SiBootstrap />, level: 60 },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, level: 70 },
    { name: "Machine Learning", icon: <FaRobot />, level: 70 },
    { name: "AI", icon: <FaRobot />, level: 65 },
    { name: "AWS Cloud Basics", icon: <FaCloud/>, level: 60 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br bg-gray-900">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4 text-xl font-semibold">
              <span className="text-3xl text-blue-300">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-right mt-1 text-blue-300">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};
