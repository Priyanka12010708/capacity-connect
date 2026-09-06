import Link from "next/link";
import { Settings, Bell, Shield, Database } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/admin"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Admin Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Configure system preferences and platform settings.
          </p>
        </div>

        <div className="space-y-6">

          {/* General */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">
              <Settings className="text-blue-600" />
              <h2 className="text-xl font-semibold">
                General Settings
              </h2>
            </div>

            <div className="space-y-4">

              <div>
                <label className="font-medium">
                  Platform Name
                </label>

                <input
                  type="text"
                  defaultValue="Capacity Connect"
                  className="mt-2 w-full rounded-lg border p-3"
                />
              </div>

              <div>
                <label className="font-medium">
                  Support Email
                </label>

                <input
                  type="email"
                  defaultValue="support@capacityconnect.com"
                  className="mt-2 w-full rounded-lg border p-3"
                />
              </div>

            </div>

          </div>

          {/* Notifications */}

          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">
              <Bell className="text-yellow-600" />
              <h2 className="text-xl font-semibold">
                Notifications
              </h2>
            </div>

            <div className="space-y-3">

              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                Email Notifications
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                New User Alerts
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" />
                Weekly Reports
              </label>

            </div>

          </div>

          {/* Security */}

          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">
              <Shield className="text-green-600" />
              <h2 className="text-xl font-semibold">
                Security
              </h2>
            </div>

            <button className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700">
              Change Admin Password
            </button>

          </div>

          {/* Backup */}

          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center gap-3 mb-5">
              <Database className="text-purple-600" />
              <h2 className="text-xl font-semibold">
                Database
              </h2>
            </div>

            <button className="rounded-lg bg-purple-600 px-5 py-3 text-white hover:bg-purple-700">
              Backup Database
            </button>

          </div>

          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Save Settings
          </button>

        </div>

      </div>
    </main>
  );
}