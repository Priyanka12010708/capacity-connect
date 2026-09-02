import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Trainee 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Continue your learning journey with Capacity Connect.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Search size={22} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
          N
        </div>
      </div>
    </header>
  );
}