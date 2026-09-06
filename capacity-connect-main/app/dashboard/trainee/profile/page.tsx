import Link from "next/link";

export default function TraineeProfile() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainee"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your professional information and learning profile.
          </p>
        </div>

        {/* Profile Header */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
              N
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Naveetha
              </h2>

              <p className="text-gray-500">
                Trainee
              </p>

              <p className="mt-1 text-sm text-gray-400">
                naveetha@example.com
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
                Qualification
              </label>

              <input
                type="text"
                placeholder="Enter your qualification"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Work Experience
              </label>

              <input
                type="text"
                placeholder="Example: 2 years"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Interests
              </label>

              <input
                type="text"
                placeholder="Example: Meteorology, AI"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Skills
              </label>

              <input
                type="text"
                placeholder="Example: Python, Data Analysis"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">
              About Me
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="button"
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Save Profile
          </button>
        </section>

        {/* Certificates */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            🏆 Certificates
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-gray-800">
                Meteorology Fundamentals
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Completed: 10 August 2026
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold text-gray-800">
                Climate Change Awareness
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Completed: 22 August 2026
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}