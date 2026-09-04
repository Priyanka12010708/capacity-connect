import Link from "next/link";
import {
  ClipboardList,
  Clock,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const assessments = [
  {
    title: "Meteorology Fundamentals Quiz",
    course: "Meteorology Fundamentals",
    questions: 20,
    duration: "30 minutes",
    deadline: "15 September 2026",
    status: "Published",
  },
  {
    title: "Climate Change Assessment",
    course: "Climate Science",
    questions: 25,
    duration: "40 minutes",
    deadline: "18 September 2026",
    status: "Draft",
  },
  {
    title: "Weather Forecasting Test",
    course: "Weather Forecasting",
    questions: 15,
    duration: "20 minutes",
    deadline: "20 September 2026",
    status: "Published",
  },
];

export default function TrainerAssessmentsPage() {
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
            Assessment Management
          </h1>

          <p className="mt-2 text-gray-500">
            Create, schedule, and manage assessments for your trainees.
          </p>
        </div>

        {/* Create Assessment */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <ClipboardList size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Create Assessment
              </h2>

              <p className="text-sm text-gray-500">
                Configure an assessment for your trainees.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Assessment Title */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-600">
                Assessment Title
              </label>

              <input
                type="text"
                placeholder="Enter assessment title"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Course */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Select Course
              </label>

              <select
                defaultValue=""
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="" disabled>
                  Select a course
                </option>

                <option value="meteorology">
                  Meteorology Fundamentals
                </option>

                <option value="climate">
                  Climate Science
                </option>

                <option value="forecasting">
                  Weather Forecasting
                </option>

                <option value="disaster">
                  Disaster Management
                </option>
              </select>
            </div>

            {/* Questions */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Number of Questions
              </label>

              <input
                type="number"
                min="1"
                placeholder="Example: 20"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Duration
              </label>

              <select
                defaultValue=""
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="" disabled>
                  Select duration
                </option>

                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="40">40 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Deadline
              </label>

              <input
                type="date"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Total Marks */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Total Marks
              </label>

              <input
                type="number"
                min="1"
                placeholder="Example: 20"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Create */}
            <div className="md:col-span-2">
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Create Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Existing Assessments */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Existing Assessments
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            View and manage assessments created for your trainees.
          </p>

          <div className="mt-6 space-y-4">
            {assessments.map((assessment) => {
              const published = assessment.status === "Published";

              return (
                <div
                  key={assessment.title}
                  className="rounded-xl border p-5"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {assessment.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            published
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {assessment.status}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-blue-600">
                        {assessment.course}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-600">
                        <span>
                          📝 {assessment.questions} Questions
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {assessment.duration}
                        </span>

                        <span className="flex items-center gap-1">
                          <CalendarDays size={16} />
                          {assessment.deadline}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="rounded-lg border px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                      >
                        Edit
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Question Bank */}
        <section className="mt-8 rounded-xl border border-dashed bg-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">
                Need more questions?
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add or manage MCQ questions in your question bank.
              </p>
            </div>

            <Link
              href="/dashboard/trainer/question-bank"
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Open Question Bank
            </Link>
          </div>
        </section>

        {/* Note */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <CheckCircle2 size={16} />
          Assessment data is currently sample frontend data.
        </div>

      </div>
    </main>
  );
}