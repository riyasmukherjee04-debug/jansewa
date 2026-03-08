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
