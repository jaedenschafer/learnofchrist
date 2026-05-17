import { studyPlans } from "@/data/study-plans";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return studyPlans.map((p) => ({ id: p.id }));
}

export function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return Promise.resolve(params).then(({ id }) => {
    const plan = studyPlans.find((p) => p.id === id);
    return plan
      ? NextResponse.json(plan)
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  });
}
