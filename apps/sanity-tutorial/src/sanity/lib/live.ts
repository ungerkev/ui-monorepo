// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { sanityClient } from "./sanityClient";

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
});
