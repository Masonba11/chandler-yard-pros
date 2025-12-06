import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { serviceAreaFAQs } from "@/lib/serviceAreaFAQs";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "./ServiceAreas.css";

export const metadata: Metadata = {
  title: "Service Areas | Chandler Yard Pros",
  description:
    "Chandler Yard Pros connects homeowners with trusted landscaping contractors throughout the Greater Phoenix area, including Chandler, Mesa, Gilbert, Queen Creek, and San Tan Valley.",
  keywords:
    "chandler landscaping, mesa landscaping, gilbert landscaping, queen creek landscaping, san tan valley landscaping",
  openGraph: {
    title: "Service Areas | Chandler Yard Pros",
    description:
      "Chandler Yard Pros connects homeowners with trusted landscaping contractors throughout the Greater Phoenix area.",
    type: "website",
    url: "https://www.chandleryardpros.com/service-areas",
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
    title: "Service Areas | Chandler Yard Pros",
    description:
      "Chandler Yard Pros connects homeowners with trusted landscaping contractors throughout the Greater Phoenix area.",
    images: ["https://www.chandleryardpros.com/images/CYPLOGO.png"],
  },
};

export default function ServiceAreasPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
  ]);

  const areas = [
    { name: "Chandler", slug: "chandler", description: "Primary Service Area" },
    {
      name: "Mesa",
      slug: "mesa",
      description: "Landscaping Services Available",
    },
    {
      name: "Gilbert",
      slug: "gilbert",
      description: "Landscaping Services Available",
    },
    {
      name: "Queen Creek",
      slug: "queen-creek",
      description: "Landscaping Services Available",
    },
    {
      name: "San Tan Valley",
      slug: "san-tan-valley",
      description: "Landscaping Services Available",
    },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="service-areas-page">
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
              <h1>Service Areas</h1>
              <p className="page-subtitle">
                Chandler Yard Pros connects homeowners with trusted landscaping
                contractors throughout the Greater Phoenix area. Our primary
                service area is Chandler, and we also serve surrounding
                communities.
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
            <div
              className="content-section"
              style={{ maxWidth: "900px", margin: "0 auto 3rem" }}
            >
              <h2 className="section-title">
                Professional Landscaping Services Throughout the Greater Phoenix
                Area
              </h2>

              <p className="content-paragraph">
                Chandler Yard Pros serves as your trusted connection to
                professional landscaping services throughout the Greater Phoenix
                metropolitan area. While our primary focus is Chandler, Arizona,
                we also connect homeowners and business owners in surrounding
                communities including Mesa, Gilbert, Queen Creek, and San Tan
                Valley with experienced contractors who understand the unique
                challenges of landscaping in the Sonoran Desert. Our extensive
                network of licensed, insured professionals delivers exceptional
                results regardless of your location within the Valley of the
                Sun.
              </p>

              <h2>Desert Landscaping Challenges and Solutions</h2>
              <p className="content-paragraph">
                The Greater Phoenix area presents distinct landscaping
                challenges that require specialized knowledge and techniques.
                Extreme summer heat, intense sun exposure, minimal rainfall, and
                water conservation requirements demand contractors who
                understand desert landscaping principles. Our matched
                professionals have extensive experience working in Arizona's
                challenging climate, creating landscapes that not only survive
                but thrive in harsh conditions. From xeriscaping with native
                plants to installing efficient irrigation systems, our
                contractors use proven strategies to create beautiful,
                sustainable outdoor spaces.
              </p>

              <h2>Community-Specific Landscaping Needs</h2>
              <p className="content-paragraph">
                Each community in the Greater Phoenix area has its own character
                and landscaping needs. Chandler, as our primary service area,
                offers diverse neighborhoods ranging from established
                communities with mature landscapes to newer developments
                requiring complete installations. Mesa provides unique
                opportunities with its mix of residential and commercial
                properties, while Gilbert's growing community includes many new
                construction projects needing professional landscaping. Queen
                Creek and San Tan Valley's expanding developments benefit from
                our contractors' expertise in creating landscapes from scratch
                and establishing low-maintenance, water-efficient designs.
              </p>

              <h2>Comprehensive Service Offerings Across the Valley</h2>
              <p className="content-paragraph">
                Our service area contractors specialize in various aspects of
                landscaping including installation, maintenance, design, and
                specialized services. Artificial turf installation is
                particularly popular throughout the region as property owners
                seek water-saving alternatives to traditional lawns. Paver
                installation creates attractive, durable surfaces that withstand
                temperature extremes, while irrigation specialists design
                systems that maximize efficiency in water-restricted
                environments. Tree services help maintain healthy shade trees
                that provide relief from intense summer heat, and regular
                maintenance programs keep properties looking their best
                throughout the year.
              </p>

              <h2>Why Choose Our Service Area Network</h2>
              <p className="content-paragraph">
                When you work with Chandler Yard Pros, you benefit from our
                rigorous contractor vetting process that ensures all
                professionals meet our high standards for quality, reliability,
                and customer service. We understand that landscaping represents
                a significant investment, and we're committed to connecting you
                with contractors who will exceed your expectations. Our
                streamlined matching process makes it easy to get started -
                simply share your project details, and we'll connect you with
                qualified professionals in your area who specialize in your
                specific needs. Whether you're in Chandler, Mesa, Gilbert, Queen
                Creek, San Tan Valley, or another Greater Phoenix community,
                we're here to help you create the outdoor space of your dreams.
              </p>
            </div>

            <div className="areas-grid grid grid-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="area-card card"
                >
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <span className="card-link">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {serviceAreaFAQs.map((faq, index) => (
                <div key={index} className="faq-item card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PartnerSection />

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
