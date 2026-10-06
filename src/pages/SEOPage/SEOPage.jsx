import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Seo, { breadcrumbSchema, businessSchema, serviceSchema } from "../../seo/Seo";
import "./SEOPage.css";

const SERVICE_DATA = {
  "/services/solar-panel-installation/": {
    title: "Solar Panel Installation | Dynamic Solar",
    description: "Explore Dynamic Solar's solar panel installation service for suitable homes and businesses. Contact us for a site-specific solar assessment and quote.",
    h1: "Solar Panel Installation",
    intro: "Solar panel installation for suitable residential and business applications. System selection should consider electricity consumption, roof area, shading, electrical requirements and project objectives.",
    faq: [
      ["What does solar panel installation involve?", "It normally includes requirement discussion, electricity-consumption review, site or roof assessment, system recommendation, installation planning and commissioning as applicable."],
      ["How do I choose the right solar system size?", "The appropriate size depends on electricity consumption, roof area, shading, system type and site conditions. A site-specific assessment is preferable to a generic recommendation."],
      ["How can I request a quotation?", "Call 9841582874 or email info@dynamicsolar.in with your location and basic electricity and roof information."],
    ],
  },
  "/services/solar-power-plant/": {
    title: "Solar Power Plant Solutions | Dynamic Solar",
    description: "Explore solar power plant solutions from Dynamic Solar for suitable residential, commercial or other applications. Contact us for project assessment.",
    h1: "Solar Power Plant Solutions",
    intro: "Solar power plant solutions for suitable project requirements, subject to site, system and application assessment.",
    faq: [
      ["Who is a solar power plant solution suitable for?", "Suitability depends on the property's electricity requirements, available site, project objectives and technical conditions."],
      ["What information is needed for an assessment?", "Electricity usage, site details, available area, project objectives and relevant electrical information help determine a suitable approach."],
      ["Can Dynamic Solar provide a project quotation?", "Contact Dynamic Solar with your project details for a site-specific assessment and quotation."],
    ],
  },
  "/services/solar-water-heater/": {
    title: "Solar Water Heater Solutions | Dynamic Solar",
    description: "Explore solar water heater solutions from Dynamic Solar. Contact our team to discuss your hot-water requirements and suitable system.",
    h1: "Solar Water Heater Solutions",
    intro: "Solar water-heating solutions for suitable hot-water requirements. Final system configuration depends on site, required capacity, usage pattern and project objectives.",
    faq: [
      ["What is a solar water heater?", "It is a solar-based solution for suitable hot-water requirements. The exact system configuration depends on the property and usage needs."],
      ["How is the right system selected?", "Capacity, usage pattern, site conditions and equipment configuration should be assessed before selecting a system."],
      ["How do I get a quotation?", "Call 9841582874 or email info@dynamicsolar.in to discuss your requirements."],
    ],
  },
  "/services/solar-water-pumping-systems/": {
    title: "Solar Water Pumping Systems | Dynamic Solar",
    description: "Explore solar water pumping system solutions from Dynamic Solar for suitable water-pumping requirements. Request a site-specific consultation.",
    h1: "Solar Water Pumping Systems",
    intro: "Solar water pumping solutions for suitable water-pumping applications. The right configuration depends on the site, required capacity, water requirement and system objectives.",
    faq: [
      ["What is a solar water pumping system?", "It is a solar-powered pumping solution for suitable water-pumping applications, with the final configuration determined by site and usage requirements."],
      ["What should be assessed before installation?", "Water requirement, pumping conditions, site details, electrical requirements and system capacity should be reviewed."],
      ["How can I request a consultation?", "Call 9841582874 or email info@dynamicsolar.in with your project details."],
    ],
  },
  "/services/solar-street-lights/": {
    title: "Solar Street Light Solutions | Dynamic Solar",
    description: "Explore solar street light solutions from Dynamic Solar for suitable residential, commercial and outdoor applications. Contact us for details.",
    h1: "Solar Street Light Solutions",
    intro: "Solar street-light solutions for suitable outdoor and lighting requirements. The appropriate configuration depends on the location, lighting objective and site conditions.",
    faq: [
      ["Where can solar street lights be used?", "They can be considered for suitable outdoor lighting requirements, subject to site and lighting assessment."],
      ["How is a system selected?", "Lighting requirements, installation location, site conditions and desired operating requirements should be reviewed."],
      ["How do I discuss a project?", "Call 9841582874 or email info@dynamicsolar.in with the location and lighting requirement."],
    ],
  },
};

