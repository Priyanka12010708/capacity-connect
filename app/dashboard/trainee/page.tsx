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
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        {/* Navbar */}
        <Navbar />

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Courses Enrolled" value="12" />
          <StatCard title="Assessments" value="8" />
          <StatCard title="Certificates" value="5" />
          <StatCard title="Completion" value="92%" />
        </section>

        {/* Recent Courses + Notifications */}
        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Recent Courses */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-800">
                📚 Recent Courses
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Continue where you left off.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
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

              <CourseCard
                title="Weather Forecasting"
                trainer="Dr. Kumar"
                progress={45}
              />

              <CourseCard
                title="Disaster Management"
                trainer="Dr. Rao"
                progress={25}
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-800">
                🔔 Notifications
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your latest learning updates.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  ✅ New course added
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Oceanography is now available.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  📝 Assessment reminder
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Your assessment is due tomorrow.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  🏆 Certificate available
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Your latest certificate is ready to view.
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  📢 New study materials
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Your trainer uploaded new learning content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Assessments */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-800">
              📝 Upcoming Assessments
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Complete your assessments before their deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AssessmentCard
              subject="Meteorology Quiz"
              dueDate="15 September 2026"
            />

            <AssessmentCard
              subject="Climate Change Test"
              dueDate="18 September 2026"
            />
          </div>
        </section>
      </main>
    </div>
  );
}