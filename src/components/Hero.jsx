import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 - scrollY / 2000; // smooth subtle shrink
      setScale(newScale < 0.95 ? 0.95 : newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      style={{ transform: `scale(${scale})` }}
      className="min-h-screen flex items-center justify-center transition-transform duration-300 relative overflow-hidden bg-linear-to-b from-[#e0f2fe] via-[#f8fafc] to-[#eef2ff]"
    >
      {/* Soft Glow Background */}
      <div className="absolute -top-32 -left-32 w-100 h-100 bg-sky-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-gray-800">
            Hi, I'm <span className="text-indigo-600 text-6xl">Roni Pal</span>
          </h2>

          <h3 className="text-xl md:text-2xl text-gray-600 font-medium mb-5">
            Frontend Developer (React.js)
          </h3>

          <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            I build responsive, scalable, and modern web applications using
            React.js and Tailwind CSS. I focus on clean UI design, smooth user
            experience, and performance optimization.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              View Projects
            </a>

            <a
              href="/Roni-Pal-Frontend-Developer-CV.pdf"
              className="px-6 py-3 rounded-lg font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={profile}
              alt="Roni Pal"
              className="w-72 md:w-70 rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
