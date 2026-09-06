import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatCard from "@/components/dashboard/StatCard";

export default function TrainerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <Navbar />

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Active Courses" value="6" />
          <StatCard title="Total Trainees" value="128" />
          <StatCard title="Assessments" value="14" />
          <StatCard title="Average Rating" value="4.8" />
        </section>

        {/* Main Sections */}
        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Course Management */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">
              📚 My Courses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your training courses and monitor participation.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold text-gray-800">
                  Meteorology Fundamentals
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  45 trainees enrolled
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold text-gray-800">
                  Weather Forecasting
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  32 trainees enrolled
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold text-gray-800">
                  Climate Science
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  28 trainees enrolled
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">
              📊 Recent Activity
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest trainee and course activity.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  📝 New assessment created
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Meteorology Fundamentals Quiz
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  📄 New material uploaded
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Weather Forecasting Notes
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">
                  ⭐ New feedback received
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  A trainee rated your course 5 stars.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Deadlines */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            📅 Upcoming Deadlines
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Assessment</p>
              <h3 className="mt-1 font-semibold">
                Meteorology Quiz
              </h3>
              <p className="mt-2 text-sm text-orange-600">
                Due: 15 September 2026
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Course</p>
              <h3 className="mt-1 font-semibold">
                Climate Science Module
              </h3>
              <p className="mt-2 text-sm text-orange-600">
                Due: 18 September 2026
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-gray-500">Assessment</p>
              <h3 className="mt-1 font-semibold">
                Weather Forecasting Test
              </h3>
              <p className="mt-2 text-sm text-orange-600">
                Due: 20 September 2026
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}