const PRODUCT_DATA = {
  "/products/solar-home-ups/": ["Solar Home UPS Solutions | Dynamic Solar", "Explore solar home UPS solutions from Dynamic Solar. Contact us to discuss backup and solar power requirements for your property.", "Solar Home UPS", "Solar home UPS solutions for suitable backup and solar power requirements. Final product selection should be based on the property's electrical load and system requirements."],
  "/products/solar-inverter/": ["Solar Inverter Solutions | Dynamic Solar", "Explore solar inverter solutions from Dynamic Solar. Contact us to identify an inverter option suitable for your solar system.", "Solar Inverter", "Solar inverter solutions for suitable solar-system applications. Do not select an inverter only from a generic specification; system compatibility and electrical requirements should be assessed."],
  "/products/solar-battery/": ["Solar Battery Solutions | Dynamic Solar", "Explore solar battery solutions from Dynamic Solar for suitable energy-storage and backup requirements. Contact us for system-specific guidance.", "Solar Battery", "Solar battery solutions for suitable energy-storage and backup requirements. Battery selection depends on the system, load, backup objective and required configuration."],
  "/products/online-ups/": ["Online UPS Solutions | Dynamic Solar", "Explore online UPS solutions from Dynamic Solar for suitable power-protection requirements. Contact us to discuss your application.", "Online UPS", "Online UPS solutions for suitable power-protection requirements. Confirm the active product range and system specification with Dynamic Solar before purchase."],
  "/products/ro-systems/": ["RO Water Purification Systems | Dynamic Solar", "Explore RO water purification system solutions from Dynamic Solar. Contact us to discuss your water-treatment requirements.", "RO Water Purification Systems", "RO water purification system solutions for suitable water-treatment requirements. Final system selection depends on water quality, usage and treatment objectives."],
};

const LOCATIONS = {
  "/solar-panel-installation-tambaram/": ["Solar Panel Installation in Tambaram | Dynamic Solar", "Looking for solar panel installation in Tambaram? Dynamic Solar is based in West Tambaram. Explore solar options for homes and businesses and request a site assessment.", "Tambaram"],
  "/solar-panel-installation-perungalathur/": ["Solar Panel Installation in Perungalathur | Dynamic Solar", "Looking for solar panel installation in Perungalathur? Dynamic Solar serves Perungalathur from West Tambaram. Contact us for a site-specific solar assessment.", "Perungalathur"],
  "/solar-panel-installation-guduvanchery/": ["Solar Panel Installation in Guduvanchery | Dynamic Solar", "Looking for solar panel installation in Guduvanchery? Explore Dynamic Solar's solar solutions and contact the team for a site-specific assessment.", "Guduvanchery"],
  "/solar-panel-installation-urapakkam/": ["Solar Panel Installation in Urapakkam | Dynamic Solar", "Looking for solar panel installation in Urapakkam? Explore Dynamic Solar's solar solutions and contact the team for a site-specific assessment.", "Urapakkam"],
};

function FAQ({ items }) {
  return <section className="seo-section"><h2>Frequently Asked Questions</h2><div className="seo-faq">{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>;
}

function ServicePage({ path, data }) {
  const faqSchema = data.faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }));
  return <>
    <Seo title={data.title} description={data.description} path={path} jsonLd={[businessSchema, serviceSchema(data.h1, data.intro, path), breadcrumbSchema([{name:"Home",path:"/"},{name:"Services",path:"/services/"},{name:data.h1,path}]), {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqSchema}]} />
    <Navbar />
    <main className="seo-page">
      <header className="seo-hero"><div className="container"><span className="seo-eyebrow">Dynamic Solar Services</span><h1>{data.h1}</h1><p>{data.intro}</p><nav className="seo-breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/services/">Services</Link><span>›</span><span>{data.h1}</span></nav></div></header>
      <div className="container seo-content"><section className="seo-section"><h2>How the Service Assessment Works</h2><ol><li>Discuss your requirement and application.</li><li>Review electricity, site and usage information.</li><li>Assess suitability and technical conditions.</li><li>Recommend an appropriate solution.</li><li>Confirm scope and quotation.</li><li>Install and commission as applicable.</li></ol></section><FAQ items={data.faq} /><section className="seo-cta"><h2>Discuss Your Requirement</h2><p>For a site-specific assessment, call <a href="tel:+919841582874">9841582874</a> or email <a href="mailto:info@dynamicsolar.in">info@dynamicsolar.in</a>.</p><Link to="/contact/" className="seo-button">Contact Dynamic Solar</Link></section></div>
    </main><Footer />
  </>;
}

