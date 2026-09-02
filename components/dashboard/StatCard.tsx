interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold text-blue-700 mt-3">
        {value}
      </p>
    </div>
  );
}