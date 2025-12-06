import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { services } from "@/lib/services";
import "./Header.css";

export default function Header() {
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

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">
            <Image
              src="/images/CYPLOGO.png"
              alt="Chandler Yard Pros"
              width={500}
              height={150}
              className="logo-image"
              priority
            />
          </Link>
          <ul className="nav-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Dropdown title="Services" items={serviceItems} />
            </li>
            <li>
              <Dropdown title="Service Areas" items={serviceAreaItems} />
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
