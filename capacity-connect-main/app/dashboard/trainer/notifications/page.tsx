import Link from "next/link";
import {
  Bell,
  BookOpen,
  FileText,
  Users,
  MessageCircle,
} from "lucide-react";

const notifications = [
  {
    title: "New trainee enrolled",
    message: "A new trainee has enrolled in Meteorology Fundamentals.",
    date: "Today",
    icon: Users,
  },
  {
    title: "Assessment submission",
    message: "Trainees have submitted the Meteorology Fundamentals Quiz.",
    date: "Today",
    icon: FileText,
  },
  {
    title: "Course material uploaded",
    message: "Your Weather Forecasting study material is now available.",
    date: "Yesterday",
    icon: BookOpen,
  },
  {
    title: "New course feedback",
    message: "You received new feedback from a trainee.",
    date: "2 days ago",
    icon: MessageCircle,
  },
  {
    title: "Assessment deadline reminder",
    message: "The Climate Change Assessment deadline is approaching.",
    date: "3 days ago",
    icon: Bell,
  },
];

export default function TrainerNotificationsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Notifications
          </h1>

          <p className="mt-2 text-gray-500">
            Stay updated with trainee activity, courses, and assessments.
          </p>
        </div>

        {/* Notifications */}
        <section className="overflow-hidden rounded-xl bg-white shadow-sm">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;

            return (
              <div
                key={notification.title}
                className={`flex gap-4 p-5 ${
                  index !== notifications.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Icon size={21} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-gray-800">
                      {notification.title}
                    </h2>

                    <span className="text-xs text-gray-400">
                      {notification.date}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    {notification.message}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </main>
  );
}
