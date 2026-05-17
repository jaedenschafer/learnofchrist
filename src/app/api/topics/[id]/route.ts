import { topics } from "@/data/topics";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return topics.map((t) => ({ id: t.id }));
}

export function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return Promise.resolve(params).then(({ id }) => {
    const topic = topics.find((t) => t.id === id);
    return topic
      ? NextResponse.json(topic)
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  });
}
