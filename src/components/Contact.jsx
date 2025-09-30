import React, { useMemo, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "../styles/Contact.css";

// ⬇️ Replace these with your details
const WHATSAPP_NUMBER = "+91 8008778790";        // countrycode + number, no + or spaces
const COMPANY_EMAIL   = "sainteriorconstructions@gmail.com"; // your email

const SERVICE_TYPES = [
  "Residential Interiors",
  "Color Consultation",
  "Construction Services",
  "Design Planning",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const whatsappHref = useMemo(() => {
    const text = [
      "New enquiry from Sri Ayyappa website",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const mailtoHref = useMemo(() => {
    const subject = `New enquiry: ${form.service || "General"} - ${form.name || "Website"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function update(k) {
    return (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);

    // open WhatsApp in a new tab
    window.open(whatsappHref, "_blank");

    // trigger mailto in same tab
    const a = document.createElement("a");
    a.href = mailtoHref;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__wrap">
        <header className="contact__head">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__sub">
            Ready to transform your space? Contact us for a free consultation and quote
          </p>
        </header>

        <div className="contact__grid">
          {/* Left: Info card */}
          <aside className="info-card">
            <h3>Contact Information</h3>

            <div className="info-row">
              <div className="info-icon"><Phone size={22} /></div>
              <div>
                <div className="info-label">Phone</div>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="info-value">+{WHATSAPP_NUMBER}</a>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon"><Mail size={22} /></div>
              <div>
                <div className="info-label">Email</div>
                <a href={`mailto:${COMPANY_EMAIL}`} className="info-value">{COMPANY_EMAIL}</a>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon"><MapPin size={22} /></div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-value">Buchireddypalem,Nellore</div>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <form className="form-card" onSubmit={onSubmit}>
            <h3>Send Us a Message</h3>

            <div className="form-grid">
              <label className="field">
                <span>Full Name *</span>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Enter your full name"
                />
              </label>

              <label className="field">
                <span>Phone Number *</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Enter your phone number"
                />
              </label>

              <label className="field field-full">
                <span>Email Address *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Enter your email address"
                />
              </label>

              <label className="field field-full">
                <span>Service Type *</span>
                <select required value={form.service} onChange={update("service")}>
                  <option value="">Select a service</option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="field field-full">
                <span>Message *</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your project requirements..."
                />
              </label>
            </div>

            <div className="actions">
              <button type="submit" className="btn-primary">Send Message</button>
              <a className="btn-ghost" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="btn-ghost" href={mailtoHref}>Email</a>
            </div>

            {sent && (
              <div className="notice">
                Thanks! If WhatsApp/Email didn’t open automatically, use the buttons above.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
