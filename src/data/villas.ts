import { loadVillaImages } from "@/lib/loadVillaImages";

export type AmenityGroup = {
  group: string;
  items: string[];
};

export type Villa = {
  name: string;
  slug: string;
  

  location: string;
  shortLocation: string;
  description: string;
  amenities: string[];
  amenityGroups?: AmenityGroup[];

  mapLink: string;
  mapEmbed: string;

  /** weekday price */
  price: number;

  /** weekend price */
  weekendPrice?: number;

  capacity: string;
  bedrooms: number;

  category: (
    | "Party"
    | "Family"
    | "Romantic"
    | "Heritage"
    | "Events"
  )[];

  images: string[];
  tagline: string;
  

  /** highlights shown as icon chips */
  highlights?: string[];
};

export const villas: Villa[] = [
  {
    name: "Vrindavan — The Villa",
    slug: "vrindavan-the-villa",
    location: "Shamshabad, Hyderabad",
    shortLocation: "Shamshabad",

    tagline: "An acre of calm. Crafted for unhurried days.",

    description:
      "A serene one-acre private estate designed for relaxed gatherings and long, unhurried stays. Set across expansive lawns with thoughtfully curated outdoor spaces, Vrindavan strikes the perfect balance of openness and privacy. Whether it's a quiet weekend escape or a lively evening by the pool and barbecue, every corner is crafted for comfort and connection.",

    highlights: [
      "Private Pool",
      "Lawn",
      "BBQ",
      "Gazebo",
      "Kids Area",
      "Caretaker",
    ],

    amenities: [
      "Private swimming pool",
      "Expansive lawn",
      "BBQ & outdoor seating",
      "Gazebo",
      "Kids play area",
      "Fully equipped kitchen",
      "Power backup",
      "On-site caretaker",
      "Pre-order food service",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Expansive lawn",
          "Gazebo",
          "BBQ & outdoor seating",
          "Kids play area",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Dining area",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "Power backup",
          "On-site caretaker",
          "Pre-order food service",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.2403,78.4294",
    mapEmbed:
      "https://www.google.com/maps?q=17.2403,78.4294&output=embed",

    price: 12000,
    weekendPrice: 18000,

    capacity: "",
    bedrooms: 3,

    category: ["Family", "Party"],

    images: loadVillaImages("Vrindavan — The Villa"),
  },

  {
    name: "Kerala House",
    slug: "kerala-house",
    location: "Hyderabad Outskirts",
    shortLocation: "Hyderabad",

    tagline: "Heritage Kerala soul. Modern comforts.",

    description:
      "An intimate retreat inspired by traditional Kerala architecture, surrounded by lush greenery and flowering landscapes. This heritage-style home blends timeless charm with modern comfort — a private pool, warm natural textures, and a serene garden create the ideal setting for slow mornings and quiet evenings away from the city.",

    highlights: [
      "Private Pool",
      "Garden",
      "Bathtub",
      "Heritage Style",
      "Bluetooth Speaker",
    ],

    amenities: [
      "Private swimming pool",
      "Bathtub",
      "Landscaped garden",
      "Fridge & microwave",
      "Premium toiletries",
      "Linen bedding",
      "Bluetooth speaker",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: ["Private swimming pool", "Landscaped garden"],
      },
      {
        group: "Indoors",
        items: [
          "Bathtub",
          "Fridge & microwave",
          "Bluetooth speaker",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Comfort",
        items: ["Premium toiletries", "Linen bedding"],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.3850,78.4867",
    mapEmbed:
      "https://www.google.com/maps?q=17.3850,78.4867&output=embed",

    price: 12000,
    weekendPrice: 18000,

    capacity: "",
    bedrooms: 2,

    category: ["Romantic", "Family"],

    images: loadVillaImages("kerela house"),
  },

  {
    name: "Purple Palms Villa",
    slug: "purple-palms-villa",
    location: "Shankarpally, Hyderabad",
    shortLocation: "Shankarpally",

    tagline: "Spirited weekends. Wide open spaces.",

    description:
      "A vibrant villa designed for both relaxation and recreation. Featuring a private pool, expansive outdoor areas, a cricket practice net, and dedicated BBQ space, Purple Palms is the go-to for group stays, casual celebrations, and active weekends. Smart interiors, modern comforts, and open grounds make every visit unforgettable.",

    highlights: [
      "Private Pool",
      "Cricket Net",
      "BBQ",
      "Lawn",
      "Smart TV",
      "Wi-Fi",
    ],

    amenities: [
      "Private swimming pool",
      "Smart TV",
      "Wi-Fi",
      "Washing machine",
      "Expansive lawn",
      "BBQ setup",
      "Cricket practice net",
      "Toiletries & linen",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Expansive lawn",
          "BBQ setup",
          "Cricket practice net",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Smart TV",
          "Wi-Fi",
          "Washing machine",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Comfort",
        items: ["Toiletries & linen"],
      },
    ],

    mapLink:
      "https://www.google.com/maps?q=17.27781867980957,78.242919921875",

    mapEmbed:
      "https://www.google.com/maps?q=17.27781867980957,78.242919921875&output=embed",

    price: 12000,
    weekendPrice: 18000,

    capacity: "",
    bedrooms: 3,

    category: ["Party", "Family"],

    images: loadVillaImages("Purple Palms Villa"),
  },

  {
    name: "Ivory Courtyard",
    slug: "ivory-courtyard",

    location: "Heritage Estate, Telangana",
    shortLocation: "Telangana",

    tagline: "A haveli reimagined for the modern guest.",

    description:
      "A grand haveli-style residence that captures the charm of heritage architecture with expansive spaces and timeless design. Traditional courtyards, curated antique interiors, and sweeping open grounds make Ivory Courtyard an estate unlike any other — ideal for those seeking character, scale, and a truly distinctive atmosphere.",

    highlights: [
      "Heritage Architecture",
      "Grand Courtyard",
      "Private Grounds",
      "Curated Interiors",
      "Event Space",
    ],

    amenities: [
      "Heritage-style architecture",
      "Grand traditional courtyard",
      "Large private grounds",
      "Curated antique interiors",
      "Multiple event spaces",
      "On-site caretaker",
      "Power backup",
    ],

    amenityGroups: [
      {
        group: "Architecture",
        items: [
          "Heritage-style architecture",
          "Grand traditional courtyard",
          "Curated antique interiors",
        ],
      },
      {
        group: "Outdoors",
        items: [
          "Large private grounds",
          "Multiple event spaces",
        ],
      },
      {
        group: "Services",
        items: [
          "On-site caretaker",
          "Power backup",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.123184,79.208824",

    mapEmbed:
      "https://www.google.com/maps?q=17.123184,79.208824&output=embed",

    price: 45000,
    weekendPrice: 50000,

    capacity: "",
    bedrooms: 4,

    category: ["Heritage", "Family", "Events"],

    images: loadVillaImages("Chandravaas — The Haveli"),
  },

  {
    name: "Mango Retreats",
    slug: "mango-retreats",

    location: "Mango Orchards, Hyderabad",
    shortLocation: "Mango Orchards",

    tagline: "Made for milestones. Built for grandeur.",

    description:
      "A luxurious estate crafted for large gatherings, celebrations, and unforgettable experiences. A grand royal courtyard, an expansive lawn, and a stunning private pool come together to create an atmosphere of pure elegance. Perfect for events, parties, and premium getaways — this is where memories are made.",

    highlights: [
      "Private Pool",
      "Royal Courtyard",
      "Expansive Lawn",
      "Event Space",
      "Luxury Estate",
    ],

    amenities: [
      "Private swimming pool",
      "Royal courtyard",
      "Expansive event lawn",
      "Fully equipped kitchen",
      "Outdoor dining area",
      "Power backup",
      "On-site caretaker",
      "Decor coordination available",
      "Air-conditioned suites",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Royal courtyard",
          "Expansive event lawn",
          "Outdoor dining area",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Air-conditioned suites",
        ],
      },
      {
        group: "Services",
        items: [
          "Power backup",
          "On-site caretaker",
          "Decor coordination available",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.3000,78.3000",

    mapEmbed:
      "https://www.google.com/maps?q=17.3000,78.3000&output=embed",

    price: 15000,
    weekendPrice: 20000,

    capacity: "",
    bedrooms: 6,

    category: ["Events", "Party"],

    images: loadVillaImages("Ario Mango Retreat"),
  },

  {
    name: "Pearl Farms",
    slug: "pearl-farms",

    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",

    tagline: "Open lawns. Quiet escapes. Simple comfort.",

    description:
      "A peaceful farmhouse ideal for relaxed getaways close to nature. A private pool shimmers against a backdrop of open countryside, while a huge lawn invites lazy afternoons and breezy evenings. With a fully equipped kitchen and a dedicated on-site caretaker, every comfort is taken care of.",

    highlights: [
      "Private Pool",
      "Huge Lawn",
      "Equipped Kitchen",
      "Caretaker",
      "Nature Views",
    ],

    amenities: [
      "Private swimming pool",
      "Huge open lawn",
      "Fully equipped kitchen",
      "Dining area",
      "On-site caretaker",
      "Power backup",
      "Free parking",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Huge open lawn",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Dining area",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "On-site caretaker",
          "Power backup",
          "Free parking",
        ],
      },
    ],

    mapLink:
      "https://www.google.com/maps?q=17.3011726,78.1968873",

    mapEmbed:
      "https://www.google.com/maps?q=17.3011726,78.1968873&output=embed",

    price: 18000,
    weekendPrice: 20000,

    capacity: "",
    bedrooms: 2,

    category: ["Family", "Party"],

    images: loadVillaImages("pearl-farm-stay"),
  },

  {
    name: "Lilac Inn",
    slug: "lilac-inn",

    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",

    tagline: "Elegant stays. Even better evenings.",

    description:
      "A fully air-conditioned farmhouse in Moinabad built for evenings that don't end early. A sparkling pool, rooftop terrace with open-sky views, a spacious garden, and built-in BBQ and bonfire setups make Lilac Inn perfect for group stays, celebrations, and nights filled with good music and great company.",

    highlights: [
      "Private Pool",
      "Rooftop Terrace",
      "BBQ",
      "Bonfire",
      "Music System",
      "Garden",
    ],

    amenities: [
      "Private swimming pool",
      "Rooftop terrace",
      "Spacious garden",
      "BBQ setup",
      "Bonfire (on request)",
      "Music system",
      "Equipped kitchen",
      "Power backup",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Rooftop terrace",
          "Spacious garden",
          "BBQ setup",
          "Bonfire (on request)",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Equipped kitchen",
          "Music system",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "Power backup",
          "On-site caretaker",
        ],
      },
    ],

    mapLink:
      "https://www.google.com/maps?q=17.2926882,78.2286994",

    mapEmbed:
      "https://www.google.com/maps?q=17.2926882,78.2286994&output=embed",

    price: 13000,
    weekendPrice: 18000,

    capacity: "",
    bedrooms: 4,

    category: ["Party", "Events", "Family"],

    images: loadVillaImages("lilac-inn"),
  },

  {
    name: "Rockdale Inn",
    slug: "rockdale-inn",

    location: "Kachivani Singaram, Rangareddy",
    shortLocation: "Rangareddy",

    tagline: "Lush greens. Cool pool. Zero noise.",

    description:
      "Tucked away in the serene outskirts of Rangareddy, Rockdale Inn is a spacious farmhouse retreat built for groups who want comfort without compromise. Air-conditioned rooms, a sparkling private pool, a lush open lawn, and a fully equipped kitchen come together in a setting where the only sounds are the ones you bring.",

    highlights: [
      "Private Pool",
      "Lawn",
      "AC Rooms",
      "Equipped Kitchen",
      "Bluetooth Speaker",
      "Power Backup",
    ],

    amenities: [
      "Private swimming pool",
      "Expansive lawn",
      "Fully equipped kitchen",
      "Fridge & microwave",
      "Bluetooth speaker",
      "Power backup",
      "Free parking",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Expansive lawn",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Fridge & microwave",
          "Bluetooth speaker",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "Power backup",
          "Free parking",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.3560,78.2100",

    mapEmbed:
      "https://www.google.com/maps?q=17.3560,78.2100&output=embed",

    price: 14000,
    weekendPrice: 20000,

    capacity: "",
    bedrooms: 4,

    category: ["Family", "Party"],

    images: loadVillaImages("rockdale-inn"),
  },

  {
    name: "Mango Retreat Farmhouse",
    slug: "mango-retreat-farmhouse",

    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",

    tagline: "Lush orchards. Private pool. Pure retreat.",

    description:
      "A charming 3-bedroom farmhouse nestled amidst mango orchards, perfect for families and small groups seeking a peaceful escape. Enjoy a private swimming pool, open lawns, air-conditioned rooms, and all modern conveniences — with a dedicated on-site caretaker to ensure a seamless, unhurried stay from the moment you arrive.",

    highlights: [
      "Private Pool",
      "Lawn",
      "3 BHK",
      "AC Rooms",
      "Smart TV",
      "Wi-Fi",
    ],

    amenities: [
      "Private swimming pool",
      "Expansive lawn",
      "Fully equipped kitchen",
      "Smart TV",
      "Wi-Fi",
      "Bluetooth speaker",
      "On-site caretaker",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Expansive lawn",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Smart TV",
          "Wi-Fi",
          "Bluetooth speaker",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "On-site caretaker",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.2850,78.1900",
    mapEmbed: "https://www.google.com/maps?q=17.2850,78.1900&output=embed",

    price: 12000,
    weekendPrice: 16000,

    capacity: "",
    bedrooms: 3,

    category: ["Family", "Party"],

    images: loadVillaImages("mango-retreat-farmhouse"),
  },

  {
    name: "Royal Cottage",
    slug: "royal-cottage",

    location: "Shankarpally, Hyderabad",
    shortLocation: "Shankarpally",

    tagline: "Grand spaces. Royal comfort. Yours entirely.",

    description:
      "A magnificent 6-bedroom private estate designed for large gatherings, grand celebrations, and premium group stays. The Royal Cottage offers sweeping lawns, a sparkling private pool, fully air-conditioned suites, and every modern comfort — all backed by an on-site caretaker who ensures your stay is nothing short of exceptional.",

    highlights: [
      "Private Pool",
      "Lawn",
      "6 BHK",
      "AC Rooms",
      "Smart TV",
      "Wi-Fi",
    ],

    amenities: [
      "Private swimming pool",
      "Expansive lawn",
      "Fully equipped kitchen",
      "Smart TV",
      "Wi-Fi",
      "Bluetooth speaker",
      "On-site caretaker",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Expansive lawn",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Smart TV",
          "Wi-Fi",
          "Bluetooth speaker",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "On-site caretaker",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.2780,78.2430",
    mapEmbed: "https://www.google.com/maps?q=17.2780,78.2430&output=embed",

    price: 25000,
    weekendPrice: 32000,

    capacity: "",
    bedrooms: 6,

    category: ["Family", "Party", "Events"],

    images: loadVillaImages("royal-cottage"),
  },

  {
    name: "Kaizen Farms",
    slug: "kaizen-farms",

    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",

    tagline: "Designed for couples. Built for quiet.",

    description:
      "A charming and intimate farmhouse in the tranquil surrounds of Moinabad — crafted for couples and small families seeking a slow, private escape. A beautiful private pool, a generous lawn, air conditioning throughout, and a dedicated on-site caretaker keep things personal and deeply relaxing. Pet-friendly, unhurried, and entirely yours.",

    highlights: [
      "Private Pool",
      "Lawn",
      "AC",
      "Pet Friendly",
      "Wi-Fi",
      "Caretaker",
    ],

    amenities: [
      "Private swimming pool",
      "Lawn area",
      "Fully equipped kitchen",
      "On-site caretaker",
      "Wi-Fi",
      "Pet friendly",
      "Free parking",
      "Air-conditioned rooms",
    ],

    amenityGroups: [
      {
        group: "Outdoors",
        items: [
          "Private swimming pool",
          "Lawn area",
        ],
      },
      {
        group: "Indoors",
        items: [
          "Fully equipped kitchen",
          "Wi-Fi",
          "Air-conditioned rooms",
        ],
      },
      {
        group: "Services",
        items: [
          "On-site caretaker",
          "Pet friendly",
          "Free parking",
        ],
      },
    ],

    mapLink: "https://www.google.com/maps?q=17.2850,78.1800",

    mapEmbed:
      "https://www.google.com/maps?q=17.2850,78.1800&output=embed",

    price: 6000,
    weekendPrice: 8000,

    capacity: "",
    bedrooms: 1,

    category: ["Romantic", "Family"],

    images: loadVillaImages("kaizen-farms"),
  },
];

export const getVilla = (slug: string) =>
  villas.find((v) => v.slug === slug);

export const WHATSAPP_URL = "https://wa.me/918317545573";

export const PHONES = [
  "+91 83175 45573",
  "+91 93917 12789",
];

export const INSTAGRAM =
  "https://instagram.com/ariostays";