import React, { useState } from "react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Walmart USA Advanced Software Engineering Virtual Experience",
      image: "/project/Walmart.jpg",
    },
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      image: "/project/Deloitte.jpg",
    },
    {
      title: "Java Spring Framework 6 with Spring Boot 3",
      image: "/project/javaSpringboot.jpg",
    },
    {
      title: "Deep Learning A-Z",
      image: "/project/Deeplearning.jpg",
    },
    {
      title: "Introduction to Artificial Intelligence",
      image: "/project/greatLearning.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
        Certificates
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-blue-400 transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(certificate.image)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="object-cover mb-3 rounded-xl"
            />
            <h3 className="text-lg font-semibold text-center">
              {certificate.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
