import { useState } from "react";
import {
  Home,
  Clock,
  FileText,
  Video,
  Info,
  Menu,
  X,
  Facebook,
  Linkedin,
  MessageSquare,
  Youtube,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "session", label: "Session Details", icon: Clock },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "recordings", label: "Recorded Lectures", icon: Video },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/icode logo.png"
              alt="iCode Guru"
              className="h-12 w-12 object-contain"
            />
            <h2 className="text-xl font-bold text-slate-800">iCodeGuru</h2>
          </div>

          <nav className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">
              Navigation
            </h3>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-sky-500 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="p-6 md:p-12">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                    Welcome to iCodeGuru
                  </h1>
                  <p className="text-slate-700 mb-8 leading-relaxed">
                    iCodeGuru is a dynamic learning platform focused on bridging
                    the gap between academia and the tech industry by offering
                    practical, in-demand, and globally relevant courses. To
                    explore more and become part of our learning community...
                  </p>
                  <button className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl">
                    <a href="https://icode.guru/join/" target="_blank">
                      Join iCodeGuru
                    </a>
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border-4 border-sky-100">
                    <img
                      src="/icode logo.png"
                      alt="iCode Guru Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Session Details Section */}
        {activeSection === "session" && (
          <div className="p-6 md:p-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Latest Trends in Technology 2025
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Key information about the live class schedule and format.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Timing
                  </h3>
                  <p className="text-slate-700 text-lg">
                    6:00 PM – 8:00 PM (PKT)
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Days
                  </h3>
                  <p className="text-slate-700 text-lg">Monday to Friday</p>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Mode
                  </h3>
                  <p className="text-slate-700 text-lg">Online Live Sessions</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Note
                  </h3>
                  <p className="text-slate-700">
                    Make sure to join on time. Attendance and participation are
                    important for your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assignments Section */}
        {activeSection === "assignments" && (
          <div className="p-6 md:p-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Assignments
              </h1>
              <p className="text-slate-600 mb-8">
                Access assignment instructions and submission links for each
                week.
              </p>

              <div className="space-y-8">
                {/* Week 1 Assignment */}
                <div className="border-2 border-sky-200 rounded-xl p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Week 1 Assignment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1vRzfk-yPTFyhkbDVmMApsbGchI3XcQez/view?usp=sharing"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sky-300 hover:border-sky-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-sky-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Assignment Details
                        </p>
                        <span className="text-sm text-sky-600 group-hover:underline">
                          View Instructions →
                        </span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://forms.gle/xRUp1ryB5AqF2fUSA"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-emerald-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Submission Link
                        </p>
                        <span className="text-sm text-emerald-600 group-hover:underline">
                          Submit Work →
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Week 2 Assignment */}
                <div className="border-2 border-sky-200 rounded-xl p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Week 2 Assignment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sky-300 hover:border-sky-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-sky-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Assignment Details
                        </p>
                        <span className="text-sm text-sky-600 group-hover:underline">
                          View Instructions →
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-emerald-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Submission Link
                        </p>
                        <span className="text-sm text-emerald-600 group-hover:underline">
                          Submit Work →
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Week 3 Assignment */}
                <div className="border-2 border-sky-200 rounded-xl p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Week 3 Assignment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sky-300 hover:border-sky-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-sky-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Assignment Details
                        </p>
                        <span className="text-sm text-sky-600 group-hover:underline">
                          View Instructions →
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-emerald-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Submission Link
                        </p>
                        <span className="text-sm text-emerald-600 group-hover:underline">
                          Submit Work →
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Week 4 Assignment */}
                <div className="border-2 border-sky-200 rounded-xl p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Week 4 Assignment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sky-300 hover:border-sky-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-sky-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Assignment Details
                        </p>
                        <span className="text-sm text-sky-600 group-hover:underline">
                          View Instructions →
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all group"
                    >
                      <FileText size={24} className="text-emerald-600" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Submission Link
                        </p>
                        <span className="text-sm text-emerald-600 group-hover:underline">
                          Submit Work →
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recordings Section */}
        {activeSection === "recordings" && (
          <div className="p-6 md:p-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Lecture Recordings
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Access all lecture recordings in one place.
              </p>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border-2 border-sky-200 mb-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
                    <Video size={40} className="text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  All Recorded Lectures
                </h2>
                <p className="text-slate-600 mb-6">
                  Open the recordings sheet organized by week and topic.
                </p>
                <a
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/15a47Zf0uARq3WMG9gV37ucSONDcCPdfSt1yb5B_pvN0/edit?gid=0#gid=0"
                  className="inline-block px-8 py-4 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Open Recordings Sheet
                </a>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <div className="p-6 md:p-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                About iCodeGuru
              </h1>
              <div className="text-slate-700 leading-relaxed">
                <p className="text-lg mb-8">
                  iCodeGuru empowers students to learn practical programming
                  through structured sessions, hands-on assignments, and curated
                  resources. Stay consistent, participate actively, and use the
                  provided links to submit work and revisit lectures.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Media Links */}
              <div className="flex items-center gap-6">
                <p className="text-slate-600 font-medium">Connect with us:</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/iCodeguru/"
                    target="_blank"
                    className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@iCodeGuru0"
                    target="_blank"
                    className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/icode-guru/posts/?feedView=all"
                    target="_blank"
                    className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Feedback Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSessmxG9HB18z6cVLgLYoJQcDazMyoPyb5W_BFF6ByF-IidhA/viewform"
                target="_blank"
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <MessageSquare size={20} />
                Submit Feedback
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                © 2025 iCodeGuru. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
