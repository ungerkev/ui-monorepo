export type SanityRef = { _type: "reference"; _ref: string };

export type SanityImage = {
  _type: "image";
  asset: SanityRef;
  alt?: string;
  // add hotspot/crop if you use them:
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export interface HeroSection {
  _type: "heroSection";
  headline: string;
  text?: string; // markdown string from the markdown plugin
  image?: SanityImage;
}

export interface HomeDoc {
  _id: string;
  _type: "home";
  hero?: HeroSection;
  // you can add _createdAt/_updatedAt if you need them
}
