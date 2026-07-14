"use client";
import { useInView } from "../lib/useInView";
import Image from "next/image";
import { translations } from "../lib/translations";
import siteConfig from "@/config/business.config";

export default function Contact({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].contact;
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section ref={ref} id="contact" className={`bg-[#1e293b] py-20 contact-radius mx-2 glass-section fade-up ${isVisible ? "fade-up-visible" : ""} `}>
      <div>
        <div className="max-w-4xl mx-auto text-center px-6  ">
          <h3 className=" font-bold text-white mb-4">{t.title}</h3>

          <p
            className=" text-slate-300 max-w-3xl mx-auto text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.intro}
          </p>

          <br />

          <p
            className="text-slate-400 mb-1 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.cta}
          </p>
          <p
            className="text-slate-400 mb-1 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.getintouch}
          </p>

          <div className="space-y-3 text-slate-200">
            {/* EMAIL */}

            {/* FACEBOOK */}
            <div className="flex justify-center py-8 gap-6">
              <a href={`viber://chat?number=${siteConfig.contact.viber}`} target="_blank" rel="noopener noreferrer" aria-label="Visit our Viber" className="hover:opacity-80 transition">
                <Image src="/viber_icon.png" alt="viber" width={48} height={48} />
              </a>

              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
                <Image src="/round-blue-facebook-button-icon-size_64.png" alt="Facebook" width={48} height={48} />
              </a>
              {/* <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
              <Image src="/telegram-94.png" alt="telegram" width={48} height={48} />
            </a> */}

              {/* WHATSAPP */}
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.numbers[0]}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition ">
                <Image src="/whatsapp-200.png" alt="WhatsApp" width={45} height={45} />
              </a>
            </div>
            <div className="flex justify-center items-center gap-3 mb-3">
              <Image src="/email-100.png" alt="Email" width={35} height={35} />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-blue-400 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl transition"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* PHONE */}
            <div className="flex justify-center items-center gap-3 mb-6 ">
              <Image src="/office-phone-94.png" alt="Phone" width={29} height={29} />
              <a
                href={`tel:${siteConfig.contact.phoneFormatted}`}
                className="hover:text-blue-400 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl transition"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <p
              className="text-slate-400 mb-8 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
            >
              {siteConfig.company.name} Roastery, {siteConfig.address.city}, {siteConfig.address.country}
            </p>
            <div className="flex justify-center pt-4"></div>
            <div className="flex justify-center pt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
