export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.chandleryardpros.com${item.url}`,
    })),
  };
}

export function generateLandscapingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Chandler Yard Pros",
    description:
      "Professional landscaping and yard maintenance services in Chandler, Arizona. Connect with trusted local contractors for turf, pavers, irrigation, lawn care, tree trimming, and more.",
    url: "https://www.chandleryardpros.com",
    telephone: "480-987-6110",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3062,
      longitude: -111.8413,
    },
    openingHours: "Mo-Su 08:00-18:00",
    areaServed: ["Chandler AZ"],
    sameAs: [],
  };
}

export function generateServiceSchema(serviceName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${serviceName} Chandler AZ`,
    areaServed: {
      "@type": "City",
      name: "Chandler",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Chandler Yard Pros",
      url: "https://www.chandleryardpros.com",
    },
  };
}

// City coordinates mapping
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  chandler: { lat: 33.3062, lng: -111.8413 },
  mesa: { lat: 33.4152, lng: -111.8315 },
  gilbert: { lat: 33.3528, lng: -111.789 },
  "queen-creek": { lat: 33.2487, lng: -111.6343 },
  "san-tan-valley": { lat: 33.1899, lng: -111.528 },
};

export function generateLocalBusinessSchema(citySlug: string) {
  const cityName = citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const coords = cityCoordinates[citySlug] || cityCoordinates.chandler;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chandler Yard Pros",
    description: `Landscaping services available in ${cityName}, AZ through our contractor network.`,
    areaServed: `${cityName} AZ`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    },
  };
}

export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
