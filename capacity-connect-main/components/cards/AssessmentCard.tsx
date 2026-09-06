interface AssessmentCardProps {
  subject: string;
  dueDate: string;
}

export default function AssessmentCard({
  subject,
  dueDate,
}: AssessmentCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">
        {subject}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Due: {dueDate}
      </p>

      <button
        type="button"
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Start Assessment
      </button>
    </div>
  );
}