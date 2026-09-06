interface CourseCardProps {
  title: string;
  trainer: string;
  progress: number;
}

export default function CourseCard({
  title,
  trainer,
  progress,
}: CourseCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-bold text-gray-800">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Trainer: {trainer}
      </p>

      <div className="mt-5">
        <div className="h-3 w-full rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm font-medium text-gray-600">
          Progress: {progress}%
        </p>
      </div>
    </div>
  );
}