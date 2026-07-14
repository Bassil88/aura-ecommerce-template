"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { translations } from "../lib/translations";
import LanguageToggle from "./LanguageToggle";
import Link from "next/link";
import { useCart } from "../providers/CartProvider";
import siteConfig from "@/config/business.config";

export default function Navbar({ locale }: { locale: "en" | "de" }) {
  const [open, setOpen] = useState(false);
  const { totalCount } = useCart();
  const t = translations[locale].nav;

  const scrollTo = (id: string) => {
    // If we are on the home page, scroll to element
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // If we are on another page (like shop), navigate home first
      window.location.href = `/${locale}#${id}`;
    }
    setOpen(false);
  };
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="neu-navbar fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href={`/${locale}`} aria-label="Go to home" className="cursor-pointer">
          <Image src={siteConfig.assets.logo} alt={siteConfig.assets.logoAlt} width={600} height={100} priority className="h-auto w-[90px] sm:w-[120px] md:w-[180px] object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 font-medium text-gray-700">
          <button
            onClick={() => scrollTo("services")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.services}
          </button>
          <button
            onClick={() => scrollTo("requirements")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.requirements}
          </button>
          <Link
            href={`/${locale}/shop`}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {locale === "en" ? "Shop" : "Shop"}
          </Link>
          <Link
            href={`/${locale}/cart`}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl flex items-center gap-1"
          >
            🛒
            {totalCount > 0 && (
              <span className="bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.contact}
          </button>
        </div>

        <div className="mr-4 flex justify-center">
          <LanguageToggle />
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="md:hidden mr-4 flex h-8 w-8 flex-col justify-center items-center gap-1.5">
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col items-center gap-3 bg-[#f7f8fa] p-4">
            <button onClick={() => scrollTo("services")} className="neu-nav-link">
              {t.services}
            </button>
            <button onClick={() => scrollTo("requirements")} className="neu-nav-link">
              {t.requirements}
            </button>
            <Link href={`/${locale}/shop`} className="neu-nav-link" onClick={() => setOpen(false)}>
              {locale === "en" ? "Shop" : "Shop"}
            </Link>
            <Link href={`/${locale}/cart`} className="neu-nav-link flex items-center gap-2" onClick={() => setOpen(false)}>
              🛒 {translations[locale].shop.cart}
              {totalCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalCount}
                </span>
              )}
            </Link>
            <button onClick={() => scrollTo("contact")} className="neu-nav-link">
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
