import Link from "next/link";
import { Search, Users, UserCheck, UserX, Shield } from "lucide-react";

const users = [
  {
    name: "Arun Kumar",
    role: "Trainee",
    email: "arun@example.com",
    status: "Active",
  },
  {
    name: "Priya Sharma",
    role: "Trainer",
    email: "priya@example.com",
    status: "Active",
  },
  {
    name: "Rahul Das",
    role: "Trainee",
    email: "rahul@example.com",
    status: "Inactive",
  },
  {
    name: "Admin User",
    role: "Admin",
    email: "admin@example.com",
    status: "Active",
  },
];

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
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
            User Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage trainees, trainers, and administrators.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Total Users</p>
              <Users className="text-blue-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">152</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Active Users</p>
              <UserCheck className="text-green-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">140</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Inactive Users</p>
              <UserX className="text-red-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">12</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Administrators</p>
              <Shield className="text-purple-600" />
            </div>

            <h2 className="text-3xl font-bold mt-3">3</h2>
          </div>

        </div>

        {/* Search */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              Registered Users
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4">Name</th>
                  <th className="text-left px-6 py-4">Role</th>
                  <th className="text-left px-6 py-4">Email</th>
                  <th className="text-left px-6 py-4">Status</th>
                  <th className="text-left px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>

                {users.map((user) => (
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
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Edit
                      </button>

                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
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