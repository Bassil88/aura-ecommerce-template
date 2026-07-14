# Business Configuration Guide

## Overview

The `business.config.ts` file contains all business-specific information for the e-commerce application. This is the **single source of truth** for company details, contact information, branding, and SEO configuration.

## Configuration Structure

### `baseUrl` (string)
The primary domain URL for the website.
```typescript
baseUrl: 'https://your-domain.com'
```

### `locales` (string[])
Supported language codes.
```typescript
locales: ['en', 'de']
```

### `defaultLocale` (string)
The default language for the site.
```typescript
defaultLocale: 'de'
```

## Company Information

### `company.name` (string)
The full company/brand name used throughout the site.

### `company.legalName` (string)
The legal entity name (may be same as company name).

### `company.brandName` (string)
Short brand name used in product names and casual references.

### `company.tagline` (object)
Brand tagline in each supported locale.
```typescript
tagline: {
  en: 'Your English Tagline',
  de: 'Ihre Deutsche Tagline'
}
```

### `company.description` (object)
Full business description in each locale (used in structured data and metadata).
```typescript
description: {
  en: 'English description...',
  de: 'Deutsche Beschreibung...'
}
```

## Contact Information

### `contact.email` (string)
Primary business email address.

### `contact.phone` (string)
Business phone number (format: +XX-XXX-XXXXXXX).

### `contact.phoneFormatted` (string)
Human-readable phone format (e.g., "+49 123 456 789").

### `contact.whatsapp.numbers` (string[])
WhatsApp contact numbers (without + or spaces).
```typescript
whatsapp: {
  numbers: ['491234567890', '491234567891']
}
```

### `contact.viber` (string)
Viber contact (URL-encoded format with %2B for +).

## Business Address

### `address.street` (string)
Street address.

### `address.city` (string)
City name.

### `address.postalCode` (string)
Postal/ZIP code.

### `address.country` (string)
Full country name (e.g., "Germany").

### `address.countryCode` (string)
Two-letter country code (e.g., "DE").

## Social Media Links

### `social.facebook` (string)
Full Facebook page URL.

## Brand Assets

### `assets.logo` (string)
Path to primary logo file (e.g., "/logo1.png").

### `assets.logoAlt` (string)
Alt text for logo (accessibility).

### `assets.favicon16` (string)
Path to 16x16 favicon.

### `assets.favicon32` (string)
Path to 32x32 favicon.

### `assets.appleTouchIcon` (string)
Path to Apple touch icon.

## SEO Configuration

### `seo.title` (string)
Default site title.

### `seo.titleTemplate` (string)
Template for page titles (use %s as placeholder).
```typescript
titleTemplate: '%s | Your Brand'
```

### `seo.description` (object)
Default meta descriptions per locale.
```typescript
description: {
  en: 'English meta description...',
  de: 'Deutsche Meta-Beschreibung...'
}
```

### `seo.openGraph.siteName` (string)
OpenGraph site name.

### `seo.openGraph.type` (string)
OpenGraph content type (typically 'website').

### `seo.openGraph.locale` (object)
OpenGraph locale codes.
```typescript
locale: {
  en: 'en_US',
  de: 'de_DE'
}
```

## Usage in Components

Import the configuration in any component or page:

```typescript
import siteConfig from "@/config/business.config";

// Access properties
const companyName = siteConfig.company.name;
const email = siteConfig.contact.email;
const logoPath = siteConfig.assets.logo;
```

## Type Safety

All configuration properties are strongly typed. Import the interfaces if needed:

```typescript
import { SiteConfiguration, CompanyInformation, ContactInformation } from "@/config/business.config";
```

## Quick Start for New Business

1. Open `config/business.config.ts`
2. Update the `siteConfig` object with your business details
3. Replace logo/favicon files in `/public/` directory
4. Run `npm run build` to verify configuration
5. Test the site to ensure all information displays correctly

## Files That Use This Configuration

- All layout files (`app/layout.tsx`, `app/[locale]/layout.tsx`, etc.)
- All page metadata files
- SEO files (`sitemap.ts`, `robots.ts`)
- Contact component
- Navbar component
- Organization schema (structured data)
- Legal pages (impressum, datenschutz)
- Product data

## Important Notes

1. **Locale-Independent Data**: Business configuration contains information that is the same across all language versions (URLs, phone numbers, etc.)

2. **Translations vs Configuration**: UI text and marketing content remain in the translation files. Only factual business data belongs in the config.

3. **Build Verification**: Always run `npm run build` after making changes to ensure type safety and proper compilation.

4. **No Secrets**: This configuration file is committed to the repository. Never add API keys, passwords, or sensitive credentials here.
