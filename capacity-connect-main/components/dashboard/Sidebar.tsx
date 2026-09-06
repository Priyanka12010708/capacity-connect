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
    <aside className="hidden min-h-screen w-64 shrink-0 bg-blue-900 p-6 text-white md:block">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">🎓 Capacity Connect</h1>
        <p className="mt-1 text-sm text-blue-200">
          Learning Management Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <BookOpen size={20} />
          <span>My Courses</span>
        </Link>

        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <FolderOpen size={20} />
          <span>Resources</span>
        </Link>

        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <FileText size={20} />
          <span>Assessments</span>
        </Link>

        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <Award size={20} />
          <span>Certificates</span>
        </Link>

        <Link
          href="/dashboard/trainee"
          className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-blue-800"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}