import Link from "next/link";
import {
  FileText,
  Video,
  File,
  Upload,
} from "lucide-react";

const resources = [
  {
    title: "Introduction to Meteorology",
    course: "Meteorology Fundamentals",
    type: "Video",
    uploadedBy: "Dr. Sharma",
  },
  {
    title: "Climate Change Presentation",
    course: "Climate Science",
    type: "Presentation",
    uploadedBy: "Dr. Meena",
  },
  {
    title: "Weather Forecasting Notes",
    course: "Weather Forecasting",
    type: "PDF",
    uploadedBy: "Dr. Kumar",
  },
  {
    title: "Disaster Management Guide",
    course: "Disaster Management",
    type: "PDF",
    uploadedBy: "Dr. Rao",
  },
];

export default function AdminResourcesPage() {
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
            Resource Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage learning materials uploaded by trainers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Total Resources</p>
              <File className="text-blue-600" />
            </div>

            <h2 className="mt-3 text-3xl font-bold">82</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Videos</p>
              <Video className="text-red-600" />
            </div>

            <h2 className="mt-3 text-3xl font-bold">24</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">PDF Files</p>
              <FileText className="text-green-600" />
            </div>

            <h2 className="mt-3 text-3xl font-bold">46</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Uploads Today</p>
              <Upload className="text-purple-600" />
            </div>

            <h2 className="mt-3 text-3xl font-bold">12</h2>
          </div>

        </div>

        {/* Resource Table */}
        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-xl font-semibold">
              Uploaded Resources
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Uploaded By</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.title} className="border-t">

                    <td className="px-6 py-4 font-medium">
                      {resource.title}
                    </td>

                    <td className="px-6 py-4">
                      {resource.course}
                    </td>

                    <td className="px-6 py-4">
                      {resource.type}
                    </td>

                    <td className="px-6 py-4">
                      {resource.uploadedBy}
                    </td>

                    <td className="space-x-2 px-6 py-4">

                      <button className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
                        View
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