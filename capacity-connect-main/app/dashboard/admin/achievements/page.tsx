import Link from "next/link";
import { Trophy, Star, Medal, Award } from "lucide-react";

const achievements = [
  {
    title: "Top Performing Trainee",
    recipient: "Arun Kumar",
    category: "Trainee",
    date: "03 Sep 2026",
  },
  {
    title: "Best Trainer",
    recipient: "Dr. Sharma",
    category: "Trainer",
    date: "02 Sep 2026",
  },
  {
    title: "Highest Course Completion",
    recipient: "Climate Science",
    category: "Course",
    date: "01 Sep 2026",
  },
  {
    title: "Most Active Learner",
    recipient: "Sneha Devi",
    category: "Trainee",
    date: "30 Aug 2026",
  },
];

export default function AdminAchievementsPage() {
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
            Achievements
          </h1>

          <p className="mt-2 text-gray-500">
            View platform achievements and recognize outstanding performance.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Trophy className="mb-3 text-yellow-600" />
            <h3 className="text-gray-500">Awards Given</h3>
            <p className="mt-2 text-3xl font-bold">58</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Star className="mb-3 text-blue-600" />
            <h3 className="text-gray-500">Top Trainers</h3>
            <p className="mt-2 text-3xl font-bold">12</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Medal className="mb-3 text-green-600" />
            <h3 className="text-gray-500">Top Trainees</h3>
            <p className="mt-2 text-3xl font-bold">26</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Award className="mb-3 text-purple-600" />
            <h3 className="text-gray-500">Recognitions</h3>
            <p className="mt-2 text-3xl font-bold">20</p>
          </div>

        </div>

        {/* Achievement Table */}
        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-xl font-semibold">
              Recent Achievements
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Achievement</th>
                <th className="px-6 py-4 text-left">Recipient</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>

              {achievements.map((item) => (
                <tr key={item.title} className="border-t">

                  <td className="px-6 py-4 font-medium">
                    {item.title}
                  </td>

                  <td className="px-6 py-4">
                    {item.recipient}
                  </td>

                  <td className="px-6 py-4">
                    {item.category}
                  </td>

                  <td className="px-6 py-4">
                    {item.date}
                  </td>

                  <td className="px-6 py-4">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                      View
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