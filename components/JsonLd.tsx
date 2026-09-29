import { serviceIndex } from "@/content/services";
import { contactDetails, site } from "@/content/site";
import { serializeJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    description: site.activity,
    url: site.url,
    email: contactDetails.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressCountry: site.countryCode,
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "Country",
      name,
    })),
    knowsAbout: serviceIndex.map((item) => item.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços técnicos industriais",
      itemListElement: serviceIndex.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
          url: new URL(item.path, site.url).toString(),
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
