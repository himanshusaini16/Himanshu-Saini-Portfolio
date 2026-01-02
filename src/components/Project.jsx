export const Project = () => {
  const projects = [
    {
  title: "REAL-TIME MULTIPLAYER UNO GAME",
  description:
    "A full-stack real-time multiplayer UNO game supporting CPU and friend-based matches. Features live gameplay synchronization using WebSocket, real-time audio communication via WebRTC, and secure authentication with JWT. Built with a React.js frontend and a Spring Boot backend, containerized using Docker for scalable deployment.",
  image: "/project/uno.png",
  liveLink: "https://uno-game-sepia.vercel.app/",
  githubLink: "https://github.com/himanshusaini16/UNO-GAME"
}
,
    {
      title: "BOOK FINDER PLATFORM",
      description:
        "A React-based web application that fetches book data from a public API. Users can search for books, view details, and explore results in an interactive and responsive UI. Built with React.js and Tailwind CSS, deployed on Netlify for seamless access.",
      image: "/project/book.png",
      liveLink: "https://taskbookfinder.netlify.app/",
      githubLink: "https://github.com/himanshusaini16/Book-Finder",
      videoLink: "https://youtu.be/uzXFc0M17co",
    },
    {
      title: "STORE REVIEW PLATFORM",
      description:
        "A MERN-stack web application that allows users to rate and review local stores. Built with React.js, Node.js, Express, and PostgreSQL. Includes user authentication, role-based access, and interactive dashboards. Supports store listings, review submissions, and average rating calculations with real-time updates.",
      image: "/project/store.png",
      liveLink: "https://store-review-six.vercel.app/",
      githubLink: "https://github.com/himanshusaini16/Store-Review",
      videoLink: "https://youtu.be/YOUR_VIDEO_ID_2",
    },
    {
      title: "AI-POWERED MEDICAL DIAGNOSTIC PLATFORM WITH WEB ACCESS",
      description:
        "A full-stack web application for early disease detection using AI. Combines ANN (Diabetes, Heart Disease) and CNN (Skin Cancer, Eye Disease, Varicose Veins) models. Built with React.js, Node.js, MongoDB, TensorFlow.js. Includes real-time chat, doctor booking, and medicine ordering.",
      image: "/project/aiPowered.png",
      liveLink: "https://medi-scan-mrwk.vercel.app/",
      githubLink: "https://github.com/himanshusaini16/MediScan",
      videoLink: "https://youtu.be/YOUR_VIDEO_ID_1",
    },
    {
      title: "Quiz App",
      description:
        "Microservice-based quiz app with JWT-auth, admin controls, and real-time scoring. Built with Spring Boot, PostgreSQL, React.js. Integrated via API Gateway and deployed with Docker.",
      image: "/project/quiz.png",
      liveLink: "https://quizapplicationsaini.netlify.app/",
      githubLink:
        "https://github.com/himanshusaini16/Quiz--Application-Frontend",
      videoLink: "https://youtu.be/YOUR_VIDEO_ID_2",
    },
    {
      title: "Airbnb Clone - Rental Booking Platform",
      description:
        "Rental booking platform with authentication, listings, and booking features. Built using Node.js, Express, MongoDB. Deployed on Render.",
      image: "/project/airbnb.png",
      liveLink: "https://airbnb-clone-thgk.onrender.com",
      githubLink: "https://github.com/himanshusaini16/WEB-PROJECT",
      videoLink: "https://youtu.be/YOUR_VIDEO_ID_3",
    },
    {
      title: "Image Classification - Deep Learning Application",
      description:
        "Streamlit-based CNN image classifier for 7 animals. Shows real-time predictions with probability charts and custom UI.",
      image: "/project/classification.png",
      liveLink:
        "https://image-classification-using-deep-learning-otakknrwxxtdyt24ri8sc.streamlit.app/",
      githubLink:
        "https://github.com/himanshusaini16/Image-Classification-Using-Deep-Learning",
      videoLink: "https://youtu.be/YOUR_VIDEO_ID_4",
    },
    {
      title: "Smart Employee Manager",
      description:
        "Java Swing + MySQL CRUD system for managing employees. Admin login with full access to add, edit, delete, and view records.",
      image: "/project/employee.png",
      githubLink:
        "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
      exeFile: "/project/Employee.exe",
      videoLink: "https://youtu.be/7GB4EKC8TnE",
    },
    {
      title: "ATM Interface",
      description:
        "Java Swing ATM simulator for balance check, withdrawal, deposit, PIN change. Features GUI, PIN verification, and transaction logic.",
      image: "/project/atmInterface.png",
      githubLink:
        "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
      exeFile: "/project/atm.exe",
      videoLink: "https://youtu.be/oy_EWdbzsxA",
    },
    {
      title: "Number Guess Game",
      description:
        "Guess the number (1-100) game with score and attempts logic. Java Swing GUI gives real-time feedback with retry options.",
      image: "/project/numbergame.png",
      githubLink:
        "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
      exeFile: "/project/Guessgame.exe",
      videoLink: "https://youtu.be/sYRmfCCwD4I",
    },
    {
      title: "Currency Converter",
      description:
        "Java Swing app for converting between currencies like INR, USD, GBP, AUD, etc. Features a styled GUI with real-time conversion.",
      image: "/project/currency.png",
      githubLink:
        "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
      exeFile: "/project/Currencyconvertor.exe",
      videoLink: "https://youtu.be/zh4OKkYHG00",
    },
    {
      title: "Student Grade Calculator",
      description:
        "Java Swing tool to compute marks, percentage, and academic grades from 5 subjects. Shows grade instantly with input validation.",
      image: "/project/grade.png",
      githubLink:
        "https://github.com/himanshusaini16/Smart-Employee-Mangement-System",
      exeFile: "/project/Studentgradecalculator.exe",
      videoLink: "https://youtu.be/s5A1ZVVIluY",
    },
    {
      title: "Saimon says Game",
      description: "Made by using the javaScrirpt , html, css ",
      liveLink: "https://simon-says-game-9ptn.onrender.com/",
      image: "/project/image.png",
      githubLink: "https://github.com/himanshusaini16/Simon-Says-Game",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-1000 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-400 transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover bg-white"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-indigo-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                {project.description}
              </p>
              <div className="mt-auto flex gap-2 flex-wrap">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm"
                  >
                    Live Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
                  >
                    Demo Video
                  </a>
                )}
                {project.exeFile && (
                  <a
                    href={project.exeFile}
                    download
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
                  >
                    Download exe
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
