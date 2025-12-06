import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PartnerSection from "@/components/PartnerSection";
import { blogPosts } from "@/lib/blogPosts";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import "../BlogPost.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getBlogPostBySlugLocal(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlugLocal(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Chandler Yard Pros",
    };
  }

  return {
    title: `${post.title} | Chandler Yard Pros Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Chandler Yard Pros Blog`,
      description: post.description,
      type: "article",
      url: `https://www.chandleryardpros.com/blog/${params.slug}`,
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
      title: `${post.title} | Chandler Yard Pros Blog`,
      description: post.description,
      images: ["https://www.chandleryardpros.com/images/CYPLOGO.png"],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlugLocal(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${params.slug}` },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="blog-post-page">
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
              <Link href="/blog" className="back-link">
                ← Back to Blog
              </Link>
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
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
            <article className="blog-post-content">
              <div
                className="post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </section>

        <PartnerSection />

        <ContactForm compact title="Get Your Free Quote" />
      </div>
    </>
  );
}
