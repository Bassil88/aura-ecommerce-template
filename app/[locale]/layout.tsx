import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";
import siteConfig from "@/config/business.config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.company.name} | ${siteConfig.company.tagline.de}`,
    template: siteConfig.seo.titleTemplate,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Cast locale to expected type if necessary for child components, 
  // but for the layout we just need it to be a string for routing purposes.
  const displayLocale = locale === "en" ? "en" : "de";

  return (
    <>
      <Navbar locale={displayLocale} />
      <ScrollIndicator locale={displayLocale} />
      {children}
    </>
  );
}
