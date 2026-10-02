export type Product = { cat: string; label: string; name: string; img: string };
export type Cert = {
  icon: string;
  title: string;
  short: string;
  issuer: string;
  issuerShort: string;
  blurb: string;
  regId: string;
  status: string;
  desc: string;
  file: string;
  date: string;
  proprietor: string;
  state: string;
};

export const PHONES = [
  { label: "+91 77388 08894", wa: "917738808894" },
  { label: "+91 98677 01349", wa: "919867701349" },
  { label: "+91 98675 05450", wa: "919867505450" },
];
export const EMAIL = "ak12341235@gmail.com";
export const GST = "27HFFPK4882F1Z3";
export const ADDRESS =
  "301 Wing B, Garden View, Opp S Garden, Off Kashimira Road 60 Ft, Near Shiver Garden, Mira Road East, Mira Bhayandar, Thane, Maharashtra 401101";

export const CERTS: Cert[] = [
  {
    icon: "🏛️", short: "GST Certificate", issuerShort: "Government of India",
    blurb: "Tax registration verification confirming active status under the Indian GST system.",
    title: "GST Registration Certificate", issuer: "Goods and Services Tax Network, Govt. of India",
    regId: GST, status: "Active Taxpayer (Regular)",
    desc: "Official verification under Form GST REG-06 confirming business legality and legal tax status.",
    file: "/images/certificates/gst_certificate.pdf", date: "31/03/2026", proprietor: "Khan Asif Mohd Arif", state: "Thane, Maharashtra",
  },
  {
    icon: "✈️", short: "Import Export Code", issuerShort: "DGFT, Govt. of India",
    blurb: "Official operational license enabling global border trade from Indian custom ports.",
    title: "Importer-Exporter Code (IEC)", issuer: "Directorate General of Foreign Trade (DGFT)",
    regId: "HFFPK4882F", status: "Authorized Proprietorship License",
    desc: "System-generated license issued by Ministry of Commerce and Industry enabling global product distribution.",
    file: "/images/certificates/iec_licence.pdf", date: "22/04/2026", proprietor: "Khan Asif Mohd Arif", state: "Thane, Maharashtra",
  },
  {
    icon: "📦", short: "FIEO RCMC", issuerShort: "Ministry of Commerce",
    blurb: "RCMC merchant registration specializing in export of Imitation Jewellery and Allied Products.",
    title: "Registration cum Membership Certificate", issuer: "Federation of Indian Export Organisations (FIEO)",
    regId: "RCMC/FIEO/16660/2026-2027", status: "Active Merchant Exporter",
    desc: "Membership verification with India's premier apex body of export promotion organizations.",
    file: "/images/certificates/fieo_rcmc.pdf", date: "08/05/2026", proprietor: "Khan Asif Mohd Arif", state: "Valid upto 31/03/2027",
  },
  {
    icon: "🎓", short: "Professional Exporter", issuerShort: "IIIEM Training Academy",
    blurb: "Elite professional accreditation certifying mastery over international logistics.",
    title: "Program in Import - Export Management", issuer: "International Institute of Import and Export Management (IIIEM)",
    regId: "ST-ZOOM-10-2526-4595", status: "Certified Professional Exporter",
    desc: "A comprehensive professional validation ensuring structural knowledge of international operations and trade logistics.",
    file: "/images/certificates/iiiem_certificate.jpeg", date: "25/11/2025", proprietor: "Asif Mohd Arif Khan", state: "Ahmedabad, Gujarat",
  },
];

const a = (cat: string, label: string, name: string, img: string): Product => ({ cat, label, name, img: `/images/agro/${img}` });

export type Division = {
  key: "agro" | "jewel";
  theme: string;
  strip: string;
  switchLabel: string;
  switchTo: "/" | "/jewellery";
  nav: { id: string; label: string }[];
  hero: { eyebrow: string; lines: [string, string, string]; tag: string; body: string; img: string; stats: [string, string][] };
  marquee: string[];
  about: { eyebrow: string; title: [string, string, string]; body: string; points: string[]; years: string; img: string };
  credBody: string;
  collectionsTitle: [string, string];
  tabs: { id: string; label: string }[];
  products: Product[];
  why: { icon: string; title: string; body: string }[];
  inquiry: { title: string; body: string; categories: string[]; reps: string[] };
  contactTitle: string;
  footerBlurb: string;
};

