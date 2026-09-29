import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Engenharia e Serviços Técnicos para a Indústria | Flexiparabola II",
    template: "%s | Flexiparabola II",
  },
  description:
    "Serviços técnicos, engenharia industrial e elétrica, montagem de instalações e manutenção para empresas industriais. Flexiparabola II, Tondela.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.legalName,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${plex.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <a className="skip-link" href="#conteudo">
          Saltar para o conteúdo
        </a>
        <JsonLd />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
