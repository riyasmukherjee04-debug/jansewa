export interface BudgetHighlight {
  title: string;
  amount: string;
  change: string;
  description: string;
  icon: string;
}

export interface EconomicIndicator {
  name: string;
  value: string;
  trend: "up" | "down" | "stable";
  description: string;
}

export interface MinistryLink {
  name: string;
  url: string;
  description: string;
}

export interface Leader {
  title: string;
  name: string;
  since: string;
  icon: string;
}

export interface IndiaRanking {
  category: string;
  rank: string;
  total: string;
  source: string;
  icon: string;
}

export interface StateCM {
  state: string;
  cm: string;
  party: string;
}

export interface InternationalFact {
  title: string;
  value: string;
  description: string;
  icon: string;
}

// --- Leaders (Updated March 2026) ---
export const nationalLeaders: Leader[] = [
  { title: "President of India", name: "Smt. Droupadi Murmu", since: "July 2022", icon: "🏛️" },
  { title: "Vice President", name: "Shri Jagdeep Dhankhar", since: "August 2022", icon: "🏛️" },
  { title: "Prime Minister", name: "Shri Narendra Modi", since: "May 2014", icon: "🇮🇳" },
  { title: "Defence Minister", name: "Shri Rajnath Singh", since: "May 2019", icon: "🛡️" },
  { title: "Home Minister", name: "Shri Amit Shah", since: "May 2019", icon: "🏠" },
  { title: "Finance Minister", name: "Smt. Nirmala Sitharaman", since: "May 2019", icon: "💰" },
  { title: "External Affairs Minister", name: "Dr. S. Jaishankar", since: "May 2019", icon: "🌐" },
  { title: "Education Minister", name: "Shri Dharmendra Pradhan", since: "July 2021", icon: "📚" },
  { title: "Health Minister", name: "Shri J.P. Nadda", since: "June 2024", icon: "🏥" },
  { title: "Agriculture Minister", name: "Shri Shivraj Singh Chouhan", since: "June 2024", icon: "🌾" },
  { title: "Chief Justice of India", name: "Justice Surya Kant (53rd CJI)", since: "November 2025", icon: "⚖️" },
  { title: "RBI Governor", name: "Shri Sanjay Malhotra", since: "December 2024", icon: "🏦" },
];

// --- State CMs (Updated March 2026) ---
export const stateCMs: StateCM[] = [
  { state: "Andhra Pradesh", cm: "N. Chandrababu Naidu", party: "TDP" },
  { state: "Arunachal Pradesh", cm: "Pema Khandu", party: "BJP" },
  { state: "Assam", cm: "Himanta Biswa Sarma", party: "BJP" },
  { state: "Bihar", cm: "Nitish Kumar", party: "JDU" },
  { state: "Chhattisgarh", cm: "Vishnu Deo Sai", party: "BJP" },
  { state: "Delhi", cm: "Rekha Gupta", party: "BJP" },
  { state: "Goa", cm: "Pramod Sawant", party: "BJP" },
  { state: "Gujarat", cm: "Bhupendra Patel", party: "BJP" },
  { state: "Haryana", cm: "Nayab Singh Saini", party: "BJP" },
  { state: "Himachal Pradesh", cm: "Sukhvinder Singh Sukhu", party: "INC" },
  { state: "Jharkhand", cm: "Hemant Soren", party: "JMM" },
  { state: "Karnataka", cm: "Siddaramaiah", party: "INC" },
  { state: "Kerala", cm: "Pinarayi Vijayan", party: "CPI(M)" },
  { state: "Madhya Pradesh", cm: "Mohan Yadav", party: "BJP" },
  { state: "Maharashtra", cm: "Devendra Fadnavis", party: "BJP" },
  { state: "Manipur", cm: "N. Biren Singh", party: "BJP" },
  { state: "Meghalaya", cm: "Conrad K. Sangma", party: "NPP" },
  { state: "Mizoram", cm: "Lalduhoma", party: "ZPM" },
  { state: "Nagaland", cm: "Neiphiu Rio", party: "NDPP" },
  { state: "Odisha", cm: "Mohan Charan Majhi", party: "BJP" },
  { state: "Punjab", cm: "Bhagwant Mann", party: "AAP" },
  { state: "Rajasthan", cm: "Bhajan Lal Sharma", party: "BJP" },
  { state: "Sikkim", cm: "Prem Singh Tamang", party: "SKM" },
  { state: "Tamil Nadu", cm: "M.K. Stalin", party: "DMK" },
  { state: "Telangana", cm: "A. Revanth Reddy", party: "INC" },
  { state: "Tripura", cm: "Manik Saha", party: "BJP" },
  { state: "Uttar Pradesh", cm: "Yogi Adityanath", party: "BJP" },
  { state: "Uttarakhand", cm: "Pushkar Singh Dhami", party: "BJP" },
  { state: "West Bengal", cm: "Mamata Banerjee", party: "TMC" },
];

