// app/api/search-courier/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "No query" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("couriers")
    .select("slug, name")
    .ilike("name", `%${query}%`)
    .limit(1);

  if (error || !data || data.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ slug: data[0].slug });
}
