import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

const content = services.instalacoes;

export const metadata = createMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
});

export default function InstalacoesPage() {
  return <ServicePage content={content} />;
}
