import type { QueryParams } from "next-sanity";
import { client } from "./client";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}) {
  try {
    const data = await client.fetch<QueryResponse>(query, params, {
      next: { revalidate: 60 },
    });

    return { data };
  } catch {
    return { data: null };
  }
}

export function SanityLive() {
  return null;
}
