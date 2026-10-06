// ============================================================
// PRODUCT IMAGE IMPORTS
// ============================================================

// EASTMAN
import eastman1 from "../assets/images/eastman/eastman1.webp";
import eastman2 from "../assets/images/eastman/eastman2.webp";
import eastman3 from "../assets/images/eastman/eastman3.webp";
import eastman4 from "../assets/images/eastman/eastman4.webp";
import eastman5 from "../assets/images/eastman/eastman5.webp";

// ASHA POWER
import asha1 from "../assets/images/asha/asha1.webp";
import asha2 from "../assets/images/asha/asha2.webp";
import asha3 from "../assets/images/asha/asha3.webp";

// HAVELLS
import havells30 from "../assets/images/havells/havells30.webp";
import havells40 from "../assets/images/havells/havells40.webp";

// V-GUARD
import vguard5 from "../assets/images/vguard/vguard5.webp";
import vguard6 from "../assets/images/vguard/vguard6.webp";

// RACOLD
import racold1 from "../assets/images/racold/racold1.webp";
import racold2 from "../assets/images/racold/racold2.webp";

// GENERIC PRODUCT IMAGES
import imgPlant from "../assets/images/prod-solar-plant.webp";
import imgPump from "../assets/images/prod-water-pump.webp";
import imgPump1 from "../assets/images/prod-water-pump1.webp";
import imgPump2 from "../assets/images/prod-water-pump2.webp";
import imgStreet from "../assets/images/prod-street-light.webp";
import imgStreet1 from "../assets/images/prod-street-light1.webp";
import imgStreet2 from "../assets/images/prod-street-light2.webp";

// ============================================================
// PRODUCT CATEGORIES
// ============================================================

export const PRODUCT_CATEGORIES = [
  {
    slug: "solar-power-plant",
    name: "Solar Power Plant",
    shortName: "Solar Power Plant",
    description:
      "Solar power plant solutions for residential, commercial and industrial power generation requirements.",
    status: "active",
  },

  {
    slug: "solar-panels",
    name: "Solar Panels",
    shortName: "Solar Panels",
    description:
      "Solar panels from leading brands for suitable rooftop and solar power generation applications.",
    status: "active",
  },

  {
    slug: "solar-water-heater",
    name: "Solar Water Heater",
    shortName: "Solar Water Heater",
    description:
      "Solar water heating solutions from leading brands for residential and commercial hot-water requirements.",
    status: "active",
  },

  {
    slug: "solar-water-pumping",
    name: "Solar Water Pumping",
    shortName: "Solar Water Pumping",
    description:
      "Solar water pumping solutions for agricultural, residential and other water-pumping applications.",
    status: "active",
  },

  {
    slug: "solar-street-light",
    name: "Solar Street Light",
    shortName: "Solar Street Light",
    description:
      "Solar street-light solutions for outdoor, residential, commercial and public lighting requirements.",
    status: "active",
  },

  {
    slug: "solar-home-ups",
    name: "Solar Home UPS",
    shortName: "Home UPS",
    description:
      "Solar and home UPS solutions from leading brands for residential backup power requirements.",
    status: "active",
  },

  {
    slug: "solar-inverter-battery",
    name: "Solar Inverter & Battery",
    shortName: "Inverter & Battery",
    description:
      "Solar inverter, battery and energy-storage solutions including grid-tie, hybrid and off-grid configurations.",
    status: "active",
  },
];

// ============================================================
// PRODUCT DATA
// ============================================================

