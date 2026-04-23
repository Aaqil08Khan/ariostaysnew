import vr1 from "../assets/villas/Vrindavan — The Villa/vr1.jpeg"
import vr2 from "../assets/villas/Vrindavan — The Villa/vr2.jpeg"
import vr3 from "../assets/villas/Vrindavan — The Villa/vr3.jpeg"
import vr4 from "../assets/villas/Vrindavan — The Villa/vr4.jpeg"
import kh1 from "../assets/villas/kerela house/kh1.jpeg"
import kh2 from "../assets/villas/kerela house/kh2.jpeg"
import kh3 from "../assets/villas/kerela house/kh3.jpeg"
import kh4 from "../assets/villas/kerela house/kh4.jpeg"
import pp1 from "../assets/villas/Purple Palms Villa/pp1.jpeg"
import pp2 from "../assets/villas/Purple Palms Villa/pp2.jpeg"
import pp3 from "../assets/villas/Purple Palms Villa/pp3.jpeg"
import pp4 from "../assets/villas/Purple Palms Villa/pp4.jpeg"
import ch1 from "../assets/villas/Chandravaas — The Haveli/ch1.jpeg"
import ch2 from "../assets/villas/Chandravaas — The Haveli/ch2.jpeg"
import ch3 from "../assets/villas/Chandravaas — The Haveli/ch3.jpeg"
import ch4 from "../assets/villas/Chandravaas — The Haveli/ch4.jpeg"
import ar1 from "../assets/villas/Ario Mango Retreat/ar1.jpeg"
import ar2 from "../assets/villas/Ario Mango Retreat/ar2.jpeg"
import ar3 from "../assets/villas/Ario Mango Retreat/ar3.jpeg"
import ar4 from "../assets/villas/Ario Mango Retreat/ar4.jpeg"
import pf1 from "../assets/villas/pearl-farm-stay/pf1.jpeg"
import pf2 from "../assets/villas/pearl-farm-stay/pf2.jpeg"
import pf3 from "../assets/villas/pearl-farm-stay/pf3.jpeg"
import pf4 from "../assets/villas/pearl-farm-stay/pf4.jpeg"
import li1 from "../assets/villas/lilac-inn/li1.jpeg"
import li2 from "../assets/villas/lilac-inn/li2.jpeg"
import li3 from "../assets/villas/lilac-inn/li3.jpeg"
import li4 from "../assets/villas/lilac-inn/li4.jpeg"
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
    mapLink: "https://www.google.com/maps?q=17.2403,78.4294",
    mapEmbed: "https://www.google.com/maps?q=17.2403,78.4294&output=embed",
    price: 24999,
    capacity: "Up to 12 guests",
    bedrooms: 3,
    category: ["Family", "Party"],
    images: [
      vr1, vr2, vr3, vr4

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
    mapLink: "https://www.google.com/maps?q=17.3850,78.4867",
    mapEmbed: "https://www.google.com/maps?q=17.3850,78.4867&output=embed",
    price: 18999,
    capacity: "Up to 6 guests",
    bedrooms: 2,
    category: ["Romantic", "Family"],
    images: [
      kh1, kh2, kh3, kh4
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
      pp1, pp2, pp3, pp4
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
    mapLink: "https://www.google.com/maps?q=17.123184,79.208824",
    mapEmbed: "https://www.google.com/maps?q=17.123184,79.208824&output=embed",
    price: 29999,
    capacity: "Up to 16 guests",
    bedrooms: 4,
    category: ["Heritage", "Family"],
    images: [
      ch1, ch2, ch3, ch4

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
    mapLink: "https://www.google.com/maps?q=17.3000,78.3000",
    mapEmbed: "https://www.google.com/maps?q=17.3000,78.3000&output=embed",
    price: 49999,
    capacity: "Up to 30 guests",
    bedrooms: 6,
    category: ["Events", "Party"],
    images: [
      ar1, ar2, ar3, ar4
    ],
  },
  {
    name: "Pearl Farm Stay",
    slug: "pearl-farm-stay",
    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",
    tagline: "Open lawns. Quiet escapes. Simple comfort.",
    description:
      "A peaceful 2BHK farmhouse ideal for relaxed getaways. With a private pool, expansive lawn, and essential comforts, Pearl Farm Stay is perfect for small gatherings, family stays, and slow weekends close to nature.",
    amenities: [
      "2BHK",
      "Swimming pool",
      "Huge lawn",
      "Equipped kitchen",
      "On-site caretaker",
    ],
    mapLink: "https://www.google.com/maps?q=17.3011726,78.1968873",
    mapEmbed: "https://www.google.com/maps?q=17.3011726,78.1968873&output=embed",
    price: 15999, // you can adjust
    capacity: "Up to 8 guests",
    bedrooms: 2,
    category: ["Family", "Party"],
    images: [
      pf1, pf2, pf3, pf4
    ],
  },
  {
    name: "Lilac Inn",
    slug: "lilac-inn",
    location: "Moinabad, Hyderabad",
    shortLocation: "Moinabad",
    tagline: "Elegant stays. Even better evenings.",
    description:
      "A fully air-conditioned 4BHK farmhouse in Moinabad featuring a pool, rooftop terrace, and spacious garden. Ideal for group stays, celebrations, and relaxed evenings with music, BBQ, and bonfire experiences.",
    amenities: [
      "4BHK fully air-conditioned",
      "Swimming pool",
      "Garden area",
      "Rooftop terrace",
      "BBQ setup",
      "Bonfire (on request)",
      "Music system",
    ],
    mapLink: "https://www.google.com/maps?q=17.2926882,78.2286994",
    mapEmbed: "https://www.google.com/maps?q=17.2926882,78.2286994&output=embed",
    price: 21999, // adjust if needed
    capacity: "Up to 12 guests",
    bedrooms: 4,
    category: ["Party", "Events", "Family"],
    images: [
      li1, li2, li3, li4
    ],
  },

];

export const getVilla = (slug: string) => villas.find((v) => v.slug === slug);

export const WHATSAPP_URL = "https://wa.me/918317545573";
export const PHONES = ["+91 83175 45573", "+91 93917 12789"];
export const INSTAGRAM = "https://instagram.com/ariostays";