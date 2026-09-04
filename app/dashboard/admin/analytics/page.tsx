import Link from "next/link";
import {
  Users,
  BookOpen,
  ClipboardList,
  Award,
  TrendingUp,
} from "lucide-react";

export default function AdminAnalyticsPage() {
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
            Reports & Analytics
          </h1>

          <p className="mt-2 text-gray-500">
            View overall platform statistics and learning performance.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Users className="text-blue-600 mb-3" />
            <h3 className="text-gray-500">Users</h3>
            <p className="text-3xl font-bold mt-2">152</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <BookOpen className="text-green-600 mb-3" />
            <h3 className="text-gray-500">Courses</h3>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <ClipboardList className="text-purple-600 mb-3" />
            <h3 className="text-gray-500">Assessments</h3>
            <p className="text-3xl font-bold mt-2">38</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Award className="text-yellow-600 mb-3" />
            <h3 className="text-gray-500">Certificates</h3>
            <p className="text-3xl font-bold mt-2">74</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <TrendingUp className="text-red-600 mb-3" />
            <h3 className="text-gray-500">Completion</h3>
            <p className="text-3xl font-bold mt-2">89%</p>
          </div>

        </div>

        {/* Reports */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Platform Summary
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>👨‍🎓 Total Trainees : 128</li>
              <li>👨‍🏫 Total Trainers : 21</li>
              <li>👨‍💼 Administrators : 3</li>
              <li>📚 Published Courses : 18</li>
              <li>📝 Active Assessments : 28</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Monthly Activity
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>📈 New Users : +18</li>
              <li>📖 New Courses : +6</li>
              <li>📄 Resources Uploaded : +42</li>
              <li>🏆 Certificates Issued : +20</li>
              <li>✅ Course Completion : 89%</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}