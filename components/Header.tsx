"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { services } from "@/lib/services";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceItems = services.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));

  const serviceAreaItems = [
    { name: "Chandler", href: "/" },
    { name: "Mesa", href: "/service-areas/mesa" },
    { name: "Gilbert", href: "/service-areas/gilbert" },
    { name: "Queen Creek", href: "/service-areas/queen-creek" },
    { name: "San Tan Valley", href: "/service-areas/san-tan-valley" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            <Image
              src="/images/CYPLOGO.png"
              alt="Chandler Yard Pros"
              width={500}
              height={150}
              className="logo-image"
              priority
            />
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Dropdown title="Services" items={serviceItems} />
            </li>
            <li>
              <Dropdown title="Service Areas" items={serviceAreaItems} />
            </li>
            <li>
              <Link href="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
