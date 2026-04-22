export type Villa = {
  name: string;
  slug: string;
  location: string;
  shortLocation: string;
  description: string;
  amenities: string[];
  mapLink: string;
  mapEmbed: string;
  price: number;
  capacity: string;
  bedrooms: number;
  category: ("Party" | "Family" | "Romantic" | "Heritage" | "Events")[];
  images: string[];
  tagline: string;
};

export const villas: Villa[] = [
  {
    name: "Vrindavan — The Villa",
    slug: "vrindavan-the-villa",
    location: "Shamshabad, Hyderabad",
    shortLocation: "Shamshabad",
    tagline: "An acre of calm. Crafted for unhurried days.",
    description:
      "A serene one-acre private estate designed for relaxed gatherings and long, unhurried stays. Featuring a spacious 3-bedroom home with modern comforts, expansive lawns, and thoughtfully curated outdoor spaces, Vrindavan offers the perfect balance of openness and privacy. Whether it's a quiet weekend escape or a lively evening by the pool and barbecue, every corner is crafted for comfort and connection.",
    amenities: [
      "3 Bedrooms with AC",
      "Private swimming pool",
      "Fully equipped kitchen",
      "Spacious dining area",
      "Expansive lawn",
      "BBQ & outdoor seating",
      "Gazebo",
      "Kids play area",
      "Power backup",
      "On-site caretaker",
      "Pre-order food service",
    ],
    mapLink: "https://maps.app.goo.gl/WzSLN2mMw2e1NQzBA",
    mapEmbed: "https://www.google.com/maps?q=Shamshabad+Hyderabad&output=embed",
    price: 24999,
    capacity: "Up to 12 guests",
    bedrooms: 3,
    category: ["Family", "Party"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
    ],
  },
  {
    name: "Kerala House",
    slug: "kerala-house",
    location: "Hyderabad Outskirts",
    shortLocation: "Hyderabad",
    tagline: "Heritage Kerala soul. Modern comforts.",
    description:
      "An intimate retreat inspired by traditional Kerala architecture, surrounded by lush greenery and flowering landscapes. This 2-bedroom home blends heritage charm with modern comfort, offering a peaceful atmosphere enhanced by a private pool and warm, natural textures. Ideal for slow mornings, quiet evenings, and meaningful time away from the city.",
    amenities: [
      "2 Bedrooms",
      "Swimming pool",
      "Bathtub",
      "Landscaped garden",
      "Fridge & microwave",
      "Premium toiletries",
      "Linen bedding",
      "Bluetooth speaker",
    ],
    mapLink: "https://maps.app.goo.gl/DzwQTzE9gKWdVpPPA",
    mapEmbed: "https://www.google.com/maps?q=Hyderabad+Kerala+House&output=embed",
    price: 18999,
    capacity: "Up to 6 guests",
    bedrooms: 2,
    category: ["Romantic", "Family"],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1600&q=80",
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1600&q=80",
    ],
  },
  {
    name: "Purple Palms Villa",
    slug: "purple-palms-villa",
    location: "Shankarpally, Hyderabad",
    shortLocation: "Shankarpally",
    tagline: "Spirited weekends. Wide open spaces.",
    description:
      "A vibrant and well-equipped 3-bedroom villa designed for both relaxation and recreation. With modern amenities, a private pool, and expansive outdoor areas, Purple Palms is ideal for group stays, casual celebrations, and active weekends. The space combines comfort with entertainment, making it perfect for memorable getaways.",
    amenities: [
      "3 Bedrooms with extra bedding",
      "Swimming pool",
      "Smart TV",
      "Wi-Fi",
      "Washing machine",
      "Lawn",
      "BBQ setup",
      "Cricket practice net",
      "Toiletries & linen",
    ],
    mapLink: "https://www.google.com/maps?q=17.27781867980957,78.242919921875",
    mapEmbed: "https://www.google.com/maps?q=17.27781867980957,78.242919921875&output=embed",
    price: 22999,
    capacity: "Up to 14 guests",
    bedrooms: 3,
    category: ["Party", "Family"],
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1600&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    ],
  },
  {
    name: "Chandravaas — The Haveli",
    slug: "chandravaas-the-haveli",
    location: "Heritage Estate, Telangana",
    shortLocation: "Telangana",
    tagline: "A haveli reimagined for the modern guest.",
    description:
      "A grand haveli-style residence that captures the charm of heritage architecture with expansive spaces and timeless design. Chandravaas offers a unique stay experience rooted in tradition, ideal for those seeking character, scale, and a distinctive atmosphere for gatherings or peaceful retreats.",
    amenities: [
      "Heritage-style architecture",
      "Large private spaces",
      "Ideal for group stays",
      "Traditional courtyards",
      "Curated interiors",
    ],
    mapLink: "https://maps.app.goo.gl/cG611ycfuKqVA8p68",
    mapEmbed: "https://www.google.com/maps?q=Telangana+Haveli&output=embed",
    price: 29999,
    capacity: "Up to 16 guests",
    bedrooms: 4,
    category: ["Heritage", "Family"],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80",
    ],
  },
  {
    name: "Ario Mango Retreat — The Royal Cottage",
    slug: "ario-mango-retreat-royal-cottage",
    location: "Mango Orchards, Hyderabad",
    shortLocation: "Mango Orchards",
    tagline: "Made for milestones. Built for grandeur.",
    description:
      "A luxurious 6-bedroom estate crafted for large gatherings, celebrations, and unforgettable experiences. With its grand courtyard, expansive lawn for over 200 guests, and a stunning private pool, Mango Retreat blends elegance with scale. Perfect for events, parties, and premium getaways, it offers space, comfort, and a truly elevated stay.",
    amenities: [
      "6 Bedrooms",
      "Private swimming pool",
      "Royal courtyard",
      "Lawn for 200+ guests",
      "Event-friendly space",
      "Ideal for celebrations & stays",
    ],
    mapLink: "https://maps.app.goo.gl/",
    mapEmbed: "https://www.google.com/maps?q=Mango+Orchards+Hyderabad&output=embed",
    price: 49999,
    capacity: "Up to 30 guests",
    bedrooms: 6,
    category: ["Events", "Party"],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
    ],
  },
];

export const getVilla = (slug: string) => villas.find((v) => v.slug === slug);

export const WHATSAPP_URL = "https://wa.me/918317545573";
export const PHONES = ["+91 83175 45573", "+91 93917 12789"];
export const INSTAGRAM = "https://instagram.com/ariostays";