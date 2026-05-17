import { studyPlans } from "@/data/study-plans";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(studyPlans);
}
