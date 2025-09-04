import { Users, BookOpen, TrendingUp } from "lucide-react";

export default function SkillDossierDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-600">SkillDossier</h1>

          {/* Navigation + Profile */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6">
              {["Dashboard", "Mentors", "Skills", "Progress"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-gray-600 hover:text-indigo-600 font-medium transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Profile Avatar */}
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-indigo-600 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome back, <span className="text-indigo-600">Learner</span> 🚀
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mentors Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-center">Top Mentors</h3>
            <p className="text-gray-600 text-center mt-2">
              Connect with expert mentors to guide your journey.
            </p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              View Mentors
            </button>
          </div>

          {/* Skills Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-center">
              Skill Development
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Explore courses and resources to grow your career.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Explore Skills
            </button>
          </div>

          {/* Progress Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-center">Track Progress</h3>
            <p className="text-gray-600 text-center mt-2">
              Monitor your learning goals and achievements.
            </p>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                60% Completed
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
