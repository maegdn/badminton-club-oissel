import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "aj9t9bg2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-13",
});
