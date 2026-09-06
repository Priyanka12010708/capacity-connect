import Link from "next/link";
import {
  FileText,
  Presentation,
  Video,
  Download,
} from "lucide-react";

const resources = [
  {
    title: "Introduction to Meteorology",
    type: "Video Lecture",
    category: "Meteorology",
  },
  {
    title: "Climate Change Fundamentals",
    type: "Presentation",
    category: "Climate",
  },
  {
    title: "Weather Forecasting Study Material",
    type: "PDF Document",
    category: "Forecasting",
  },
  {
    title: "Disaster Management Guidelines",
    type: "PDF Document",
    category: "Disaster Management",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/trainee"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Learning Resources
          </h1>

          <p className="mt-2 text-gray-500">
            Access lectures, presentations, and study materials
            uploaded by your trainers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search resources..."
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
            />

            <select
              className="rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              <option value="Meteorology">Meteorology</option>
              <option value="Climate">Climate</option>
              <option value="Forecasting">Forecasting</option>
              <option value="Disaster Management">
                Disaster Management
              </option>
            </select>
          </div>
        </div>

        {/* Resource Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">

                  {/* Resource Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    {resource.type === "Video Lecture" ? (
                      <Video size={24} />
                    ) : resource.type === "Presentation" ? (
                      <Presentation size={24} />
                    ) : (
                      <FileText size={24} />
                    )}
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {resource.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {resource.type}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {resource.category}
                </span>
              </div>

              {/* Action */}
              <button
                type="button"
                className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <Download size={17} />
                Access Resource
              </button>
            </div>
          ))}
        </section>

        {/* Empty future section */}
        <section className="mt-8 rounded-xl border border-dashed bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            More learning materials coming soon
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            New resources uploaded by trainers will appear here.
          </p>
        </section>

      </div>
    </main>
  );
}