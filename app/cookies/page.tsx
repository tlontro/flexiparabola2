import { LegalDocument } from "@/components/LegalDocument";
import { cookies } from "@/content/legal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: cookies.metaTitle,
  description: cookies.metaDescription,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookies.title}
      lead={cookies.lead}
      path="/cookies"
      blocks={cookies.blocks}
    />
  );
}
