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

// --- Leaders ---
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
  { title: "Chief Justice of India", name: "Justice Sanjiv Khanna", since: "November 2024", icon: "⚖️" },
  { title: "RBI Governor", name: "Shri Sanjay Malhotra", since: "December 2024", icon: "🏦" },
];

// --- State CMs ---
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

// --- India Global Rankings ---
export const indiaRankings: IndiaRanking[] = [
  { category: "GDP (Nominal)", rank: "5th", total: "195 countries", source: "IMF 2024", icon: "💰" },
  { category: "GDP (PPP)", rank: "3rd", total: "195 countries", source: "World Bank", icon: "📈" },
  { category: "Population", rank: "1st", total: "195 countries", source: "UN 2024", icon: "👥" },
  { category: "Area (Land)", rank: "7th", total: "195 countries", source: "UN", icon: "🗺️" },
  { category: "Ease of Doing Business", rank: "63rd", total: "190 countries", source: "World Bank", icon: "🏢" },
  { category: "HDI (Human Development)", rank: "134th", total: "193 countries", source: "UNDP 2024", icon: "📊" },
  { category: "Defence Spending", rank: "4th", total: "195 countries", source: "SIPRI 2024", icon: "🛡️" },
  { category: "Nuclear Warheads", rank: "6th", total: "9 nuclear states", source: "SIPRI", icon: "☢️" },
  { category: "Space Missions", rank: "4th", total: "Space-faring nations", source: "ISRO", icon: "🚀" },
  { category: "IT Exports", rank: "2nd", total: "Global", source: "NASSCOM", icon: "💻" },
  { category: "Cricket (ICC Test)", rank: "1st", total: "ICC Members", source: "ICC 2024", icon: "🏏" },
  { category: "Solar Energy Capacity", rank: "4th", total: "Global", source: "IRENA", icon: "☀️" },
];

// --- International & Misc Facts ---
export const internationalFacts: InternationalFact[] = [
  { title: "India's GDP (Nominal)", value: "$3.94 Trillion", description: "5th largest economy, projected to be 3rd by 2027", icon: "💰" },
  { title: "GDP Per Capita", value: "$2,730", description: "Purchasing power growing steadily", icon: "📊" },
  { title: "Population", value: "1.44 Billion", description: "World's most populous country since 2023", icon: "👥" },
  { title: "Forex Reserves", value: "$658 Billion", description: "Among largest in the world", icon: "🏦" },
  { title: "UPI Transactions (2024)", value: "₹223 Lakh Crore", description: "16.6 billion transactions/month — world's #1 digital payments", icon: "📱" },
  { title: "FDI Inflow (2024)", value: "$71 Billion", description: "Major sectors: services, IT, telecom, pharma", icon: "🌐" },
  { title: "Exports (2024)", value: "$778 Billion", description: "Goods + services exports growing rapidly", icon: "📦" },
  { title: "Startups", value: "1,30,000+", description: "3rd largest startup ecosystem globally, 110+ unicorns", icon: "🚀" },
  { title: "Internet Users", value: "950 Million+", description: "2nd largest internet market after China", icon: "🌐" },
  { title: "Railway Network", value: "68,000+ km", description: "4th largest railway network in the world", icon: "🚂" },
  { title: "Road Network", value: "64 Lakh km", description: "2nd largest road network globally", icon: "🛣️" },
  { title: "UNESCO Heritage Sites", value: "42 Sites", description: "7th most World Heritage Sites globally", icon: "🏛️" },
];

// --- Budget Highlights ---
export const budgetHighlights: BudgetHighlight[] = [
  { title: "Total Budget 2025-26", amount: "₹50.65 Lakh Crore", change: "+7.4%", description: "Total expenditure estimated for Union Budget 2025-26", icon: "📊" },
  { title: "Defence Budget", amount: "₹6.81 Lakh Crore", change: "+9.5%", description: "Allocation for defence sector including modernization", icon: "🛡️" },
  { title: "Education Budget", amount: "₹1.28 Lakh Crore", change: "+15.8%", description: "Investment in education, skill development and research", icon: "📚" },
  { title: "Health Budget", amount: "₹99,858 Crore", change: "+12.6%", description: "Healthcare infrastructure and wellness programmes", icon: "🏥" },
  { title: "Agriculture Budget", amount: "₹1.37 Lakh Crore", change: "+10.2%", description: "Farm sector support including MSP and irrigation", icon: "🌾" },
  { title: "Infrastructure", amount: "₹11.21 Lakh Crore", change: "+11.1%", description: "Capital expenditure on roads, railways, ports and airports", icon: "🏗️" },
  { title: "Rural Development", amount: "₹2.66 Lakh Crore", change: "+8.3%", description: "MGNREGA, housing, and rural infrastructure", icon: "🏡" },
  { title: "IT & Digital", amount: "₹21,936 Crore", change: "+24.3%", description: "Digital India, AI missions, and semiconductor development", icon: "💻" },
];

export const economicIndicators: EconomicIndicator[] = [
  { name: "GDP Growth Rate", value: "6.5%", trend: "up", description: "Estimated real GDP growth for FY 2025-26" },
  { name: "Fiscal Deficit", value: "4.4%", trend: "down", description: "As percentage of GDP, targeting consolidation" },
  { name: "Inflation (CPI)", value: "4.5%", trend: "stable", description: "Consumer Price Index based inflation rate" },
  { name: "Foreign Exchange Reserves", value: "$658 Billion", trend: "up", description: "Forex reserves providing import cover" },
  { name: "Tax Revenue", value: "₹38.4 Lakh Crore", trend: "up", description: "Gross tax collection target for FY26" },
  { name: "New Income Tax Slabs", value: "₹12 Lakh Exempt", trend: "up", description: "No income tax for income up to ₹12 lakh under new regime" },
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
