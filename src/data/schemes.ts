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
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Income support of ₹6,000 per year to all landholding farmer families across the country in three equal installments.",
    eligibility: { occupations: ["farmer"], maxIncome: 200000 },
    benefits: "₹6,000 per year in three installments of ₹2,000 each, directly transferred to bank accounts.",
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
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PMJAY",
    ministry: "Ministry of Health",
    category: "health",
    description: "Health insurance cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    eligibility: { maxIncome: 500000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "₹5 lakh health insurance cover per family per year. Covers 1,929+ medical procedures including surgeries, day care treatments, and follow-up care.",
    howToApply: [
      "Check eligibility at mera.pmjay.gov.in",
      "Visit nearest Ayushman Bharat Kendra or CSC center",
      "Carry Aadhaar card and ration card",
      "Complete e-KYC verification",
      "Receive Ayushman card on the spot"
    ],
    documentsRequired: ["Aadhaar Card", "Ration Card", "Income Certificate"],
    officialUrl: "https://pmjay.gov.in",
    type: "central",
    launchYear: 2018,
    icon: "🏥"
  },
  {
    id: "pm-awas-yojana-urban",
    name: "PM Awas Yojana (Urban)",
    ministry: "Ministry of Housing",
    category: "housing",
    description: "Affordable housing for urban poor with interest subsidy on home loans.",
    eligibility: { maxIncome: 1800000 },
    benefits: "Interest subsidy of 3-6.5% on home loans up to ₹6 lakh for EWS/LIG and up to ₹12 lakh for MIG categories.",
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
    description: "Financial assistance to houseless and those living in kutcha houses for construction of pucca houses.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "₹1.20 lakh in plains and ₹1.30 lakh in hilly/difficult areas for house construction.",
    howToApply: [
      "Identified through SECC 2011 data",
      "Gram Sabha verifies the beneficiary list",
      "Approach Gram Panchayat or Block Development Office",
      "Submit application with required documents",
      "Funds released in installments after verification"
    ],
    documentsRequired: ["Aadhaar Card", "BPL Certificate", "Bank Account", "Land Documents"],
    officialUrl: "https://pmayg.nic.in",
    type: "central",
    launchYear: 2016,
    icon: "🏡"
  },
  {
    id: "mgnrega",
    name: "MGNREGA",
    ministry: "Ministry of Rural Development",
    category: "employment",
    description: "Guarantees 100 days of wage employment per year to every rural household willing to do unskilled manual work.",
    eligibility: { minAge: 18, occupations: ["farmer", "unemployed", "self-employed"] },
    benefits: "100 days guaranteed wage employment per financial year. Daily wage ranges from ₹220-₹333 depending on the state.",
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
    id: "mudra-loan",
    name: "PM MUDRA Yojana",
    ministry: "Ministry of Finance",
    category: "business",
    description: "Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises.",
    eligibility: { minAge: 18, occupations: ["business", "self-employed"] },
    benefits: "Shishu: up to ₹50,000 | Kishore: ₹50,001 to ₹5 lakh | Tarun: ₹5 lakh to ₹10 lakh. No collateral required.",
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
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    ministry: "Ministry of Finance",
    category: "women",
    description: "Savings scheme for the girl child with high interest rate and tax benefits.",
    eligibility: { maxAge: 10, gender: ["female"] },
    benefits: "Interest rate of 8.2% per annum. Tax-free returns. Minimum deposit ₹250/year, maximum ₹1.5 lakh/year.",
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
    id: "atal-pension",
    name: "Atal Pension Yojana",
    ministry: "Ministry of Finance",
    category: "social-security",
    description: "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after age 60.",
    eligibility: { minAge: 18, maxAge: 40 },
    benefits: "Monthly pension of ₹1,000 to ₹5,000 after age 60. Government co-contributes 50% of premium for eligible subscribers.",
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
    benefits: "₹2 lakh life insurance cover. Premium of only ₹436/year auto-debited from bank account.",
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
    description: "Accidental death and disability insurance at just ₹20 per year.",
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
    id: "ujjwala-yojana",
    name: "PM Ujjwala Yojana",
    ministry: "Ministry of Petroleum",
    category: "women",
    description: "Free LPG connections to women from BPL households.",
    eligibility: { gender: ["female"], maxIncome: 200000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "Free LPG connection with ₹1,600 subsidy. Free first refill and stove to PMUY beneficiaries under Ujjwala 2.0.",
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
    benefits: "Access to various educational and welfare schemes. Financial support for girl child education. Awareness campaigns.",
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
    icon: "🎓"
  },
  {
    id: "fasal-bima",
    name: "PM Fasal Bima Yojana",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities.",
    eligibility: { occupations: ["farmer"] },
    benefits: "Premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops. Government pays remaining premium. Full insured amount on total crop loss.",
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
    id: "startup-india",
    name: "Startup India",
    ministry: "DPIIT",
    category: "business",
    description: "Initiative to build a strong ecosystem for nurturing innovation and startups.",
    eligibility: { minAge: 18, occupations: ["business", "self-employed"], education: ["graduate", "post-graduate"] },
    benefits: "Tax exemption for 3 consecutive years. Self-certification compliance. Fast-track patent applications. Fund of Funds access.",
    howToApply: [
      "Register on startupindia.gov.in",
      "Incorporate your entity (Pvt Ltd/LLP/Partnership)",
      "Get DPIIT recognition certificate",
      "Apply for tax benefits under Section 80-IAC",
      "Access mentorship and funding programs"
    ],
    documentsRequired: ["Certificate of Incorporation", "PAN Card", "Business Plan", "Director/Partner Details"],
    officialUrl: "https://www.startupindia.gov.in",
    type: "central",
    launchYear: 2016,
    icon: "🚀"
  },
  {
    id: "pmegp",
    name: "PM Employment Generation Programme",
    ministry: "Ministry of MSME",
    category: "employment",
    description: "Credit-linked subsidy programme for setting up micro enterprises in rural and urban areas.",
    eligibility: { minAge: 18, occupations: ["unemployed", "self-employed", "business"] },
    benefits: "Subsidy of 15-35% on projects up to ₹50 lakh (manufacturing) and ₹20 lakh (service). Higher subsidy for SC/ST/women/minorities.",
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
    id: "pm-svanidhi",
    name: "PM SVANidhi",
    ministry: "Ministry of Housing",
    category: "business",
    description: "Micro-credit facility for street vendors to restart their businesses post-COVID.",
    eligibility: { minAge: 18, occupations: ["self-employed", "business"], maxIncome: 500000 },
    benefits: "Working capital loan: ₹10,000 (1st), ₹20,000 (2nd), ₹50,000 (3rd tranche). 7% interest subsidy. Monthly cashback on digital transactions.",
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
    id: "national-scholarship",
    name: "National Scholarship Portal",
    ministry: "Ministry of Education",
    category: "education",
    description: "One-stop platform for various central and state government scholarships for students.",
    eligibility: { occupations: ["student"], maxIncome: 800000, education: ["secondary", "higher-secondary", "graduate", "post-graduate"] },
    benefits: "Various scholarships ranging from ₹5,000 to ₹2 lakh per year depending on course and category.",
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
    description: "Portal for students to access education loans and government scholarships.",
    eligibility: { occupations: ["student"], education: ["higher-secondary", "graduate", "post-graduate"] },
    benefits: "Access to education loans from multiple banks. Interest subsidy for economically weaker sections. Single window for scholarship applications.",
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
    id: "jan-dhan",
    name: "PM Jan Dhan Yojana",
    ministry: "Ministry of Finance",
    category: "financial",
    description: "Financial inclusion programme ensuring access to banking, insurance, and pension for all.",
    eligibility: { minAge: 10 },
    benefits: "Zero balance bank account. RuPay debit card. ₹2 lakh accident insurance. ₹30,000 life insurance. Overdraft facility up to ₹10,000.",
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
    id: "stand-up-india",
    name: "Stand Up India",
    ministry: "Ministry of Finance",
    category: "business",
    description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs.",
    eligibility: { minAge: 18, gender: ["female"], categories: ["sc", "st"], occupations: ["business", "self-employed"] },
    benefits: "Composite loan of ₹10 lakh to ₹1 crore for greenfield enterprise. Covers 75% of project cost. Repayable in 7 years.",
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
  {
    id: "kisan-credit-card",
    name: "Kisan Credit Card",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    description: "Provide adequate and timely credit support from the banking system to farmers.",
    eligibility: { minAge: 18, maxAge: 75, occupations: ["farmer"] },
    benefits: "Credit limit based on land holding. Interest rate of 4% (with subvention). ₹2 lakh insurance cover. ATM-enabled card.",
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
    id: "ddy-gjy",
    name: "Deen Dayal Upadhyaya Grameen Jyoti Yojana",
    ministry: "Ministry of Power",
    category: "housing",
    description: "Rural electrification scheme to provide continuous power supply to rural India.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "Free electricity connection to BPL households. Feeder separation for agriculture and domestic use.",
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
  {
    id: "swachh-bharat",
    name: "Swachh Bharat Mission (Gramin)",
    ministry: "Ministry of Jal Shakti",
    category: "housing",
    description: "Financial assistance for construction of individual household toilets in rural areas.",
    eligibility: { maxIncome: 300000 },
    benefits: "₹12,000 incentive for toilet construction. Access to community sanitary complexes.",
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
  {
    id: "pm-matru-vandana",
    name: "PM Matru Vandana Yojana",
    ministry: "Ministry of Women & Child Development",
    category: "women",
    description: "Cash incentive of ₹5,000 for pregnant women and lactating mothers for first living child.",
    eligibility: { gender: ["female"], minAge: 19 },
    benefits: "₹5,000 in three installments: ₹1,000 on registration, ₹2,000 after 6 months, ₹2,000 after child birth registration and vaccination.",
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
    id: "skill-india",
    name: "Skill India - PMKVY",
    ministry: "Ministry of Skill Development",
    category: "employment",
    description: "Free skill training and certification for Indian youth to increase employability.",
    eligibility: { minAge: 15, maxAge: 45, occupations: ["unemployed", "student", "self-employed"] },
    benefits: "Free skill training in 400+ job roles. Industry-recognized certification. ₹8,000 reward on certification. Placement assistance.",
    howToApply: [
      "Visit pmkvyofficial.org",
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
    id: "digital-india",
    name: "Digital India - Free WiFi & Training",
    ministry: "Ministry of Electronics & IT",
    category: "education",
    description: "Digital literacy and connectivity initiative providing free digital skills training.",
    eligibility: { minAge: 14 },
    benefits: "Free digital literacy training. BharatNet connectivity in villages. Common Service Centers for digital services.",
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
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Yojana",
    ministry: "Ministry of MSME",
    category: "business",
    description: "Support for traditional artisans and craftspeople with training, toolkit, and credit.",
    eligibility: { minAge: 18, occupations: ["self-employed", "business"] },
    benefits: "Free skill training with ₹500/day stipend. ₹15,000 toolkit. Loans: ₹1 lakh (5% interest) + ₹2 lakh. Marketing support.",
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
    id: "agnipath",
    name: "Agnipath Scheme",
    ministry: "Ministry of Defence",
    category: "employment",
    description: "Short-term military recruitment scheme for youth in Indian Armed Forces.",
    eligibility: { minAge: 17, maxAge: 23, education: ["secondary", "higher-secondary", "graduate"] },
    benefits: "4-year service with starting salary ₹30,000/month. Seva Nidhi of ₹11.71 lakh tax-free on completion. 25% retained for permanent service.",
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
    id: "jal-jeevan",
    name: "Jal Jeevan Mission",
    ministry: "Ministry of Jal Shakti",
    category: "housing",
    description: "Provide tap water connection to every rural household by ensuring potable water supply.",
    eligibility: {},
    benefits: "Functional Household Tap Connection (FHTC) providing 55 litres per capita per day of potable water.",
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
    id: "free-ration",
    name: "PM Garib Kalyan Anna Yojana",
    ministry: "Ministry of Consumer Affairs",
    category: "social-security",
    description: "Free food grains (5 kg per person per month) to 81.35 crore beneficiaries under NFSA.",
    eligibility: { maxIncome: 300000, categories: ["sc", "st", "obc", "ews"] },
    benefits: "5 kg free food grains (rice/wheat) per person per month. Priority households also get 35 kg per family.",
    howToApply: [
      "Check eligibility under NFSA through state PDS portal",
      "Apply for ration card at nearest food supply office",
      "Submit required documents",
      "Ration card issued after verification",
      "Collect free ration from assigned Fair Price Shop monthly"
    ],
    documentsRequired: ["Aadhaar Card", "Income Certificate", "Address Proof", "Passport-size Photos"],
    officialUrl: "https://nfsa.gov.in",
    type: "central",
    launchYear: 2020,
    icon: "🍚"
  },
];
