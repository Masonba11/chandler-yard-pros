import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Chandler Yard Pros</h3>
            <p>
              Connecting homeowners with trusted landscaping contractors in
              Chandler, Arizona.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/service-areas">Service Areas</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services/pavers-chandler">Pavers</Link>
              </li>
              <li>
                <Link href="/services/artificial-turf-chandler">
                  Artificial Turf
                </Link>
              </li>
              <li>
                <Link href="/services/lawn-care-chandler">Lawn Care</Link>
              </li>
              <li>
                <Link href="/services/landscape-design-chandler">
                  Landscape Design
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li>
                <Link href="/service-areas/chandler">Chandler</Link>
              </li>
              <li>
                <Link href="/service-areas/mesa">Mesa</Link>
              </li>
              <li>
                <Link href="/service-areas/gilbert">Gilbert</Link>
              </li>
              <li>
                <Link href="/service-areas/queen-creek">Queen Creek</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Chandler Yard Pros. All rights reserved.</p>
          <div className="footer-links">
            <a
              href="https://theyardexperts.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              Our Partner: The Yard Experts
            </a>
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/robots.txt">Robots</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
