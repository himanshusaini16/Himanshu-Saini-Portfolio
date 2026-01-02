export const CertifiedCourses = () => {
  const courses = [

    {
  title: "Database Management Essentials  - Coursera",
  description:
    "Learned core database concepts including relational database design, SQL fundamentals, normalization, transactions, indexing, and efficient data management practices.",
  link: "https://www.coursera.org/account/accomplishments/verify/N5J4EHWP2BXW",
  image: "/project/database.png",
},


    
    {
      title:"Complete A.I. & Machine Learning, Data Science Bootcamp",
      platform:"Udemy",
      description :"Learned data science and machine learning from scratch, covering Python, Pandas, NumPy, Scikit-learn, TensorFlow, neural networks, and data visualization.",
      link:"https://www.udemy.com/certificate/UC-22334297-0df1-4a09-b163-c24d0bb0aa77/",
      image:"/project/ai-ml.png",
    },
    {
      title: "Java Spring Framework 6 with Spring Boot 3",
      platform: "Udemy",
      description:
        "Developed enterprise-level applications using Spring Boot, Spring MVC, REST APIs, JPA, Security, Docker, and Microservices.",
      link: "https://www.udemy.com/certificate/UC-bd1f2468-ed89-4b7b-b6bf-1e55b444a234/",
      image: "/project/springboot.png", // Replace with the actual image path
    },
    {
      title: "Machine Learning",
      platform: "Internshala",
      description:
        "Built and deployed ML models using Python, Pandas, Scikit-learn, and TensorFlow, focusing on data preprocessing and predictive analysis.",
      link: "/education/Machine Learning Training - Certificate of Completion (1).pdf",
      image: "/project/machine.png", // Replace with the actual image path
    },
    {
      title: "Deep Learning A-Z",
      platform: "Udemy",
      description:
        "Designed and optimized deep learning models for tasks like image classification and sentiment analysis using CNNs and neural networks.",
      link: "https://www.udemy.com/certificate/UC-800c9b19-1e90-41c6-9440-84afa9d5bf1c/",
      image: "/project/deeplearning.png", // Replace with the actual image path
    },
    // Add more courses here if needed
  ];

  return (
    <section id="courses" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Certified Courses</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-blue-400 transition duration-300 hover:scale-[1.02]"
          >
            <img
              src={course.image}
              alt={course.title}
              className=" object-cover mb-4 rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">🎯 {course.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{course.platform}</p>
            <p className="text-sm text-gray-400 mb-4">{course.description}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
