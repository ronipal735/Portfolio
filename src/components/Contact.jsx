import { Mail, MapPin, Send, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-linear-to-b from-indigo-100 via-white to-indigo-100 px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-9">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900">
            Let’s Work Together
          </h2>

          <p className="text-lg text-indigo-700">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I’d love to connect with you.
          </p>

          <div className="space-y-6 text-indigo-800">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <span>ronipal735@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-indigo-600" />
              </div>
              <span>+91 6284649258</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-indigo-600">
          <form className="space-y-6">
            <div>
              <label className="block text-indigo-800 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-indigo-800 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-indigo-800 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-900 transition duration-300 shadow-md"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
