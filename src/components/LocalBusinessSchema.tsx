export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AI3 Consulting",
    description:
      "AI3 Consulting helps small to medium businesses integrate AI into their operations. We build human-in-the-loop systems that reduce tedious tasks and increase productivity.",
    url: "https://ai3consulting.com",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greenville",
      addressRegion: "SC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.8526",
      longitude: "-82.3940",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Greenville",
        "@id": "https://www.wikidata.org/wiki/Q488004",
      },
      {
        "@type": "State",
        name: "South Carolina",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceType: [
      "AI Consulting",
      "Business Process Automation",
      "Custom AI Development",
      "AI Training and Implementation",
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Business Process Automation",
      "Workflow Optimization",
      "Human-in-the-Loop Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
