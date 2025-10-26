import { Test } from "@repo/shared/ui/test";
import groq from "groq";
import { sanityClient } from "@/sanity/lib/sanityClient";
import { HomeDoc } from "@/sanity/types";
import { cacheTag } from "next/cache";

const QUERY = groq`*[_type=="home"][0]{ hero{ ... } }`;

export async function getHome(): Promise<HomeDoc | null> {
  "use cache";
  cacheTag("sanity");
  return sanityClient.fetch<HomeDoc | null>(QUERY);
}

export default async function Home() {
  const data = await getHome();

  console.log("data", data?.hero);

  return (
    <>
      <div className="flex gap-1.5">
        <h1>Headline: </h1>
        <span className="font-bold">{data?.hero?.headline}</span>
      </div>
      <Test />
    </>
  );
}
