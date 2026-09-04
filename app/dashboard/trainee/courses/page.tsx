import Link from "next/link";
import CourseCard from "@/components/cards/CourseCard";

export default function MyCourses() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainee"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            My Courses
          </h1>

          <p className="mt-2 text-gray-500">
            View your enrolled courses and continue your learning.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Enrolled Courses</p>
            <p className="mt-2 text-3xl font-bold text-blue-700">12</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-green-600">5</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">In Progress</p>
            <p className="mt-2 text-3xl font-bold text-orange-500">7</p>
          </div>
        </div>

        {/* Course List */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Enrolled Courses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose a course to continue learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
        </section>
      </div>
    </main>
  );
}