// ============================================================
// PRODUCT IMAGE IMPORTS
// ============================================================

import eastman1 from "../assets/images/eastman/eastman1.webp";
import eastman2 from "../assets/images/eastman/eastman2.webp";
import eastman3 from "../assets/images/eastman/eastman3.webp";
import eastman4 from "../assets/images/eastman/eastman4.webp";
import eastman5 from "../assets/images/eastman/eastman5.webp";

import asha1 from "../assets/images/asha/asha1.webp";
import asha2 from "../assets/images/asha/asha2.webp";
import asha3 from "../assets/images/asha/asha3.webp";

import havells30 from "../assets/images/havells/havells30.webp";
import havells40 from "../assets/images/havells/havells40.webp";

import vguard5 from "../assets/images/vguard/vguard5.webp";
import vguard6 from "../assets/images/vguard/vguard6.webp";

import racold1 from "../assets/images/racold/racold1.webp";
import racold2 from "../assets/images/racold/racold2.webp";


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
      "Solar power plant solutions for suitable residential, commercial and industrial solar power generation requirements.",
    status: "active",
  },

  {
    slug: "solar-panels",
    name: "Solar Panels",
    shortName: "Solar Panels",
    description:
      "High-efficiency solar panels for suitable rooftop and solar power generation applications.",
    status: "active",
  },

  {
    slug: "solar-water-heater",
    name: "Solar Water Heater",
    shortName: "Solar Water Heater",
    description:
      "Solar water heating solutions for residential and commercial hot-water requirements.",
    status: "active",
  },

  {
    slug: "solar-water-pumping",
    name: "Solar Water Pumping",
    shortName: "Solar Water Pumping",
    description:
      "Solar water pumping solutions for suitable agricultural, residential and other water-pumping requirements.",
    status: "active",
  },

  {
    slug: "solar-street-light",
    name: "Solar Street Light",
    shortName: "Solar Street Light",
    description:
      "Solar street-light solutions for suitable outdoor, residential, commercial and public lighting requirements.",
    status: "active",
  },

  {
    slug: "solar-home-ups",
    name: "Solar Home UPS",
    shortName: "Home UPS",
    description:
      "Solar home UPS solutions for residential backup and suitable solar power requirements.",
    status: "active",
  },

  {
    slug: "solar-inverter-battery",
    name: "Solar Inverter & Battery",
    shortName: "Inverter & Battery",
    description:
      "Solar inverter and battery solutions including grid-tie, hybrid, off-grid and energy-storage configurations.",
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
      id: "solar-power-plant-solution",
      brand: "Dynamic Solar",
      name: "Solar Power Plant Solutions",
      image: imgPlant,
      type: "Solar Power Plant",
      badge: "Solar Solution",
      range: "Site Specific",
      warranty: null,

      description:
        "Solar power plant solutions for suitable residential, commercial and industrial applications. System configuration depends on site conditions, electrical requirements, available area and project objectives.",

      highlights: [
        "Residential, commercial and industrial applications",
        "Site-specific system design",
        "Solar power generation solution",
        "System configuration based on project requirements",
      ],

      specs: [
        {
          label: "Application",
          value: "Residential, Commercial & Industrial",
        },
        {
          label: "System Type",
          value: "Solar Power Plant",
        },
        {
          label: "Configuration",
          value: "Site Specific",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR PANELS
  // ==========================================================

  "solar-panels": [
    {
      id: "havells-monoperc-550wp",
      brand: "Havells",
      name: "MonoPERC Solar Panel – 550 Wp",
      image: havells30,
      type: "Solar Panel",
      badge: "Draft Product",
      range: "550 Wp",

      description:
        "Havells MonoPERC solar panel suitable for rooftop and solar power generation applications.",

      highlights: [
        "MonoPERC solar panel technology",
        "550 Wp power rating",
        "Suitable for rooftop solar applications",
        "Designed for solar power generation",
      ],

      specs: [
        {
          label: "Brand",
          value: "Havells",
        },
        {
          label: "Technology",
          value: "MonoPERC",
        },
        {
          label: "Power",
          value: "550 Wp",
        },
      ],
    },

    {
      id: "havells-topcon-595wp",
      brand: "Havells",
      name: "TOPCon Solar Panel – 595 Wp",
      image: havells40,
      type: "Solar Panel",
      badge: "Draft Product",
      range: "595 Wp",

      description:
        "Havells TOPCon solar panel suitable for rooftop and solar power generation applications.",

      highlights: [
        "TOPCon solar panel technology",
        "595 Wp power rating",
        "Suitable for rooftop solar applications",
        "Designed for solar power generation",
      ],

      specs: [
        {
          label: "Brand",
          value: "Havells",
        },
        {
          label: "Technology",
          value: "TOPCon",
        },
        {
          label: "Power",
          value: "595 Wp",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR WATER HEATER
  // ==========================================================

  "solar-water-heater": [
    {
      id: "vguard-truhot-daf",
      brand: "V-Guard",
      name: "TRU-HOT DAF",
      image: vguard5,
      type: "Solar Water Heater",
      badge: "Draft Product",

      description:
        "V-Guard solar water heating solution for residential and suitable hot-water requirements.",

      highlights: [
        "Solar water heating solution",
        "Suitable residential applications",
        "Hot-water generation using solar energy",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product",
          value: "TRU-HOT DAF",
        },
      ],
    },

    {
      id: "vguard-truhot-pro",
      brand: "V-Guard",
      name: "TRU-HOT PRO",
      image: vguard6,
      type: "Solar Water Heater",
      badge: "Draft Product",

      description:
        "V-Guard TRU-HOT PRO solar water heating solution for suitable residential applications.",

      highlights: [
        "Solar water heating solution",
        "Suitable residential applications",
        "Efficient hot-water generation",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product",
          value: "TRU-HOT PRO",
        },
      ],
    },

    {
      id: "vguard-vhot-al8-pr",
      brand: "V-Guard",
      name: "V-HOT AL-8 PR",
      image: vguard5,
      type: "Solar Water Heater",
      badge: "Draft Product",

      description:
        "V-Guard V-HOT AL-8 PR solar water heating solution.",

      highlights: [
        "Solar water heating solution",
        "Suitable hot-water applications",
        "Residential solar water heating",
      ],

      specs: [
        {
          label: "Brand",
          value: "V-Guard",
        },
        {
          label: "Product",
          value: "V-HOT AL-8 PR",
        },
      ],
    },

    {
      id: "racold-heat-pump-2024",
      brand: "Racold",
      name: "Heat Pump 2024",
      image: racold1,
      type: "Heat Pump",
      badge: "Draft Product",

      description:
        "Racold heat pump solution for suitable hot-water requirements.",

      highlights: [
        "Hot-water heating solution",
        "Suitable residential applications",
        "Heat pump technology",
      ],

      specs: [
        {
          label: "Brand",
          value: "Racold",
        },
        {
          label: "Product",
          value: "Heat Pump 2024",
        },
      ],
    },

    {
      id: "racold-heat-pump-2025",
      brand: "Racold",
      name: "Heat Pump 2025",
      image: racold2,
      type: "Heat Pump",
      badge: "Draft Product",

      description:
        "Racold heat pump solution for suitable hot-water requirements.",

      highlights: [
        "Hot-water heating solution",
        "Suitable residential applications",
        "Heat pump technology",
      ],

      specs: [
        {
          label: "Brand",
          value: "Racold",
        },
        {
          label: "Product",
          value: "Heat Pump 2025",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR WATER PUMPING
  // ==========================================================

  "solar-water-pumping": [
    {
      id: "solar-water-pumping-solution",
      brand: "Dynamic Solar",
      name: "Solar Water Pumping Solutions",
      image: imgPump,
      type: "Solar Water Pumping",
      badge: "Solar Solution",
      range: "Site Specific",
      warranty: null,

      description:
        "Solar water pumping solutions for suitable agricultural, residential and other water-pumping requirements.",

      highlights: [
        "Suitable agricultural applications",
        "Solar-powered water pumping",
        "Site-specific system configuration",
        "Suitable for water-pumping requirements",
      ],

      specs: [
        {
          label: "Application",
          value: "Agricultural, Residential & Other",
        },
        {
          label: "System Type",
          value: "Solar Water Pumping",
        },
        {
          label: "Configuration",
          value: "Site Specific",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR STREET LIGHT
  // ==========================================================

  "solar-street-light": [
    {
      id: "solar-street-light-solution",
      brand: "Dynamic Solar",
      name: "Solar Street Light Solutions",
      image: imgStreet,
      type: "Solar Street Light",
      badge: "Solar Solution",
      range: "Site Specific",
      warranty: null,

      description:
        "Solar street-light solutions for suitable outdoor, residential, commercial and public lighting requirements.",

      highlights: [
        "Outdoor lighting applications",
        "Residential and commercial applications",
        "Public lighting applications",
        "Solar-powered lighting solution",
      ],

      specs: [
        {
          label: "Application",
          value: "Outdoor, Residential, Commercial & Public",
        },
        {
          label: "System Type",
          value: "Solar Street Light",
        },
        {
          label: "Configuration",
          value: "Site Specific",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR HOME UPS
  // ==========================================================

  "solar-home-ups": [
    {
      id: "asha-lander-home-ups",
      brand: "Asha Power",
      name: "DSP Sine Wave Home UPS – LANDER Series",
      image: asha1,
      type: "Home UPS",
      badge: "Draft Product",
      range: "850VA – 5kVA",
      warranty: "2 Years",

      description:
        "DSP sine wave home UPS solution designed for residential and suitable backup applications.",

      highlights: [
        "DSP based sine wave technology",
        "Suitable for homes and offices",
        "850VA to 5kVA range",
        "Designed for backup power applications",
      ],

      specs: [
        {
          label: "Product Type",
          value: "Home UPS",
        },
        {
          label: "Capacity",
          value: "850VA – 5kVA",
        },
        {
          label: "Waveform",
          value: "DSP Sine Wave",
        },
        {
          label: "Warranty",
          value: "2 Years",
        },
      ],
    },
  ],


  // ==========================================================
  // SOLAR INVERTER & BATTERY
  // ==========================================================

  "solar-inverter-battery": [

    {
      id: "eastman-grid-tie",
      brand: "Eastman",
      name: "Grid Tie Solar Inverter",
      image: eastman1,
      type: "Solar Inverter",
      badge: "Draft Product",

      description:
        "Eastman grid-tie solar inverter solution for suitable solar power generation applications.",

      highlights: [
        "Grid-tie solar inverter",
        "Suitable solar power systems",
        "Designed for grid-connected applications",
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

      description:
        "Eastman hybrid solar inverter solution for suitable solar and backup applications.",

      highlights: [
        "Hybrid solar inverter",
        "Solar and backup applications",
        "Suitable energy management applications",
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

      description:
        "Eastman off-grid solar inverter solution for suitable standalone solar applications.",

      highlights: [
        "Off-grid solar inverter",
        "Standalone solar applications",
        "Suitable backup power requirements",
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

      description:
        "Asha Power ROVER solar inverter solution for suitable solar applications.",

      highlights: [
        "Solar inverter solution",
        "Suitable solar applications",
        "Backup power applications",
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

      description:
        "Havells Enviro GTi G3 solar inverter solution.",

      highlights: [
        "Grid-tie solar inverter",
        "Solar power application",
        "Suitable grid-connected systems",
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

      description:
        "Eastman LiFePO4 battery solution for suitable solar energy-storage and backup applications.",

      highlights: [
        "LiFePO4 battery technology",
        "Solar energy storage",
        "Suitable backup applications",
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

      description:
        "Eastman tubular battery solution for suitable solar backup and energy-storage applications.",

      highlights: [
        "Tubular battery",
        "Solar backup applications",
        "Energy-storage solution",
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

      description:
        "Asha Power ESS1548 energy-storage solution for suitable solar backup and storage applications.",

      highlights: [
        "Energy-storage solution",
        "Solar backup application",
        "Suitable energy-storage requirements",
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