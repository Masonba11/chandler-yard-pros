import Image from "next/image";
import "./PartnerSection.css";

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-content">
          <div className="partner-logo-section">
            <p className="partner-text">We are a proud Partner of</p>
            <Image
              src="/images/TYE-Landscape-Services-Logo.png"
              alt="The Yard Experts Logo"
              width={300}
              height={150}
              className="partner-logo"
            />
          </div>

          <div className="partner-videos">
            <div className="partner-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/X20a8hMdoUA"
                title="The Yard Experts Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="partner-video"
              ></iframe>
            </div>

            <div className="partner-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3_Jv61seQ9M"
                title="The Yard Experts Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="partner-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
