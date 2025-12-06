"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/services";
import "./ContactForm.css";

interface ContactFormProps {
  compact?: boolean;
  title?: string;
}

export default function ContactForm({
  compact = false,
  title,
}: ContactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add web3forms access key
    formData.append("access_key", "8826ddb2-dfc5-4e3f-88a9-41c421991eb6");
    formData.append(
      "subject",
      "New Contact Form Submission - Chandler Yard Pros"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          router.push("/thank-you");
        }, 500);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "There was an error submitting your request. Please try again or call us at 480-987-6110.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your request. Please try again or call us at 480-987-6110.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form"
      className={`contact-form-section ${compact ? "compact" : ""}`}
    >
      <div className="container">
        <div className="contact-form-wrapper card">
          {title && <h2>{title}</h2>}
          {submitStatus.type && (
            <div
              className={`form-message ${
                submitStatus.type === "success" ? "success" : "error"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor={`name-${compact ? "compact" : "full"}`}>
                Name *
              </label>
              <input
                type="text"
                id={`name-${compact ? "compact" : "full"}`}
                name="name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`email-${compact ? "compact" : "full"}`}>
                Email *
              </label>
              <input
                type="email"
                id={`email-${compact ? "compact" : "full"}`}
                name="email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`phone-${compact ? "compact" : "full"}`}>
                Phone
              </label>
              <input
                type="tel"
                id={`phone-${compact ? "compact" : "full"}`}
                name="phone"
                placeholder="480-987-6110"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`service-${compact ? "compact" : "full"}`}>
                Service Needed *
              </label>
              <select
                id={`service-${compact ? "compact" : "full"}`}
                name="service"
                required
                disabled={isSubmitting}
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor={`location-${compact ? "compact" : "full"}`}>
                Location *
              </label>
              <select
                id={`location-${compact ? "compact" : "full"}`}
                name="location"
                required
                disabled={isSubmitting}
              >
                <option value="">Select your area...</option>
                <option value="chandler">Chandler</option>
                <option value="mesa">Mesa</option>
                <option value="gilbert">Gilbert</option>
                <option value="queen-creek">Queen Creek</option>
                <option value="san-tan-valley">San Tan Valley</option>
              </select>
            </div>

            <div className="form-group">
              <label
                htmlFor={`project-details-${compact ? "compact" : "full"}`}
              >
                Project Details *
              </label>
              <textarea
                id={`project-details-${compact ? "compact" : "full"}`}
                name="message"
                rows={compact ? 3 : 5}
                placeholder="Please describe your project, timeline, and any specific requirements..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
