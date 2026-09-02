import CourseCard from "@/components/cards/CourseCard";
import AssessmentCard from "@/components/cards/AssessmentCard";
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
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-500">Trainer: {trainer}</p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-sm">Progress: {progress}%</p>
    </div>
  );
}