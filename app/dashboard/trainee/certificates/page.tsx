import Link from "next/link";
import { Award, Download, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    title: "Meteorology Fundamentals",
    issuedDate: "10 August 2026",
    certificateId: "CC-MET-2026-001",
  },
  {
    title: "Climate Change Awareness",
    issuedDate: "22 August 2026",
    certificateId: "CC-CLM-2026-002",
  },
  {
    title: "Weather Forecasting Basics",
    issuedDate: "28 August 2026",
    certificateId: "CC-WFR-2026-003",
  },
];

export default function CertificatesPage() {
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
            My Certificates
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage the certificates you earned through
            Capacity Connect.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Certificates Earned
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-700">
              5
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Courses Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              5
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Certificates Available
            </p>

            <p className="mt-2 text-3xl font-bold text-purple-600">
              3
            </p>
          </div>
        </div>

        {/* Certificates */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.certificateId}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                  <Award size={28} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {certificate.title}
                    </h2>

                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      <CheckCircle2 size={14} />
                      Verified
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Issued on: {certificate.issuedDate}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Certificate ID:{" "}
                    <span className="font-medium text-gray-700">
                      {certificate.certificateId}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  <Download size={18} />
                  Download Certificate
                </button>

                <button
                  type="button"
                  className="rounded-lg border px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Verification */}
        <section className="mt-8 rounded-xl border border-dashed bg-white p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-gray-800">
                Certificate Verification
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Each certificate can be verified using its unique
                certificate ID.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Verify Certificate
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}