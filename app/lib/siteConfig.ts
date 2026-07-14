/**
 * @deprecated
 * Temporary compatibility layer.
 * Import from "@/config/business.config" instead.
 */


export interface BusinessAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  countryCode: string;
}

export interface ContactInformation {
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: {
    numbers: string[];
  };
  viber: string;
}

export interface SocialLinks {
  facebook: string;
}

export interface BrandAssets {
  logo: string;
  logoAlt: string;
  favicon16: string;
  favicon32: string;
  appleTouchIcon: string;
}

export interface SEODefaults {
  title: string;
  titleTemplate: string;
  description: {
    en: string;
    de: string;
  };
  openGraph: {
    siteName: string;
    type: 'website' | 'article' | 'book' | 'profile';
    locale: {
      en: string;
      de: string;
    };
  };
}

export interface CompanyInformation {
  companyName: string;
  name: string;
  legalName: string;
  brandName: string;
  tagline: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export interface LegalInformation {
  managingDirector: string;
  register: string;
  vatId: string;
}

export interface OrganizationSchema {
  type: string;
  contactType: string;
}

export interface SiteConfig {
  baseUrl: string;
  locales: string[];
  defaultLocale: string;
  company: CompanyInformation;
  contact: ContactInformation;
  address: BusinessAddress;
  social: SocialLinks;
  assets: BrandAssets;
  seo: SEODefaults;
  legal: LegalInformation;
  organization: OrganizationSchema;
}

export const siteConfig: SiteConfig = {
  baseUrl: 'https://aura-coffee-demo.vercel.app',
  locales: ['en', 'de'],
  defaultLocale: 'de',

  company: {
    companyName: 'Aura Organic Coffee',
    name: 'Aura Organic Coffee',
    legalName: 'Aura Organic Coffee',
    brandName: 'Aura',
    tagline: {
      en: 'Bio Kaffee & Wellness',
      de: 'Bio Kaffee & Wellness',
    },
    description: {
      en: 'Aura Organic Coffee provides premium organic coffee beans and wellness products, sustainably sourced and ethically traded.',
      de: 'Aura Organic Coffee bietet hochwertigen Bio-Kaffee und Wellness-Produkte, nachhaltig bezogen und ethisch gehandelt.',
    },
  },

  contact: {
    email: 'hello@auracoffee.demo',
    phone: '+49-123-4567890',
    phoneFormatted: '+49 123 456 789',
    whatsapp: {
      numbers: ['49163189', '491631897653'],
    },
    viber: '%2B49163189',
  },

  address: {
    street: 'Musterstraße 10',
    city: 'Berlin',
    postalCode: '10827',
    country: 'Germany',
    countryCode: 'DE',
  },

  social: {
    facebook: 'https://www.facebook.com/share/17mSYUDRA6/',
  },

  assets: {
    logo: '/logo1.png',
    logoAlt: 'aura logo',
    favicon16: '/favicon-16x16.png',
    favicon32: '/favicon-32x32.png',
    appleTouchIcon: '/apple-touch-icon.png',
  },

  seo: {
    title: 'Aura Organic Coffee',
    titleTemplate: '%s | Aura Organic Coffee',
    description: {
      en: 'Discover the rich flavors of Aura Organic Coffee, your source for premium organic coffee beans, specialty teas, and wellness products.',
      de: 'Entdecken Sie hochwertigen Bio-Kaffee, Tee und Wellness-Produkte von Aura Organic Coffee.',
    },
    openGraph: {
      siteName: 'Aura Organic Coffee',
      type: 'website',
      locale: {
        en: 'en_US',
        de: 'de_DE',
      },
    },
  },

  legal: {
    managingDirector: 'Max Mustermann',
    register: 'HRB 123456, Amtsgericht Berlin-Charlottenburg',
    vatId: 'DE123456789',
  },

  organization: {
    type: 'Organization',
    contactType: 'customer support',
  },
};

export default siteConfig;