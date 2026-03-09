const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a fully responsive personal portfolio using React and Tailwind CSS. Built modular components and clean UI layout.",
      demo: "#",
    },
    {
      title: "R-Cars Website UI",
      description:
        "Developed a modern automotive website interface using React.js and Tailwind CSS with reusable components and professional layout structure.",
      demo: "#",
    },
    {
      title: "Netflix Clone",
      description:
        "Built a responsive Netflix-inspired UI using React.js. Focused on reusable components and scalable frontend architecture.",
      demo: "https://netflix-clone-henna-rho.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-white to-gray-100 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center">
          My Work
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm text-center mb-16">
          A selection of projects showcasing modern, responsive, and scalable
          frontend applications built with React.js and Tailwind CSS, focused on
          clean UI and reusable components.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white shadow-md  hover:shadow-blue-300 hover:-translate-y-2 transition duration-400 group overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-4 relative z-10">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 relative z-10">
                {project.description}
              </p>

              <a
                href={project.demo}
                target="_blank"
                className="relative z-10 inline-block mt-10 px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Live Demo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
