import Link from "next/link";
import { Plus, Trash2, CheckCircle2 } from "lucide-react";

export default function QuestionBankPage() {
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
            Question Bank
          </h1>

          <p className="mt-2 text-gray-500">
            Create and manage MCQ questions for trainee assessments.
          </p>
        </div>

        {/* Create Question */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <Plus size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Add New Question
              </h2>

              <p className="text-sm text-gray-500">
                Create a multiple-choice question.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-6">

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

                <option value="forecasting">
                  Weather Forecasting
                </option>

                <option value="climate">
                  Climate Science
                </option>

                <option value="disaster">
                  Disaster Management
                </option>
              </select>
            </div>

            {/* Question */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Question
              </label>

              <textarea
                rows={4}
                placeholder="Enter your question..."
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Options */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Answer Options
              </label>

              <div className="mt-3 space-y-3">

                <input
                  type="text"
                  placeholder="Option A"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  placeholder="Option B"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  placeholder="Option C"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  placeholder="Option D"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />

              </div>
            </div>

            {/* Correct Answer */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Correct Answer
              </label>

              <select
                defaultValue=""
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="" disabled>
                  Select correct option
                </option>

                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            </div>

            {/* Marks + Deadline */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Marks
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="Example: 1"
                  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Assessment Deadline
                </label>

                <input
                  type="date"
                  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Add Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Question
            </button>

          </div>
        </section>

        {/* Existing Questions */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Existing Questions
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-lg border p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Meteorology Fundamentals
                  </p>

                  <h3 className="mt-1 font-semibold text-gray-800">
                    Which instrument is used to measure atmospheric pressure?
                  </h3>

                  <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <p>A. Thermometer</p>
                    <p>B. Barometer</p>
                    <p>C. Hygrometer</p>
                    <p>D. Anemometer</p>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 size={16} />
                    Correct Answer: B. Barometer
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>
            </div>

            <div className="rounded-lg border p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Climate Science
                  </p>

                  <h3 className="mt-1 font-semibold text-gray-800">
                    Which gas is most commonly associated with global warming?
                  </h3>

                  <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <p>A. Oxygen</p>
                    <p>B. Nitrogen</p>
                    <p>C. Carbon Dioxide</p>
                    <p>D. Hydrogen</p>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 size={16} />
                    Correct Answer: C. Carbon Dioxide
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}