"use client";
import siteConfig from "@/config/business.config";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
      name: siteConfig.company.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}${siteConfig.assets.logo}`,
    sameAs: [siteConfig.social.facebook],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
