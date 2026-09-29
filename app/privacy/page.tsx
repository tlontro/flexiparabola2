import { LegalDocument } from "@/components/LegalDocument";
import { privacy } from "@/content/legal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacy.title}
      lead={privacy.lead}
      path="/privacy"
      blocks={privacy.blocks}
    />
  );
}
