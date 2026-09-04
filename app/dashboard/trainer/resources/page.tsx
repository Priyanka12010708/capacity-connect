import Link from "next/link";
import {
  Upload,
  Video,
  FileText,
  Presentation,
  FolderOpen,
} from "lucide-react";

export default function TrainerResourcesPage() {
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
            Learning Resources
          </h1>

          <p className="mt-2 text-gray-500">
            Upload and manage lectures, presentations, PDFs, and
            study materials.
          </p>
        </div>

        {/* Upload Section */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <Upload size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Upload New Resource
              </h2>

              <p className="text-sm text-gray-500">
                Add learning materials for your trainees.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-6">

            {/* Course */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Select Course
              </label>

              <select
                defaultValue=""
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="" disabled>
                  Select a course
                </option>

                <option value="meteorology">
                  Meteorology Fundamentals
                </option>

                <option value="forecasting">
                  Weather Forecasting
                </option>

                <option value="climate">
                  Climate Science
                </option>

                <option value="disaster">
                  Disaster Management
                </option>
              </select>
            </div>

            {/* Resource Title */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Resource Title
              </label>

              <input
                type="text"
                placeholder="Enter resource title"
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Resource Type */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Resource Type
              </label>

              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg border p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <Video size={22} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Recorded Lecture</p>
                    <p className="text-xs text-gray-500">
                      MP4 / Video
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg border p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <Presentation
                    size={22}
                    className="text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Presentation</p>
                    <p className="text-xs text-gray-500">
                      PPT / PPTX
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg border p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <FileText size={22} className="text-blue-600" />
                  <div>
                    <p className="font-medium">PDF Document</p>
                    <p className="text-xs text-gray-500">
                      PDF files
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 rounded-lg border p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <FolderOpen size={22} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Other Material</p>
                    <p className="text-xs text-gray-500">
                      DOC / ZIP / Other
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Select File
              </label>

              <input
                type="file"
                className="mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-sm"
              />

              <p className="mt-2 text-xs text-gray-400">
                Supported formats: PDF, PPT, PPTX, MP4, DOC, DOCX
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Description
              </label>

              <textarea
                rows={4}
                placeholder="Describe this resource..."
                className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Upload Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <Upload size={18} />
              Upload Resource
            </button>

          </div>
        </section>

        {/* Existing Resources */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Existing Resources
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Video className="text-blue-600" />

                <div>
                  <h3 className="font-medium">
                    Introduction to Meteorology
                  </h3>

                  <p className="text-sm text-gray-500">
                    Meteorology Fundamentals
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Manage
              </button>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-600" />

                <div>
                  <h3 className="font-medium">
                    Weather Forecasting Notes
                  </h3>

                  <p className="text-sm text-gray-500">
                    Weather Forecasting
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Manage
              </button>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Presentation className="text-blue-600" />

                <div>
                  <h3 className="font-medium">
                    Climate Change Presentation
                  </h3>

                  <p className="text-sm text-gray-500">
                    Climate Science
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Manage
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}