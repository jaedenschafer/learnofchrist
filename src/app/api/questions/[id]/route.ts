import { questions } from "@/data/questions";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return questions.map((q) => ({ id: q.id }));
}

export function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return Promise.resolve(params).then(({ id }) => {
    const question = questions.find((q) => q.id === id);
    return question
      ? NextResponse.json(question)
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  });
}
