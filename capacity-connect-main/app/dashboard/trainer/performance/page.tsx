import Link from "next/link";
import {
  Users,
  TrendingUp,
  ClipboardCheck,
  Award,
  ChevronUp,
} from "lucide-react";

const trainees = [
  {
    name: "Arun Kumar",
    course: "Meteorology Fundamentals",
    score: 92,
    completion: 95,
    status: "Excellent",
  },
  {
    name: "Priya Sharma",
    course: "Climate Science",
    score: 86,
    completion: 88,
    status: "Good",
  },
  {
    name: "Rahul Das",
    course: "Weather Forecasting",
    score: 74,
    completion: 72,
    status: "Good",
  },
  {
    name: "Anitha Rao",
    course: "Meteorology Fundamentals",
    score: 61,
    completion: 58,
    status: "Needs Attention",
  },
];

export default function TrainerPerformancePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Trainee Performance
          </h1>

          <p className="mt-2 text-gray-500">
            Monitor trainee participation, assessment results,
            and learning progress.
          </p>
        </div>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Total Trainees
              </p>

              <Users size={21} className="text-blue-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-800">
              128
            </p>

            <p className="mt-2 flex items-center gap-1 text-sm text-green-600">
              <ChevronUp size={15} />
              12% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Average Score
              </p>

              <TrendingUp size={21} className="text-green-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-800">
              82%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Across all assessments
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Participation
              </p>

              <ClipboardCheck size={21} className="text-purple-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-800">
              91%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Assessment participation
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Certificates
              </p>

              <Award size={21} className="text-yellow-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-800">
              74
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Certificates earned
            </p>
          </div>
        </section>

        {/* Trainee Table */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Trainee Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View individual trainee performance.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b text-sm text-gray-500">
                  <th className="px-4 py-3 font-medium">
                    Trainee
                  </th>

                  <th className="px-4 py-3 font-medium">
                    Course
                  </th>

                  <th className="px-4 py-3 font-medium">
                    Score
                  </th>

                  <th className="px-4 py-3 font-medium">
                    Completion
                  </th>

                  <th className="px-4 py-3 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {trainees.map((trainee) => (
                  <tr
                    key={trainee.name}
                    className="border-b last:border-0"
                  >
                    <td className="px-4 py-4 font-medium text-gray-800">
                      {trainee.name}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {trainee.course}
                    </td>

                    <td className="px-4 py-4 font-semibold text-blue-700">
                      {trainee.score}%
                    </td>

                    <td className="px-4 py-4">
                      <div className="w-32">
                        <div className="h-2 rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{
                              width: `${trainee.completion}%`,
                            }}
                          />
                        </div>

                        <p className="mt-1 text-xs text-gray-500">
                          {trainee.completion}%
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          trainee.status === "Excellent"
                            ? "bg-green-100 text-green-700"
                            : trainee.status === "Good"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {trainee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weak Areas */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Topics Requiring Attention
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Subjects where trainees are showing lower performance.
          </p>

          <div className="mt-5 space-y-5">
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  Atmospheric Pressure
                </span>

                <span className="text-gray-500">58%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-orange-500"
                  style={{ width: "58%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  Climate Modelling
                </span>

                <span className="text-gray-500">64%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-orange-500"
                  style={{ width: "64%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  Weather Prediction
                </span>

                <span className="text-gray-500">69%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-orange-500"
                  style={{ width: "69%" }}
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}