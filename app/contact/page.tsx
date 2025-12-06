import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "./Contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Chandler Yard Pros",
  description:
    "Get in touch with Chandler Yard Pros to connect with trusted landscaping contractors in Chandler, Arizona. Tell us about your project and we'll match you with qualified professionals.",
  keywords:
    "contact chandler yard pros, landscaping contractor chandler, get quote chandler",
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="contact-page">
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
              <h1>Contact Us</h1>
              <p className="page-subtitle">
                Tell us about your landscaping project and we'll connect you
                with trusted contractors in Chandler, Arizona.
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
            <div className="contact-content">
              <div className="contact-info card">
                <h2>
                  Get Started Today with Professional Landscaping Services in
                  Chandler, Arizona
                </h2>

                <p className="content-paragraph">
                  Ready to transform your outdoor space? Chandler Yard Pros
                  makes it easy to connect with experienced landscaping
                  contractors who specialize in the services you need. Whether
                  you're planning a complete landscape renovation, installing
                  artificial turf, creating a paver patio, or establishing a
                  regular maintenance program, our streamlined process connects
                  you with qualified professionals who understand the unique
                  challenges of landscaping in Chandler's desert climate.
                </p>

                <h2>Our Rigorous Contractor Vetting Process</h2>
                <p className="content-paragraph">
                  Our contractor matching service is designed to save you time
                  while ensuring you receive quotes from experienced, licensed
                  professionals. We carefully vet all contractors in our
                  network, verifying they meet our standards for quality
                  workmanship, proper licensing, insurance coverage, and
                  customer service. This rigorous screening process means you
                  can feel confident when contractors reach out with proposals
                  for your project.
                </p>

                <h2>How We Match You with the Right Contractor</h2>
                <p className="content-paragraph">
                  The contact form below asks for essential information about
                  your landscaping needs, helping us identify contractors who
                  specialize in your specific requirements. Whether you need
                  irrigation system installation, tree trimming, weed control,
                  landscape design, hardscaping, or ongoing maintenance,
                  providing detailed information about your project ensures we
                  match you with professionals who have the right expertise and
                  equipment to deliver exceptional results.
                </p>

                <h2>Quick and Efficient Matching Process</h2>
                <p className="content-paragraph">
                  Once you submit your project details, our team reviews your
                  information and connects you with contractors who specialize
                  in your service needs. Most matches happen within 24-48 hours,
                  and contractors typically contact homeowners within a few
                  business days. This efficient process means you can move
                  forward with your landscaping project quickly, whether you're
                  preparing for a special event, increasing your property value,
                  or simply creating a more enjoyable outdoor space for your
                  family.
                </p>

                <div className="info-section">
                  <h3>How It Works</h3>
                  <ol>
                    <li>
                      Tell us about your project using the form below, including
                      service type, location, timeline, and any specific
                      requirements
                    </li>
                    <li>
                      We review your information and match you with qualified
                      contractors who specialize in your service needs and serve
                      your area
                    </li>
                    <li>
                      Matched contractors contact you directly with detailed
                      quotes, timelines, and information about their services
                    </li>
                    <li>
                      You compare proposals and choose the contractor that best
                      fits your needs, budget, and schedule
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PartnerSection />

        <ContactForm title="Project Details" />
      </div>
    </>
  );
}
