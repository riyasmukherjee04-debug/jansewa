export type Gender = "male" | "female" | "other" | "all";
export type Category = "general" | "obc" | "sc" | "st" | "ews";
export type Occupation = "farmer" | "student" | "business" | "salaried" | "self-employed" | "unemployed" | "homemaker" | "retired";
export type Education = "none" | "primary" | "secondary" | "higher-secondary" | "graduate" | "post-graduate";
export type SchemeType = "central" | "state";
export type SchemeCategory = "employment" | "education" | "health" | "housing" | "agriculture" | "women" | "social-security" | "business" | "financial";

export interface SchemeEligibility {
  minAge?: number;
  maxAge?: number;
  gender?: Gender[];
  maxIncome?: number;
  occupations?: Occupation[];
  categories?: Category[];
  education?: Education[];
  states?: string[];
}

export interface Scheme {
  id: string;
  name: string;
  ministry: string;
  category: SchemeCategory;
  description: string;
  eligibility: SchemeEligibility;
  benefits: string;
  howToApply: string[];
  documentsRequired: string[];
  officialUrl: string;
  type: SchemeType;
  launchYear: number;
  icon: string;
}

export interface UserProfile {
  age: number;
  gender: Gender;
  state: string;
  income: number;
  occupation: Occupation;
  category: Category;
  education: Education;
}

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry", "Chandigarh"
];

