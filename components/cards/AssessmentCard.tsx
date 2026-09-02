interface AssessmentCardProps {
  subject: string;
  dueDate: string;
}

export default function AssessmentCard({
  subject,
  dueDate,
}: AssessmentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-lg font-semibold">{subject}</h3>

      <p className="text-gray-500 mt-2">
        Due: {dueDate}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Start Assessment
      </button>
    </div>
  );
}