function ProductPage({ path, data }) {
  const [title, description, h1, intro] = data;
  return <>
    <Seo title={title} description={description} path={path} jsonLd={[businessSchema, breadcrumbSchema([{name:"Home",path:"/"},{name:"Products",path:"/products/"},{name:h1,path}])]} />
    <Navbar /><main className="seo-page"><header className="seo-hero"><div className="container"><span className="seo-eyebrow">Dynamic Solar Products</span><h1>{h1}</h1><p>{intro}</p><nav className="seo-breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/products/">Products</Link><span>›</span><span>{h1}</span></nav></div></header><div className="container seo-content"><section className="seo-section"><h2>Choosing a Suitable Solution</h2><p>{intro} Share your load, usage and property details so the team can recommend a suitable option. Brands, models, chemistry, capacity and performance specifications should be confirmed before purchase.</p></section><section className="seo-section"><h2>Need Product Guidance?</h2><p>Call <a href="tel:+919841582874">9841582874</a> or email <a href="mailto:info@dynamicsolar.in">info@dynamicsolar.in</a> for product guidance.</p></section></div></main><Footer />
  </>;
}

function LocationPage({ path, data }) {
  const [title, description, location] = data;
  const faq = [
    [`Who provides solar panel installation in ${location}?`, `Dynamic Solar is based in West Tambaram and can be contacted to confirm current service availability for ${location}.`],
    [`How much does solar panel installation cost in ${location}?`, "There is no single price for every property. Cost depends on system capacity, equipment, roof or site conditions, installation requirements and project scope. Request a site-specific quotation."],
    [`Can I install rooftop solar on my property in ${location}?`, "Suitability depends on roof area, shading, structural conditions, electrical requirements and the chosen system. A site assessment can determine feasibility."],
    ["How do I choose the right solar system size?", "The appropriate capacity depends mainly on electricity consumption and site conditions. Recent electricity bills and property details help with assessment."],
  ];
  return <>
    <Seo title={title} description={description} path={path} jsonLd={[businessSchema, breadcrumbSchema([{name:"Home",path:"/"},{name:`Solar Panel Installation in ${location}`,path}]), {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}]} />
    <Navbar /><main className="seo-page"><header className="seo-hero"><div className="container"><span className="seo-eyebrow">Solar Service Area</span><h1>Solar Panel Installation in {location}</h1><p>Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements in and around {location}, subject to current service availability.</p><nav className="seo-breadcrumb"><Link to="/">Home</Link><span>›</span><span>Solar Panel Installation in {location}</span></nav></div></header><div className="container seo-content"><section className="seo-section"><h2>Solar Solutions for {location}</h2><p>Solar panel installation and related solar solutions should be selected after reviewing electricity usage, roof or site area, shading, structural conditions, electrical configuration and the project's objectives.</p><ul><li>Solar panel installation</li><li>Rooftop solar solutions</li><li>Solar power plant solutions</li><li>Solar water heaters</li><li>Solar water pumping systems</li><li>Solar street lights</li><li>Solar inverter and battery solutions</li></ul><p className="seo-note">Dynamic Solar's business address is in West Tambaram. This page does not claim a physical office in {location}.</p></section><FAQ items={faq} /><section className="seo-cta"><h2>Request a Site Assessment</h2><p>Call <a href="tel:+919841582874">9841582874</a> or email <a href="mailto:info@dynamicsolar.in">info@dynamicsolar.in</a>.</p><Link to="/contact/" className="seo-button">Contact Dynamic Solar</Link></section></div></main><Footer />
  </>;
}

export function ServicesHub() {
  const cards = Object.entries(SERVICE_DATA);
  return <><Seo title="Solar Services in Tambaram | Dynamic Solar" description="Explore Dynamic Solar services including solar panel installation, solar power plants, solar water heaters, solar pumping systems and solar street lights." path="/services/" jsonLd={[businessSchema, breadcrumbSchema([{name:"Home",path:"/"},{name:"Services",path:"/services/"}])]} /><Navbar /><main className="seo-page"><header className="seo-hero"><div className="container"><span className="seo-eyebrow">Dynamic Solar</span><h1>Solar Services in Tambaram</h1><p>Explore solar and power-related services for suitable residential, business and project requirements.</p><nav className="seo-breadcrumb"><Link to="/">Home</Link><span>›</span><span>Services</span></nav></div></header><div className="container seo-content"><section className="seo-section"><div className="seo-card-grid">{cards.map(([path,data])=><Link className="seo-card" to={path} key={path}><h2>{data.h1}</h2><p>{data.intro}</p><span>Explore service →</span></Link>)}</div></section></div></main><Footer /></>;
}

export function LocationRoute({ path }) { return <LocationPage path={path} data={LOCATIONS[path]} />; }
export function ProductRoute({ path }) { return <ProductPage path={path} data={PRODUCT_DATA[path]} />; }
export function ServiceRoute({ path }) { return <ServicePage path={path} data={SERVICE_DATA[path]} />; }