export const schemes: Scheme[] = [
  // ==================== AGRICULTURE SCHEMES ====================
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Income support of ₹6,000 per year to all landholding farmer families across the country in three equal installments.",
    eligibility: { occupations: ["farmer"], maxIncome: 200000 },
    benefits: "₹6,000 per year in three installments of ₹2,000 each, directly transferred to bank accounts. Over 11 crore farmers benefited (2026).",
    howToApply: [
      "Visit the PM-KISAN portal at pmkisan.gov.in",
      "Click on 'New Farmer Registration'",
      "Enter Aadhaar number and captcha",
      "Fill in personal and bank details",
      "Upload land ownership documents",
      "Submit and note the registration number"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account Details", "Land Ownership Records"],
    officialUrl: "https://pmkisan.gov.in",
    type: "central",
    launchYear: 2019,
    icon: "🌾"
  },
  {
    id: "fasal-bima",
    name: "PM Fasal Bima Yojana",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities.",
    eligibility: { occupations: ["farmer"] },
    benefits: "Premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops. Government pays remaining premium. Full insured amount on total crop loss. ₹1.6 lakh crore claims settled since inception (2026).",
    howToApply: [
      "Visit bank branch or CSC center before sowing season",
      "Fill crop insurance application form",
      "Provide land and crop details",
      "Pay farmer's share of premium",
      "Receive policy document",
      "File claim through bank in case of crop loss"
    ],
    documentsRequired: ["Aadhaar Card", "Land Records", "Bank Account", "Sowing Certificate"],
    officialUrl: "https://pmfby.gov.in",
    type: "central",
    launchYear: 2016,
    icon: "🌱"
  },
  {
    id: "kisan-credit-card",
    name: "Kisan Credit Card",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Provide adequate and timely credit support from the banking system to farmers.",
    eligibility: { minAge: 18, maxAge: 75, occupations: ["farmer"] },
    benefits: "Credit limit based on land holding. Interest rate of 4% (with subvention). ₹2 lakh insurance cover. ATM-enabled card. Over 7.5 crore active KCCs (2026).",
    howToApply: [
      "Visit nearest bank branch (cooperative/commercial/RRB)",
      "Fill the KCC application form",
      "Submit land ownership documents",
      "Bank assesses credit limit based on crop and land",
      "KCC card issued within 14 days",
      "Draw credit as needed during crop season"
    ],
    documentsRequired: ["Aadhaar Card", "Land Records", "Passport-size Photo", "Bank Account"],
    officialUrl: "https://pmkisan.gov.in",
    type: "central",
    launchYear: 1998,
    icon: "💳"
  },
  {
    id: "pm-kisan-maandhan",
    name: "PM Kisan Maandhan Yojana",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Pension scheme for small and marginal farmers ensuring old age security with ₹3,000/month pension after age 60.",
    eligibility: { minAge: 18, maxAge: 40, occupations: ["farmer"], maxIncome: 200000 },
    benefits: "₹3,000 monthly pension after age 60. Government matches farmer's contribution. Voluntary and contributory scheme.",
    howToApply: [
      "Visit nearest CSC center or register at maandhan.in",
      "Provide Aadhaar and bank details",
      "Select monthly contribution amount based on age",
      "Set up auto-debit from bank account",
      "Receive pension from age 60"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account", "Land Records"],
    officialUrl: "https://maandhan.in",
    type: "central",
    launchYear: 2019,
    icon: "👨‍🌾"
  },

  // ==================== EMPLOYMENT SCHEMES ====================
  {
    id: "mgnrega",
    name: "MGNREGA",
    ministry: "Ministry of Rural Development",
    category: "employment",
    description: "Guarantees 100 days of wage employment per year to every rural household willing to do unskilled manual work.",
    eligibility: { minAge: 18, occupations: ["farmer", "unemployed", "self-employed"] },
    benefits: "100 days guaranteed wage employment per financial year. Daily wage ₹267-₹374 depending on state (2026 revised rates).",
    howToApply: [
      "Visit the nearest Gram Panchayat office",
      "Apply for a Job Card with a photograph",
      "Receive Job Card within 15 days",
      "Submit written application for work",
      "Work should be provided within 15 days of application",
      "Wages paid within 15 days via bank/post office"
    ],
    documentsRequired: ["Photograph", "Age Proof", "Address Proof", "Bank Account Details"],
    officialUrl: "https://nrega.nic.in",
    type: "central",
    launchYear: 2006,
    icon: "👷"
  },
  {
    id: "pmegp",
    name: "PM Employment Generation Programme",
    ministry: "Ministry of MSME",
    category: "employment",
    description: "Credit-linked subsidy programme for setting up micro enterprises in rural and urban areas.",
    eligibility: { minAge: 18, occupations: ["unemployed", "self-employed", "business"], education: ["secondary", "higher-secondary", "graduate", "post-graduate"] },
    benefits: "Subsidy of 15-35% on projects up to ₹50 lakh (manufacturing) and ₹20 lakh (service). Higher subsidy for SC/ST/women/minorities/aspirational districts.",
    howToApply: [
      "Apply online at kviconline.gov.in",
      "Select project type and location",
      "Submit detailed project report",
      "Application reviewed by district task force",
      "Approved projects get bank loan with subsidy",
      "Subsidy deposited after project setup"
    ],
    documentsRequired: ["Aadhaar Card", "Education Certificates", "Project Report", "Caste Certificate (if applicable)", "EDP Training Certificate"],
    officialUrl: "https://www.kviconline.gov.in",
    type: "central",
    launchYear: 2008,
    icon: "🏭"
  },
  {
    id: "skill-india",
    name: "Skill India - PMKVY 4.0",
    ministry: "Ministry of Skill Development",
    category: "employment",
    description: "Free skill training and certification for Indian youth to increase employability. PMKVY 4.0 launched in 2023 with AI, IoT, and green skills.",
    eligibility: { minAge: 15, maxAge: 45, occupations: ["unemployed", "student", "self-employed"] },
    benefits: "Free skill training in 500+ job roles including AI/ML, drones, EV tech. Industry-recognized certification. ₹8,000 reward on certification. Placement assistance. 1.5 crore+ trained (2026).",
    howToApply: [
      "Visit pmkvyofficial.org or Skill India Digital Hub",
      "Search for training centers nearby",
      "Enroll in desired skill course",
      "Complete training (150-300 hours)",
      "Pass assessment and get certified",
      "Receive reward money in bank account"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account", "Educational Certificates"],
    officialUrl: "https://www.pmkvyofficial.org",
    type: "central",
    launchYear: 2015,
    icon: "🔧"
  },
  {
    id: "agnipath",
    name: "Agnipath Scheme",
    ministry: "Ministry of Defence",
    category: "employment",
    description: "Short-term military recruitment scheme for youth in Indian Armed Forces. 4th recruitment cycle underway in 2026.",
    eligibility: { minAge: 17, maxAge: 23, occupations: ["unemployed", "student"], education: ["secondary", "higher-secondary", "graduate"] },
    benefits: "4-year service with starting salary ₹30,000/month (revised to ₹33,000 in 2026). Seva Nidhi of ₹11.71 lakh tax-free on completion. 25% retained for permanent service.",
    howToApply: [
      "Visit joinindianarmy.nic.in / indiannavy.nic.in / indianairforce.nic.in",
      "Register and apply online during recruitment window",
      "Appear for written test",
      "Clear physical fitness test",
      "Medical examination",
      "Merit-based selection"
    ],
    documentsRequired: ["10th/12th Marksheet", "Aadhaar Card", "Domicile Certificate", "Character Certificate", "NCC Certificate (bonus)"],
    officialUrl: "https://agnipathvayu.cdac.in",
    type: "central",
    launchYear: 2022,
    icon: "🎖️"
  },
  {
    id: "pm-internship",
    name: "PM Internship Scheme",
    ministry: "Ministry of Corporate Affairs",
    category: "employment",
    description: "Internship opportunities for youth aged 21-24 in top 500 companies with monthly stipend and insurance. Launched in Budget 2024-25.",
    eligibility: { minAge: 21, maxAge: 24, occupations: ["unemployed", "student"], education: ["higher-secondary", "graduate", "post-graduate"] },
    benefits: "₹5,000 monthly stipend for 12 months. ₹6,000 one-time grant. Insurance cover under PMJJBY & PMSBY. Industry exposure in top 500 companies. 1 crore internships targeted over 5 years.",
    howToApply: [
      "Register on PM Internship portal (pminternship.mca.gov.in)",
      "Complete profile with education and skills",
      "Browse and apply to internship opportunities",
      "Company shortlists and selects candidates",
      "Complete 12-month internship",
      "Receive stipend via DBT"
    ],
    documentsRequired: ["Aadhaar Card", "Education Certificates", "Bank Account", "Resume"],
    officialUrl: "https://pminternship.mca.gov.in",
    type: "central",
    launchYear: 2024,
    icon: "💻"
  },
  {
    id: "rozgar-mela",
    name: "Rozgar Mela",
    ministry: "Multiple Ministries",
    category: "employment",
    description: "Government recruitment drive providing appointment letters for various government positions. Over 14 lakh appointments made since 2022.",
    eligibility: { minAge: 18, maxAge: 40, occupations: ["unemployed", "student"], education: ["secondary", "higher-secondary", "graduate", "post-graduate"] },
    benefits: "Direct government job appointments across ministries. Regular pay scale with benefits. Over 14 lakh appointments distributed as of March 2026.",
    howToApply: [
      "Check announcements on respective ministry websites",
      "Apply through designated recruitment portals",
      "Appear for examinations/interviews as scheduled",
      "Selected candidates receive appointment letters at Rozgar Mela events"
    ],
    documentsRequired: ["Aadhaar Card", "Education Certificates", "Category Certificate", "Experience Letters (if applicable)"],
    officialUrl: "https://rojgarmela.gov.in",
    type: "central",
    launchYear: 2022,
    icon: "📋"
  },

  // ==================== EDUCATION SCHEMES ====================
  {
    id: "national-scholarship",
    name: "National Scholarship Portal",
    ministry: "Ministry of Education",
    category: "education",
    description: "One-stop platform for various central and state government scholarships for students.",
    eligibility: { occupations: ["student"], maxIncome: 800000, education: ["secondary", "higher-secondary", "graduate", "post-graduate"] },
    benefits: "Various scholarships ranging from ₹5,000 to ₹2.5 lakh per year depending on course and category (2026 revised).",
    howToApply: [
      "Register at scholarships.gov.in",
      "Complete profile with academic details",
      "Search and apply for eligible scholarships",
      "Upload required documents",
      "Institute verifies application",
      "Scholarship disbursed to bank account"
    ],
    documentsRequired: ["Aadhaar Card", "Income Certificate", "Marksheets", "Bank Account", "Caste Certificate", "Institute Bonafide"],
    officialUrl: "https://scholarships.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "📚"
  },
  {
    id: "pm-vidyalakshmi",
    name: "PM Vidyalakshmi",
    ministry: "Ministry of Education",
    category: "education",
    description: "Portal for students to access education loans up to ₹10 lakh without collateral. Revamped in 2024 with full interest subvention for economically weaker students.",
    eligibility: { occupations: ["student"], education: ["higher-secondary", "graduate", "post-graduate"] },
    benefits: "Education loans up to ₹10 lakh with full interest subvention for family income ≤₹8 lakh. No collateral needed. Covers top QS-ranked institutions worldwide.",
    howToApply: [
      "Register at vidyalakshmi.co.in",
      "Search for suitable education loans",
      "Apply to up to 3 banks simultaneously",
      "Upload academic and financial documents",
      "Banks process loan applications",
      "Track application status online"
    ],
    documentsRequired: ["Aadhaar Card", "Admission Letter", "Fee Structure", "Academic Records", "Income Proof", "Co-borrower Documents"],
    officialUrl: "https://www.vidyalakshmi.co.in",
    type: "central",
    launchYear: 2015,
    icon: "🎓"
  },
  {
    id: "digital-india",
    name: "Digital India - Free WiFi & Training",
    ministry: "Ministry of Electronics & IT",
    category: "education",
    description: "Digital literacy and connectivity initiative providing free digital skills training including AI and cybersecurity modules (2026).",
    eligibility: { minAge: 14, occupations: ["student", "unemployed", "homemaker"] },
    benefits: "Free digital literacy training including AI basics. BharatNet connectivity in 2 lakh+ gram panchayats. Common Service Centers for digital services.",
    howToApply: [
      "Visit nearest CSC center",
      "Enroll for PMGDISHA digital literacy course",
      "Complete 20 hours of training",
      "Pass online assessment",
      "Receive digital literacy certificate"
    ],
    documentsRequired: ["Aadhaar Card", "Mobile Number"],
    officialUrl: "https://www.digitalindia.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "📱"
  },

  // ==================== HEALTH SCHEMES ====================
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PMJAY",
    ministry: "Ministry of Health",
    category: "health",
    description: "Health insurance cover of ₹5 lakh per family per year. Extended to all senior citizens (70+) under Ayushman Vay Vandana in 2024.",
    eligibility: { maxIncome: 500000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "₹5 lakh health insurance cover per family per year. Covers 1,949+ medical procedures. 34 crore+ Ayushman cards issued (2026). Free treatment at 30,000+ empanelled hospitals.",
    howToApply: [
      "Check eligibility at mera.pmjay.gov.in",
      "Visit nearest Ayushman Bharat Kendra or CSC center",
      "Carry Aadhaar card and ration card",
      "Complete e-KYC verification",
      "Receive Ayushman card on the spot or via DigiLocker"
    ],
    documentsRequired: ["Aadhaar Card", "Ration Card", "Income Certificate"],
    officialUrl: "https://pmjay.gov.in",
    type: "central",
    launchYear: 2018,
    icon: "🏥"
  },
  {
    id: "ayushman-vay-vandana",
    name: "Ayushman Bharat Vay Vandana",
    ministry: "Ministry of Health",
    category: "health",
    description: "Free health insurance of ₹5 lakh for all senior citizens aged 70+ regardless of income. Launched September 2024.",
    eligibility: { minAge: 70 },
    benefits: "₹5 lakh health cover per year for all citizens aged 70+. No income criterion. Separate from family's PMJAY cover. Covers all 1,949+ listed procedures.",
    howToApply: [
      "Visit nearest Ayushman Bharat Kendra",
      "Complete Aadhaar-based e-KYC",
      "Receive Ayushman Vay Vandana card",
      "Avail cashless treatment at empanelled hospitals"
    ],
    documentsRequired: ["Aadhaar Card", "Age Proof"],
    officialUrl: "https://pmjay.gov.in",
    type: "central",
    launchYear: 2024,
    icon: "🧑‍⚕️"
  },

  // ==================== HOUSING SCHEMES ====================
  {
    id: "pm-awas-yojana-urban",
    name: "PM Awas Yojana (Urban) 2.0",
    ministry: "Ministry of Housing",
    category: "housing",
    description: "Affordable housing for urban poor. PMAY-U 2.0 launched in 2024 targeting 1 crore additional houses by 2029.",
    eligibility: { maxIncome: 1800000, occupations: ["salaried", "self-employed", "business", "unemployed"] },
    benefits: "Interest subsidy of 3-6.5% on home loans. Central assistance up to ₹2.5 lakh for EWS. PMAY-U 2.0 targets 1 crore new houses with ₹10 lakh crore investment.",
    howToApply: [
      "Visit pmaymis.gov.in",
      "Click on 'Citizen Assessment' and select the appropriate category",
      "Enter Aadhaar number for verification",
      "Fill in personal, income, and property details",
      "Submit application and note the reference number",
      "Track application status online"
    ],
    documentsRequired: ["Aadhaar Card", "Income Proof", "Property Documents", "Bank Statements"],
    officialUrl: "https://pmaymis.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "🏠"
  },
  {
    id: "pm-awas-yojana-rural",
    name: "PM Awas Yojana (Gramin)",
    ministry: "Ministry of Rural Development",
    category: "housing",
    description: "Financial assistance for construction of pucca houses in rural areas. Target extended to 2029.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"], occupations: ["farmer", "unemployed", "self-employed", "homemaker"] },
    benefits: "₹1.20 lakh in plains and ₹1.30 lakh in hilly/difficult areas. Additional ₹12,000 for toilet under SBM. Over 3 crore houses completed (2026).",
    howToApply: [
      "Identified through SECC 2011 data / Awas+ app survey",
      "Gram Sabha verifies the beneficiary list",
      "Approach Gram Panchayat or Block Development Office",
      "Submit application with required documents",
      "Funds released in installments after verification via geo-tagged photos"
    ],
    documentsRequired: ["Aadhaar Card", "BPL Certificate", "Bank Account", "Land Documents"],
    officialUrl: "https://pmayg.nic.in",
    type: "central",
    launchYear: 2016,
    icon: "🏡"
  },
  {
    id: "pm-surya-ghar",
    name: "PM Surya Ghar: Muft Bijli Yojana",
    ministry: "Ministry of New & Renewable Energy",
    category: "housing",
    description: "Rooftop solar panel installation with subsidy for households to get up to 300 units free electricity per month. Launched February 2024.",
    eligibility: { minAge: 18 },
    benefits: "Subsidy: ₹30,000 for 1 kW, ₹60,000 for 2 kW, ₹78,000 for 3+ kW rooftop solar. Up to 300 units free electricity/month. 1 crore households targeted. ₹75,021 crore budget.",
    howToApply: [
      "Register at pmsuryaghar.gov.in",
      "Apply through your electricity DISCOM",
      "Get feasibility check and technical assessment",
      "Choose empanelled vendor for installation",
      "Installation and net metering setup",
      "Subsidy credited to bank account after commissioning"
    ],
    documentsRequired: ["Aadhaar Card", "Electricity Bill", "Bank Account", "Roof Ownership Proof"],
    officialUrl: "https://pmsuryaghar.gov.in",
    type: "central",
    launchYear: 2024,
    icon: "☀️"
  },
  {
    id: "jal-jeevan",
    name: "Jal Jeevan Mission",
    ministry: "Ministry of Jal Shakti",
    category: "housing",
    description: "Provide tap water connection to every rural household. Over 15.3 crore connections provided as of March 2026.",
    eligibility: {},
    benefits: "Functional Household Tap Connection providing 55 litres per capita per day of potable water. 78% rural households now have tap connections (2026).",
    howToApply: [
      "Implemented through Gram Panchayat",
      "Village Action Plan prepared by Gram Sabha",
      "Paani Samiti oversees local implementation",
      "Household connections provided area-wise",
      "Community contribution of 5-10% (in-kind)"
    ],
    documentsRequired: ["Aadhaar Card", "Address Proof"],
    officialUrl: "https://jaljeevanmission.gov.in",
    type: "central",
    launchYear: 2019,
    icon: "💧"
  },
  {
    id: "swachh-bharat",
    name: "Swachh Bharat Mission 2.0",
    ministry: "Ministry of Jal Shakti",
    category: "housing",
    description: "Focus on ODF sustainability, solid/liquid waste management, and GOBARdhan for rural areas.",
    eligibility: { maxIncome: 300000 },
    benefits: "₹12,000 incentive for toilet construction. Community sanitary complexes. Solid waste management infrastructure. GOBARdhan bio-gas plants.",
    howToApply: [
      "Apply through Gram Panchayat",
      "Identified through baseline survey",
      "Construct toilet as per guidelines",
      "Verification by Gram Panchayat/Block",
      "Incentive released to bank account after verification"
    ],
    documentsRequired: ["Aadhaar Card", "BPL Card", "Bank Account", "Photograph of constructed toilet"],
    officialUrl: "https://swachhbharatmission.gov.in",
    type: "central",
    launchYear: 2014,
    icon: "🚽"
  },

  // ==================== BUSINESS SCHEMES ====================
  {
    id: "mudra-loan",
    name: "PM MUDRA Yojana",
    ministry: "Ministry of Finance",
    category: "business",
    description: "Loans up to ₹20 lakh for non-corporate, non-farm small/micro enterprises. Tarun Plus category (up to ₹20L) introduced in Budget 2025-26.",
    eligibility: { minAge: 18, occupations: ["business", "self-employed"] },
    benefits: "Shishu: up to ₹50,000 | Kishore: ₹50,001 to ₹5 lakh | Tarun: ₹5-10 lakh | Tarun Plus: ₹10-20 lakh (new 2025). No collateral required. Over ₹27 lakh crore disbursed since inception.",
    howToApply: [
      "Visit any bank, NBFC, or MFI",
      "Fill the MUDRA loan application form",
      "Submit business plan and required documents",
      "Bank processes the application",
      "Loan sanctioned and disbursed to account"
    ],
    documentsRequired: ["Identity Proof", "Address Proof", "Business Plan", "Passport-size Photos", "Category Certificate (if applicable)"],
    officialUrl: "https://www.mudra.org.in",
    type: "central",
    launchYear: 2015,
    icon: "💼"
  },
  {
    id: "startup-india",
    name: "Startup India",
    ministry: "DPIIT",
    category: "business",
    description: "Initiative to build a strong ecosystem for innovation and startups. Over 1.46 lakh DPIIT-recognized startups as of 2026.",
    eligibility: { minAge: 18, occupations: ["business", "self-employed"], education: ["graduate", "post-graduate"] },
    benefits: "Tax exemption for 3 consecutive years (10-year window). Self-certification compliance. Fast-track patent at 80% rebate. Fund of Funds with ₹10,000 crore corpus. Seed Fund up to ₹50 lakh.",
    howToApply: [
      "Register on startupindia.gov.in",
      "Incorporate your entity (Pvt Ltd/LLP/Partnership)",
      "Get DPIIT recognition certificate",
      "Apply for tax benefits under Section 80-IAC",
      "Access mentorship, funding, and incubation programs"
    ],
    documentsRequired: ["Certificate of Incorporation", "PAN Card", "Business Plan", "Director/Partner Details"],
    officialUrl: "https://www.startupindia.gov.in",
    type: "central",
    launchYear: 2016,
    icon: "🚀"
  },
  {
    id: "pm-svanidhi",
    name: "PM SVANidhi",
    ministry: "Ministry of Housing",
    category: "business",
    description: "Micro-credit facility for street vendors. Extended till December 2026.",
    eligibility: { minAge: 18, occupations: ["self-employed", "business"], maxIncome: 500000 },
    benefits: "Working capital loan: ₹10,000 (1st), ₹20,000 (2nd), ₹50,000 (3rd), ₹1,00,000 (4th tranche - new 2025). 7% interest subsidy. Monthly cashback on digital transactions.",
    howToApply: [
      "Apply at pmsvanidhi.mohua.gov.in",
      "Get Letter of Recommendation from ULB",
      "Submit vending certificate or survey ID",
      "Bank processes and disburses loan",
      "Repay in monthly installments",
      "Apply for next tranche on timely repayment"
    ],
    documentsRequired: ["Aadhaar Card", "Vending Certificate", "Bank Account", "Photograph"],
    officialUrl: "https://pmsvanidhi.mohua.gov.in",
    type: "central",
    launchYear: 2020,
    icon: "🛒"
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Yojana",
    ministry: "Ministry of MSME",
    category: "business",
    description: "Support for traditional artisans and craftspeople in 18 trades with training, toolkit, and credit.",
    eligibility: { minAge: 18, occupations: ["self-employed", "business"] },
    benefits: "Free skill training with ₹500/day stipend. ₹15,000 toolkit grant. Loans: ₹1 lakh @5% + ₹2 lakh @5%. Digital incentive ₹1/transaction (max ₹100/month). Over 93 lakh registered (2026).",
    howToApply: [
      "Register at pmvishwakarma.gov.in via CSC",
      "Verify with Aadhaar and mobile OTP",
      "Select your trade (18 trades eligible)",
      "Complete skill verification",
      "Undergo 5-15 days training",
      "Receive toolkit and apply for loan"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account", "Mobile Number", "Skill Proof/Self-declaration"],
    officialUrl: "https://pmvishwakarma.gov.in",
    type: "central",
    launchYear: 2023,
    icon: "⚒️"
  },
  {
    id: "stand-up-india",
    name: "Stand Up India",
    ministry: "Ministry of Finance",
    category: "business",
    description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs for greenfield enterprises.",
    eligibility: { minAge: 18, categories: ["sc", "st"], occupations: ["business", "self-employed"] },
    benefits: "Composite loan of ₹10 lakh to ₹1 crore for greenfield enterprise. Covers 75% of project cost. Repayable in 7 years. Margin money reduced to 15%.",
    howToApply: [
      "Visit standupmitra.in",
      "Register as an aspiring entrepreneur",
      "Connect with nearest bank branch",
      "Submit project report and documents",
      "Bank evaluates and sanctions loan",
      "Handholding support provided"
    ],
    documentsRequired: ["Aadhaar/PAN Card", "Caste Certificate", "Business Plan", "Address Proof", "IT Returns"],
    officialUrl: "https://www.standupmitra.in",
    type: "central",
    launchYear: 2016,
    icon: "💪"
  },

  // ==================== WOMEN SCHEMES ====================
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    ministry: "Ministry of Finance",
    category: "women",
    description: "Savings scheme for the girl child with high interest rate and tax benefits under Section 80C.",
    eligibility: { maxAge: 10, gender: ["female"] },
    benefits: "Interest rate of 8.2% per annum (2026). Tax-free returns under EEE category. Minimum deposit ₹250/year, maximum ₹1.5 lakh/year. Matures in 21 years.",
    howToApply: [
      "Visit any post office or authorized bank",
      "Fill the account opening form",
      "Submit birth certificate of the girl child",
      "Make initial deposit (minimum ₹250)",
      "Receive passbook for the account"
    ],
    documentsRequired: ["Birth Certificate of Girl Child", "Parent/Guardian ID Proof", "Address Proof", "Photographs"],
    officialUrl: "https://www.india.gov.in/sukanya-samriddhi-yojna",
    type: "central",
    launchYear: 2015,
    icon: "👧"
  },
  {
    id: "ujjwala-yojana",
    name: "PM Ujjwala Yojana 2.0",
    ministry: "Ministry of Petroleum",
    category: "women",
    description: "Free LPG connections to women from BPL households. Over 10.35 crore connections provided (2026).",
    eligibility: { gender: ["female"], maxIncome: 200000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "Free LPG connection with ₹1,600 subsidy. Free first refill and stove under Ujjwala 2.0. No address proof needed for migrants.",
    howToApply: [
      "Visit nearest LPG distributor",
      "Fill the Ujjwala application form",
      "Submit KYC documents",
      "Verify BPL status",
      "Receive LPG connection and first cylinder"
    ],
    documentsRequired: ["Aadhaar Card", "BPL Card/Ration Card", "Bank Account", "Passport-size Photo"],
    officialUrl: "https://www.pmujjwalayojana.com",
    type: "central",
    launchYear: 2016,
    icon: "🔥"
  },
  {
    id: "beti-bachao",
    name: "Beti Bachao Beti Padhao",
    ministry: "Ministry of Women & Child Development",
    category: "women",
    description: "Campaign to address declining child sex ratio and promote education of the girl child.",
    eligibility: { gender: ["female"], maxAge: 18 },
    benefits: "Access to various educational and welfare schemes. Financial support for girl child education. Child sex ratio improved from 918 (2015) to 934 (2026).",
    howToApply: [
      "Visit nearest Anganwadi center or District office",
      "Register under the scheme",
      "Link with Sukanya Samriddhi account",
      "Access benefits through local ICDS office"
    ],
    documentsRequired: ["Birth Certificate", "Aadhaar Card", "Parent's ID", "Address Proof"],
    officialUrl: "https://wcd.nic.in/bbbp-schemes",
    type: "central",
    launchYear: 2015,
    icon: "🎀"
  },
  {
    id: "pm-matru-vandana",
    name: "PM Matru Vandana Yojana 2.0",
    ministry: "Ministry of Women & Child Development",
    category: "women",
    description: "Cash incentive for pregnant women and lactating mothers. Enhanced under PMMVY 2.0 with ₹6,000 for second girl child.",
    eligibility: { gender: ["female"], minAge: 19, occupations: ["homemaker", "unemployed", "self-employed", "farmer", "salaried"] },
    benefits: "₹5,000 for first child in 3 installments. ₹6,000 for second child (if girl). Total ₹11,000 benefit for families with two girl children.",
    howToApply: [
      "Visit nearest Anganwadi Center or health facility",
      "Register during pregnancy",
      "Fill PMMVY application form",
      "Submit MCP card and bank details",
      "Installments credited to bank account on milestones"
    ],
    documentsRequired: ["Aadhaar Card", "MCP Card", "Bank Account", "ID Proof"],
    officialUrl: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
    type: "central",
    launchYear: 2017,
    icon: "🤱"
  },
  {
    id: "lakhpati-didi",
    name: "Lakhpati Didi Scheme",
    ministry: "Ministry of Rural Development",
    category: "women",
    description: "Empowering women in SHGs to earn ₹1 lakh+ annually through skill training and micro-enterprise support. Target: 3 crore Lakhpati Didis by 2027.",
    eligibility: { gender: ["female"], minAge: 18, occupations: ["homemaker", "self-employed", "unemployed", "farmer"] },
    benefits: "Skill training in 75+ trades (drones, plumbing, LED bulbs, etc.). SHG bank linkage. Marketing support. 1.15 crore women already became Lakhpati Didis (2026).",
    howToApply: [
      "Join or form a Self Help Group (SHG) under DAY-NRLM",
      "SHG registers with block-level NRLM unit",
      "Select skill training from available options",
      "Complete training and start micro-enterprise",
      "Access SHG bank linkage for working capital"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account (SHG joint account)", "SHG Membership Proof"],
    officialUrl: "https://nrlm.gov.in",
    type: "central",
    launchYear: 2023,
    icon: "👩‍💼"
  },

  // ==================== SOCIAL SECURITY SCHEMES ====================
  {
    id: "atal-pension",
    name: "Atal Pension Yojana",
    ministry: "Ministry of Finance",
    category: "social-security",
    description: "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after age 60. Over 6.5 crore subscribers (2026).",
    eligibility: { minAge: 18, maxAge: 40, occupations: ["salaried", "self-employed", "farmer", "business", "unemployed", "homemaker"] },
    benefits: "Monthly pension of ₹1,000 to ₹5,000 after age 60. Spouse continues to receive pension. Return of accumulated corpus to nominee.",
    howToApply: [
      "Visit your bank branch (savings account required)",
      "Fill the APY registration form",
      "Choose pension amount (₹1,000 to ₹5,000/month)",
      "Provide Aadhaar and mobile number",
      "Set up auto-debit for monthly contribution",
      "Receive confirmation via SMS"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account", "Mobile Number"],
    officialUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
    type: "central",
    launchYear: 2015,
    icon: "🧓"
  },
  {
    id: "pm-jeevan-jyoti",
    name: "PM Jeevan Jyoti Bima",
    ministry: "Ministry of Finance",
    category: "social-security",
    description: "Life insurance cover of ₹2 lakh at a premium of just ₹436 per year.",
    eligibility: { minAge: 18, maxAge: 50 },
    benefits: "₹2 lakh life insurance cover. Premium of only ₹436/year auto-debited from bank account. Over 17 crore enrolled (2026).",
    howToApply: [
      "Visit your bank branch or use net banking",
      "Fill the PMJJBY enrollment form",
      "Give consent for auto-debit of premium",
      "Nominee details to be provided",
      "Coverage starts from June 1 each year"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account with sufficient balance"],
    officialUrl: "https://www.jansuraksha.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "🛡️"
  },
  {
    id: "pm-suraksha-bima",
    name: "PM Suraksha Bima Yojana",
    ministry: "Ministry of Finance",
    category: "social-security",
    description: "Accidental death and disability insurance at just ₹20 per year. Over 38 crore enrolled (2026).",
    eligibility: { minAge: 18, maxAge: 70 },
    benefits: "₹2 lakh for accidental death/full disability. ₹1 lakh for partial disability. Premium just ₹20/year.",
    howToApply: [
      "Visit bank branch or use internet banking",
      "Fill the PMSBY application form",
      "Provide nominee details",
      "Auto-debit consent for ₹20 annual premium",
      "Coverage effective from June 1 to May 31"
    ],
    documentsRequired: ["Aadhaar Card", "Bank Account"],
    officialUrl: "https://www.jansuraksha.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "🔒"
  },
  {
    id: "free-ration",
    name: "PM Garib Kalyan Anna Yojana",
    ministry: "Ministry of Consumer Affairs",
    category: "social-security",
    description: "Free food grains (5 kg per person per month) to 81.35 crore beneficiaries under NFSA. Extended for 5 years till December 2028.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "5 kg free food grains (rice/wheat) per person per month. Priority households also get 35 kg per family. Extended till Dec 2028 with ₹11.8 lakh crore outlay.",
    howToApply: [
      "Check eligibility under NFSA through state PDS portal",
      "Apply for ration card at nearest food supply office",
      "Submit required documents",
      "Ration card issued after verification",
      "Collect free ration from assigned Fair Price Shop monthly via Aadhaar authentication"
    ],
    documentsRequired: ["Aadhaar Card", "Income Certificate", "Address Proof", "Passport-size Photos"],
    officialUrl: "https://nfsa.gov.in",
    type: "central",
    launchYear: 2020,
    icon: "🍚"
  },

  // ==================== FINANCIAL INCLUSION SCHEMES ====================
  {
    id: "jan-dhan",
    name: "PM Jan Dhan Yojana",
    ministry: "Ministry of Finance",
    category: "financial",
    description: "Financial inclusion programme ensuring access to banking for all. Over 53 crore accounts opened with ₹2.3 lakh crore deposits (2026).",
    eligibility: { minAge: 10 },
    benefits: "Zero balance bank account. RuPay debit card with ₹2 lakh accident insurance. ₹30,000 life insurance. Overdraft facility up to ₹10,000.",
    howToApply: [
      "Visit any bank branch or Banking Correspondent",
      "Fill the simplified account opening form",
      "Submit identity and address proof",
      "Provide passport-size photograph",
      "Receive RuPay debit card and passbook"
    ],
    documentsRequired: ["Aadhaar Card (or any ID proof)", "Passport-size Photo"],
    officialUrl: "https://pmjdy.gov.in",
    type: "central",
    launchYear: 2014,
    icon: "🏦"
  },
  {
    id: "ddy-gjy",
    name: "Deen Dayal Upadhyaya Grameen Jyoti Yojana",
    ministry: "Ministry of Power",
    category: "financial",
    description: "Rural electrification scheme to provide continuous power supply to rural India. 100% village electrification achieved.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "Free electricity connection to BPL households. Feeder separation for agriculture and domestic use. All 6 lakh+ villages electrified.",
    howToApply: [
      "Contact nearest electricity distribution company",
      "Apply through Gram Panchayat or power utility",
      "Submit BPL certificate and address proof",
      "Inspection and connection installation",
      "Metered connection provided free of cost"
    ],
    documentsRequired: ["BPL Certificate", "Address Proof", "Aadhaar Card"],
    officialUrl: "https://www.ddugjy.gov.in",
    type: "central",
    launchYear: 2015,
    icon: "💡"
  },

  // ==================== NEW 2024-2026 SCHEMES ====================
  {
    id: "pm-eklavya",
    name: "PM YUVA 2.0 / Eklavya Model Schools",
    ministry: "Ministry of Tribal Affairs",
    category: "education",
    description: "Quality education for tribal students through Eklavya Model Residential Schools with modern facilities in every tribal block.",
    eligibility: { occupations: ["student"], categories: ["st"], education: ["primary", "secondary", "higher-secondary"] },
    benefits: "Free residential education with modern labs, sports facilities. 740 Eklavya schools sanctioned (2026). CBSE curriculum. Free meals, uniforms, books.",
    howToApply: [
      "Apply through tribal welfare department of your state",
      "Appear for entrance test conducted by school",
      "Merit-based admission",
      "Admission from Class 6 onwards"
    ],
    documentsRequired: ["Aadhaar Card", "Caste Certificate (ST)", "Previous School Records", "Income Certificate"],
    officialUrl: "https://tribal.nic.in",
    type: "central",
    launchYear: 2018,
    icon: "🏫"
  },
  {
    id: "nps-vatsalya",
    name: "NPS Vatsalya",
    ministry: "Ministry of Finance",
    category: "financial",
    description: "Pension scheme for minors. Parents can invest for children who can convert to regular NPS at age 18. Launched September 2024.",
    eligibility: { maxAge: 18 },
    benefits: "Start pension contributions from birth. Minimum ₹1,000/year. Tax benefits under 80CCD. Seamless conversion to regular NPS at age 18. Market-linked returns.",
    howToApply: [
      "Visit any Point of Presence (bank/post office)",
      "Open NPS Vatsalya account in child's name",
      "Parent/guardian as subscriber",
      "Choose investment option (Auto/Active)",
      "Make regular contributions",
      "Account converts to regular NPS at age 18"
    ],
    documentsRequired: ["Child's Birth Certificate", "Parent/Guardian Aadhaar", "Bank Account", "Photograph"],
    officialUrl: "https://www.npscra.nsdl.co.in",
    type: "central",
    launchYear: 2024,
    icon: "👶"
  },
  {
    id: "pm-drone-didi",
    name: "Namo Drone Didi Scheme",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Providing drones to women SHGs for agricultural purposes — spraying, surveying, and crop monitoring. 15,000 drones targeted by 2026.",
    eligibility: { gender: ["female"], minAge: 18, occupations: ["farmer", "self-employed", "homemaker"] },
    benefits: "80% subsidy on drone purchase (up to ₹8 lakh). Training for drone operation. Monthly income of ₹15,000+ from drone services. Covers 15,000 SHGs.",
    howToApply: [
      "Must be member of an SHG under DAY-NRLM",
      "SHG applies through district agriculture office",
      "Selected women undergo 15-day drone training",
      "Drone provided with 80% central subsidy",
      "Start providing agricultural drone services"
    ],
    documentsRequired: ["Aadhaar Card", "SHG Membership Proof", "Bank Account", "Training Completion Certificate"],
    officialUrl: "https://agriculture.gov.in",
    type: "central",
    launchYear: 2023,
    icon: "🚁"
  },
  {
    id: "unified-pension",
    name: "Unified Pension Scheme (UPS)",
    ministry: "Ministry of Personnel",
    category: "social-security",
    description: "New pension scheme for central government employees guaranteeing 50% of average basic pay as pension for 25+ years service. Effective April 2025.",
    eligibility: { minAge: 18, maxAge: 60, occupations: ["salaried"] },
    benefits: "Assured pension: 50% of average basic pay (last 12 months) for 25+ years service. Proportionate for 10-25 years. Family pension: 60% of employee's pension. Minimum pension ₹10,000/month for 10+ years. Inflation indexation on pension, family pension, and minimum pension.",
    howToApply: [
      "Available to central government employees",
      "Opt for UPS through employer department",
      "Existing NPS subscribers can switch to UPS",
      "Contribution: 10% employee + 18.5% government",
      "Pension calculated on retirement"
    ],
    documentsRequired: ["Government Employee ID", "Service Records", "Bank Account", "Aadhaar Card"],
    officialUrl: "https://www.india.gov.in",
    type: "central",
    launchYear: 2025,
    icon: "🏛️"
  },
];
