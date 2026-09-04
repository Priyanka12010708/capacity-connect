import Link from "next/link";

export default function TrainerProfile() {
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
            Trainer Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your professional profile and subject expertise.
          </p>
        </div>

        {/* Profile Header */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
              T
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Dr. Sharma
              </h2>

              <p className="text-gray-500">
                Trainer
              </p>

              <p className="mt-1 text-sm text-gray-400">
                trainer@example.com
              </p>
            </div>
          </div>
        </section>

        {/* Professional Information */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Professional Information
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Dr. Sharma"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Qualification
              </label>

              <input
                type="text"
                defaultValue="Ph.D. in Atmospheric Science"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Experience
              </label>

              <input
                type="text"
                defaultValue="12 years"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Specialization
              </label>

              <input
                type="text"
                defaultValue="Meteorology"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">
              Areas of Expertise
            </label>

            <input
              type="text"
              defaultValue="Weather Forecasting, Climate Science, Atmospheric Science"
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">
              Professional Bio
            </label>

            <textarea
              rows={4}
              defaultValue="Experienced trainer specializing in meteorology and weather forecasting."
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="button"
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Save Profile
          </button>
        </section>

        {/* Subjects */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            📚 Subjects You Teach
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Meteorology
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Weather Forecasting
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Climate Science
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Atmospheric Science
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}