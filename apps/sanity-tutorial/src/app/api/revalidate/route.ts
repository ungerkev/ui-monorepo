import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  revalidateTag("sanity", { expire: 0 });

  return Response.json({ revalidated: true });
}
