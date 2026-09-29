import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

const content = services.equipamentos;

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
});

export default function EquipamentosPage() {
  return <ServicePage content={content} />;
}
