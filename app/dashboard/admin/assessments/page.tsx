import Link from "next/link";
import { ClipboardList, CheckCircle, Clock, FileText } from "lucide-react";

const assessments = [
  {
    title: "Meteorology Fundamentals Quiz",
    course: "Meteorology Fundamentals",
    trainer: "Dr. Sharma",
    questions: 20,
    status: "Published",
  },
  {
    title: "Climate Science Assessment",
    course: "Climate Science",
    trainer: "Dr. Meena",
    questions: 25,
    status: "Draft",
  },
  {
    title: "Weather Forecasting Test",
    course: "Weather Forecasting",
    trainer: "Dr. Kumar",
    questions: 15,
    status: "Published",
  },
  {
    title: "Disaster Management Quiz",
    course: "Disaster Management",
    trainer: "Dr. Rao",
    questions: 18,
    status: "Pending",
  },
];

export default function AdminAssessmentsPage() {
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
            Assessment Management
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage assessments created by trainers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Total Assessments</p>
              <ClipboardList className="text-blue-600" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">38</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Published</p>
              <CheckCircle className="text-green-600" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">28</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Pending</p>
              <Clock className="text-orange-600" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">6</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Questions</p>
              <FileText className="text-purple-600" />
            </div>
            <h2 className="mt-3 text-3xl font-bold">520</h2>
          </div>

        </div>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-xl font-semibold">
              All Assessments
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">Assessment</th>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-left">Trainer</th>
                  <th className="px-6 py-4 text-left">Questions</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>

                {assessments.map((assessment) => (

                  <tr key={assessment.title} className="border-t">

                    <td className="px-6 py-4 font-medium">
                      {assessment.title}
                    </td>

                    <td className="px-6 py-4">
                      {assessment.course}
                    </td>

                    <td className="px-6 py-4">
                      {assessment.trainer}
                    </td>

                    <td className="px-6 py-4">
                      {assessment.questions}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          assessment.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : assessment.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {assessment.status}
                      </span>
                    </td>

                    <td className="space-x-2 px-6 py-4">
                      <button className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
                        View
                      </button>

                      <button className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700">
                        Approve
                      </button>

                      <button className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700">
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