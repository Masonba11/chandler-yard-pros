import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { serviceAreaFAQs } from "@/lib/serviceAreaFAQs";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import Script from "next/script";
import "../CityPage.css";

interface CityPageProps {
  params: {
    city: string;
  };
}

const cities: Record<string, { name: string; displayName: string }> = {
  mesa: { name: "Mesa", displayName: "Mesa" },
  gilbert: { name: "Gilbert", displayName: "Gilbert" },
  "queen-creek": { name: "Queen Creek", displayName: "Queen Creek" },
  "san-tan-valley": { name: "San Tan Valley", displayName: "San Tan Valley" },
};

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const city = cities[params.city];

  if (!city) {
    return {
      title: "Service Area Not Found | Chandler Yard Pros",
    };
  }

  return {
    title: `Landscaping Services in ${city.displayName}, AZ | Chandler Yard Pros`,
    description: `Chandler Yard Pros connects homeowners with trusted landscaping contractors in ${city.displayName}, Arizona. Get matched with professionals for all your landscaping needs.`,
    keywords: `landscaping ${city.displayName.toLowerCase()}, ${city.displayName.toLowerCase()} landscaping services, ${city.displayName.toLowerCase()} az landscaping`,
    openGraph: {
      title: `Landscaping Services in ${city.displayName}, AZ | Chandler Yard Pros`,
      description: `Chandler Yard Pros connects homeowners with trusted landscaping contractors in ${city.displayName}, Arizona.`,
      type: "website",
      url: `https://www.chandleryardpros.com/service-areas/${params.city}`,
      siteName: "Chandler Yard Pros",
      images: [
        {
          url: "https://www.chandleryardpros.com/images/CYPLOGO.png",
          width: 1200,
          height: 630,
          alt: "Chandler Yard Pros Logo",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Landscaping Services in ${city.displayName}, AZ | Chandler Yard Pros`,
      description: `Chandler Yard Pros connects homeowners with trusted landscaping contractors in ${city.displayName}, Arizona.`,
      images: ["https://www.chandleryardpros.com/images/CYPLOGO.png"],
    },
  };
}

export default function CityServiceAreaPage({ params }: CityPageProps) {
  // Redirect Chandler to homepage
  if (params.city === "chandler") {
    redirect("/");
  }

  const city = cities[params.city];

  if (!city) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: city.displayName, url: `/service-areas/${params.city}` },
  ]);

  const businessSchema = generateLocalBusinessSchema(params.city);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <div className="city-page">
        <section className="page-header">
          <div className="hero-videos">
            <div className="hero-video-container">
              <video autoPlay loop muted playsInline className="hero-video">
                <source src="/videos/homepageheroqc.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hero-video-container">
              <video autoPlay loop muted playsInline className="hero-video">
                <source
                  src="/videos/landscapeinstallation.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="page-header-overlay">
            <div className="container">
              <h1>Landscaping Services in {city.displayName}, AZ</h1>
              <p className="page-subtitle">
                Chandler Yard Pros connects homeowners in {city.displayName},
                Arizona with trusted landscaping contractors who specialize in a
                wide range of outdoor services.
              </p>
              <div className="hero-cta">
                <a href="#contact-form" className="btn btn-primary">
                  Get Quote
                </a>
                <a href="tel:480-987-6110" className="btn btn-secondary">
                  Call Us Now: 480-987-6110
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="city-content">
              <h2 className="section-title">
                Professional Landscaping Services in {city.displayName}, Arizona
              </h2>

              <p className="intro-paragraph">
                Chandler Yard Pros connects homeowners in {city.displayName},
                Arizona with trusted landscaping contractors who specialize in a
                wide range of outdoor services. While our primary service area
                is Chandler, we also work with qualified professionals
                throughout the Greater Phoenix area, including{" "}
                {city.displayName}. Our extensive network of licensed, insured
                contractors delivers exceptional results for residential and
                commercial properties throughout the Valley of the Sun.
              </p>

              <h2>Understanding {city.displayName}'s Landscaping Challenges</h2>
              <p className="intro-paragraph">
                Whether you need lawn care, landscape design, hardscaping, tree
                services, or any other landscaping needs, we can help match you
                with experienced contractors in {city.displayName} who
                understand the unique challenges of maintaining beautiful
                landscapes in Arizona's climate. The Sonoran Desert presents
                distinct challenges including extreme summer heat, intense sun
                exposure, minimal rainfall, and water conservation requirements
                that demand specialized knowledge and proven techniques.
              </p>

              <h2>
                Water-Efficient Landscaping Solutions for {city.displayName}
              </h2>
              <p className="intro-paragraph">
                {city.displayName} residents benefit from our contractors'
                expertise in creating sustainable, water-efficient landscapes
                that thrive in arid conditions. Artificial turf installation has
                become increasingly popular as property owners seek
                low-maintenance alternatives that eliminate water usage while
                maintaining year-round green appearance. Our matched contractors
                use premium synthetic grass products specifically designed for
                desert climates, ensuring durability and aesthetic appeal even
                during the hottest months.
              </p>

              <h2>Hardscaping Services in {city.displayName}</h2>
              <p className="intro-paragraph">
                Hardscaping services transform outdoor spaces with functional
                elements that withstand Arizona's extreme temperature
                fluctuations. Paver installation creates attractive, durable
                surfaces for patios, driveways, walkways, and pool areas that
                maintain their appearance despite intense sun exposure. Our
                contractors work with various materials including concrete
                pavers, natural stone, and decorative aggregates, helping you
                choose options that complement your property's style while
                providing long-lasting performance.
              </p>

              <h2>Irrigation Systems for {city.displayName} Properties</h2>
              <p className="intro-paragraph">
                Irrigation system design and installation are critical in{" "}
                {city.displayName}'s dry climate, where efficient water usage is
                essential for both environmental responsibility and cost
                management. Our matched professionals create customized systems
                that optimize water distribution while minimizing waste. Modern
                irrigation solutions include smart controllers that adjust
                schedules based on weather conditions, drip systems for targeted
                plant watering, and efficient sprinkler zones that prevent
                overwatering and runoff.
              </p>

              <h2>Tree Care Services in {city.displayName}</h2>
              <p className="intro-paragraph">
                Tree care services help maintain healthy shade trees that
                provide essential relief from summer heat while enhancing
                property value and aesthetic appeal. Proper trimming, pruning,
                and maintenance techniques ensure trees withstand seasonal
                monsoons and extreme temperatures while maintaining their
                structural integrity. Our contractors understand the unique
                requirements of desert-adapted tree species common in Arizona
                landscapes, providing care that promotes healthy growth and
                longevity.
              </p>

              <div className="services-note card">
                <h3>Available Services</h3>
                <p>
                  Our matched contractors in {city.displayName} offer a
                  comprehensive range of landscaping services. For detailed
                  information about specific services and to see our full
                  service offerings, please visit our{" "}
                  <Link href="/services">services page</Link> or explore
                  services available in our primary service area, Chandler.
                </p>
              </div>

              <div className="chandler-link card">
                <h3>Primary Service Area: Chandler</h3>
                <p>
                  While we serve {city.displayName}, our primary focus is
                  Chandler, Arizona. Visit our
                  <Link href="/"> homepage</Link> to explore all available
                  services in Chandler, or browse our
                  <Link href="/services"> services directory</Link> to learn
                  more about what we offer.
                </p>
              </div>

              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {serviceAreaFAQs.map((faq, index) => (
                    <div key={index} className="faq-item card">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PartnerSection />

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
