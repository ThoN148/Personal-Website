import { useTheme } from "../themecontext";
import { Mail, MapPin, Link2, Code2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_c2yc4n2",
        "template_l7jrapa",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "yM482Bsi7LWD21LR3"
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      setStatus("failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side - Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's work together!
            </h3>
            <p className={`mb-8 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`} style={{ marginBottom: '20px' }}>
              I'm currently open to new opportunities. Whether you have a
              question, a project in mind, or just want to say hi — my
              inbox is always open!
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
              
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:ThoN54084@gmail.com"
                    className="hover:text-blue-500 transition-colors font-medium"
                  >
                    ThoN54084@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">San Jose, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <Link2 size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/tho-nguyen-60265a23a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors font-medium"
                  >
                    linkedin.com/in/tho-nguyen-60265a23a
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a
                    href="https://github.com/ThoN148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors font-medium"
                  >
                    github.com/ThoN148
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`rounded-2xl p-8 border ${
            darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
          }`}>
            <div className="flex flex-col gap-4">

              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-blue-500 resize-none ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-500 text-sm font-medium">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "failed" && (
                <p className="text-red-500 text-sm font-medium">
                  ❌ Something went wrong. Please try again!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">
                  ⚠️ Please fill in all fields before sending.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;