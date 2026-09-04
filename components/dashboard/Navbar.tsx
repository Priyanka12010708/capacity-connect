import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, Trainee 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Continue your learning journey with Capacity Connect.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2 sm:flex">
          <Search size={18} className="text-gray-400" />
          <span className="text-sm text-gray-400">Search</span>
        </div>

        <button
          type="button"
          className="relative rounded-lg p-2 transition hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={21} className="text-gray-600" />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
            3
          </span>
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
          N
        </div>
      </div>
    </header>
  );
}