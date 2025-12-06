import Link from "next/link";
import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "./ThankYou.css";

export const metadata: Metadata = {
  title: "Thank You | Chandler Yard Pros",
  description:
    "Thank you for contacting Chandler Yard Pros. We'll connect you with a trusted contractor soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Thank You", url: "/thank-you" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="thank-you-page">
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
              <h1>Thank You!</h1>
              <p className="page-subtitle">
                Your request has been submitted successfully.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="thank-you-content">
              <div className="thank-you-card card">
                <div className="success-icon">✓</div>
                <h2>We've Received Your Request</h2>
                <p className="thank-you-message">
                  Thank you for contacting Chandler Yard Pros! We've received
                  your project details and will connect you with a trusted
                  contractor in your area soon.
                </p>
                <p className="next-steps">
                  <strong>What happens next?</strong>
                </p>
                <ul className="steps-list">
                  <li>
                    Our team will review your project details and requirements
                  </li>
                  <li>
                    We'll match you with qualified contractors who specialize in
                    your service needs
                  </li>
                  <li>
                    Contractors will contact you directly with quotes and
                    timelines
                  </li>
                  <li>
                    You can compare proposals and choose the best fit for your
                    project
                  </li>
                </ul>
                <div className="contact-info-box">
                  <p>
                    <strong>Need immediate assistance?</strong>
                  </p>
                  <p>
                    Call us at{" "}
                    <a href="tel:480-987-6110" className="phone-link">
                      480-987-6110
                    </a>
                  </p>
                </div>
                <div className="thank-you-actions">
                  <Link href="/" className="btn btn-primary">
                    Return to Homepage
                  </Link>
                  <Link href="/services" className="btn btn-secondary">
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