export const AGRO: Division = {
  key: "agro",
  theme: "theme-agro",
  strip: "GOLDAGRO GROUP: Agriculture Exports Division",
  switchLabel: "Switch to Jewellery Division",
  switchTo: "/jewellery",
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About Sourcing" },
    { id: "collections", label: "Produce Range" },
    { id: "why", label: "Why Us" },
    { id: "inquiry", label: "Inquiry" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Certified Merchant Exporter · Thane, India",
    lines: ["Premium Indian Spices,", "Fresh", "Fruits & Veggies"],
    tag: "Direct Farm-to-Port Supply Chain",
    body: "GOLDAGRO Agricultural Commodities Division processes, packs, and exports the finest fresh harvest from India's fertile states — with strict customs clearance and cargo safety.",
    img: "/images/agro/spices/turmeric.jpeg",
    stats: [["100%", "Farm Sourced"], ["20+", "Global Ports"], ["Reefer", "Cold Storage"]],
  },
  marquee: ["Phytosanitary Certified", "Automated Crop Grading", "Fumigated Sea Freight", "APEDA Quality Standard", "Direct Farm Sourcing"],
  about: {
    eyebrow: "Supply Integrity",
    title: ["Farm-to-Port", "Quality", "Logistics"],
    body: "Based in Thane, Maharashtra, GOLDAGRO GLOBAL EXPORT represents excellence in the sourcing and transit of raw Indian crops. Partnering with central farming coordinates, we ensure produce keeps its moisture, clean visual grades, and safe transit temperatures.",
    points: ["Certified Cold Chain", "Traceable Sourcing", "APEDA/Spices Board Standards", "Containerized Sea Freight"],
    years: "Years of Global Sourcing",
    img: "/images/agro/fruits/alphonso_mango.png",
  },
  credBody: "We hold full legal export registration with Indian agricultural departments, ensuring zero delays at customs check posts worldwide.",
  collectionsTitle: ["Agricultural", "Commodities"],
  tabs: [
    { id: "Spices", label: "Premium Spices" },
    { id: "Vegetables", label: "Fresh Vegetables" },
    { id: "Fruits", label: "Exotic Fruits" },
  ],
  products: [
    a("Spices", "Spices", "Organic Turmeric Finger (High Curcumin)", "spices/turmeric.jpeg"),
    a("Spices", "Spices", "Premium Cumin Seeds (Singapore Clean)", "spices/cumin.jpeg"),
    a("Spices", "Spices", "Garam Masala (Traditional Aromatic Blend)", "spices/garam_masala.jpeg"),
    a("Spices", "Spices", "Whole Coriander Seeds (Double Parrot)", "spices/coriander.jpeg"),
    a("Vegetables", "Vegetables", "Nashik Red Onions (45mm - 55mm+)", "vegtables/red_onion.jpeg"),
    a("Vegetables", "Vegetables", "Premium Table Potatoes (Jyoti/Pukhraj Grades)", "vegtables/potatoes.jpeg"),
    a("Vegetables", "Vegetables", "Fresh Green Chillies (Spicy Export Grade)", "vegtables/green_chilli.jpeg"),
    a("Vegetables", "Vegetables", "Fresh Garden Spinach (Nutrient Rich)", "vegtables/spanich.jpeg"),
    a("Vegetables", "Vegetables", "Farm Fresh Red Tomatoes (Firm Quality)", "vegtables/tomatoes.jpeg"),
    a("Fruits", "Fruits", "Fresh Ratnagiri Alphonso Mangoes", "fruits/alphonso_mango.png"),
    a("Fruits", "Fruits", "Crisp Red Apples (Premium Harvest)", "fruits/apples.jpeg"),
    a("Fruits", "Fruits", "G-9 Cavendish Bananas (Strict Calibration)", "fruits/bananas.jpeg"),
    a("Fruits", "Fruits", "Premium Pink Guavas (Sweet & Rich)", "fruits/guava.png"),
    a("Fruits", "Fruits", "Fresh Sweet Oranges (Juicy Citrus)", "fruits/oranges.jpeg"),
    a("Fruits", "Fruits", "Juicy Seedless Watermelons (Crisp Sweet)", "fruits/watermelon.jpeg"),
  ],
  why: [
    { icon: "🚜", title: "Direct Procurement", body: "Sourcing directly from farms in Maharashtra and Kerala to lock in low FOB rates." },
    { icon: "🌡️", title: "Cold-Chain Protocol", body: "Reefer temperature preservation ensures crops land fresh." },
    { icon: "📋", title: "Clear Clearance", body: "We dispatch complete Phytosanitary certificates and bills of lading." },
  ],
  inquiry: {
    title: "Submit Agro Inquiry",
    body: "Secure container space and pricing directly from Thane headquarters.",
    categories: ["Premium Spices", "Nashik Red Onions", "Table Potatoes", "Fresh Exotic Fruits", "Bulk Container Mix"],
    reps: ["Primary Agro Representative", "Agro Logistical Manager", "Administrative Officer"],
  },
  contactTitle: "Connect with Agro Desk",
  footerBlurb: "Direct premium quality suppliers of wholesale Indian crops, spices, and fresh vegetables to global buyers.",
};

