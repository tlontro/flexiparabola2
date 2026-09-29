import type { Metadata } from "next";
import { site } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  absolute = false,
}: MetadataInput): Metadata {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "pt_PT",
      type: "website",
      siteName: site.legalName,
    },
  };
}
