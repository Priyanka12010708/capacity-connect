import Link from "next/link";
import { UserCheck, UserX, Clock } from "lucide-react";

const pendingUsers = [
  {
    name: "Karthik Raj",
    role: "Trainer",
    email: "karthik@example.com",
    date: "02 Sep 2026",
  },
  {
    name: "Sneha Devi",
    role: "Trainee",
    email: "sneha@example.com",
    date: "02 Sep 2026",
  },
  {
    name: "Vignesh Kumar",
    role: "Trainer",
    email: "vignesh@example.com",
    date: "01 Sep 2026",
  },
  {
    name: "Anjali Sharma",
    role: "Trainee",
    email: "anjali@example.com",
    date: "01 Sep 2026",
  },
];

export default function AdminApprovalsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/admin"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            User Approvals
          </h1>

          <p className="mt-2 text-gray-500">
            Review and approve newly registered trainers and trainees.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Pending Requests</p>
              <Clock className="text-orange-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">4</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Approved Today</p>
              <UserCheck className="text-green-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">18</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Rejected Today</p>
              <UserX className="text-red-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">2</h2>
          </div>

        </div>

        {/* Pending Users */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              Pending Registration Requests
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4">Name</th>
                  <th className="text-left px-6 py-4">Role</th>
                  <th className="text-left px-6 py-4">Email</th>
                  <th className="text-left px-6 py-4">Applied On</th>
                  <th className="text-left px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>

                {pendingUsers.map((user) => (
                  <tr
                    key={user.email}
                    className="border-t"
                  >
                    <td className="px-6 py-4 font-medium">
                      {user.name}
                    </td>

                    <td className="px-6 py-4">
                      {user.role}
                    </td>

                    <td className="px-6 py-4">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      {user.date}
                    </td>

                    <td className="px-6 py-4 space-x-2">

                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Approve
                      </button>

                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                        Reject
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