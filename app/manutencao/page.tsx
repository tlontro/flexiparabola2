import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

const content = services.manutencao;

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
});

export default function ManutencaoPage() {
  return <ServicePage content={content} />;
}
