export const Project = () => {
  const projects = [
    {
      title: "Quiz App",
      description:
        "A dynamic and scalable quiz application built using microservices architecture. It includes user and admin modules, JWT authentication, and real-time score evaluation. The backend is powered by Spring Boot and PostgreSQL, and the frontend is crafted using React.js. Deployed using Docker and integrated through an API Gateway.",
      image: "/project/quiz.png",
      liveLink: "https://quizapplicationsaini.netlify.app/",
      githubLink: "https://github.com/himanshusaini16/Quiz--Application-Frontend",
    },
    {
      title: "Airbnb Clone - Rental Booking Platform",
      description:
        "Built an Airbnb-like platform with dynamic listings, user authentication, and booking management. Developed a RESTful API using Node.js, Express.js, and MongoDB. Deployed on Render.com for scalability and reliable hosting.",
      image: "/project/airbnb.png",
      liveLink: "https://your-airbnb-clone-link.com",
      githubLink: "https://github.com/himanshusaini16/WEB-PROJECT",
    },
    {
      title: "Image Classification - Deep Learning Application",
      description:
        "GUI-based image classification app using TensorFlow and CNN (83% accuracy). Features real-time image prediction with a simple Tkinter interface.",
      image: "/project/classification.png",
      // liveLink: "https://your-image-classifier-link.com",
      githubLink: "https://github.com/himanshusaini16/Image-Classification-Using-Deep-Learning",
    },
    {
      title: "Smart Employee Manager - Management System",
      description:
        "Java Swing-based Employee Management System with MySQL integration. Includes full CRUD support and reliable data handling.",
      image: "/project/employee.png",
      // liveLink: "https://your-employee-manager-link.com",
      githubLink: "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-1000 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-400 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover bg-white"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex gap-4 flex-wrap">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition text-sm"
                  >
                    Live Link
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
