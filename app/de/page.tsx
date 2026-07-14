import Hero from "../components/Hero";
import RealChallenge from "../components/RealChallenge";
// import Services from "../components/Services";
// import Requirements from "../components/Requirements";
// import OurStory from "../components/AboutUs";
// import WhyChooseUs from "../components/WhyChooseUs";
// import HowItWorks from "../components/Process";
// import Contact from "../components/Contact";
// import FAQ from "../components/FAQ";
// import CommonChallenges from "../components/CommenChallenges";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import siteConfig from "@/config/business.config";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.tagline.de}`,
description: siteConfig.seo.description.de,
};

const Services = dynamic(() => import("../components/Services"));
const CommonChallenges = dynamic(() => import("../components/CommenChallenges"));
const WhyChooseUs = dynamic(() => import("../components/WhyChooseUs"));
const HowItWorks = dynamic(() => import("../components/Process"));
const Requirements = dynamic(() => import("../components/Requirements"));
const Contact = dynamic(() => import("../components/Contact"));
const OurStory = dynamic(() => import("../components/AboutUs"));
const FAQ = dynamic(() => import("../components/FAQ"));


export default function DePage() {
  return (
    <>
      <Hero locale="de" />
      <RealChallenge locale="de" />
      <Services locale="de" />
      <CommonChallenges locale="de" />
      <WhyChooseUs locale="de" />
      <HowItWorks locale="de" />
      <Requirements locale="de" />
      <Contact locale="de" />
      <OurStory locale="de" />
      <FAQ locale="de" />
    </>
  );
}