// --- India Global Rankings (Updated 2026) ---
export const indiaRankings: IndiaRanking[] = [
  { category: "GDP (Nominal)", rank: "4th", total: "195 countries", source: "IMF 2026", icon: "💰" },
  { category: "GDP (PPP)", rank: "3rd", total: "195 countries", source: "World Bank 2026", icon: "📈" },
  { category: "Population", rank: "1st", total: "195 countries", source: "UN 2026", icon: "👥" },
  { category: "Area (Land)", rank: "7th", total: "195 countries", source: "UN", icon: "🗺️" },
  { category: "Military Strength", rank: "4th", total: "145 countries", source: "Global Firepower 2026", icon: "🛡️" },
  { category: "HDI (Human Development)", rank: "130th", total: "193 countries", source: "UNDP 2025 Report", icon: "📊" },
  { category: "Defence Spending", rank: "4th", total: "195 countries", source: "SIPRI 2026", icon: "🎖️" },
  { category: "Nuclear Warheads", rank: "6th", total: "9 nuclear states", source: "SIPRI", icon: "☢️" },
  { category: "Space Missions", rank: "4th", total: "Space-faring nations", source: "ISRO", icon: "🚀" },
  { category: "IT Exports", rank: "2nd", total: "Global", source: "NASSCOM 2026", icon: "💻" },
  { category: "Cricket (ICC Test)", rank: "1st", total: "ICC Members", source: "ICC 2026", icon: "🏏" },
  { category: "Solar Energy Capacity", rank: "4th", total: "Global", source: "IRENA 2026", icon: "☀️" },
];

// --- International & Misc Facts (Updated March 2026) ---
export const internationalFacts: InternationalFact[] = [
  { title: "India's GDP (Nominal)", value: "$4.27 Trillion", description: "4th largest economy — surpassed Japan in 2025", icon: "💰" },
  { title: "GDP Growth Rate (FY26)", value: "7.6%", description: "Real GDP growth as per MoSPI advance estimates", icon: "📈" },
  { title: "GDP Per Capita", value: "$2,900+", description: "Rising steadily with purchasing power growth", icon: "📊" },
  { title: "Population", value: "1.46 Billion", description: "World's most populous country since 2023", icon: "👥" },
  { title: "Forex Reserves", value: "$728 Billion", description: "Record high as of Feb 2026 — covers 11 months imports", icon: "🏦" },
  { title: "UPI Transactions (FY26)", value: "₹230+ Lakh Crore", description: "Record ₹28.3 lakh crore in Jan 2026 alone — world's #1 digital payments", icon: "📱" },
  { title: "FDI Inflow (FY25)", value: "$87 Billion (Gross)", description: "Net FDI jumped 7x — largest in South Asia (UNCTAD)", icon: "🌐" },
  { title: "Remittances", value: "$135.4 Billion", description: "World's largest remittance recipient (FY25)", icon: "💵" },
  { title: "Exports (FY26E)", value: "$800+ Billion", description: "Goods + services exports growing steadily", icon: "📦" },
  { title: "Startups", value: "1,40,000+", description: "3rd largest startup ecosystem globally, 115+ unicorns", icon: "🚀" },
  { title: "Internet Users", value: "980 Million+", description: "2nd largest internet market after China", icon: "🌐" },
  { title: "Railway Network", value: "68,000+ km", description: "4th largest railway network in the world", icon: "🚂" },
  { title: "Road Network", value: "64+ Lakh km", description: "2nd largest road network globally", icon: "🛣️" },
  { title: "UNESCO Heritage Sites", value: "43 Sites", description: "7th most World Heritage Sites globally", icon: "🏛️" },
];

