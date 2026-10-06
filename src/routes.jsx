import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blog/Blogs";
import BlogPost from "./pages/BlogPost/BlogPost";

import Contact from "./pages/Contact/Contact";

import SolarCalculator from "./pages/SolarCalculator/SolarCalculator";

import ProductsDemo from "./pages/Products/ProductsDemo";
import ProductCategoryDraft from "./pages/Products/ProductCategoryDraft";

import Services from "./pages/Services/Services";
import { ServiceRoute } from "./pages/Services/ServicePage";

import { ProductRoute } from "./pages/SEOPage/SEOPage";

import LocationSolarInstallation from "./pages/Locations/LocationSolarInstallation";

/* =========================================================
   ROOT LAYOUT
========================================================= */

const Root = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

/* =========================================================
   ROUTER
========================================================= */

const router = createBrowserRouter([
  {
    element: <Root />,

    children: [
      /* =====================================================
         MAIN PAGES
      ===================================================== */

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about/",
        element: <About />,
      },

      {
        path: "/blog/",
        element: <Blog />,
      },

      {
        path: "/blogs/",
        element: <Blogs />,
      },

      {
        path: "/blog/:slug",
        element: <BlogPost />,
      },

      {
        path: "/contact/",
        element: <Contact />,
      },

      /* =====================================================
         PRODUCTS
         
         Main Products page
         /products/
      ===================================================== */

      // {
      //   path: "/products/",
      //   element: <ProductsDemo />,
      // },

      /* =====================================================
         PRODUCT CATEGORY PAGES
         
         All 7 approved product categories
      ===================================================== */

      // {
      //   path: "/products/solar-power-plant/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-panels/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-water-heater/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-water-pumping/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-street-light/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-home-ups/",
      //   element: <ProductCategoryDraft />,
      // },

      // {
      //   path: "/products/solar-inverter-battery/",
      //   element: <ProductCategoryDraft />,
      // },
      {
        path: "/products/",
        element: <ProductsDemo />,
      },

      {
        path: "/products/:category/",
        element: <ProductCategoryDraft />,
      },

      /* =====================================================
         OLD BRAND PRODUCT ROUTES
         
         Disabled because the new Products structure is
         category-based instead of brand-based.
      ===================================================== */

      // {
      //   path: "/products/eastman/",
      //   element: <EastmanPage />,
      // },

      // {
      //   path: "/products/ashapower/",
      //   element: <AshaPage />,
      // },

      // {
      //   path: "/products/racold/",
      //   element: <RacoldPage />,
      // },

      // {
      //   path: "/products/havells/",
      //   element: <HavellsPage />,
      // },

      // {
      //   path: "/products/vguard/",
      //   element: <VGuardPage />,
      // },

      // {
      //   path: "/products/:brand/",
      //   element: <BrandPage />,
      // },

      /* =====================================================
         OLD / SEPARATE PRODUCT SEO ROUTES
         
         Disabled because these are now grouped into:
         
         /products/solar-home-ups/
         /products/solar-inverter-battery/
         
         Online UPS and RO System are not included in the
         new Products category structure.
      ===================================================== */

      // {
      //   path: "/products/solar-home-ups/",
      //   element: <ProductRoute path="/products/solar-home-ups/" />,
      // },

      // {
      //   path: "/products/solar-inverter/",
      //   element: <ProductRoute path="/products/solar-inverter/" />,
      // },

      // {
      //   path: "/products/solar-battery/",
      //   element: <ProductRoute path="/products/solar-battery/" />,
      // },

      // {
      //   path: "/products/online-ups/",
      //   element: <ProductRoute path="/products/online-ups/" />,
      // },

      // {
      //   path: "/products/ro-systems/",
      //   element: <ProductRoute path="/products/ro-systems/" />,
      // },

      /* =====================================================
         SERVICES
      ===================================================== */

      {
        path: "/services/",
        element: <Services />,
      },

      {
        path: "/services/solar-panel-installation/",
        element: <ServiceRoute path="/services/solar-panel-installation/" />,
      },

      {
        path: "/services/solar-power-plant/",
        element: <ServiceRoute path="/services/solar-power-plant/" />,
      },

      {
        path: "/services/solar-water-heater/",
        element: <ServiceRoute path="/services/solar-water-heater/" />,
      },

      {
        path: "/services/solar-water-pumping-systems/",
        element: <ServiceRoute path="/services/solar-water-pumping-systems/" />,
      },

      {
        path: "/services/solar-street-lights/",
        element: <ServiceRoute path="/services/solar-street-lights/" />,
      },

      /* =====================================================
         LOCATION PAGES
      ===================================================== */

      {
        path: "/solar-panel-installation-tambaram/",
        element: <LocationSolarInstallation />,
      },

      {
        path: "/solar-panel-installation-perungalathur/",
        element: <LocationSolarInstallation />,
      },

      {
        path: "/solar-panel-installation-guduvanchery/",
        element: <LocationSolarInstallation />,
      },

      {
        path: "/solar-panel-installation-urapakkam/",
        element: <LocationSolarInstallation />,
      },

      /* =====================================================
         SOLAR CALCULATOR
      ===================================================== */

      {
        path: "/solar-calculator/",
        element: <SolarCalculator />,
      },
    ],
  },
]);

export default router;
