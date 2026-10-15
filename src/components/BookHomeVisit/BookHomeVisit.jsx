import React, { useState } from "react";
import "./BookHomeVisit.css";
import homeVisitImage from "../../assets/images/home-visit.webp";

const WHATSAPP_NUMBER = "919841582874";

const BILL_LABELS = {
  less_2000: "Less than ₹2,000",
  "2000_5000": "₹2,000 – ₹5,000",
  above_5000: "Above ₹5,000",
};

function BookHomeVisit() {
  const [billAmount, setBillAmount] = useState("");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pinCode: "",
    ebNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!billAmount) {
      alert("Please select your bi-monthly electricity bill.");
      return;
    }

    const message =
      `🏠 *Free Home Visit Request*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Mobile:* ${form.mobile}\n` +
      `📍 *Pin Code:* ${form.pinCode}\n` +
      `🔢 *EB Number:* ${form.ebNumber}\n` +
      `💡 *Bi-Monthly Bill:* ${BILL_LABELS[billAmount]}\n\n` +
      `Please schedule a free solar consultation at my home. Thank you!`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bhv-section" id="book-home-visit">
      <div className="bhv-container">

        {/* Section Header */}
        <div className="bhv-header">
          <span className="bhv-section-tag">
            FREE SOLAR CONSULTATION
          </span>

          <h2>
            Book a Free Home Visit <span>Today!</span>
          </h2>

          <p>
            Get expert guidance for your rooftop solar installation.
            Schedule a free consultation at your home.
          </p>
        </div>

        {/* Main Card */}
        <div className="bhv-content">

          {/* Left Image */}
          <div className="bhv-image-wrapper">
            <img
              src={homeVisitImage}
              alt="Dynamic Solar expert explaining rooftop solar solutions to a customer"
              className="bhv-image"
              loading="lazy"
            />

            <div className="bhv-image-overlay">
              <span className="bhv-image-label">
                GO SOLAR WITH CONFIDENCE
              </span>

              <h3>
                Your Home.
                <br />
                Your Solar.
                <br />
                Your Savings.
              </h3>

              <p>
                Our experts help you understand the right solar solution
                for your home and electricity needs.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bhv-form-wrapper">
            <div className="bhv-form-heading">
              <h3>Schedule Your Free Visit</h3>
              <p>
                Fill in your details and our team will assist you.
              </p>
            </div>

            <form className="bhv-form" onSubmit={handleSubmit}>

              {/* Name */}
              <div className="bhv-input-group">
                <label htmlFor="bhv-name">Full Name *</label>

                <input
                  id="bhv-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="bhv-input-group">
                <label htmlFor="bhv-mobile">Mobile Number *</label>

                <input
                  id="bhv-mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Enter your 10-digit mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />
              </div>

              {/* Pin Code */}
              <div className="bhv-input-group">
                <label htmlFor="bhv-pin">Pin Code *</label>

                <input
                  id="bhv-pin"
                  type="text"
                  name="pinCode"
                  placeholder="Enter your 6-digit pin code"
                  value={form.pinCode}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  title="Enter a valid 6-digit pin code"
                  required
                />
              </div>

              {/* EB Number */}
              <div className="bhv-input-group">
                <label htmlFor="bhv-eb">EB Number *</label>

                <input
                  id="bhv-eb"
                  type="text"
                  name="ebNumber"
                  placeholder="Enter your electricity service number"
                  value={form.ebNumber}
                  onChange={handleChange}
                  maxLength={50}
                  required
                />
              </div>

              {/* Electricity Bill */}
              <fieldset className="bhv-bill-group">
                <legend>
                  What is your bi-monthly electricity bill? *
                </legend>

                <div className="bhv-radio-buttons">

                  <label
                    className={
                      billAmount === "less_2000" ? "active" : ""
                    }
                  >
                    <input
                      type="radio"
                      name="billAmount"
                      value="less_2000"
                      checked={billAmount === "less_2000"}
                      onChange={(e) => setBillAmount(e.target.value)}
                      required
                    />
                    <span>Below ₹2,000</span>
                  </label>

                  <label
                    className={
                      billAmount === "2000_5000" ? "active" : ""
                    }
                  >
                    <input
                      type="radio"
                      name="billAmount"
                      value="2000_5000"
                      checked={billAmount === "2000_5000"}
                      onChange={(e) => setBillAmount(e.target.value)}
                    />
                    <span>₹2,000–₹5,000</span>
                  </label>

                  <label
                    className={
                      billAmount === "above_5000" ? "active" : ""
                    }
                  >
                    <input
                      type="radio"
                      name="billAmount"
                      value="above_5000"
                      checked={billAmount === "above_5000"}
                      onChange={(e) => setBillAmount(e.target.value)}
                    />
                    <span>Above ₹5,000</span>
                  </label>

                </div>
              </fieldset>

              {/* Terms */}
              <div className="bhv-checkbox-group">
                <label>
                  <input type="checkbox" required />

                  <span>
                    I agree to Dynamic Solar's terms of service and
                    privacy policy.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="bhv-submit-btn">
                <svg
                  viewBox="0 0 24 24"
                  width="21"
                  height="21"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.6 5.96L.04 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.42ZM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 7c0 5.45-4.44 9.86-9.91 9.86Zm5.42-7.4c-.3-.15-1.76-.87-2.04-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.3 1.27.48 1.7.61.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>

                <span>Submit via WhatsApp</span>
              </button>

              <p className="bhv-form-note">
                Our team will contact you to discuss your solar requirements.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookHomeVisit;