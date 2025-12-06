import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { services } from "@/lib/services";
import { serviceImages } from "@/lib/serviceImages";
import {
  generateBreadcrumbSchema,
  generateLandscapingCompanySchema,
} from "@/lib/schema";
import Script from "next/script";
import "./Home.css";

export const metadata: Metadata = {
  title:
    "Professional Landscaping Services in Chandler, AZ | Chandler Yard Pros",
  description:
    "Match with trusted local contractors for landscaping, artificial turf, pavers, irrigation, tree trimming, and more in Chandler, Arizona.",
  keywords:
    "landscaping chandler az, paver installation chandler, artificial grass chandler az, chandler heights irrigation, chandler lawn service, tree trimming chandler az, weed control chandler, tree removal chandler az, yard maintenance chandler az, lawn care chandler az, chandler landscape design, hardscapes chandler az, landscape lighting chandler az, landscape rock chandler az",
  openGraph: {
    title: "Professional Landscaping Services in Chandler, AZ",
    description:
      "Match with trusted local contractors for landscaping, artificial turf, pavers, and more.",
    type: "website",
  },
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  const companySchema = generateLandscapingCompanySchema();

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
      />

      <div className="homepage">
        {/* Hero Section */}
        <section className="hero">
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
          <div className="hero-overlay">
            <div className="container">
              <h1>Professional Landscaping Services in Chandler, AZ</h1>
              <p className="hero-subtitle">
                Match with trusted local contractors for landscaping, turf,
                pavers, and more.
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

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Services in Chandler</h2>
            <div className="services-grid grid grid-3">
              {services.map((service) => {
                const serviceImage = serviceImages[service.slug];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="service-card card"
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
                      <span className="card-link">Learn More →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Area Summary */}
        <section className="section service-areas-section">
          <div className="container">
            <h2 className="section-title">Service Areas</h2>
            <p
              className="text-center"
              style={{
                marginBottom: "2rem",
                maxWidth: "800px",
                margin: "0 auto 2rem",
              }}
            >
              Chandler Yard Pros connects homeowners with trusted contractors
              throughout the Greater Phoenix area. Our primary service area is
              Chandler, and we also serve surrounding communities.
            </p>
            <div className="service-areas-grid grid grid-4">
              <Link href="/" className="service-area-card card">
                <h4>Chandler</h4>
                <p>Primary Service Area</p>
              </Link>
              <Link
                href="/service-areas/mesa"
                className="service-area-card card"
              >
                <h4>Mesa</h4>
                <p>Landscaping Services</p>
              </Link>
              <Link
                href="/service-areas/gilbert"
                className="service-area-card card"
              >
                <h4>Gilbert</h4>
                <p>Landscaping Services</p>
              </Link>
              <Link
                href="/service-areas/queen-creek"
                className="service-area-card card"
              >
                <h4>Queen Creek</h4>
                <p>Landscaping Services</p>
              </Link>
              <Link
                href="/service-areas/san-tan-valley"
                className="service-area-card card"
              >
                <h4>San Tan Valley</h4>
                <p>Landscaping Services</p>
              </Link>
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/service-areas" className="btn btn-secondary">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section how-it-works">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-grid grid grid-3">
              <div className="step-card card">
                <div className="step-number">1</div>
                <h3>Tell Us About Your Project</h3>
                <p>
                  Share your landscaping needs and preferences with us through
                  our simple contact form.
                </p>
              </div>
              <div className="step-card card">
                <div className="step-number">2</div>
                <h3>We Match You with a Qualified Contractor</h3>
                <p>
                  We connect you with trusted professionals who specialize in
                  your specific service needs in Chandler.
                </p>
              </div>
              <div className="step-card card">
                <div className="step-number">3</div>
                <h3>They Contact You with a Quote</h3>
                <p>
                  Your matched contractor will reach out with a detailed quote
                  and timeline for your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Yard?</h2>
              <p>
                Connect with trusted landscaping contractors in Chandler today.
                Get matched with professionals who specialize in the services
                you need.
              </p>
              <a href="#contact-form" className="btn">
                Get Started Now
              </a>
            </div>
          </div>
        </section>

        {/* Rich Content Section */}
        <section className="section">
          <div className="container">
            <div
              className="content-section"
              style={{ maxWidth: "900px", margin: "0 auto" }}
            >
              <h2 className="section-title">
                Transform Your Outdoor Space with Professional Landscaping in
                Chandler, Arizona
              </h2>

              <p className="content-paragraph">
                Chandler Yard Pros is your trusted connection to professional
                landscaping services throughout Chandler, Arizona. As a premier
                lead-generation platform, we specialize in matching homeowners
                with experienced, licensed contractors who deliver exceptional
                results. Whether you're looking to install artificial turf,
                create stunning paver patios, establish efficient irrigation
                systems, or maintain a beautiful lawn, our network of skilled
                professionals is ready to bring your landscaping vision to life.
              </p>

              <h2>Understanding Chandler's Unique Landscaping Challenges</h2>
              <p className="content-paragraph">
                Located in the heart of the Sonoran Desert, Chandler presents
                unique landscaping challenges that require specialized knowledge
                and expertise. The intense Arizona sun, extreme temperatures,
                and water conservation requirements demand contractors who
                understand local climate conditions and native plant species.
                Our matched professionals have years of experience working in
                Chandler's arid environment, ensuring your landscaping project
                not only looks beautiful but also thrives in Arizona's
                challenging climate.
              </p>

              <h2>Comprehensive Landscaping Services for Every Need</h2>
              <p className="content-paragraph">
                From residential front yards and backyard transformations to
                commercial property landscaping, our contractors handle projects
                of all sizes. We connect you with specialists in artificial
                grass installation, which has become increasingly popular in
                Chandler due to its water-saving benefits and year-round green
                appearance. Paver installation experts can create durable,
                attractive surfaces for driveways, patios, and walkways that
                withstand the desert heat. Irrigation specialists design smart
                systems that maximize water efficiency while keeping your
                landscape healthy and vibrant.
              </p>

              <h2>Tree Services and Yard Maintenance in Chandler</h2>
              <p className="content-paragraph">
                Tree services are essential in Chandler, where proper trimming
                and maintenance help trees withstand seasonal monsoons and
                extreme heat. Our network includes certified arborists and tree
                care professionals who understand the unique needs of
                desert-adapted and shade trees common in Arizona landscapes.
                Yard maintenance contractors provide regular care including
                mowing, fertilizing, weed control, and seasonal cleanup to keep
                your property looking its best throughout the year.
              </p>

              <h2>Landscape Design and Hardscaping Solutions</h2>
              <p className="content-paragraph">
                Landscape design professionals help create cohesive outdoor
                spaces that reflect your style while working within Chandler's
                environmental constraints. From xeriscaping with native plants
                to incorporating hardscaping elements like retaining walls and
                outdoor kitchens, our designers create functional and beautiful
                landscapes. Hardscaping contractors specialize in non-living
                elements like patios, fire pits, outdoor kitchens, and retaining
                walls that add structure and functionality to your outdoor
                space.
              </p>

              <h2>Why Choose Chandler Yard Pros</h2>
              <p className="content-paragraph">
                When you work with Chandler Yard Pros, you benefit from our
                extensive vetting process that ensures all contractors are
                licensed, insured, and committed to quality workmanship. We
                understand that investing in landscaping is a significant
                decision, and we're dedicated to connecting you with
                professionals who will exceed your expectations. Our streamlined
                matching process makes it easy to get started - simply tell us
                about your project, and we'll connect you with qualified
                contractors who specialize in your specific needs.
              </p>
            </div>
          </div>
        </section>

        <PartnerSection />

        {/* FAQ Section */}
        <section className="section faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item card">
                <h3>What landscaping services are available in Chandler?</h3>
                <p>
                  We connect homeowners with contractors offering a wide range
                  of services including lawn care, artificial turf installation,
                  paver installation, irrigation systems, tree trimming, weed
                  control, landscape design, hardscaping, landscape lighting,
                  and more in Chandler, AZ.
                </p>
              </div>
              <div className="faq-item card">
                <h3>How do I find a reliable landscaper in Chandler?</h3>
                <p>
                  Chandler Yard Pros matches you with trusted local contractors
                  who specialize in your specific service needs. All contractors
                  are vetted to ensure quality workmanship and reliability in
                  the Chandler area.
                </p>
              </div>
              <div className="faq-item card">
                <h3>Do you offer artificial grass installation in Chandler?</h3>
                <p>
                  Yes, we connect homeowners with contractors who specialize in
                  artificial turf installation in Chandler, AZ. Artificial grass
                  provides a low-maintenance, water-efficient solution for
                  beautiful lawns year-round.
                </p>
              </div>
              <div className="faq-item card">
                <h3>Can I get paver installation services in Chandler?</h3>
                <p>
                  Absolutely! We match you with experienced contractors who
                  provide paver installation for driveways, patios, walkways,
                  and other hardscaping projects in Chandler, Arizona.
                </p>
              </div>
              <div className="faq-item card">
                <h3>What areas do you serve beyond Chandler?</h3>
                <p>
                  While Chandler is our primary service area, we also connect
                  homeowners in Mesa, Gilbert, Queen Creek, and San Tan Valley
                  with trusted landscaping contractors.
                </p>
              </div>
              <div className="faq-item card">
                <h3>How quickly can I get matched with a contractor?</h3>
                <p>
                  After you submit your project details, we work quickly to
                  match you with qualified contractors in Chandler who
                  specialize in your service needs. Most matches happen within
                  24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="section internal-links">
          <div className="container">
            <h2 className="section-title">Explore Our Services</h2>
            <div className="internal-links-grid grid grid-4">
              <Link href="/services/pavers-chandler">
                Paver Installation Chandler
              </Link>
              <Link href="/services/artificial-turf-chandler">
                Artificial Turf Chandler
              </Link>
              <Link href="/services/irrigation-chandler">
                Irrigation Chandler
              </Link>
              <Link href="/services/tree-trimming-chandler">
                Tree Trimming Chandler
              </Link>
              <Link href="/services/weed-control-chandler">
                Weed Control Chandler
              </Link>
              <Link href="/services/lawn-care-chandler">
                Lawn Care Chandler
              </Link>
              <Link href="/services/landscape-design-chandler">
                Landscape Design Chandler
              </Link>
              <Link href="/services/hardscaping-chandler">
                Hardscaping Chandler
              </Link>
              <Link href="/services/landscape-lighting-chandler">
                Landscape Lighting Chandler
              </Link>
              <Link href="/services/landscape-rock-chandler">
                Landscape Rock Chandler
              </Link>
              <Link href="/services/yard-clean-up-chandler">
                Yard Clean Up Chandler
              </Link>
            </div>
          </div>
        </section>

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
