const highlights = [
  {
    number: "1",
    title: "Clean & Scalable Code",
    desc: "Writing maintainable React components with reusable structure and modern best practices.",
  },
  {
    number: "2",
    title: "Responsive Layouts",
    desc: "Crafting pixel-perfect designs using Flexbox, Grid, and Tailwind CSS.",
  },
  {
    number: "3",
    title: "Performance Focused",
    desc: "Optimizing load time and ensuring smooth UI interactions.",
  },
  {
    number: "4",
    title: "Continuous Learning",
    desc: "Constantly exploring new frontend trends and improving problem-solving skills.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            A frontend developer passionate about building modern, responsive
            and visually engaging web experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Turning Ideas into Interactive Digital Experiences
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              I specialize in building clean and responsive user interfaces
              using React.js, JavaScript (ES6+), HTML5, CSS3 and Tailwind CSS. I
              enjoy transforming UI designs into fully functional,
              performance-optimized web applications.
            </p>

            <p className="text-gray-600 text-lg">
              My focus is not just on writing code, but creating seamless user
              experiences that are intuitive, fast, and scalable. Currently
              seeking opportunities to grow and contribute to real-world
              frontend projects.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map(({ number, title, desc }) => (
              <div
                key={number}
                className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-blue-300 transition duration-300 group"
              >
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-29">
          <h3 className="text-3xl font-semibold mb-8 text-black text-shadow-lg">
            Education
          </h3>

          <div className="border-l-4 border-indigo-600 pl-8">
            <h4 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-gray-600">DAV College, Sector 10, Chandigarh</p>
            <span className="text-sm text-gray-500">
              2022 – 2025 | Chandigarh, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
