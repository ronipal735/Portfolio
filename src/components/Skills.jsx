const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      content: "React.js",
    },
    {
      title: "Languages",
      content: "JavaScript (ES6+), HTML5, CSS3",
    },
    {
      title: "Styling",
      content: "Tailwind CSS",
    },
    {
      title: "Tools & Workflow",
      content: "Git, GitHub, VS Code, Chrome DevTools, NPM",
    },
    {
      title: "Concepts",
      content:
        "Responsive Design, UI Development, Component-Based Architecture, API Integration Basics",
    },
    {
      title: "Design Tools",
      content: "Figma",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-linear-to-b from-indigo-100 via-white to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 mt-4">
            Tools and technologies I use to build modern web applications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-blue-300 hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-800">{skill.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
