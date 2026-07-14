import { translations } from "../../lib/translations";
import siteConfig from "@/config/business.config";

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translations[locale as "en" | "de"].legal.privacy;

  return (
    <section className="min-h-screen py-14 bg-[#f7f8fa]">
      <main
        style={{
          padding: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          paddingTop: "120px",
        }}
      >
        <h1 className="text-5xl mb-6">{t.title}</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          {t.p1.replace('{companyName}', siteConfig.company.name)}
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {t.p2}
        </p>

        <h2 className="text-3xl mt-12 mb-4 font-semibold text-gray-900">{t.contactTitle}</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          {t.contactText}
        </p>

        <p className="mt-8 text-sm text-gray-500 font-medium">{t.lastUpdated}</p>
      </main>
    </section>
  );
}
