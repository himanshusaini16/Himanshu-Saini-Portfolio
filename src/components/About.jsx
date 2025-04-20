import { FaJava, FaReact, FaNodeJs, FaUsers, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 text-white bg-gradient-to-br bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6 border-b-4 inline-block border-blue-500 pb-2">
          About Me
        </h2>

        <p className="text-xl md:text-2xl mt-6 leading-relaxed text-gray-300">
          I'm a <span className="text-green-400 font-semibold">Java Developer</span> and
          <span className="text-blue-400 font-semibold"> Full-Stack Web Developer</span> focused on building
          <span className="text-yellow-400 font-semibold"> robust</span> and
          <span className="text-yellow-400 font-semibold"> scalable</span> digital solutions.
        </p>

        <div className="mt-10 space-y-6 text-lg text-gray-400 leading-8">
          <p>
            💻 I design <span className="text-blue-300 font-semibold">efficient backends</span> with Java and
            <span className="text-purple-300 font-semibold"> intuitive user interfaces</span> using React & modern JS frameworks.
          </p>
          <p>
            👨‍💼 Experienced in <span className="text-pink-400 font-semibold">leading teams</span> and delivering
            <span className="text-green-400 font-semibold"> successful projects</span> in collaborative, agile environments.
          </p>
          <p>
            🔥 Always <span className="text-yellow-400 font-semibold">learning</span>, <span className="text-yellow-400 font-semibold">building</span>, and <span className="text-yellow-400 font-semibold">innovating</span>.
            I believe in delivering quality and creating impact.
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-12">
  <h3 className="text-2xl font-bold text-blue-300 mb-4">Tech Stack</h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center text-3xl text-gray-400">
    <FaJava className="hover:text-orange-500 transition-transform transform hover:scale-125" title="Java" />
    <FaReact className="hover:text-blue-500 transition-transform transform hover:scale-125" title="React" />
    <FaNodeJs className="hover:text-green-500 transition-transform transform hover:scale-125" title="Node.js" />
    <FaUsers className="hover:text-pink-400 transition-transform transform hover:scale-125" title="Teamwork" />

  </div>
</div>
      </motion.div>
    </section>
  );
};