// --- Union Budget 2026-27 Highlights ---
export const budgetHighlights: BudgetHighlight[] = [
  { title: "Total Budget 2026-27", amount: "₹53.47 Lakh Crore", change: "+7.7%", description: "Total expenditure for Union Budget 2026-27 over revised estimates of FY26", icon: "📊" },
  { title: "Defence Budget", amount: "₹7.85 Lakh Crore", change: "+15.2%", description: "Highest allocation — 14.67% of total Central Govt expenditure", icon: "🛡️" },
  { title: "Education Budget", amount: "₹1.39 Lakh Crore", change: "+8.3%", description: "Focus on AI, skilling, healthcare training and employability", icon: "📚" },
  { title: "Health Budget", amount: "₹1.06 Lakh Crore", change: "+12.4%", description: "Healthcare infrastructure, wellness and medical training", icon: "🏥" },
  { title: "Agriculture Budget", amount: "₹1.47 Lakh Crore", change: "+10.8%", description: "Farm sector support including MSP, irrigation, crop insurance", icon: "🌾" },
  { title: "Infrastructure (Capex)", amount: "₹11.21 Lakh Crore", change: "+10.1%", description: "Capital expenditure on roads, railways, ports, airports", icon: "🏗️" },
  { title: "Rural Development", amount: "₹2.72 Lakh Crore", change: "+9.1%", description: "MGNREGA, housing, and rural infrastructure", icon: "🏡" },
  { title: "IT & Digital India", amount: "₹24,220 Crore", change: "+22.5%", description: "Digital India, AI missions, semiconductor development", icon: "💻" },
];

export const economicIndicators: EconomicIndicator[] = [
  { name: "GDP Growth Rate (FY27E)", value: "6.8–7.2%", trend: "up", description: "Projected real GDP growth for FY 2026-27 (Economic Survey)" },
  { name: "Nominal GDP Growth (FY27)", value: "10%", trend: "up", description: "Nominal GDP growth budgeted for FY 2026-27" },
  { name: "Fiscal Deficit (FY27)", value: "4.4%", trend: "down", description: "As percentage of GDP — continued fiscal consolidation path" },
  { name: "Inflation (CPI)", value: "4.2%", trend: "stable", description: "Consumer Price Index based inflation rate trending lower" },
  { name: "Foreign Exchange Reserves", value: "$728 Billion", trend: "up", description: "Record high forex reserves — 11 months import cover" },
  { name: "Tax Revenue (FY27)", value: "₹42.7 Lakh Crore", trend: "up", description: "Gross tax collection target for FY27 — 10.8% growth" },
  { name: "New Income Tax Slabs", value: "₹12 Lakh Exempt", trend: "up", description: "No income tax for income up to ₹12 lakh under new regime (Budget 2025-26)" },
];

export const ministryLinks: MinistryLink[] = [
  { name: "Ministry of Finance", url: "https://finmin.nic.in", description: "Budget, taxation, banking and financial services" },
  { name: "Ministry of Agriculture", url: "https://agricoop.nic.in", description: "Agricultural policies, farmer welfare schemes" },
  { name: "Ministry of Health", url: "https://mohfw.gov.in", description: "Healthcare policies and programmes" },
  { name: "Ministry of Education", url: "https://education.gov.in", description: "Education policies, scholarships, research" },
  { name: "Ministry of Housing", url: "https://mohua.gov.in", description: "Urban development, smart cities, housing" },
  { name: "Ministry of Rural Development", url: "https://rural.nic.in", description: "Rural infrastructure, employment, housing" },
  { name: "Ministry of MSME", url: "https://msme.gov.in", description: "Micro, small and medium enterprises support" },
  { name: "Ministry of Women & Child", url: "https://wcd.nic.in", description: "Women empowerment and child welfare" },
  { name: "NITI Aayog", url: "https://niti.gov.in", description: "Policy think tank, SDGs, development planning" },
  { name: "India.gov.in", url: "https://india.gov.in", description: "National portal of India - one-stop government services" },
];
