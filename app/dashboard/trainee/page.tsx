import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatCard from "@/components/dashboard/StatCard";
import CourseCard from "@/components/cards/CourseCard";
import AssessmentCard from "@/components/cards/AssessmentCard";

export default function TraineeDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <Navbar />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <StatCard title="Courses Enrolled" value="12" />
          <StatCard title="Assessments" value="8" />
          <StatCard title="Certificates" value="5" />
          <StatCard title="Completion" value="92%" />
        </div>

        {/* Recent Courses & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          {/* Recent Courses */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">
              📚 Recent Courses
            </h2>

            <div className="space-y-4">
              <CourseCard
                title="Meteorology Basics"
                trainer="Dr. Sharma"
                progress={80}
              />

              <CourseCard
                title="Climate Change Fundamentals"
                trainer="Dr. Meena"
                progress={65}
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">
              🔔 Notifications
            </h2>

            <ul className="space-y-4">
              <li>✅ New course added: Oceanography</li>
              <li>📝 Assessment due tomorrow</li>
              <li>🏆 Certificate available</li>
              <li>📢 Trainer uploaded new study materials</li>
            </ul>
          </div>

        </div>

        {/* Upcoming Assessments */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">
            📝 Upcoming Assessments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AssessmentCard
              subject="Meteorology Quiz"
              dueDate="15 September 2026"
            />

            <AssessmentCard
              subject="Climate Change Test"
              dueDate="18 September 2026"
            />
          </div>
        </div>
      </main>
    </div>
  );
}