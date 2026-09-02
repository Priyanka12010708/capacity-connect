import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  FileText,
  Award,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        🎓 Capacity Connect
      </h1>

      <nav className="space-y-3">
        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <BookOpen size={20} />
          My Courses
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <FolderOpen size={20} />
          Resources
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <FileText size={20} />
          Assessments
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <Award size={20} />
          Certificates
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-800"
        >
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}