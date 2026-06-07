import { createClient } from "next-sanity";

const token = process.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId: "5ay5jh6a",
  dataset: "production",
  apiVersion: "2026-06-07",
  useCdn: !token,
  token,
});
