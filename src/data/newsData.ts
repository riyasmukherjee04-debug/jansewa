export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  category: NewsCategory;
  icon: string;
  url?: string;
}

export interface CropPrice {
  crop: string;
  msp: string;
  marketPrice: string;
  unit: string;
  trend: "up" | "down" | "stable";
  state?: string;
  icon: string;
}

export type NewsCategory = "crop-prices" | "govt-schemes" | "global-policy" | "international";

// --- Crop Prices & MSP (Kharif + Rabi 2025-26, updated March 2026) ---
export const cropPrices: CropPrice[] = [
  { crop: "Wheat", msp: "₹2,425/qtl", marketPrice: "₹2,580–2,750/qtl", unit: "per quintal", trend: "up", icon: "🌾" },
  { crop: "Paddy (Rice)", msp: "₹2,400/qtl", marketPrice: "₹2,500–2,900/qtl", unit: "per quintal", trend: "up", icon: "🌾" },
  { crop: "Mustard (Sarson)", msp: "₹5,950/qtl", marketPrice: "₹5,800–6,400/qtl", unit: "per quintal", trend: "stable", icon: "🌼" },
  { crop: "Chana (Gram)", msp: "₹5,650/qtl", marketPrice: "₹6,100–7,200/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
  { crop: "Sugarcane", msp: "₹340/qtl (FRP)", marketPrice: "₹350–400/qtl", unit: "per quintal", trend: "stable", icon: "🎋" },
  { crop: "Soybean", msp: "₹4,992/qtl", marketPrice: "₹4,800–5,500/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
  { crop: "Maize", msp: "₹2,225/qtl", marketPrice: "₹2,100–2,400/qtl", unit: "per quintal", trend: "stable", icon: "🌽" },
  { crop: "Cotton (Medium Staple)", msp: "₹7,521/qtl", marketPrice: "₹7,200–8,100/qtl", unit: "per quintal", trend: "up", icon: "🧵" },
  { crop: "Groundnut", msp: "₹6,377/qtl", marketPrice: "₹6,500–7,500/qtl", unit: "per quintal", trend: "up", icon: "🥜" },
  { crop: "Onion", msp: "—", marketPrice: "₹15–35/kg", unit: "per kg", trend: "down", icon: "🧅" },
  { crop: "Potato", msp: "—", marketPrice: "₹10–22/kg", unit: "per kg", trend: "stable", icon: "🥔" },
  { crop: "Tomato", msp: "—", marketPrice: "₹20–55/kg", unit: "per kg", trend: "up", icon: "🍅" },
];

// --- Government Schemes / Policy News (March 2026) ---
export const govtSchemeNews: NewsItem[] = [
  {
    id: "gs1", title: "Pink Card (Mahila Samman Card) Launched for Women",
    summary: "New Pink Card scheme provides ₹3,000/month direct benefit transfer to women aged 18–60 in select states. Covers health checkups, subsidized ration, and free bus travel. Applications open on India.gov.in and CSC centres.",
    date: "March 2026", source: "Ministry of Women & Child Development", category: "govt-schemes", icon: "💳"
  },
  {
    id: "gs2", title: "PM Internship Scheme 2.0 — 1.5 Crore Internships",
    summary: "Expanded PM Internship Scheme now offers ₹5,000/month stipend + ₹6,000 one-time grant to graduates doing internships at top 500 companies. Open for 18–25 year olds with graduation. Apply on pminternship.mca.gov.in.",
    date: "March 2026", source: "Ministry of Corporate Affairs", category: "govt-schemes", icon: "🎓"
  },
  {
    id: "gs3", title: "Ayushman Bharat Extended to All Seniors 70+",
    summary: "All citizens above 70 years now get ₹5 lakh/year free health insurance under Ayushman Bharat regardless of income. Over 3.2 crore Ayushman Vay Vandana cards issued.",
    date: "Feb 2026", source: "Ministry of Health", category: "govt-schemes", icon: "🏥"
  },
  {
    id: "gs4", title: "Unified Pension Scheme (UPS) Replaces NPS for Govt Employees",
    summary: "The new UPS guarantees 50% of average basic pay as pension for central govt employees with 25+ years of service. Assured minimum ₹10,000/month pension. Effective from April 2025.",
    date: "Jan 2026", source: "DoPT", category: "govt-schemes", icon: "👴"
  },
  {
    id: "gs5", title: "PM Surya Ghar Muft Bijli Yojana — 1 Crore Solar Rooftops",
    summary: "Free solar rooftop installation for households with up to 3 kW. Get 300 units free electricity/month. Subsidy of ₹78,000 for 3kW system. Apply at pmsuryaghar.gov.in.",
    date: "Feb 2026", source: "MNRE", category: "govt-schemes", icon: "☀️"
  },
  {
    id: "gs6", title: "Income Tax — No Tax Up to ₹12 Lakh (New Regime)",
    summary: "Under the new tax regime (Budget 2025-26), salaried individuals earning up to ₹12.75 lakh pay zero income tax. Standard deduction of ₹75,000 included.",
    date: "FY 2025-26", source: "Ministry of Finance", category: "govt-schemes", icon: "💰"
  },
  {
    id: "gs7", title: "Namo Drone Didi — Drones for Women SHGs",
    summary: "15,000 drones distributed to women self-help groups for agricultural use — pesticide spraying, crop monitoring. Each SHG gets drone + training + ₹15,000/month income potential.",
    date: "March 2026", source: "Ministry of Agriculture", category: "govt-schemes", icon: "🚁"
  },
  {
    id: "gs8", title: "NPS Vatsalya — Pension for Children",
    summary: "Parents can now open NPS accounts for children (minors). Minimum ₹1,000/year contribution. Account converts to regular NPS at age 18. Tax benefits under Section 80CCD.",
    date: "Jan 2026", source: "PFRDA", category: "govt-schemes", icon: "👶"
  },
];

// --- Global Policies & Economy (March 2026) ---
export const globalPolicyNews: NewsItem[] = [
  {
    id: "gp1", title: "US Federal Reserve Holds Rates at 4.25%",
    summary: "The Fed paused rate cuts citing persistent core inflation at 2.8%. Markets expect one more 25bps cut in June 2026. Dollar index strengthened to 105.2.",
    date: "March 2026", source: "Federal Reserve", category: "global-policy", icon: "🇺🇸"
  },
  {
    id: "gp2", title: "EU Carbon Border Tax (CBAM) Fully Operational",
    summary: "The EU's Carbon Border Adjustment Mechanism now charges importers for carbon emissions in steel, cement, aluminium. Indian exporters face 8-12% additional costs. Govt working on countermeasures.",
    date: "Jan 2026", source: "European Commission", category: "global-policy", icon: "🇪🇺"
  },
  {
    id: "gp3", title: "China's GDP Growth Slows to 4.2%",
    summary: "China's economy grew 4.2% in Q4 2025, down from 5.2% — weakest in decades. Property crisis, deflation, and youth unemployment at 18.8% drive the slowdown.",
    date: "Feb 2026", source: "NBS China", category: "global-policy", icon: "🇨🇳"
  },
  {
    id: "gp4", title: "India-UK Free Trade Agreement Signed",
    summary: "Historic FTA signed covering 90% of tariff lines. Indian IT services, textiles, pharma get preferential access. UK goods like scotch, auto parts see reduced duties.",
    date: "Feb 2026", source: "MEA India", category: "global-policy", icon: "🇬🇧"
  },
  {
    id: "gp5", title: "BRICS+ Expands — 5 New Members Join",
    summary: "Indonesia, Nigeria, Turkey, Thailand, and Vietnam join BRICS+. Combined GDP now exceeds G7. New Development Bank announces $50B lending plan for 2026-30.",
    date: "Jan 2026", source: "BRICS Secretariat", category: "global-policy", icon: "🌍"
  },
  {
    id: "gp6", title: "Global AI Regulation — UN Framework Adopted",
    summary: "195 nations adopt the UN AI Governance Framework mandating transparency, bias audits, and safety testing for AI systems. India co-chaired the drafting committee.",
    date: "March 2026", source: "United Nations", category: "global-policy", icon: "🤖"
  },
];

// --- International News (March 2026) ---
export const internationalNews: NewsItem[] = [
  {
    id: "in1", title: "Iran–Israel Tensions Escalate — UN Mediates",
    summary: "Following targeted strikes in Syria, Iran-Israel tensions hit a new high. UN Security Council convenes emergency session. India calls for diplomatic restraint. Oil prices spike to $92/barrel.",
    date: "March 2026", source: "UN Security Council / Reuters", category: "international", icon: "⚠️"
  },
  {
    id: "in2", title: "Russia-Ukraine War — Ceasefire Talks Resume",
    summary: "After 4 years of conflict, Turkey-mediated ceasefire talks resume in Istanbul. Both sides agree to partial prisoner exchange. EU extends sanctions package. India maintains neutral stance.",
    date: "March 2026", source: "Reuters / MEA", category: "international", icon: "🕊️"
  },
  {
    id: "in3", title: "US 2026 Midterms — Democrats Gain Senate Seats",
    summary: "Democrats flip 3 Senate seats in Nov 2025 midterms, narrowing Republican majority. Key issues: AI regulation, healthcare costs, immigration reform dominate agenda.",
    date: "Jan 2026", source: "AP News", category: "international", icon: "🇺🇸"
  },
  {
    id: "in4", title: "Myanmar Civil War — Resistance Forces Gain Ground",
    summary: "Opposition forces now control 60% of Myanmar territory. India strengthens border security in NE states. Over 3 million displaced. ASEAN calls for humanitarian corridor.",
    date: "Feb 2026", source: "BBC / MEA", category: "international", icon: "🇲🇲"
  },
  {
    id: "in5", title: "Climate — 2025 Confirmed Hottest Year on Record",
    summary: "WMO confirms 2025 as the hottest year since records began — 1.55°C above pre-industrial levels. India faced record heatwaves in May-June 2025. COP31 planned for Australia.",
    date: "Jan 2026", source: "WMO", category: "international", icon: "🌡️"
  },
  {
    id: "in6", title: "Global Chip War — India's First Fab Plant Operational",
    summary: "Tata-PSMC semiconductor fab in Gujarat starts trial production of 28nm chips. India targets 10% global chip packaging by 2030. US, Japan, EU ramp up chip subsidies.",
    date: "March 2026", source: "MeitY", category: "international", icon: "💻"
  },
  {
    id: "in7", title: "Pakistan Economic Crisis — IMF $7B Bailout Extended",
    summary: "Pakistan secures extended IMF facility of $7 billion amid 25% inflation, depleted reserves, and political instability. Rupee hits 310/USD.",
    date: "Feb 2026", source: "IMF / Dawn", category: "international", icon: "🇵🇰"
  },
  {
    id: "in8", title: "Japan Enters Recession — BOJ Ends Negative Rates Era",
    summary: "Japan's GDP contracts for 2 consecutive quarters. Bank of Japan raised rates to 0.5% — first in decades. Yen weakens to 158/USD. Toyota and Sony cut forecasts.",
    date: "Jan 2026", source: "Nikkei", category: "international", icon: "🇯🇵"
  },
];
