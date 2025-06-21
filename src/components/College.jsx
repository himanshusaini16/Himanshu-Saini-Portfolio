export const College = () => {
  const educationData = [
    {
      title: "Graphic Era Hill University",
      degree: "B.Tech in Computer Science",
      duration: "2021 – 2025",
      score: "7.95 CGPA",
      image: "/education/graphic.jpg",
    },
    {
      title: "Nav Jeevan Mission School",
      degree: "12th Grade (CBSE) - Science Stream",
      duration: "2019 – 2020",
      score: "81.6%",
      image: "/education/image.png",
    },
    {
      title: "Nav Jeevan Mission School",
      degree: "10th Grade (CBSE)",
      duration: "2017 – 2018",
      score: "88%",
      image: "/education/image.png",
    },
  ];

  return (
    <section id="college" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">Education</h2>

      <div className="relative max-w-3xl mx-auto border-l-4 border-blue-400">
        {educationData.map((edu, index) => (
          <div className="relative pl-10 mb-12 group" key={index}>
            
            <span className="absolute -left-[9px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-125"></span>

            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 group-hover:shadow-blue-400 transform transition duration-300 group-hover:scale-105">
              
              <img
                src={edu.image}
                alt={edu.title}
                className="w-16 h-16 object-cover rounded-lg border border-blue-400"
              />

              
              <div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-sm text-gray-300">{edu.degree}</p>
                <p className="text-sm text-blue-300">{edu.duration}</p>
                <p className="text-sm text-green-400 font-semibold mt-1">{edu.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
