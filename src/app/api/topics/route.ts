import { topics } from "@/data/topics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export function GET() {
  return NextResponse.json(topics);
}
