import SEO from "../../components/SEO/SEO";
import Seo, { businessSchema, websiteSchema } from "../../seo/Seo";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import EnquiryCalculator from "../../components/EnquiryCalculator/EnquiryCalculator";
import BookHomeVisit from "../../components/BookHomeVisit/BookHomeVisit";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ProductCards from "../../components/ProductCards/ProductCards";
import Clients from "../../components/Clients/Clients";
import Testimonials from "../../components/Testimonials/Testimonials";
import MapSection from "../../components/MapSection/MapSection";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import WhatsAppWidget from "../../components/WhatsAppWidget/WhatsAppWidget";
import HomePopup from "../../components/HomePopup/HomePopup";

function Home() {
  return (
    <>
      <Seo
        title="Solar Company in Tambaram | Solar Panel Installation | Dynamic Solar"
        description="Dynamic Solar provides solar panel installation and power solutions from West Tambaram for homes and businesses in Tambaram and nearby areas."
        path="/"
        jsonLd={[businessSchema, websiteSchema]}
      />

      <Navbar />

      <div className="home-page">
        <HomePopup />
        <Hero />
        <EnquiryCalculator />
        <BookHomeVisit />
        <WhyChooseUs />
        <ProductCards />
        <Clients />
        <Testimonials />
        <MapSection />
        <BlogPreview />
        <CTA />
      </div>

      <WhatsAppWidget />
      <Footer />
    </>
  );
}

export default Home;
