import React from "react";
import { Link } from "react-router-dom";
import "./SolarLoans.css";

import solarInstallerCustomer from "../../assets/images/solar-installer-customer.jpg";

import {
  CalendarRupeeIcon,
  BankIcon,
  RupeeIcon,
  PercentIcon,
  ClockIcon,
} from "./BankIcons";

function SolarLoans() {
  return (
    <section className="solar-loans-section">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="sl-header">
          <span className="sl-section-tag">
            SOLAR FINANCING
          </span>

          <h2 className="sl-title">
            Solar Loans at Your{" "}
            <span>Doorstep</span>
          </h2>

          <p className="sl-subtitle">
            Make the switch to solar with affordable financing options
            and flexible repayment plans. Get interest rates as low as{" "}
            <span>5.76%*</span>
          </p>

          <Link to="/contact" className="sl-get-quote">
            Get a Quote
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="sl-grid">

          {/* LEFT IMAGE */}
          <div className="sl-left-card">
            <img
              src={solarInstallerCustomer}
              alt="Solar installation professional with a customer"
              className="sl-left-image"
              loading="lazy"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="sl-right-col">

            {/* EASY EMI CARD */}
            <div className="sl-right-card sl-card-banks">
              <div className="sl-card-text">
                <div className="sl-card-heading-row">
                  <h3>Easy EMI Plans</h3>

                  <span className="sl-badge-new">
                    EASY
                  </span>
                </div>

                <p>
                  Get instant long-term loans with nationalised banks up to 10 years.
                </p>
              </div>

              <div className="sl-emi-badge">
                <span className="sl-emi-badge-dot"></span>

                <span>Flexible EMI Options Available</span>

                <span className="sl-emi-badge-dot"></span>
              </div>
            </div>

            {/* FINANCING BENEFITS */}
            <div className="sl-benefits-card">
              <div className="sl-benefits-header">
                <div className="sl-benefits-icon">
                  <CalendarRupeeIcon />
                </div>

                <div className="sl-benefits-heading-text">
                  <h3>Flexible Solar Financing</h3>

                  <p>
                    Choose a payment plan that works for your budget.
                  </p>
                </div>
              </div>

              {/* BENEFITS GRID */}
              <div className="sl-benefits-grid">

                {/* BENEFIT 1 */}
                <div className="sl-benefit-item">
                  <div className="sl-benefit-icon">
                    <PercentIcon />
                  </div>

                  <div className="sl-benefit-text">
                    <strong>Low Interest</strong>
                    <span>Rates from 5.76%*</span>
                  </div>
                </div>

                {/* BENEFIT 2 */}
                <div className="sl-benefit-item">
                  <div className="sl-benefit-icon">
                    <ClockIcon />
                  </div>

                  <div className="sl-benefit-text">
                    <strong>Up to 10 Years</strong>
                    <span>Flexible repayment</span>
                  </div>
                </div>

                {/* BENEFIT 3 */}
                <div className="sl-benefit-item">
                  <div className="sl-benefit-icon">
                    <RupeeIcon />
                  </div>

                  <div className="sl-benefit-text">
                    <strong>Easy Payments</strong>
                    <span>Budget-friendly EMIs</span>
                  </div>
                </div>

                {/* BENEFIT 4 */}
                <div className="sl-benefit-item">
                  <div className="sl-benefit-icon">
                    <BankIcon />
                  </div>

                  <div className="sl-benefit-text">
                    <strong>Trusted Banks</strong>
                    <span>Multiple loan options</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarLoans;