import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { services } from "@/lib/services";
import { serviceImages } from "@/lib/serviceImages";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "./Services.css";

export const metadata: Metadata = {
  title: "Landscaping Services in Chandler, AZ | Chandler Yard Pros",
  description:
    "Explore all our landscaping services in Chandler, Arizona. From pavers and artificial turf to lawn care and tree trimming, we connect you with trusted local contractors.",
  keywords:
    "landscaping services chandler, chandler yard services, lawn care chandler, landscape design chandler",
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="services-page">
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
              <h1>Our Landscaping Services in Chandler</h1>
              <p className="page-subtitle">
                Chandler Yard Pros connects homeowners with trusted contractors
                who specialize in a wide range of landscaping services in
                Chandler, Arizona.
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
                Comprehensive Landscaping Services for Chandler, Arizona Homes
                and Businesses
              </h2>

              <p className="content-paragraph">
                Chandler Yard Pros connects homeowners and business owners
                throughout Chandler, Arizona with trusted landscaping
                contractors who specialize in a comprehensive range of outdoor
                services. Our network of experienced professionals delivers
                exceptional results for projects ranging from complete landscape
                transformations to routine maintenance. Whether you're planning
                a major renovation or need ongoing yard care, we match you with
                contractors who have the expertise and equipment to bring your
                vision to life.
              </p>

              <h2>
                Desert Climate Specialization and Water-Efficient Solutions
              </h2>
              <p className="content-paragraph">
                Arizona's unique desert climate requires specialized knowledge
                and techniques that our matched contractors understand
                intimately. From xeriscaping with drought-tolerant native plants
                to installing water-efficient irrigation systems, our
                professionals create landscapes that thrive in Chandler's hot,
                dry environment. Artificial turf installation has become
                increasingly popular in the area as homeowners seek
                low-maintenance, water-saving alternatives to traditional grass
                lawns. Our contractors use premium synthetic grass products that
                look and feel natural while dramatically reducing water
                consumption and eliminating the need for mowing, fertilizing,
                and chemical treatments.
              </p>

              <h2>Hardscaping and Landscape Lighting Services</h2>
              <p className="content-paragraph">
                Hardscaping services transform outdoor spaces with functional
                and beautiful non-living elements. Paver installation creates
                durable, attractive surfaces for patios, driveways, walkways,
                and pool decks that can withstand extreme temperature
                fluctuations. Our contractors work with various materials
                including concrete pavers, natural stone, and brick, helping you
                choose the best option for your style and budget. Landscape
                lighting enhances safety and ambiance while showcasing your
                property's best features during evening hours. Professional
                lighting design creates dramatic effects and improves security
                around your home or business.
              </p>

              <h2>Irrigation Systems and Tree Care Services</h2>
              <p className="content-paragraph">
                Irrigation system installation and maintenance are critical in
                Chandler's arid climate. Our matched contractors design and
                install smart irrigation systems that optimize water usage while
                keeping landscapes healthy. Modern systems include weather-based
                controllers, drip irrigation for trees and shrubs, and efficient
                sprinkler zones that minimize waste. Regular maintenance ensures
                systems operate at peak efficiency, preventing costly water
                bills and plant loss. Tree trimming and care services help
                maintain healthy trees that provide shade and beauty while
                withstanding Arizona's challenging weather conditions.
              </p>

              <h2>Landscape Design and Ongoing Maintenance Programs</h2>
              <p className="content-paragraph">
                Landscape design services help create cohesive outdoor spaces
                that reflect your personal style while working within
                environmental constraints. Our designers consider factors like
                sun exposure, water requirements, maintenance preferences, and
                budget to develop plans that are both beautiful and practical.
                Yard maintenance programs provide ongoing care including mowing,
                edging, fertilizing, weed control, and seasonal cleanup to keep
                your property looking its best year-round. Regular maintenance
                prevents small issues from becoming expensive problems and helps
                landscapes mature beautifully over time.
              </p>
            </div>

            <div className="services-list grid grid-3">
              {services.map((service) => {
                const serviceImage = serviceImages[service.slug];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="service-item card"
                  >
                    {serviceImage && serviceImage.type === "image" && (
                      <div className="service-card-image">
                        <Image
                          src={serviceImage.hero}
                          alt={service.name}
                          width={400}
                          height={250}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    )}
                    {serviceImage && serviceImage.type === "video" && (
                      <div className="service-card-video">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="service-card-video-element"
                        >
                          <source src={serviceImage.hero} type="video/mp4" />
                        </video>
                      </div>
                    )}
                    <div className="service-card-content">
                      <h3>{service.name}</h3>
                      <p>{service.shortDescription}</p>
                      <span className="service-link">View Details →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <PartnerSection />

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
