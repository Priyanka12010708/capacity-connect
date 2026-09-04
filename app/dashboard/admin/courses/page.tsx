import Link from "next/link";
import {
  BookOpen,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

const courses = [
  {
    title: "Meteorology Fundamentals",
    trainer: "Dr. Sharma",
    trainees: 45,
    created: "25 Aug 2026",
    status: "Published",
  },
  {
    title: "Climate Science",
    trainer: "Dr. Meena",
    trainees: 38,
    created: "28 Aug 2026",
    status: "Pending",
  },
  {
    title: "Weather Forecasting",
    trainer: "Dr. Kumar",
    trainees: 30,
    created: "30 Aug 2026",
    status: "Published",
  },
  {
    title: "Disaster Management",
    trainer: "Dr. Rao",
    trainees: 27,
    created: "01 Sep 2026",
    status: "Pending",
  },
];

export default function AdminCoursesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/admin"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Course Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all courses created by trainers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">
                Total Courses
              </p>

              <BookOpen className="text-blue-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">
              24
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">
                Published
              </p>

              <CheckCircle className="text-green-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">
              18
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">
                Pending
              </p>

              <Clock className="text-orange-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">
              6
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">
                Total Trainees
              </p>

              <Users className="text-purple-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">
              140
            </h2>
          </div>

        </div>

        {/* Course Table */}

        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              All Courses
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr>
                  <th className="text-left px-6 py-4">
                    Course
                  </th>

                  <th className="text-left px-6 py-4">
                    Trainer
                  </th>

                  <th className="text-left px-6 py-4">
                    Trainees
                  </th>

                  <th className="text-left px-6 py-4">
                    Created
                  </th>

                  <th className="text-left px-6 py-4">
                    Status
                  </th>

                  <th className="text-left px-6 py-4">
                    Actions
                  </th>
                </tr>

              </thead>

              <tbody>

                {courses.map((course) => (

                  <tr
                    key={course.title}
                    className="border-t"
                  >

                    <td className="px-6 py-4 font-medium">
                      {course.title}
                    </td>

                    <td className="px-6 py-4">
                      {course.trainer}
                    </td>

                    <td className="px-6 py-4">
                      {course.trainees}
                    </td>

                    <td className="px-6 py-4">
                      {course.created}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          course.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {course.status}
                      </span>

                    </td>

                    <td className="px-6 py-4 space-x-2">

                      <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                        Approve
                      </button>

                      <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                        Edit
                      </button>

                      <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700">
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </main>
  );
}