import Link from "next/link";

export default function CreateCoursePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Create New Course
          </h1>

          <p className="mt-2 text-gray-500">
            Create and publish a training course for your trainees.
          </p>
        </div>

        {/* Course Form */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Course Information
          </h2>

          <div className="mt-6 space-y-6">

            {/* Course Title */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Course Title
              </label>

              <input
                type="text"
                placeholder="Enter course title"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>

              <select
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="meteorology">Meteorology</option>
                <option value="climate">Climate Science</option>
                <option value="forecasting">Weather Forecasting</option>
                <option value="disaster">Disaster Management</option>
                <option value="oceanography">Oceanography</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Course Description
              </label>

              <textarea
                rows={5}
                placeholder="Describe the course..."
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Duration + Level */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Duration
                </label>

                <input
                  type="text"
                  placeholder="Example: 4 weeks"
                  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Difficulty Level
                </label>

                <select
                  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

            </div>

            {/* Learning Objectives */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Learning Objectives
              </label>

              <textarea
                rows={4}
                placeholder="What will trainees learn from this course?"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                Create Course
              </button>

              <button
                type="button"
                className="rounded-lg border px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
              >
                Save as Draft
              </button>

            </div>

          </div>
        </section>

        {/* Next Step */}
        <section className="mt-6 rounded-xl border border-dashed bg-white p-6">
          <h2 className="font-semibold text-gray-800">
            📂 Course Materials
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            After creating the course, you can upload videos,
            presentations, PDFs, and other study materials.
          </p>
        </section>

      </div>
    </main>
  );
}