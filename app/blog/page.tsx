import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { blogPosts } from "@/lib/blogPosts";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "./Blog.css";

export const metadata: Metadata = {
  title: "Landscaping Blog | Chandler Yard Pros",
  description:
    "Read tips, guides, and insights about landscaping in Chandler, Arizona. Learn about best practices, services, and maintaining beautiful outdoor spaces.",
  keywords:
    "landscaping blog chandler, chandler landscaping tips, arizona landscaping advice",
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="blog-page">
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
              <h1>Landscaping Blog</h1>
              <p className="page-subtitle">
                Tips, guides, and insights about landscaping in Chandler,
                Arizona
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
                Expert Landscaping Tips and Insights for Chandler, Arizona
                Homeowners
              </h2>

              <p className="content-paragraph">
                Welcome to the Chandler Yard Pros blog, your comprehensive
                resource for landscaping tips, best practices, and expert
                insights tailored specifically for Arizona homeowners. Whether
                you're planning a major landscape renovation, seeking
                maintenance advice, or exploring water-efficient landscaping
                options, our blog provides valuable information to help you
                create and maintain beautiful outdoor spaces in Chandler's
                challenging desert climate.
              </p>

              <h2>Comprehensive Topics for Arizona Landscaping</h2>
              <p className="content-paragraph">
                Our blog covers a wide range of topics relevant to landscaping
                in the Sonoran Desert, including xeriscaping with native plants,
                artificial turf installation benefits, irrigation system
                optimization, tree care in extreme heat, and seasonal
                maintenance schedules. Each article is written to provide
                practical, actionable advice that you can implement immediately
                to improve your landscape's health, appearance, and water
                efficiency.
              </p>

              <h2>Working with Arizona's Unique Climate</h2>
              <p className="content-paragraph">
                Understanding Arizona's unique climate challenges is essential
                for successful landscaping projects. Our articles explain how to
                work with extreme temperatures, minimal rainfall, and water
                restrictions to create landscapes that thrive while conserving
                resources. We explore topics like selecting drought-tolerant
                plants, designing efficient irrigation systems, choosing
                hardscaping materials that withstand heat, and implementing
                maintenance practices that keep your outdoor space looking its
                best year-round.
              </p>

              <h2>Advanced Landscaping Strategies and Best Practices</h2>
              <p className="content-paragraph">
                Beyond basic maintenance tips, our blog delves into advanced
                landscaping topics including landscape design principles,
                hardscaping installation considerations, seasonal care
                schedules, and long-term property value enhancement through
                strategic landscaping investments. Whether you're a new
                homeowner establishing your first landscape or an experienced
                property owner planning improvements, our content provides
                valuable guidance for making informed decisions about your
                outdoor space.
              </p>
            </div>

            <div className="blog-posts-grid grid grid-2">
              {blogPosts.map((post) => (
                <article key={post.slug} className="blog-post-card card">
                  <div className="post-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="post-description">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="read-more">
                    Read More →
                  </Link>
                </article>
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
