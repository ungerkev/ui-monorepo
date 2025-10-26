import { Test } from "@repo/shared/ui/test";
import groq from "groq";
import { sanityClient } from "@/sanity/lib/sanityClient";
import { HomeDoc } from "@/sanity/types";
import { sanityFetch } from "@/sanity/lib/live";

export const revalidate = 0;

export default async function Home() {
  const data = await sanityClient.fetch<HomeDoc | undefined>(
    groq`*[_type=="home"][0]{ hero{ ... } }`,
    {},
    { cache: "force-cache", next: { tags: ["sanity"] } },
  );

  /*const { data } = await sanityFetch({
    query: groq`*[_type=="home"][0]{ hero{ ... } }`,
  });*/

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
