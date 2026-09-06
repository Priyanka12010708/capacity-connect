"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("trainee");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary navigation
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "trainer") {
      router.push("/dashboard/trainer");
    } else {
      router.push("/dashboard/trainee");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Capacity Connect
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="trainee">Trainee</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline"
            >
                Forgot Password?
                </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>
    </main>
  );
}