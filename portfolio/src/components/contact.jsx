import { useTheme } from "../themecontext";
import { Mail, MapPin, Link2, Code2 } from "lucide-react"; // Come back to this similar to Projects

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's work together!
            </h3>

            <p className={`mb-8 leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              I'm currently open to new opportunities. Whether you have a
              question, a project in mind, or just want to say hi — my
              inbox is always open!
            </p>

            <div className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:your@email.com"
                    className="hover:text-blue-500 transition-colors font-medium"
                  >
                    ThoN54084@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">San Jose, California</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <Link2 size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors font-medium"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`rounded-2xl p-8 border ${
              darkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex flex-col gap-4">

              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-blue-500 resize-none ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <a
                href="mailto:your@email.com"
                className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Send Message
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;