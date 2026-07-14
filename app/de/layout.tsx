import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";
import siteConfig from "@/config/business.config";

export const metadata: Metadata = {
title: {
  default: `${siteConfig.company.name} | ${siteConfig.company.tagline.de}`,
  template: siteConfig.seo.titleTemplate,
},
  alternates: {
    canonical: `${siteConfig.baseUrl}/de`,
    languages: {
      de: `${siteConfig.baseUrl}/de`,
      en: `${siteConfig.baseUrl}/en`,
      "x-default": `${siteConfig.baseUrl}/`,
    },
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar locale="de" />
      <ScrollIndicator locale="de" />
      {children}
    </>
  );
}
