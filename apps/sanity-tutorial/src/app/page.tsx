import { Test } from "@repo/shared/ui/test";
import groq from "groq";
import { sanityClient } from "@/sanity/lib/sanityClient";
import { HomeDoc } from "@/sanity/types";

export default async function Home() {
  const QUERY = groq`*[_type=="home"][0]{ hero{ ... } }`;
  const data = await sanityClient.fetch<HomeDoc | undefined>(
    QUERY,
    {},
    { cache: "force-cache", next: { tags: ["sanity"] } },
  );

  console.log("data", data?.hero);

  return (
    <>
      <Test />
    </>
  );
}
