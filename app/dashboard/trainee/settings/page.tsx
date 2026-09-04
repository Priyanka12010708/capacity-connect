import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/dashboard/trainee"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account and notification preferences.
          </p>
        </div>

        {/* Account Settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Account Settings
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Naveetha"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="naveetha@example.com"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Notification Preferences
          </h2>

          <div className="mt-6 space-y-4">
            <label className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium text-gray-800">
                  Course Notifications
                </p>
                <p className="text-sm text-gray-500">
                  Receive updates about courses.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium text-gray-800">
                  Assessment Reminders
                </p>
                <p className="text-sm text-gray-500">
                  Receive reminders for upcoming assessments.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium text-gray-800">
                  Certificate Updates
                </p>
                <p className="text-sm text-gray-500">
                  Receive notifications when certificates are issued.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />
            </label>
          </div>
        </section>

        {/* Security */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Security
          </h2>

          <button
            type="button"
            className="mt-5 rounded-lg border px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Change Password
          </button>
        </section>
      </div>
    </main>
  );
}