import { type SchemaTypeDefinition } from "sanity";
import home from "@/sanity/schemaTypes/documents/home";
import heroSection from "@/sanity/schemaTypes/objects/hero-section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, heroSection],
};
