import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    totalTrainees: 152,
    totalTrainers: 12,
    totalCourses: 24,
    pendingRequests: 7,
    skillGap: [
      { name: 'AI/ML', value: 45 },
      { name: 'Web Dev', value: 30 },
      { name: 'Cloud', value: 25 },
    ],
    message: "AI Analysis: 45% Trainees need AI/ML Training"
  });
}