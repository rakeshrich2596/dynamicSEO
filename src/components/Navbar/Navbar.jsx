import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const PRODUCTS = [
  { slug: "solar-inverter-battery", label: "Solar Inverter & Battery" },
  { slug: "solar-power-plant", label: "Solar Power Plant" },
  { slug: "solar-panels", label: "Solar Panels" },
  { slug: "solar-water-heater", label: "Solar Water Heater" },
  { slug: "solar-water-pumping", label: "Solar Water Pumping" },
  { slug: "solar-street-light", label: "Solar Street Light" },
  { slug: "solar-home-ups", label: "Solar Home UPS" },
];

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

function Chevron({ open = false }) {
  return (
    <svg
      className={`nav-chevron ${open ? "is-open" : ""}`}
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
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > 20
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setLocationsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", menuOpen);

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-inner">

        {/* LOGO */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Dynamic Power Systems Home"
        >
          <img
            src="/logo.png"
            alt="Dynamic Power Systems"
            className="navbar-logo-img"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          <ul className="nav-list">

            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about/" className={navLinkClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/services/" className={navLinkClass}>
                Services
              </NavLink>
            </li>

            {/* PRODUCTS */}

            <li className="nav-dropdown">
              <div className="nav-dropdown-heading">
                <NavLink
                  to="/products/"
                  className={navLinkClass}
                >
                  Products
                </NavLink>

                <button
                  type="button"
                  className="desktop-dropdown-toggle"
                  aria-label="Toggle products submenu"
                  aria-expanded={productsOpen}
                  onClick={() => {
                    setProductsOpen((value) => !value);
                    setLocationsOpen(false);
                  }}
                >
                  <Chevron open={productsOpen} />
                </button>
              </div>

              <div
                className={`dropdown-menu ${
                  productsOpen ? "dropdown-visible" : ""
                }`}
              >
                {PRODUCTS.map(({ slug, label }) => (
                  <Link
                    key={slug}
                    to={`/products/${slug}/`}
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            {/* LOCATIONS */}

            <li className="nav-dropdown">
              <div className="nav-dropdown-heading">
                <NavLink
                  to="/solar-panel-installation-tambaram/"
                  className={navLinkClass}
                >
                  Locations
                </NavLink>

                <button
                  type="button"
                  className="desktop-dropdown-toggle"
                  aria-label="Toggle locations submenu"
                  aria-expanded={locationsOpen}
                  onClick={() => {
                    setLocationsOpen((value) => !value);
                    setProductsOpen(false);
                  }}
                >
                  <Chevron open={locationsOpen} />
                </button>
              </div>

              <div
                className={`dropdown-menu ${
                  locationsOpen ? "dropdown-visible" : ""
                }`}
              >
                {LOCATIONS.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <NavLink
                to="/solar-calculator/"
                className={navLinkClass}
              >
                Solar Calculator
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog/" className={navLinkClass}>
                Blog
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* DESKTOP QUOTE BUTTON */}

        <Link
          to="/contact/"
          className="navbar-quote"
          onClick={closeMenu}
        >
          Get a Quote
        </Link>

        {/* MOBILE HAMBURGER */}

        <button
          type="button"
          className={`hamburger ${
            menuOpen ? "hamburger-open" : ""
          }`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* MOBILE NAVIGATION */}

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-list">

          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about/" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/services/" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          {/* MOBILE PRODUCTS */}

          <li className="mobile-dropdown">
            <button
              type="button"
              onClick={() => {
                setProductsOpen((value) => !value);
                setLocationsOpen(false);
              }}
              aria-expanded={productsOpen}
            >
              <span>Products</span>
              <Chevron open={productsOpen} />
            </button>

            {productsOpen && (
              <ul className="mobile-submenu">
                <li>
                  <NavLink to="/products/" onClick={closeMenu}>
                    All Products
                  </NavLink>
                </li>

                {PRODUCTS.map(({ slug, label }) => (
                  <li key={slug}>
                    <Link
                      to={`/products/${slug}/`}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* MOBILE LOCATIONS */}

          <li className="mobile-dropdown">
            <button
              type="button"
              onClick={() => {
                setLocationsOpen((value) => !value);
                setProductsOpen(false);
              }}
              aria-expanded={locationsOpen}
            >
              <span>Locations</span>
              <Chevron open={locationsOpen} />
            </button>

            {locationsOpen && (
              <ul className="mobile-submenu">
                {LOCATIONS.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} onClick={closeMenu}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/solar-calculator/"
              onClick={closeMenu}
            >
              Solar Calculator
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog/" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact/" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          <li className="mobile-quote-item">
            <Link
              to="/contact/"
              className="mobile-quote"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;