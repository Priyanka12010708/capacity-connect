import Link from "next/link";
import { Clock, CheckCircle2, FileText } from "lucide-react";

const assessments = [
  {
    subject: "Meteorology",
    title: "Meteorology Fundamentals Quiz",
    questions: 20,
    duration: "30 minutes",
    deadline: "15 September 2026",
    status: "Upcoming",
  },
  {
    subject: "Climate Science",
    title: "Climate Change Assessment",
    questions: 25,
    duration: "40 minutes",
    deadline: "18 September 2026",
    status: "Upcoming",
  },
  {
    subject: "Weather Forecasting",
    title: "Weather Forecasting MCQ",
    questions: 15,
    duration: "20 minutes",
    deadline: "20 September 2026",
    status: "Upcoming",
  },
  {
    subject: "Disaster Management",
    title: "Disaster Management Test",
    questions: 20,
    duration: "30 minutes",
    deadline: "25 September 2026",
    status: "Completed",
  },
];

export default function AssessmentsPage() {
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
            Assessments
          </h1>

          <p className="mt-2 text-gray-500">
            Attempt subject-wise assessments and track your results.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Assessments</p>
            <p className="mt-2 text-3xl font-bold text-blue-700">8</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-green-600">5</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Upcoming</p>
            <p className="mt-2 text-3xl font-bold text-orange-500">3</p>
          </div>
        </div>

        {/* Assessments */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {assessments.map((assessment) => {
            const completed = assessment.status === "Completed";

            return (
              <div
                key={assessment.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <FileText size={24} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        {assessment.subject}
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-gray-800">
                        {assessment.title}
                      </h2>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      completed
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {assessment.status}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText size={17} />
                    {assessment.questions} Questions
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={17} />
                    {assessment.duration}
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  Deadline:{" "}
                  <span className="font-medium text-gray-700">
                    {assessment.deadline}
                  </span>
                </div>

                {/* Action */}
                {completed ? (
                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-100 px-4 py-3 font-medium text-green-700"
                  >
                    <CheckCircle2 size={18} />
                    Completed
                  </button>
                ) : (
                  <button
                    type="button"
                    className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
                  >
                    Start Assessment
                  </button>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}