const j = (folder: string, label: string, base: string, prefix: string) =>
  Array.from({ length: 10 }, (_, i) => ({
    cat: label, label, name: `${base} ${i + 1}`, img: `/images/${folder}/${prefix}_${i + 1}.jpeg`,
  }));

export const JEWEL: Division = {
  key: "jewel",
  theme: "theme-jewel",
  strip: "GOLDAGRO GROUP: Premium Jewellery Division",
  switchLabel: "Switch to Agro Exports Division",
  switchTo: "/",
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "collections", label: "Collections" },
    { id: "why", label: "Why Us" },
    { id: "inquiry", label: "Inquiry" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Premium Jewellery Exporter · Thane, India",
    lines: ["The Art of", "Timeless", "Elegance & Style"],
    tag: "Luxury Imitation Jewellery",
    body: "GOLDAGRO GLOBAL EXPORT brings stunning collections crafted with premium finishing for discerning global markets. Luxury quality with Indian heritage.",
    img: "/images/bridal/bridal_1.jpeg",
    stats: [["500+", "Designs"], ["20+", "Countries"], ["5K+", "Orders"]],
  },
  marquee: ["Export Quality Assured", "Worldwide Delivery", "Bulk Orders Only", "Custom Designs Available", "Direct Manufacturer"],
  about: {
    eyebrow: "Our Story",
    title: ["Crafting", "Elegance", "Since Inception"],
    body: "Based in Thane, Maharashtra, GOLDAGRO GLOBAL EXPORT is a premier name in the international trade of high-quality imitation jewellery. We bridge traditional Indian craftsmanship and global fashion trends.",
    points: ["Authentic Designs", "Global Shipping", "Bulk Manufacturing", "Quality Compliance"],
    years: "Years of Excellence",
    img: "/images/necklaces/necklace_1.jpeg",
  },
  credBody: "A fully registered enterprise conforming to Indian legal export structures, offering total clearance assurance across global customs networks.",
  collectionsTitle: ["Exclusive", "Collections"],
  tabs: [
    { id: "Necklace", label: "Necklaces" },
    { id: "Bridal", label: "Bridal Sets" },
    { id: "Bangles", label: "Bangles" },
    { id: "Earrings", label: "Earrings" },
  ],
  products: [
    ...j("necklaces", "Necklace", "Exquisite Necklace", "necklace"),
    ...j("bridal", "Bridal", "Grand Bridal", "bridal"),
    ...j("bangles", "Bangles", "Royal Bangles", "bangles"),
    ...j("earrings", "Earrings", "Heritage Earrings", "earrings"),
  ],
  why: [
    { icon: "🌍", title: "Global Export", body: "Trusted by buyers in over 20 countries for seamless international trade." },
    { icon: "📦", title: "Bulk Capacity", body: "Fulfilling large-scale orders with consistent quality and timelines." },
    { icon: "🎨", title: "Readymade Designs", body: "A wide range of ready-to-ship designs to meet your immediate needs." },
  ],
  inquiry: {
    title: "Submit Your Inquiry",
    body: "Choose your preferred method of contact below.",
    categories: ["Necklaces", "Bridal Sets", "Bangles", "Earrings", "Bulk Mixed Inventory"],
    reps: ["Primary Representative", "Export Manager", "Sales Support"],
  },
  contactTitle: "Get in Touch",
  footerBlurb: "Leading exporters of luxury imitation jewellery and premium agricultural products from India.",
};
