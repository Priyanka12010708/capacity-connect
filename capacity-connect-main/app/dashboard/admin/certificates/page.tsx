import Link from "next/link";
import { Award, CheckCircle, Download } from "lucide-react";

const certificates = [
  {
    trainee: "Arun Kumar",
    course: "Meteorology Fundamentals",
    issued: "02 Sep 2026",
    status: "Issued",
  },
  {
    trainee: "Priya Sharma",
    course: "Climate Science",
    issued: "30 Aug 2026",
    status: "Issued",
  },
  {
    trainee: "Rahul Das",
    course: "Weather Forecasting",
    issued: "28 Aug 2026",
    status: "Pending",
  },
  {
    trainee: "Sneha Devi",
    course: "Disaster Management",
    issued: "25 Aug 2026",
    status: "Issued",
  },
];

export default function AdminCertificatesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <Link
            href="/dashboard/admin"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Certificate Management
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage trainee certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Award className="text-yellow-600 mb-3" />
            <h3 className="text-gray-500">Certificates Issued</h3>
            <p className="text-3xl font-bold mt-2">74</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <CheckCircle className="text-green-600 mb-3" />
            <h3 className="text-gray-500">Verified</h3>
            <p className="text-3xl font-bold mt-2">70</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Download className="text-blue-600 mb-3" />
            <h3 className="text-gray-500">Downloads</h3>
            <p className="text-3xl font-bold mt-2">215</p>
          </div>

        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              Issued Certificates
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Trainee</th>
                <th className="px-6 py-4 text-left">Course</th>
                <th className="px-6 py-4 text-left">Issued On</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>

              {certificates.map((certificate) => (

                <tr key={certificate.trainee} className="border-t">

                  <td className="px-6 py-4 font-medium">
                    {certificate.trainee}
                  </td>

                  <td className="px-6 py-4">
                    {certificate.course}
                  </td>

                  <td className="px-6 py-4">
                    {certificate.issued}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        certificate.status === "Issued"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {certificate.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 space-x-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                      View
                    </button>

                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                      Download
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}