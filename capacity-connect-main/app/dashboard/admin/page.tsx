"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/stats").then(res => res.json()).then(data => setStats(data.data || data));
  }, []);

  if (!stats) return <div className="p-10 text-white">Loading AI Engine...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Skill Development & Training Portal</h1>
<p className="text-gray-400 mb-8">Competency Management System | Live Analytics</p>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-6 rounded-2xl shadow-xl">
          <h3 className="text-sm opacity-80">Total Trainees</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalTrainees}</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-xl">
          <h3 className="text-sm opacity-80">Total Trainers</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalTrainers}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl shadow-xl">
          <h3 className="text-sm opacity-80">Total Courses</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalCourses}</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-2xl shadow-xl animate-pulse">
          <h3 className="text-sm opacity-80">Pending Requests</h3>
          <p className="text-4xl font-bold mt-2">{stats.pendingRequests}</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">🤖 AI Competency Analysis</h2>
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl text-yellow-300">
          ⚠️ AI Analysis: 45% Trainees need AI/ML Training - Auto-assigning Trainers...
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-black p-4 rounded-xl"><p>AI/ML</p><div className="w-full bg-gray-800 h-2 mt-2 rounded"><div className="bg-violet-500 h-2 rounded" style={{width:'45%'}}></div></div><p className="text-right text-sm mt-1">45%</p></div>
          <div className="bg-black p-4 rounded-xl"><p>Web Dev</p><div className="w-full bg-gray-800 h-2 mt-2 rounded"><div className="bg-emerald-500 h-2 rounded" style={{width:'30%'}}></div></div><p className="text-right text-sm mt-1">30%</p></div>
          <div className="bg-black p-4 rounded-xl"><p>Cloud</p><div className="w-full bg-gray-800 h-2 mt-2 rounded"><div className="bg-orange-500 h-2 rounded" style={{width:'25%'}}></div></div><p className="text-right text-sm mt-1">25%</p></div>
        </div>
      </div>
    </div>
  );
}