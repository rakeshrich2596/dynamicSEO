import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const PRODUCTS = [
  {
    slug: "solar-inverter-battery",
    label: "Solar Inverter & Battery",
  },
  {
    slug: "solar-power-plant",
    label: "Solar Power Plant",
  },
  {
    slug: "solar-panels",
    label: "Solar Panels",
  },
  {
    slug: "solar-water-heater",
    label: "Solar Water Heater",
  },
  {
    slug: "solar-water-pumping",
    label: "Solar Water Pumping",
  },
  {
    slug: "solar-street-light",
    label: "Solar Street Light",
  },
  {
    slug: "solar-home-ups",
    label: "Solar Home UPS",
  },
  
];

/* =========================================================
   LOCATIONS
========================================================= */

const LOCATIONS = [
  {
    path: "/solar-panel-installation-tambaram/",
    label: "Tambaram",
  },
  {
    path: "/solar-panel-installation-perungalathur/",
    label: "Perungalathur",
  },
  {
    path: "/solar-panel-installation-guduvanchery/",
    label: "Guduvanchery",
  },
  {
    path: "/solar-panel-installation-urapakkam/",
    label: "Urapakkam",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > 50
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [locationDropdownOpen, setLocationDropdownOpen] =
    useState(false);

  const [mobileProdOpen, setMobileProdOpen] =
    useState(false);

  const [mobileLocationOpen, setMobileLocationOpen] =
    useState(false);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     CLOSE ALL MENUS
  ========================================================= */

  const closeAll = () => {
    setMenuOpen(false);

    setMobileProdOpen(false);

    setMobileLocationOpen(false);

    setDropdownOpen(false);

    setLocationDropdownOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="container navbar-inner">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="logo"
          onClick={closeAll}
        >
          <img
            src="/logo.png"
            alt="Dynamic Power Systems Logo"
            className="logo-img"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAV
        ===================================================== */}

        <ul className="nav-links">

          {/* HOME */}
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink to="/about/">
              About Us
            </NavLink>
          </li>

          {/* SERVICES */}
          <li>
            <NavLink to="/services/">
              Services
            </NavLink>
          </li>

          {/* ===================================================
              PRODUCTS DROPDOWN
          =================================================== */}

          <li
            className={`nav-dropdown${
              dropdownOpen
                ? " nav-dropdown--open"
                : ""
            }`}
            onMouseEnter={() =>
              setDropdownOpen(true)
            }
            onMouseLeave={() =>
              setDropdownOpen(false)
            }
          >
            <NavLink to="/products/">
              Products

              <svg
                className="nav-dropdown-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>

            {/* PRODUCT CATEGORY MENU */}

            <div
              className="nav-dropdown-menu"
              role="menu"
            >
              {PRODUCTS.map(
                ({ slug, label }) => (
                  <Link
                    key={slug}
                    to={`/products/${slug}/`}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </li>

          {/* ===================================================
              LOCATIONS DROPDOWN
          =================================================== */}

          <li
            className={`nav-dropdown${
              locationDropdownOpen
                ? " nav-dropdown--open"
                : ""
            }`}
            onMouseEnter={() =>
              setLocationDropdownOpen(true)
            }
            onMouseLeave={() =>
              setLocationDropdownOpen(false)
            }
          >
            <NavLink to="/solar-panel-installation-tambaram/">
              Locations

              <svg
                className="nav-dropdown-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>

            <div
              className="nav-dropdown-menu"
              role="menu"
            >
              {LOCATIONS.map(
                ({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </li>

          {/* SOLAR CALCULATOR */}
          <li>
            <NavLink to="/solar-calculator/">
              Solar Calculator
            </NavLink>
          </li>

          {/* BLOG */}
          <li>
            <NavLink to="/blog/">
              Blog
            </NavLink>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink
              className="nav-cta"
              to="/contact/"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* =====================================================
            HAMBURGER
        ===================================================== */}

        <button
          className={`hamburger ${
            menuOpen
              ? "hamburger--open"
              : ""
          }`}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================= */}

      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu--open"
            : ""
        }`}
      >
        <ul>

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              onClick={closeAll}
            >
              Home
            </NavLink>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink
              to="/about/"
              onClick={closeAll}
            >
              About Us
            </NavLink>
          </li>

          {/* SERVICES */}
          <li>
            <NavLink
              to="/services/"
              onClick={closeAll}
            >
              Services
            </NavLink>
          </li>

          {/* =================================================
              MOBILE PRODUCTS
          ================================================= */}

          <li className="mobile-products-item">

            <button
              className="mobile-products-toggle"
              onClick={() =>
                setMobileProdOpen(
                  (open) => !open
                )
              }
              aria-expanded={
                mobileProdOpen
              }
            >
              <span>Products</span>

              <svg
                className={`mobile-chevron${
                  mobileProdOpen
                    ? " rotated"
                    : ""
                }`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileProdOpen && (
              <ul className="mobile-sub-menu">

                {/* ALL PRODUCTS */}
                <li>
                  <NavLink
                    to="/products/"
                    onClick={closeAll}
                  >
                    All Products
                  </NavLink>
                </li>

                {/* PRODUCT CATEGORIES */}

                {PRODUCTS.map(
                  ({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        to={`/products/${slug}/`}
                        className="mobile-sub-item"
                        onClick={closeAll}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>

          {/* =================================================
              MOBILE LOCATIONS
          ================================================= */}

          <li className="mobile-products-item">

            <button
              className="mobile-products-toggle"
              onClick={() =>
                setMobileLocationOpen(
                  (open) => !open
                )
              }
              aria-expanded={
                mobileLocationOpen
              }
            >
              <span>Locations</span>

              <svg
                className={`mobile-chevron${
                  mobileLocationOpen
                    ? " rotated"
                    : ""
                }`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileLocationOpen && (
              <ul className="mobile-sub-menu">

                {LOCATIONS.map(
                  ({ path, label }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className="mobile-sub-item"
                        onClick={closeAll}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}

              </ul>
            )}
          </li>

          {/* SOLAR CALCULATOR */}
          <li>
            <NavLink
              to="/solar-calculator/"
              onClick={closeAll}
            >
              Solar Calculator
            </NavLink>
          </li>

          {/* BLOG */}
          <li>
            <NavLink
              to="/blog/"
              onClick={closeAll}
            >
              Blog
            </NavLink>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink
              to="/contact/"
              onClick={closeAll}
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;