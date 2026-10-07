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


      {
        path: "/products/",
        element: <ProductsDemo />,
      },

      {
        path: "/products/:category/",
        element: <ProductCategoryDraft />,
      },

     
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
