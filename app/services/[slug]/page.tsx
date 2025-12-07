import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { services } from "@/lib/services";
import { serviceContent } from "@/lib/serviceContent";
import { serviceImages } from "@/lib/serviceImages";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQPageSchema,
} from "@/lib/schema";
import Script from "next/script";
import "../ServicePage.css";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const content = serviceContent[params.slug];

  if (!content) {
    return {
      title: "Service Not Found | Chandler Yard Pros",
    };
  }

  return {
    title: `${content.name} Chandler AZ | Chandler Yard Pros`,
    description: content.description,
    keywords: `${content.name.toLowerCase()} chandler, ${content.name.toLowerCase()} chandler az, landscaping chandler`,
    openGraph: {
      title: `${content.name} Chandler AZ | Chandler Yard Pros`,
      description: content.description,
      type: "website",
      url: `https://www.chandleryardpros.com/services/${params.slug}`,
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
      title: `${content.name} Chandler AZ | Chandler Yard Pros`,
      description: content.description,
      images: ["https://www.chandleryardpros.com/images/CYPLOGO.png"],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const content = serviceContent[params.slug];
  const service = services.find((s) => s.slug === params.slug);

  if (!content || !service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: content.name, url: `/services/${params.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(content.name);
  const faqSchema = generateFAQPageSchema(content.faqs);

  const otherServices = services.filter((s) => s.slug !== params.slug);
  const serviceImage = serviceImages[params.slug];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="service-page">
        <section className="page-header">
          {serviceImage && serviceImage.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="page-header-media"
            >
              <source src={serviceImage.hero} type="video/mp4" />
            </video>
          ) : serviceImage && serviceImage.type === "image" ? (
            <Image
              src={serviceImage.hero}
              alt={`${content.name} in Chandler, Arizona`}
              fill
              className="page-header-media"
              priority
              style={{ objectFit: "cover" }}
            />
          ) : null}
          <div className="page-header-overlay">
            <div className="container">
              <h1>{content.name} Chandler AZ</h1>
              <p className="page-subtitle">{content.description}</p>
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
            <div className="service-content">
              <h2>About {content.name} in Chandler, Arizona</h2>
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="service-paragraph">
                  {paragraph}
                </p>
              ))}

              <div
                className="rich-content-section"
                style={{ marginTop: "2rem" }}
              >
                <h2>
                  Professional {content.name} Services in Chandler's Desert
                  Climate
                </h2>
                <p className="service-paragraph">
                  Professional {content.name.toLowerCase()} services in
                  Chandler, Arizona require contractors who understand the
                  unique challenges of working in the Sonoran Desert. Our
                  matched professionals have extensive experience creating and
                  maintaining beautiful outdoor spaces that thrive in Arizona's
                  extreme climate. From the intense summer heat to water
                  conservation requirements, our contractors use proven
                  techniques and premium materials to ensure your project
                  delivers lasting value and aesthetic appeal.
                </p>

                <h2>Enhancing Property Value with Quality {content.name}</h2>
                <p className="service-paragraph">
                  Quality {content.name.toLowerCase()} not only enhances your
                  property's curb appeal but also increases its overall value.
                  Well-executed landscaping projects create functional outdoor
                  spaces that extend your living area and provide enjoyment for
                  years to come. Our contractors work closely with homeowners to
                  understand their vision, budget, and maintenance preferences,
                  ensuring the final result meets or exceeds expectations while
                  fitting seamlessly into your lifestyle.
                </p>

                <h2>
                  Why Choose Chandler Yard Pros for Your {content.name} Project
                </h2>
                <p className="service-paragraph">
                  When you choose Chandler Yard Pros for your{" "}
                  {content.name.toLowerCase()} needs, you benefit from our
                  extensive network of vetted professionals who are committed to
                  delivering exceptional results. All contractors in our network
                  are licensed, insured, and dedicated to maintaining the
                  highest standards of workmanship and customer service. We make
                  it easy to get started - simply share your project details,
                  and we'll connect you with qualified professionals who
                  specialize in {content.name.toLowerCase()} in Chandler,
                  Arizona.
                </p>
              </div>

              <div className="benefits-section">
                <h2>Benefits of {content.name} in Chandler</h2>
                <ul className="benefits-list">
                  {content.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="how-it-works-section">
                <h2>How It Works</h2>
                <div className="steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <h3>Tell us about your project</h3>
                    <p>
                      Share your {content.name.toLowerCase()} needs and
                      preferences with us through our simple contact form.
                    </p>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <h3>We match you with a qualified contractor</h3>
                    <p>
                      We connect you with trusted professionals who specialize
                      in {content.name.toLowerCase()} in Chandler, Arizona.
                    </p>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <h3>They contact you with a quote</h3>
                    <p>
                      Your matched contractor will reach out with a detailed
                      quote and timeline for your project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {content.faqs.map((faq, index) => (
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

        <section className="section">
          <div className="container">
            <div className="service-content">
              <div className="related-services">
                <h2>Other Services in Chandler</h2>
                <div className="related-services-grid grid grid-3">
                  {otherServices.slice(0, 6).map((otherService) => (
                    <Link
                      key={otherService.slug}
                      href={`/services/${otherService.slug}`}
                      className="related-service-card card"
                    >
                      <h4>{otherService.name}</h4>
                      <p>{otherService.shortDescription}</p>
                      <span className="card-link">Learn More →</span>
                    </Link>
                  ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <Link href="/services" className="btn btn-secondary">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
