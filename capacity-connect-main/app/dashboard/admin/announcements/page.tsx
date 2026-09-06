import Link from "next/link";
import { Megaphone, Calendar, Send } from "lucide-react";

const announcements = [
  {
    title: "New Meteorology Course Released",
    date: "03 Sep 2026",
    audience: "All Trainees",
  },
  {
    title: "Trainer Meeting Scheduled",
    date: "01 Sep 2026",
    audience: "All Trainers",
  },
  {
    title: "System Maintenance Notice",
    date: "30 Aug 2026",
    audience: "Everyone",
  },
];

export default function AdminAnnouncementsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <Link
            href="/dashboard/admin"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Announcements
          </h1>

          <p className="mt-2 text-gray-500">
            Create and manage announcements for trainers and trainees.
          </p>
        </div>

        {/* Create Announcement */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-6">
            Create Announcement
          </h2>

          <div className="space-y-5">

            <div>
              <label className="font-medium">
                Title
              </label>

              <input
                type="text"
                placeholder="Enter announcement title"
                className="mt-2 w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="font-medium">
                Audience
              </label>

              <select className="mt-2 w-full rounded-lg border p-3">
                <option>Everyone</option>
                <option>All Trainers</option>
                <option>All Trainees</option>
              </select>
            </div>

            <div>
              <label className="font-medium">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write announcement..."
                className="mt-2 w-full rounded-lg border p-3"
              />
            </div>

            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              <span className="flex items-center gap-2">
                <Send size={18} />
                Publish Announcement
              </span>
            </button>

          </div>

        </div>

        {/* Previous Announcements */}

        <div className="mt-8 bg-white rounded-xl shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-xl font-semibold">
              Previous Announcements
            </h2>
          </div>

          {announcements.map((item) => (
            <div
              key={item.title}
              className="border-b last:border-none p-6"
            >
              <div className="flex items-center gap-3">

                <Megaphone className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-5 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={15} />
                      {item.date}
                    </span>

                    <span>
                      Audience: {item.audience}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