export const PRODUCT_DRAFTS = {
  // ==========================================================
  // SOLAR POWER PLANT
  // ==========================================================

  "solar-power-plant": [
    {
      id: "eastman-solar-power-system",
      brand: "Eastman",
      name: "Solar Power System",
      image: imgPlant,
      type: "Solar Power Plant",
      badge: "Available Brand",
      range: "On-grid / Off-grid / Hybrid",
      warranty: null,

      description:
        "Eastman solar power solutions for on-grid, off-grid and hybrid solar power system applications.",

      highlights: [
        "On-grid solar power systems",
        "Off-grid solar power systems",
        "Hybrid solar power systems",
        "Suitable residential and commercial applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "System Type",
          value: "On-grid / Off-grid / Hybrid",
        },
        {
          label: "Application",
          value: "Solar Power Generation",
        },
      ],
    },

    {
      id: "vguard-solar-power-system",
      brand: "V-Guard",
      name: "Solar Power System",
      image: imgPlant,
      type: "Solar Power Plant",
      badge: "Available Brand",
      range: "On-grid / Off-grid",
      warranty: null,

      description:
        "V-Guard solar power system solutions for on-grid and off-grid solar applications.",

      highlights: [
        "On-grid solar power systems",
        "Off-grid solar power systems",
        "Solar power generation",
        "Suitable residential and other applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "System Type",
          value: "On-grid / Off-grid",
        },
        {
          label: "Application",
          value: "Solar Power Generation",
        },
      ],
    },

    {
      id: "crompton-solar-rooftop",
      brand: "Crompton",
      name: "Solar Rooftop Solutions",
      image: imgPlant,
      type: "Solar Power Plant",
      badge: "Available Brand",
      range: "Rooftop Solar",
      warranty: null,

      description:
        "Crompton solar rooftop solutions for suitable solar power generation applications.",

      highlights: [
        "Solar rooftop solution",
        "Solar power generation",
        "Suitable rooftop applications",
        "Residential and commercial applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Crompton",
        },
        {
          label: "Product",
          value: "Solar Rooftop Solutions",
        },
        {
          label: "Application",
          value: "Rooftop Solar",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR PANELS
  // ==========================================================

  "solar-panels": [
    {
      id: "eastman-solar-panels",
      brand: "Eastman",
      name: "Solar Panels",
      image: eastman1,
      type: "Solar Panel",
      badge: "Available Brand",
      range: "Mono / Bifacial / TOPCon",
      warranty: null,

      description:
        "Eastman solar panels including Mono, Bifacial and TOPCon technologies for suitable solar power applications.",

      highlights: [
        "Mono solar panels",
        "Bifacial solar panels",
        "TOPCon solar panels",
        "Suitable rooftop solar applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Technology",
          value: "Mono / Bifacial / TOPCon",
        },
        {
          label: "Product Type",
          value: "Solar Panel",
        },
      ],
    },

    {
      id: "vguard-solar-panels",
      brand: "V-Guard",
      name: "Solar PV Panels",
      image: havells30,
      type: "Solar Panel",
      badge: "Available Brand",
      range: "Solar PV",
      warranty: null,

      description:
        "V-Guard solar PV panels for suitable solar power generation applications.",

      highlights: [
        "Solar PV panels",
        "Solar power generation",
        "Suitable rooftop applications",
        "Suitable solar power systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product Type",
          value: "Solar PV Panel",
        },
        {
          label: "Application",
          value: "Solar Power Generation",
        },
      ],
    },

    {
      id: "crompton-solar-panels",
      brand: "Crompton",
      name: "Solar Panels",
      image: havells40,
      type: "Solar Panel",
      badge: "Available Brand",
      range: "Solar Rooftop",
      warranty: null,

      description:
        "Crompton solar panels included as part of its solar rooftop solutions.",

      highlights: [
        "Solar panel solution",
        "Solar rooftop applications",
        "Solar power generation",
        "Suitable rooftop installations",
      ],

      specs: [
        {
          label: "Brand",
          value: "Crompton",
        },
        {
          label: "Product Type",
          value: "Solar Panel",
        },
        {
          label: "Application",
          value: "Solar Rooftop",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR WATER HEATER
  // ==========================================================

  "solar-water-heater": [
    {
      id: "vguard-solar-water-heater",
      brand: "V-Guard",
      name: "Solar Water Heater",
      image: vguard5,
      type: "Solar Water Heater",
      badge: "Available Brand",
      range: "Solar Water Heating",
      warranty: null,

      description:
        "V-Guard solar water heater solutions for residential and suitable hot-water requirements.",

      highlights: [
        "Solar water heating",
        "Suitable residential applications",
        "Hot-water generation using solar energy",
        "Solar thermal solution",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product Type",
          value: "Solar Water Heater",
        },
        {
          label: "Application",
          value: "Hot-Water Generation",
        },
      ],
    },

    {
      id: "racold-solar-water-heater",
      brand: "Racold",
      name: "Solar Water Heaters",
      image: racold1,
      type: "Solar Water Heater",
      badge: "Available Brand",
      range: "Solar Water Heating",
      warranty: null,

      description:
        "Racold solar water heating solutions for suitable residential hot-water requirements.",

      highlights: [
        "Solar water heating solution",
        "Suitable residential applications",
        "Hot-water generation",
        "Solar thermal technology",
      ],

      specs: [
        {
          label: "Brand",
          value: "Racold",
        },
        {
          label: "Product Type",
          value: "Solar Water Heater",
        },
        {
          label: "Application",
          value: "Residential Hot Water",
        },
      ],
    },

    {
      id: "crompton-solar-water-heater",
      brand: "Crompton",
      name: "Solar Water Heater",
      image: racold2,
      type: "Solar Water Heater",
      badge: "Available Brand",
      range: "Solar Water Heating",
      warranty: null,

      description:
        "Crompton solar water heater solutions for suitable hot-water applications.",

      highlights: [
        "Solar water heating",
        "Hot-water generation",
        "Suitable residential applications",
        "Solar thermal solution",
      ],

      specs: [
        {
          label: "Brand",
          value: "Crompton",
        },
        {
          label: "Product Type",
          value: "Solar Water Heater",
        },
        {
          label: "Application",
          value: "Hot-Water Generation",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR WATER PUMPING
  // ==========================================================

  "solar-water-pumping": [
    {
      id: "crompton-solar-water-pumps",
      brand: "Crompton",
      name: "Solar Water Pumps",
      image: imgPump,
      type: "Solar Water Pump",
      badge: "Available Brand",
      range: "2HP – 10HP",
      warranty: null,

      description:
        "Crompton solar water pumps including AC and DC models for suitable agricultural and water-pumping applications.",

      highlights: [
        "AC solar water pumps",
        "DC solar water pumps",
        "2HP to 10HP models",
        "Suitable agricultural applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Crompton",
        },
        {
          label: "Pump Type",
          value: "AC & DC",
        },
        {
          label: "Capacity",
          value: "2HP – 10HP",
        },
        {
          label: "Application",
          value: "Solar Water Pumping",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR STREET LIGHT
  // ==========================================================

  "solar-street-light": [
    {
      id: "crompton-solar-street-light",
      brand: "Crompton",
      name: "Solar Street Lights",
      image: imgStreet,
      type: "Solar Street Light",
      badge: "Available Brand",
      range: "Outdoor Lighting",
      warranty: null,

      description:
        "Crompton solar street light solutions for suitable outdoor, residential, commercial and public lighting applications.",

      highlights: [
        "Solar-powered street lighting",
        "Outdoor lighting applications",
        "Residential and commercial applications",
        "Public lighting applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Crompton",
        },
        {
          label: "Product Type",
          value: "Solar Street Light",
        },
        {
          label: "Application",
          value: "Outdoor Lighting",
        },
      ],
    },

    {
      id: "havells-solar-street-light",
      brand: "Havells",
      name: "Solar Street Light",
      image: imgStreet1,
      type: "Solar Street Light",
      badge: "Available Brand",
      range: "Outdoor Lighting",
      warranty: null,

      description:
        "Havells solar street light solutions for suitable outdoor lighting applications.",

      highlights: [
        "Solar-powered lighting",
        "Outdoor lighting application",
        "Suitable street-light installations",
        "Solar energy based lighting",
      ],

      specs: [
        {
          label: "Brand",
          value: "Havells",
        },
        {
          label: "Product Type",
          value: "Solar Street Light",
        },
        {
          label: "Application",
          value: "Outdoor Lighting",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR HOME UPS
  // ==========================================================

  "solar-home-ups": [
    {
      id: "eastman-solar-home-ups",
      brand: "Eastman",
      name: "Solar Off-Grid Inverter / Home Backup",
      image: eastman3,
      type: "Solar Home UPS",
      badge: "Available Brand",
      range: "Off-Grid / Backup",
      warranty: null,

      description:
        "Eastman solar off-grid inverter and home backup solutions for suitable residential solar and backup applications.",

      highlights: [
        "Solar off-grid inverter",
        "Home backup applications",
        "Solar power backup",
        "Suitable residential applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Product Type",
          value: "Solar Off-Grid Inverter / Home Backup",
        },
        {
          label: "Application",
          value: "Residential Backup",
        },
      ],
    },

    {
      id: "asha-power-solar-home-ups",
      brand: "Asha Power",
      name: "Solar & Home UPS",
      image: asha1,
      type: "Solar Home UPS",
      badge: "Available Brand",
      range: "Home Backup",
      warranty: null,

      description:
        "Asha Power solar and home UPS solutions for suitable residential backup power requirements.",

      highlights: [
        "Solar UPS solution",
        "Home UPS solution",
        "Residential backup",
        "Suitable solar power applications",
      ],

      specs: [
        {
          label: "Brand",
          value: "Asha Power",
        },
        {
          label: "Product Type",
          value: "Solar / Home UPS",
        },
        {
          label: "Application",
          value: "Residential Backup",
        },
      ],
    },

    {
      id: "vguard-solar-ups",
      brand: "V-Guard",
      name: "Solar UPS / Solsmart",
      image: vguard6,
      type: "Solar Home UPS",
      badge: "Available Brand",
      range: "Solar Backup",
      warranty: null,

      description:
        "V-Guard solar UPS and solar inverter solutions for suitable residential backup and solar power applications.",

      highlights: [
        "Solar UPS solution",
        "Solar inverter solution",
        "Residential backup applications",
        "Suitable solar power systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product Type",
          value: "Solar UPS / Solar Inverter",
        },
        {
          label: "Application",
          value: "Solar Backup",
        },
      ],
    },
  ],

  // ==========================================================
  // SOLAR INVERTER & BATTERY
  // ==========================================================
  //
  // Your supplied source did not provide a new detailed list
  // for this category, so keep the currently configured
  // products here rather than inventing new models.
  // ==========================================================

  "solar-inverter-battery": [
    {
      id: "eastman-grid-tie",
      brand: "Eastman",
      name: "Grid Tie Solar Inverter",
      image: eastman1,
      type: "Solar Inverter",
      badge: "Draft Product",
      range: "Grid Tie",
      warranty: null,

      description:
        "Eastman grid-tie solar inverter solution for suitable solar power generation applications.",

      highlights: [
        "Grid-tie solar inverter",
        "Grid-connected solar applications",
        "Solar power generation",
        "Suitable rooftop solar systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Type",
          value: "Grid Tie",
        },
      ],
    },

    {
      id: "eastman-hybrid",
      brand: "Eastman",
      name: "Hybrid Solar Inverter",
      image: eastman2,
      type: "Solar Inverter",
      badge: "Draft Product",
      range: "Hybrid",
      warranty: null,

      description:
        "Eastman hybrid solar inverter solution for suitable solar and backup applications.",

      highlights: [
        "Hybrid solar inverter",
        "Solar and backup applications",
        "Energy management",
        "Suitable hybrid solar systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Type",
          value: "Hybrid",
        },
      ],
    },

    {
      id: "eastman-off-grid",
      brand: "Eastman",
      name: "Off-Grid Solar Inverter",
      image: eastman3,
      type: "Solar Inverter",
      badge: "Draft Product",
      range: "Off-Grid",
      warranty: null,

      description:
        "Eastman off-grid solar inverter solution for suitable standalone solar applications.",

      highlights: [
        "Off-grid solar inverter",
        "Standalone solar applications",
        "Solar backup power",
        "Suitable off-grid systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Type",
          value: "Off-Grid",
        },
      ],
    },

    {
      id: "asha-rover",
      brand: "Asha Power",
      name: "ROVER Solar Inverter",
      image: asha2,
      type: "Solar Inverter",
      badge: "Draft Product",
      range: "Solar Inverter",
      warranty: null,

      description:
        "Asha Power ROVER solar inverter solution for suitable solar applications.",

      highlights: [
        "Solar inverter solution",
        "Suitable solar applications",
        "Backup power applications",
        "Solar power system integration",
      ],

      specs: [
        {
          label: "Brand",
          value: "Asha Power",
        },
        {
          label: "Product",
          value: "ROVER",
        },
      ],
    },

    {
      id: "havells-enviro-gti-g3",
      brand: "Havells",
      name: "Enviro GTi G3",
      image: havells30,
      type: "Solar Inverter",
      badge: "Draft Product",
      range: "Grid Tie",
      warranty: null,

      description:
        "Havells Enviro GTi G3 solar inverter solution for suitable grid-connected solar systems.",

      highlights: [
        "Grid-tie solar inverter",
        "Solar power application",
        "Grid-connected system",
        "Solar power generation",
      ],

      specs: [
        {
          label: "Brand",
          value: "Havells",
        },
        {
          label: "Product",
          value: "Enviro GTi G3",
        },
      ],
    },

    {
      id: "eastman-lifepo4",
      brand: "Eastman",
      name: "LiFePO4 Battery",
      image: eastman4,
      type: "Solar Battery",
      badge: "Draft Product",
      range: "Energy Storage",
      warranty: null,

      description:
        "Eastman LiFePO4 battery solution for suitable solar energy-storage and backup applications.",

      highlights: [
        "LiFePO4 battery technology",
        "Solar energy storage",
        "Backup applications",
        "Energy-storage solution",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Battery Type",
          value: "LiFePO4",
        },
      ],
    },

    {
      id: "eastman-tubular",
      brand: "Eastman",
      name: "Tubular Battery",
      image: eastman5,
      type: "Solar Battery",
      badge: "Draft Product",
      range: "Energy Storage",
      warranty: null,

      description:
        "Eastman tubular battery solution for suitable solar backup and energy-storage applications.",

      highlights: [
        "Tubular battery",
        "Solar backup applications",
        "Energy-storage solution",
        "Suitable backup systems",
      ],

      specs: [
        {
          label: "Brand",
          value: "Eastman",
        },
        {
          label: "Battery Type",
          value: "Tubular",
        },
      ],
    },

    {
      id: "asha-ess1548",
      brand: "Asha Power",
      name: "ESS1548",
      image: asha3,
      type: "Energy Storage",
      badge: "Draft Product",
      range: "Energy Storage",
      warranty: null,

      description:
        "Asha Power ESS1548 energy-storage solution for suitable solar backup and storage applications.",

      highlights: [
        "Energy-storage solution",
        "Solar backup application",
        "Energy-storage requirements",
        "Solar power backup",
      ],

      specs: [
        {
          label: "Brand",
          value: "Asha Power",
        },
        {
          label: "Product",
          value: "ESS1548",
        },
      ],
    },
  ],
};