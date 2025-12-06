import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Chandler Yard Pros | Professional Landscaping Services in Chandler, AZ",
  description:
    "Connect with trusted local contractors for landscaping, artificial turf, pavers, irrigation, and more in Chandler, Arizona.",
  keywords:
    "landscaping chandler az, chandler yard services, lawn care chandler, landscape design chandler",
  openGraph: {
    title: "Chandler Yard Pros | Professional Landscaping Services",
    description:
      "Connect with trusted local contractors for landscaping services in Chandler, Arizona.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
