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

export interface ExamInfo {
  name: string;
  fullName: string;
  examDate: string;
  registrationDeadline: string;
  eligibility: string;
  website: string;
  icon: string;
  category: "engineering" | "medical" | "management" | "law" | "university" | "professional" | "govt-exam";
}

export interface GovtJobInfo {
  title: string;
  organization: string;
  vacancies: string;
  lastDate: string;
  eligibility: string;
  sector: string;
  icon: string;
}

export interface CropPrice {
  crop: string;
  msp: string;
  marketPrice: string;
  unit: string;
  trend: "up" | "down" | "stable";
  icon: string;
}

export type NewsCategory = "info-hub" | "govt-schemes" | "global-policy" | "international";

// --- Crop Prices & MSP (RMS 2026-27, updated April 2026) ---
export const cropPrices: CropPrice[] = [
  { crop: "Wheat", msp: "₹2,575/qtl", marketPrice: "₹2,450–2,700/qtl", unit: "per quintal", trend: "stable", icon: "🌾" },
  { crop: "Paddy (Rice)", msp: "₹2,400/qtl", marketPrice: "₹2,500–2,900/qtl", unit: "per quintal", trend: "up", icon: "🌾" },
  { crop: "Mustard (Sarson)", msp: "₹5,950/qtl", marketPrice: "₹5,600–6,200/qtl", unit: "per quintal", trend: "down", icon: "🌼" },
  { crop: "Chana (Gram)", msp: "₹5,650/qtl", marketPrice: "₹6,800–7,500/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
  { crop: "Sugarcane", msp: "₹340/qtl (FRP)", marketPrice: "₹350–400/qtl", unit: "per quintal", trend: "stable", icon: "🎋" },
  { crop: "Soybean", msp: "₹4,992/qtl", marketPrice: "₹4,600–5,200/qtl", unit: "per quintal", trend: "down", icon: "🫘" },
  { crop: "Maize", msp: "₹2,225/qtl", marketPrice: "₹2,100–2,350/qtl", unit: "per quintal", trend: "stable", icon: "🌽" },
  { crop: "Cotton (Medium Staple)", msp: "₹7,521/qtl", marketPrice: "₹7,000–7,800/qtl", unit: "per quintal", trend: "down", icon: "🧵" },
  { crop: "Groundnut", msp: "₹6,377/qtl", marketPrice: "₹6,500–7,500/qtl", unit: "per quintal", trend: "up", icon: "🥜" },
  { crop: "Lentil (Masur)", msp: "₹6,700/qtl", marketPrice: "₹6,400–7,200/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
  { crop: "Onion", msp: "—", marketPrice: "₹18–40/kg", unit: "per kg", trend: "up", icon: "🧅" },
  { crop: "Potato", msp: "—", marketPrice: "₹8–18/kg", unit: "per kg", trend: "down", icon: "🥔" },
  { crop: "Tomato", msp: "—", marketPrice: "₹30–70/kg", unit: "per kg", trend: "up", icon: "🍅" },
  { crop: "Moong (Green Gram)", msp: "₹8,682/qtl", marketPrice: "₹8,400–9,200/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
  { crop: "Tur (Arhar)", msp: "₹7,550/qtl", marketPrice: "₹9,500–11,000/qtl", unit: "per quintal", trend: "up", icon: "🫘" },
];

// --- Student Exams & Entrance Tests (2026) ---
export const examData: ExamInfo[] = [
  // Engineering
  { name: "JEE Main 2026", fullName: "Joint Entrance Examination Main", examDate: "Session 1: Jan 22–31, 2026 | Session 2: Apr 1–15, 2026", registrationDeadline: "Session 2: Feb 28, 2026", eligibility: "Class 12 pass/appearing (PCM), no age limit", website: "jeemain.nta.nic.in", icon: "⚙️", category: "engineering" },
  { name: "JEE Advanced 2026", fullName: "Joint Entrance Examination Advanced (IIT)", examDate: "May 18, 2026", registrationDeadline: "May 2, 2026", eligibility: "Top 2,50,000 JEE Main qualifiers", website: "jeeadv.ac.in", icon: "🏗️", category: "engineering" },
  { name: "BITSAT 2026", fullName: "BITS Admission Test", examDate: "May 20 – Jun 5, 2026", registrationDeadline: "Apr 15, 2026", eligibility: "Class 12 with 75% aggregate in PCM/PCB", website: "bitsadmission.com", icon: "💡", category: "engineering" },

  // Medical
  { name: "NEET UG 2026", fullName: "National Eligibility cum Entrance Test (UG)", examDate: "May 4, 2026", registrationDeadline: "Mar 15, 2026", eligibility: "Class 12 pass (PCB), age 17+ by Dec 31, 2026", website: "neet.nta.nic.in", icon: "🩺", category: "medical" },
  { name: "NEET PG 2026", fullName: "National Eligibility cum Entrance Test (PG)", examDate: "Aug 11, 2026", registrationDeadline: "Jul 10, 2026", eligibility: "MBBS degree holders with internship completion", website: "natboard.edu.in", icon: "👨‍⚕️", category: "medical" },
  { name: "AIIMS INI CET 2026", fullName: "INI Combined Entrance Test", examDate: "Jul 2026 (tentative)", registrationDeadline: "Jun 2026", eligibility: "MBBS graduates for PG at AIIMS/JIPMER/PGIMER", website: "aiimsexams.ac.in", icon: "🏥", category: "medical" },

  // University Entrance
  { name: "CUET UG 2026", fullName: "Common University Entrance Test (UG)", examDate: "May 15–31, 2026", registrationDeadline: "Mar 25, 2026", eligibility: "Class 12 pass/appearing from recognized board", website: "cuet.samarth.ac.in", icon: "🎓", category: "university" },
  { name: "CUET PG 2026", fullName: "Common University Entrance Test (PG)", examDate: "Jun 10–20, 2026", registrationDeadline: "Apr 20, 2026", eligibility: "Bachelor's degree holders from recognized university", website: "cuet.samarth.ac.in", icon: "📚", category: "university" },
  { name: "IPU CET 2026", fullName: "IP University Common Entrance Test", examDate: "May 10–25, 2026 (multiple slots)", registrationDeadline: "Apr 10, 2026", eligibility: "Class 12 pass for UG / Graduation for PG (varies by programme)", website: "ipu.ac.in", icon: "🏛️", category: "university" },
  { name: "DUET 2026", fullName: "Delhi University Entrance Test (via CUET)", examDate: "Through CUET UG/PG 2026", registrationDeadline: "Via CUET portal", eligibility: "As per CUET criteria + DU programme requirements", website: "du.ac.in", icon: "📖", category: "university" },

  // Management
  { name: "CAT 2026", fullName: "Common Admission Test (IIMs)", examDate: "Nov 29, 2026", registrationDeadline: "Sep 20, 2026", eligibility: "Bachelor's degree with 50% (45% SC/ST)", website: "iimcat.ac.in", icon: "📊", category: "management" },
  { name: "XAT 2027", fullName: "Xavier Aptitude Test (XLRI)", examDate: "Jan 4, 2027", registrationDeadline: "Nov 30, 2026", eligibility: "Bachelor's degree from recognized university", website: "xatonline.in", icon: "📈", category: "management" },
  { name: "NMAT 2026", fullName: "NMIMS Management Aptitude Test", examDate: "Oct–Dec 2026 (window-based)", registrationDeadline: "Oct 10, 2026", eligibility: "Bachelor's degree with 50%", website: "nmat.org", icon: "🎯", category: "management" },
  { name: "SNAP 2026", fullName: "Symbiosis National Aptitude Test", examDate: "Dec 2026 (3 attempts)", registrationDeadline: "Nov 25, 2026", eligibility: "Graduation with 50% (45% SC/ST)", website: "snaptest.org", icon: "🔷", category: "management" },
  { name: "MAT 2026", fullName: "Management Aptitude Test (AIMA)", examDate: "Quarterly: Feb, May, Sep, Dec 2026", registrationDeadline: "Rolling basis", eligibility: "Bachelor's degree from recognized university", website: "mat.aima.in", icon: "📋", category: "management" },

  // Law
  { name: "CLAT 2026", fullName: "Common Law Admission Test", examDate: "Dec 1, 2026", registrationDeadline: "Oct 15, 2026", eligibility: "Class 12 pass with 45% (40% SC/ST) for UG", website: "consortiumofnlus.ac.in", icon: "⚖️", category: "law" },
  { name: "AILET 2026", fullName: "All India Law Entrance Test (NLU Delhi)", examDate: "Dec 2026", registrationDeadline: "Nov 2026", eligibility: "Class 12 pass with 50%", website: "nludelhi.ac.in", icon: "🏛️", category: "law" },

  // Professional
  { name: "CA Foundation 2026", fullName: "Chartered Accountancy Foundation", examDate: "May 2026 & Nov 2026", registrationDeadline: "Feb 28 (May) / Aug 31 (Nov)", eligibility: "Class 12 pass from recognized board", website: "icai.org", icon: "🧾", category: "professional" },
  { name: "CA Intermediate 2026", fullName: "Chartered Accountancy Intermediate", examDate: "May 2026 & Nov 2026", registrationDeadline: "Mar 15 (May) / Sep 15 (Nov)", eligibility: "CA Foundation qualified or Direct Entry (commerce graduates)", website: "icai.org", icon: "📑", category: "professional" },
  { name: "CA Final 2026", fullName: "Chartered Accountancy Final", examDate: "May 2026 & Nov 2026", registrationDeadline: "Mar 15 (May) / Sep 15 (Nov)", eligibility: "CA Intermediate qualified + 2.5 years articleship", website: "icai.org", icon: "🏆", category: "professional" },
  { name: "CS Executive 2026", fullName: "Company Secretary Executive", examDate: "Jun 2026 & Dec 2026", registrationDeadline: "Mar 25 (Jun) / Sep 25 (Dec)", eligibility: "CS Foundation pass or graduate", website: "icsi.edu", icon: "📜", category: "professional" },
  { name: "CMA Foundation 2026", fullName: "Cost & Management Accountancy Foundation", examDate: "Jun & Dec 2026", registrationDeadline: "Apr 15 (Jun) / Oct 15 (Dec)", eligibility: "Class 12 pass", website: "icmai.in", icon: "💹", category: "professional" },

  // Government Exams
  { name: "UPSC CSE 2026", fullName: "Civil Services Examination (IAS/IPS/IFS)", examDate: "Prelims: May 24, 2026 | Mains: Sep 2026", registrationDeadline: "Feb 28, 2026", eligibility: "Bachelor's degree, age 21–32 (relaxation for OBC/SC/ST)", website: "upsc.gov.in", icon: "🇮🇳", category: "govt-exam" },
  { name: "SSC CGL 2026", fullName: "Combined Graduate Level Examination", examDate: "Tier 1: Jul 2026 | Tier 2: Oct 2026", registrationDeadline: "Apr 30, 2026", eligibility: "Bachelor's degree from recognized university", website: "ssc.nic.in", icon: "📝", category: "govt-exam" },
  { name: "SSC CHSL 2026", fullName: "Combined Higher Secondary Level", examDate: "Aug 2026", registrationDeadline: "May 2026", eligibility: "Class 12 pass, age 18–27", website: "ssc.nic.in", icon: "✏️", category: "govt-exam" },
  { name: "IBPS PO 2026", fullName: "Institute of Banking Personnel Selection (PO)", examDate: "Prelims: Oct 2026 | Mains: Nov 2026", registrationDeadline: "Aug 2026", eligibility: "Graduation, age 20–30", website: "ibps.in", icon: "🏦", category: "govt-exam" },
  { name: "IBPS Clerk 2026", fullName: "IBPS Clerical Cadre", examDate: "Prelims: Dec 2026 | Mains: Jan 2027", registrationDeadline: "Oct 2026", eligibility: "Graduation, age 20–28", website: "ibps.in", icon: "🏦", category: "govt-exam" },
  { name: "RBI Grade B 2026", fullName: "Reserve Bank of India Officer Grade B", examDate: "Phase 1: Sep 2026 | Phase 2: Oct 2026", registrationDeadline: "Jul 2026", eligibility: "Bachelor's degree with 60% (55% SC/ST/PwBD), age 21–30", website: "rbi.org.in", icon: "🏛️", category: "govt-exam" },
  { name: "Railway RRB NTPC 2026", fullName: "Railway Recruitment Board Non-Technical", examDate: "CBT-1: Jun–Aug 2026", registrationDeadline: "Apr 2026", eligibility: "Graduation for some posts, Class 12 for others", website: "rrbcdg.gov.in", icon: "🚂", category: "govt-exam" },
  { name: "NDA 2026", fullName: "National Defence Academy (I & II)", examDate: "NDA I: Apr 13, 2026 | NDA II: Sep 2026", registrationDeadline: "Jan 2026 (I) / Jun 2026 (II)", eligibility: "Class 12 pass/appearing, age 16.5–19.5, unmarried", website: "upsc.gov.in", icon: "🎖️", category: "govt-exam" },
  { name: "CDS 2026", fullName: "Combined Defence Services", examDate: "CDS I: Apr 2026 | CDS II: Sep 2026", registrationDeadline: "Jan 2026 (I) / Jul 2026 (II)", eligibility: "Graduation (varies by branch), age 20–25 (varies)", website: "upsc.gov.in", icon: "⭐", category: "govt-exam" },
  { name: "UGC NET 2026", fullName: "National Eligibility Test (Lectureship/JRF)", examDate: "Jun 2026 & Dec 2026", registrationDeadline: "Mar 2026 (Jun) / Sep 2026 (Dec)", eligibility: "Master's degree with 55% (50% OBC/SC/ST)", website: "ugcnet.nta.nic.in", icon: "🎓", category: "govt-exam" },
];

// --- Government Job Openings (2026) ---
export const govtJobs: GovtJobInfo[] = [
  { title: "IAS/IPS/IFS — UPSC Civil Services 2026", organization: "Union Public Service Commission", vacancies: "~1,000 posts", lastDate: "Prelims: May 24, 2026", eligibility: "Graduate, 21–32 yrs", sector: "Administrative", icon: "🇮🇳" },
  { title: "SSC CGL 2026 — Group B & C Posts", organization: "Staff Selection Commission", vacancies: "~17,000 posts", lastDate: "May 15, 2026", eligibility: "Graduate", sector: "Central Govt", icon: "📝" },
  { title: "IBPS PO 2026 — Probationary Officers", organization: "IBPS", vacancies: "~4,500 posts", lastDate: "Aug 2026", eligibility: "Graduate, 20–30 yrs", sector: "Banking", icon: "🏦" },
  { title: "RBI Grade B Officer 2026", organization: "Reserve Bank of India", vacancies: "~300 posts", lastDate: "Jul 2026", eligibility: "Graduate 60%, 21–30 yrs", sector: "Banking", icon: "🏛️" },
  { title: "Railway RRB NTPC 2026", organization: "Railway Recruitment Board", vacancies: "~35,000+ posts", lastDate: "Apr 2026", eligibility: "12th / Graduate", sector: "Railways", icon: "🚂" },
  { title: "Indian Army Agniveer 2026", organization: "Indian Army", vacancies: "~46,000 posts", lastDate: "Rolling", eligibility: "10th/12th, 17.5–23 yrs", sector: "Defence", icon: "🎖️" },
  { title: "Indian Navy Agniveer SSR/MR 2026", organization: "Indian Navy", vacancies: "~3,000 posts", lastDate: "Rolling", eligibility: "12th (PCM for SSR), 17.5–23 yrs", sector: "Defence", icon: "⚓" },
  { title: "DRDO Scientist B 2026", organization: "DRDO (via GATE)", vacancies: "~200 posts", lastDate: "May 2026", eligibility: "B.E/B.Tech + GATE score", sector: "Research & Defence", icon: "🔬" },
  { title: "ISRO Scientist/Engineer SC 2026", organization: "ISRO", vacancies: "~150 posts", lastDate: "Jun 2026", eligibility: "B.E/B.Tech, 35 yrs max", sector: "Space & Research", icon: "🚀" },
  { title: "Teacher TET / CTET 2026", organization: "CBSE / State Boards", vacancies: "Various state quotas", lastDate: "Rolling by state", eligibility: "D.El.Ed / B.Ed + TET qualified", sector: "Education", icon: "👩‍🏫" },
  { title: "State PSC — Various States 2026", organization: "State Public Service Commissions", vacancies: "~50,000+ combined", lastDate: "Varies by state", eligibility: "Graduate, varies", sector: "State Govt", icon: "🏢" },
  { title: "SEBI Grade A Officer 2026", organization: "Securities & Exchange Board", vacancies: "~100 posts", lastDate: "Jul 2026", eligibility: "Graduate/PG, 30 yrs max", sector: "Finance/Regulatory", icon: "📊" },
  { title: "FCI Manager & AGM 2026", organization: "Food Corporation of India", vacancies: "~5,000 posts", lastDate: "May 30, 2026", eligibility: "Graduate, varies by post", sector: "Central Govt", icon: "🏢" },
  { title: "UPSC EPFO Enforcement Officer 2026", organization: "UPSC / EPFO", vacancies: "~500 posts", lastDate: "Apr 25, 2026", eligibility: "Graduate, 21–30 yrs", sector: "Central Govt", icon: "📋" },
];

// --- Government Schemes / Policy News (up to April 7, 2026) ---
export const govtSchemeNews: NewsItem[] = [
  {
    id: "gs1", title: "Delhi Launches 'Lakhpati Bitiya Yojana' for Girls' Education",
    summary: "Delhi govt rolls out Lakhpati Bitiya Scheme replacing the old Ladli plan. Girls born in Delhi get ₹1 lakh deposited in their account for education and empowerment. Gazette notification issued March 30, effective April 1, 2026.",
    date: "Apr 1, 2026", source: "Delhi Govt / Business Standard", category: "govt-schemes", icon: "👧"
  },
  {
    id: "gs2", title: "Odisha Annapurna Yojana — ₹8,813 Crore for Food Security",
    summary: "Odisha expands food net with Annapurna Yojana providing 5 kg additional rice per person monthly. Covers 3.28 crore beneficiaries, significantly expanding food security beyond NFSA. CM Majhi chairs cabinet approval.",
    date: "Apr 5, 2026", source: "Business Standard", category: "govt-schemes", icon: "🍚"
  },
  {
    id: "gs3", title: "Punjab Aashirwad Scheme — Financial Assistance to Women",
    summary: "Punjab cabinet approves scheme giving ₹2,500/month financial assistance to women aged 18–60. Launched on April 13 (Baisakhi). Applications via Punjab Seva Kendras and online portal.",
    date: "Apr 3, 2026", source: "Tribune India", category: "govt-schemes", icon: "💳"
  },
  {
    id: "gs4", title: "Commercial LPG Prices Hiked ₹195.50 Amid West Asia War",
    summary: "19-kg commercial LPG cylinder now costs ₹2,078.50 in Delhi after ₹195.50 hike due to rising global crude amid Iran-US war. Domestic 14.2-kg cylinder rates unchanged at ₹803 (Delhi).",
    date: "Apr 1, 2026", source: "Indian Oil / New Indian Express", category: "govt-schemes", icon: "🔥"
  },
  {
    id: "gs5", title: "Centre Eases Fund Release for Centrally Sponsored Schemes",
    summary: "Govt introduces 'mother sanctions' allowing ministries to issue consolidated approvals for multiple centrally sponsored schemes at once. Speeds up fund flow to states significantly.",
    date: "Apr 4, 2026", source: "Mint / PIB", category: "govt-schemes", icon: "💰"
  },
  {
    id: "gs6", title: "Odisha Approves ₹589 Crore Handloom Scheme (MHBY)",
    summary: "Mukhyamantri Hastatanta Bunkar Yojana approved at ₹589 crore to boost weavers and skill development. Also cleared smartphones for 79,000 anganwadi workers for POSHAN tracking.",
    date: "Apr 6, 2026", source: "New Indian Express", category: "govt-schemes", icon: "🧵"
  },
  {
    id: "gs7", title: "Odisha Doubles SC/ST Reservation Quota",
    summary: "Odisha government doubles reservation for SC and ST communities in government jobs and education. Historic decision aims to address decades of social disparity in the state.",
    date: "Apr 5, 2026", source: "Indian Express", category: "govt-schemes", icon: "⚖️"
  },
  {
    id: "gs8", title: "Union Budget 2026-27 — No Tax Up to ₹12.75 Lakh",
    summary: "Budget 2026-27 continues zero income tax for salaried up to ₹12.75 lakh under new regime. Standard deduction ₹75,000. Focus on agriculture, MSME, digital economy, and green energy.",
    date: "Feb 2026", source: "Ministry of Finance / PIB", category: "govt-schemes", icon: "💰"
  },
  {
    id: "gs9", title: "PM Vishwakarma Yojana 2.0 — Enhanced Artisan Support",
    summary: "Expanded PM Vishwakarma scheme now covers 30 trades. Artisans get ₹3 lakh collateral-free loan at 5% interest, digital skills training, and e-marketplace listing. Apply at pmvishwakarma.gov.in.",
    date: "Apr 2026", source: "Ministry of MSME", category: "govt-schemes", icon: "🔨"
  },
  {
    id: "gs10", title: "Digital Agriculture Mission — AI for Farmers Launched",
    summary: "New Digital Agriculture Mission provides AI-based crop advisory, satellite-monitored soil health cards, and drone-assisted precision farming. ₹2,817 crore allocation for FY2026-27.",
    date: "Apr 2026", source: "Ministry of Agriculture", category: "govt-schemes", icon: "🌱"
  },
  {
    id: "gs11", title: "Mudra Loan Tarun Category Limit Raised to ₹20 Lakh",
    summary: "PM MUDRA Yojana's Tarun category increased from ₹10 lakh to ₹20 lakh. Over 47 crore loans disbursed since inception. Apply at any bank branch or Udyami Mitra portal.",
    date: "Apr 2026", source: "Ministry of Finance", category: "govt-schemes", icon: "💼"
  },
  {
    id: "gs12", title: "PM Surya Ghar Muft Bijli Yojana — 1 Crore Solar Rooftops",
    summary: "Free solar rooftop installation for households with up to 3 kW. Get 300 units free electricity/month. Subsidy of ₹78,000 for 3kW system. Apply at pmsuryaghar.gov.in.",
    date: "Feb 2026", source: "MNRE", category: "govt-schemes", icon: "☀️"
  },
];

// --- Global Policies & Economy (March 2025 – March 2026, weekly) ---
export const globalPolicyNews: NewsItem[] = [
  { id: "gp01", title: "US Fed Cuts Rate to 4.75% — First Cut in 18 Months", summary: "Federal Reserve begins easing cycle with 25bps cut to 4.75%. Markets rally. Dow touches 42,000. India's RBI holds repo rate at 6.5% citing domestic inflation.", date: "Mar 10, 2025", source: "Federal Reserve", category: "global-policy", icon: "🇺🇸" },
  { id: "gp02", title: "EU Unveils €800B Green Industrial Plan", summary: "European Commission announces €800 billion green industrial package to compete with US IRA. Focus on EV batteries, hydrogen, and solar manufacturing. India eyes partnership opportunities.", date: "Mar 17, 2025", source: "European Commission", category: "global-policy", icon: "🇪🇺" },
  { id: "gp03", title: "India-EFTA Trade Deal Signed — $100B Investment Pledge", summary: "India signs trade agreement with EFTA nations (Switzerland, Norway, Iceland, Liechtenstein). EFTA commits $100B investment over 15 years. Pharma and IT services get preferential access.", date: "Mar 24, 2025", source: "MEA India", category: "global-policy", icon: "🇨🇭" },
  { id: "gp04", title: "China Launches ¥2 Trillion Stimulus Package", summary: "PBoC injects ¥2 trillion via rate cuts, reserve ratio reduction, and property market support. Yuan stabilizes at 7.15/USD. Global commodity prices respond positively.", date: "Mar 31, 2025", source: "PBoC / Bloomberg", category: "global-policy", icon: "🇨🇳" },
  { id: "gp05", title: "WTO Global Trade Forecast: 3.3% Growth for 2025", summary: "WTO projects moderate global trade recovery at 3.3%. Risks include geopolitical tensions, supply chain fragmentation, and rising protectionism. India's exports grow 8% YoY.", date: "Apr 7, 2025", source: "WTO", category: "global-policy", icon: "🌐" },
  { id: "gp06", title: "IMF Upgrades India's Growth Forecast to 6.5%", summary: "IMF raises India's FY2025-26 GDP forecast to 6.5% from 6.1%, citing strong domestic demand, PLI-driven manufacturing, and robust services exports. China forecast cut to 4.5%.", date: "Apr 14, 2025", source: "IMF", category: "global-policy", icon: "📊" },
  { id: "gp07", title: "US-Japan-Philippines Trilateral — Indo-Pacific Security", summary: "US, Japan, and Philippines hold first trilateral summit focused on South China Sea security, joint naval patrols, and economic cooperation. India participates as observer.", date: "Apr 21, 2025", source: "White House / Kyodo", category: "global-policy", icon: "🌏" },
  { id: "gp08", title: "UK Rejoins Horizon Europe Research Program", summary: "Post-Brexit, UK formally re-enters EU's €95.5B Horizon Europe science program. British and Indian universities to collaborate on AI and quantum computing research.", date: "Apr 28, 2025", source: "UK Govt / BBC", category: "global-policy", icon: "🇬🇧" },
  { id: "gp09", title: "Global Crypto Regulation — G20 Framework Agreed", summary: "G20 nations adopt unified crypto regulation framework. Mandatory KYC for all exchanges, stablecoin reserves requirement, and cross-border transaction reporting. India's VDA tax unchanged.", date: "May 5, 2025", source: "G20 / Reuters", category: "global-policy", icon: "₿" },
  { id: "gp10", title: "Russia Faces Deeper EU Sanctions — 14th Package", summary: "EU adopts 14th sanctions package targeting Russian LNG, diamonds, and metals. Price cap on Russian oil tightened to $55/barrel. India continues discounted Russian oil imports.", date: "May 12, 2025", source: "EU Council", category: "global-policy", icon: "🇷🇺" },
  { id: "gp11", title: "India's RBI Cuts Repo Rate to 6.25%", summary: "RBI Governor announces 25bps repo rate cut to 6.25% — first cut in 2 years. Inflation eases to 4.1%. Home and auto loan EMIs expected to decrease. Sensex crosses 82,000.", date: "May 19, 2025", source: "RBI", category: "global-policy", icon: "🇮🇳" },
  { id: "gp12", title: "US-China Trade Tensions — New 25% Tariffs on EVs", summary: "US imposes 25% tariffs on Chinese EVs, solar cells, and batteries. China threatens retaliation on US agriculture. Global EV supply chain faces disruption. India sees FDI opportunity.", date: "May 26, 2025", source: "USTR", category: "global-policy", icon: "🚗" },
  { id: "gp13", title: "G7 Summit — AI Safety, Ukraine, Climate Top Agenda", summary: "G7 leaders meet in Italy. Key outcomes: $50B Ukraine loan using frozen Russian assets, AI safety commitments, and accelerated climate finance for developing nations. India attends as guest.", date: "Jun 2, 2025", source: "G7 / Reuters", category: "global-policy", icon: "🏛️" },
  { id: "gp14", title: "Saudi Arabia Diversifies — $600B Vision 2030 Update", summary: "Saudi PIF unveils updated Vision 2030 investments totaling $600B. Focus on AI, tourism, NEOM city, and entertainment. Indian IT firms win $3B in contracts.", date: "Jun 9, 2025", source: "SPA / Bloomberg", category: "global-policy", icon: "🇸🇦" },
  { id: "gp15", title: "Global Food Prices Index Falls to 2-Year Low", summary: "FAO Food Price Index drops 12% YoY driven by bumper harvests in US, Brazil, and India. Wheat and rice prices stabilize. India lifts export restrictions on non-basmati rice.", date: "Jun 16, 2025", source: "FAO", category: "global-policy", icon: "🌾" },
  { id: "gp16", title: "EU AI Act Enters Full Force — First Global AI Law", summary: "EU AI Act becomes fully enforceable. Bans social scoring, emotion recognition in workplaces, and unregulated facial recognition. Indian IT companies rush for compliance certification.", date: "Jun 23, 2025", source: "European Parliament", category: "global-policy", icon: "🤖" },
  { id: "gp17", title: "India's UPI Goes Global — Launches in 12 New Countries", summary: "UPI payment system expands to 12 new countries including US, UK, Canada, Australia. NRIs can link international bank accounts. Transaction volume exceeds 18 billion/month domestically.", date: "Jun 30, 2025", source: "NPCI / RBI", category: "global-policy", icon: "💳" },
  { id: "gp18", title: "OECD Global Minimum Tax — 140 Nations Implementing", summary: "OECD's 15% global minimum tax on multinationals goes live in 140 jurisdictions. Expected to generate $220B/year globally. India adjusts corporate tax framework accordingly.", date: "Jul 7, 2025", source: "OECD", category: "global-policy", icon: "💰" },
  { id: "gp19", title: "US Fed Pauses — Rates Steady at 4.75%", summary: "Fed holds rates at 4.75% amid mixed signals. Core PCE inflation at 2.6%. Markets price in one more cut for September. Dollar index steady at 103.", date: "Jul 14, 2025", source: "Federal Reserve", category: "global-policy", icon: "🇺🇸" },
  { id: "gp20", title: "India-Middle East-Europe Corridor (IMEC) — Construction Begins", summary: "First phase of IMEC economic corridor begins with India-UAE rail/shipping link. $20B project to rival China's Belt & Road. Expected to boost India-EU trade by 40%.", date: "Jul 21, 2025", source: "MEA / EU", category: "global-policy", icon: "🚂" },
  { id: "gp21", title: "BRICS New Development Bank Issues $10B in Bonds", summary: "NDB issues $10 billion in infrastructure bonds for member nations. India receives $2.5B for highway and metro projects. Bank's credit rating upgraded by Moody's.", date: "Jul 28, 2025", source: "NDB / BRICS", category: "global-policy", icon: "🏦" },
  { id: "gp22", title: "Australia's Carbon Credit Market Launches", summary: "Australia launches national carbon credit trading system. Indian renewable energy companies explore cross-border carbon credit sales. Initial trading at $28/ton CO2.", date: "Aug 4, 2025", source: "Australian Govt", category: "global-policy", icon: "🇦🇺" },
  { id: "gp23", title: "US Inflation Falls to 2.3% — Lowest Since 2021", summary: "US CPI drops to 2.3% YoY. Housing and services costs finally easing. Markets bet on September rate cut. Global bond yields decline. India's 10-year yield at 6.9%.", date: "Aug 11, 2025", source: "BLS / Fed", category: "global-policy", icon: "📉" },
  { id: "gp24", title: "India Becomes World's 4th Largest Stock Market", summary: "India's total market cap surpasses Hong Kong at $5.5 trillion. BSE Sensex at 84,000. Foreign institutional investment surges 25%. SEBI tightens derivative trading regulations.", date: "Aug 18, 2025", source: "BSE / Bloomberg", category: "global-policy", icon: "📈" },
  { id: "gp25", title: "Global Semiconductor Alliance — US, Japan, EU, India", summary: "Quad semiconductor pact signed to create resilient chip supply chains. India's Gujarat fab gets $1.5B additional investment. Focus on 28nm to 7nm chips.", date: "Aug 25, 2025", source: "Quad / MeitY", category: "global-policy", icon: "💻" },
  { id: "gp26", title: "UN General Assembly — Climate and AI Dominate", summary: "79th UNGA focuses on climate finance ($300B pledge for developing nations) and global AI governance. India's PM addresses on multilateralism and reformed UNSC.", date: "Sep 1, 2025", source: "United Nations", category: "global-policy", icon: "🇺🇳" },
  { id: "gp27", title: "US Fed Cuts Rate to 4.50% — September Surprise", summary: "Fed delivers 25bps cut to 4.50%, citing cooling labor market. Dot plot signals 2 more cuts by mid-2026. Emerging market currencies rally. Rupee strengthens to ₹83.2.", date: "Sep 8, 2025", source: "Federal Reserve", category: "global-policy", icon: "🇺🇸" },
  { id: "gp28", title: "India Signs Critical Minerals Pact with Australia & Chile", summary: "India secures long-term supply agreements for lithium, cobalt, and rare earths with Australia and Chile. Essential for EV battery and defense manufacturing under Atmanirbhar Bharat.", date: "Sep 15, 2025", source: "MEA / Mines Ministry", category: "global-policy", icon: "⛏️" },
  { id: "gp29", title: "ECB Cuts Rates to 3.0% — Eurozone Recession Fears", summary: "ECB cuts main refinancing rate to 3.0% as Germany enters technical recession. Eurozone manufacturing PMI at 44. Euro weakens against dollar and rupee.", date: "Sep 22, 2025", source: "ECB", category: "global-policy", icon: "🇪🇺" },
  { id: "gp30", title: "World Bank Warns of Emerging Market Debt Crisis", summary: "World Bank report flags 25 developing nations at risk of debt distress. Total EM debt exceeds $98 trillion. Calls for G20-led debt restructuring framework.", date: "Sep 29, 2025", source: "World Bank", category: "global-policy", icon: "🏛️" },
  { id: "gp31", title: "India's PLI Scheme 2.0 — ₹2 Lakh Crore for 10 Sectors", summary: "Expanded PLI scheme targets semiconductors, green hydrogen, drones, telecom, and food processing. Expected to create 60 lakh jobs and $250B in production over 5 years.", date: "Oct 6, 2025", source: "DPIIT", category: "global-policy", icon: "🏭" },
  { id: "gp32", title: "BRICS Summit — New Currency Discussion Heats Up", summary: "BRICS+ summit in Kazan discusses common payment platform and settlement currency. No formal currency launch but pilot cross-border CBDC transactions between India, Russia, and Brazil.", date: "Oct 13, 2025", source: "BRICS / TASS", category: "global-policy", icon: "🌍" },
  { id: "gp33", title: "US Tech Regulation — Big Tech Antitrust Rulings", summary: "US DOJ wins antitrust case against Google for search monopoly. Potential breakup or behavioral remedies. Apple faces separate App Store lawsuit. Indian startups benefit from level playing field.", date: "Oct 20, 2025", source: "DOJ / Reuters", category: "global-policy", icon: "⚖️" },
  { id: "gp34", title: "COP30 Brazil — $300B Climate Finance Pledge", summary: "COP30 in Belém secures $300 billion annual climate finance pledge for developing nations by 2030. India pushes for technology transfer and loss & damage fund. Carbon market rules finalized.", date: "Oct 27, 2025", source: "UNFCCC", category: "global-policy", icon: "🌿" },
  { id: "gp35", title: "US Presidential Election Campaigns Heat Up", summary: "US 2026 midterm positioning intensifies as both parties unveil economic platforms. Key issues: AI jobs impact, housing crisis, healthcare costs, and immigration. Global markets watch closely.", date: "Nov 3, 2025", source: "AP / CNN", category: "global-policy", icon: "🗳️" },
  { id: "gp36", title: "OPEC+ Agrees to Gradual Output Increase from Q1 2026", summary: "OPEC+ announces phased production increase of 500K bpd starting January 2026. Brent crude drops to $82/barrel. India benefits from lower import bill — saves $4B quarterly.", date: "Nov 10, 2025", source: "OPEC", category: "global-policy", icon: "🛢️" },
  { id: "gp37", title: "India's Q2 GDP at 7.1% — Services Sector Booms", summary: "India posts 7.1% Q2 GDP growth — fastest among G20. Services (8.2%) and construction (9.1%) lead. Manufacturing steady at 5.8%. FDI inflows up 18% YoY.", date: "Nov 17, 2025", source: "MoSPI", category: "global-policy", icon: "🇮🇳" },
  { id: "gp38", title: "Global Supply Chain Index at 5-Year Best", summary: "NY Fed Global Supply Chain Pressure Index hits lowest level since 2019. Shipping costs normalize. Container rates from Asia to Europe down 40% from 2024 peaks.", date: "Nov 24, 2025", source: "NY Fed", category: "global-policy", icon: "🚢" },
  { id: "gp39", title: "US Midterm Elections — Republicans Hold House", summary: "US midterms: Republicans narrowly hold House, Democrats gain Senate seats. Divided Congress expected to slow major legislation. Market volatility subsides post-election.", date: "Dec 1, 2025", source: "AP News", category: "global-policy", icon: "🇺🇸" },
  { id: "gp40", title: "RBI Holds Repo Rate at 6.25% — Inflation Under Control", summary: "RBI maintains repo rate at 6.25% for second consecutive meeting. CPI inflation at 4.3%. GDP growth forecast raised to 6.7%. Rupee range-bound at ₹83.5-84.5.", date: "Dec 8, 2025", source: "RBI", category: "global-policy", icon: "🇮🇳" },
  { id: "gp41", title: "US Fed Cuts Rate to 4.25% — Third Cut of 2025", summary: "Fed delivers third 25bps rate cut, bringing federal funds rate to 4.25%. Powell signals slower pace in 2026. US unemployment edges up to 4.2%. Dollar weakens modestly.", date: "Dec 15, 2025", source: "Federal Reserve", category: "global-policy", icon: "🏦" },
  { id: "gp42", title: "Global EV Sales Cross 20 Million in 2025", summary: "Electric vehicle sales surpass 20 million units globally. China leads with 10M, Europe 5M, US 2.5M, India 200K. Battery costs drop 20% to $100/kWh average.", date: "Dec 22, 2025", source: "IEA / BloombergNEF", category: "global-policy", icon: "🔋" },
  { id: "gp43", title: "India's Digital Economy Reaches $350 Billion", summary: "India's digital economy estimated at $350B (8.5% of GDP). UPI processes 15B transactions/month. Digital services exports grow 22%. Govt targets $1T digital economy by 2030.", date: "Dec 29, 2025", source: "MeitY / NASSCOM", category: "global-policy", icon: "📱" },
  { id: "gp44", title: "WHO Declares End of Global COVID Emergency Monitoring", summary: "WHO formally ends all COVID-19 special monitoring programs. Global vaccination reached 75%. New combined flu-COVID annual vaccine recommended for elderly.", date: "Jan 5, 2026", source: "WHO", category: "global-policy", icon: "🏥" },
  { id: "gp45", title: "EU Carbon Border Tax (CBAM) Fully Operational", summary: "The EU's Carbon Border Adjustment Mechanism now charges importers for carbon emissions in steel, cement, aluminium. Indian exporters face 8-12% additional costs.", date: "Jan 12, 2026", source: "European Commission", category: "global-policy", icon: "🇪🇺" },
  { id: "gp46", title: "BRICS+ Expands — 5 New Members Join", summary: "Indonesia, Nigeria, Turkey, Thailand, and Vietnam join BRICS+. Combined GDP now exceeds G7. New Development Bank announces $50B lending plan for 2026-30.", date: "Jan 19, 2026", source: "BRICS Secretariat", category: "global-policy", icon: "🌍" },
  { id: "gp47", title: "China's GDP Growth Slows to 4.2%", summary: "China's economy grew 4.2% in Q4 2025, down from 5.2% — weakest in decades. Property crisis, deflation, and youth unemployment at 18.8% drive the slowdown.", date: "Jan 26, 2026", source: "NBS China", category: "global-policy", icon: "🇨🇳" },
  { id: "gp48", title: "India-UK Free Trade Agreement Signed", summary: "Historic FTA signed covering 90% of tariff lines. Indian IT services, textiles, pharma get preferential access. UK goods like scotch, auto parts see reduced duties.", date: "Feb 2, 2026", source: "MEA India", category: "global-policy", icon: "🇬🇧" },
  { id: "gp49", title: "OPEC+ Extends Oil Production Cuts to Q3 2026", summary: "Saudi-led OPEC+ extends 2.2M bpd cuts through September 2026. Brent crude holds at $88-92/barrel. India pushes for long-term supply deals with Russia and UAE.", date: "Feb 9, 2026", source: "OPEC", category: "global-policy", icon: "🛢️" },
  { id: "gp50", title: "EU Digital Services Act — Big Tech Fines Begin", summary: "EU fines Meta €1.2B and TikTok €800M under Digital Services Act for algorithmic transparency failures. India studying similar digital regulations.", date: "Feb 16, 2026", source: "European Commission", category: "global-policy", icon: "📱" },
  { id: "gp51", title: "Global Debt Hits $315 Trillion — IMF Warning", summary: "IMF warns global debt surpasses $315 trillion — 330% of world GDP. Developing nations face debt distress. Sri Lanka, Ghana, Zambia undergo restructuring.", date: "Feb 23, 2026", source: "IMF", category: "global-policy", icon: "💸" },
  { id: "gp52", title: "US Federal Reserve Holds Rates at 4.25%", summary: "The Fed paused rate cuts citing persistent core inflation at 2.8%. Markets expect one more 25bps cut in June 2026. Dollar index strengthened to 105.2.", date: "Mar 2, 2026", source: "Federal Reserve", category: "global-policy", icon: "🇺🇸" },
  { id: "gp53", title: "India's GDP Grows 6.8% — Fastest Major Economy", summary: "India posts 6.8% GDP growth in FY2025-26, driven by services, manufacturing (PLI), and digital economy. IMF projects 7.1% for FY2026-27. Rupee stable at ₹84.5/USD.", date: "Mar 5, 2026", source: "MoSPI / IMF", category: "global-policy", icon: "🇮🇳" },
  { id: "gp54", title: "US-China Tech Decoupling Intensifies", summary: "US bans export of advanced AI chips (H200, B100) to China. China retaliates with rare earth export controls on gallium and germanium. Global tech supply chains disrupted.", date: "Mar 9, 2026", source: "US Commerce Dept", category: "global-policy", icon: "⚡" },
  { id: "gp55", title: "Global AI Regulation — UN Framework Adopted", summary: "195 nations adopt the UN AI Governance Framework mandating transparency, bias audits, and safety testing for AI systems. India co-chaired the drafting committee.", date: "Mar 11, 2026", source: "United Nations", category: "global-policy", icon: "🤖" },
  { id: "gp56", title: "India's RBI Cuts Repo Rate to 6.0% — Third Cut", summary: "RBI delivers third consecutive 25bps cut, bringing repo rate to 6.0%. CPI inflation steady at 3.8%. Home loan EMIs drop further. GDP forecast upgraded to 7.2% for FY2026-27.", date: "Apr 2, 2026", source: "RBI", category: "global-policy", icon: "🇮🇳" },
  { id: "gp57", title: "US Reciprocal Tariffs — 26% on Indian Goods", summary: "US announces 26% reciprocal tariffs on Indian exports including textiles, pharma, and auto parts. India retaliates with targeted duties on US tech and agriculture imports. Trade talks initiated.", date: "Apr 3, 2026", source: "USTR / MEA", category: "global-policy", icon: "🇺🇸" },
  { id: "gp58", title: "China GDP Slows Further to 3.9% in Q1 2026", summary: "China's Q1 GDP growth hits 3.9% — weakest since pandemic. Property sector collapse, deflation at -0.8%, and youth unemployment at 21.3% weigh on outlook. PBoC announces emergency stimulus.", date: "Apr 5, 2026", source: "NBS China / Bloomberg", category: "global-policy", icon: "🇨🇳" },
  { id: "gp59", title: "India Launches National Green Hydrogen Mission Phase 2", summary: "Phase 2 targets 10 MMTPA green hydrogen production by 2030. ₹19,744 crore allocated. 50+ electrolyser plants approved. India aims to become global green hydrogen hub.", date: "Apr 6, 2026", source: "MNRE", category: "global-policy", icon: "⚡" },
  { id: "gp60", title: "Global Stock Markets Volatile Amid Trade War Fears", summary: "Dow drops 1,200 points, Sensex falls 1,800 points as US-China-EU trade tensions escalate. Gold hits $2,450/oz. Bond yields drop as investors flee to safety.", date: "Apr 7, 2026", source: "Bloomberg / Reuters", category: "global-policy", icon: "📉" },
];

// --- International News (March 2025 – April 7, 2026) ---
export const internationalNews: NewsItem[] = [
  { id: "in01", title: "Russia Launches Massive Spring Offensive in Eastern Ukraine", summary: "Russia deploys 100K+ troops in largest offensive since 2022. Intense fighting near Pokrovsk and Chasiv Yar. EU pledges additional €5B military aid to Ukraine. India calls for diplomacy.", date: "Mar 10, 2025", source: "Reuters / BBC", category: "international", icon: "⚔️" },
  { id: "in02", title: "Haiti — UN Approves Multinational Security Mission", summary: "UN Security Council authorizes Kenya-led multinational force for Haiti. Gang violence displaces 2 million. India contributes logistics and medical support.", date: "Mar 17, 2025", source: "UN / AP", category: "international", icon: "🇭🇹" },
  { id: "in03", title: "Taiwan Strait — China Conducts Largest Military Drill", summary: "PLA conducts 3-day 'Joint Sword-2025' military exercise encircling Taiwan. US deploys 2 carrier groups. G7 urges restraint. India monitors situation.", date: "Mar 24, 2025", source: "Xinhua / AP", category: "international", icon: "🇹🇼" },
  { id: "in04", title: "Earthquake Hits Turkey-Syria Border — 1,200 Dead", summary: "6.8 magnitude earthquake strikes southeastern Turkey. Over 1,200 killed, 15,000 displaced. International rescue teams deployed. India sends NDRF team and $5M aid.", date: "Mar 31, 2025", source: "USGS / Al Jazeera", category: "international", icon: "🌍" },
  { id: "in05", title: "Iran Nuclear Talks Collapse — IAEA Reports Enrichment Surge", summary: "Iran enriches uranium to 83.7% — near weapons grade. IAEA emergency meeting called. US and Israel warn of 'all options on the table'. India urges JCPOA revival.", date: "Apr 7, 2025", source: "IAEA / Reuters", category: "international", icon: "☢️" },
  { id: "in06", title: "South Africa Elections — ANC Loses Majority for First Time", summary: "ANC wins only 40% in historic elections. Coalition government formed with DA and IFP. Ramaphosa continues as President. Economic reforms and anti-corruption measures promised.", date: "Apr 14, 2025", source: "SABC / Reuters", category: "international", icon: "🇿🇦" },
  { id: "in07", title: "India Heatwave — Temperatures Exceed 50°C in Rajasthan", summary: "Record-breaking heatwave grips northern India. Delhi hits 49.8°C, Rajasthan breaches 50°C. Over 200 deaths reported. Schools closed. Power demand breaks all-time records.", date: "Apr 21, 2025", source: "IMD / NDTV", category: "international", icon: "🌡️" },
  { id: "in08", title: "Ethiopia-Somaliland Port Deal — Red Sea Tensions Rise", summary: "Ethiopia's controversial port deal with Somaliland sparks tensions with Somalia and regional powers. AU mediates. India concerned about Red Sea trade route security.", date: "Apr 28, 2025", source: "Africa Report / Reuters", category: "international", icon: "🇪🇹" },
  { id: "in09", title: "Gaza — ICJ Orders Israel to Halt Rafah Offensive", summary: "International Court of Justice orders Israel to stop military operations in Rafah. 1.5 million displaced. Humanitarian situation critical. India votes in favor at UNGA.", date: "May 5, 2025", source: "ICJ / Al Jazeera", category: "international", icon: "⚖️" },
  { id: "in10", title: "Cyclone Remal Devastates Bangladesh & Eastern India", summary: "Severe cyclone Remal makes landfall in Bangladesh-West Bengal coast. 85 killed, 5 million affected. Storm surge floods Sundarbans. India deploys military for rescue operations.", date: "May 12, 2025", source: "IMD / Dhaka Tribune", category: "international", icon: "🌀" },
  { id: "in11", title: "Putin Visits China — Deepening Strategic Partnership", summary: "Putin's state visit to Beijing. New $200B energy and trade agreements signed. Joint statement on 'multipolar world order'. US and EU express concern over growing axis.", date: "May 19, 2025", source: "TASS / Xinhua", category: "international", icon: "🇷🇺" },
  { id: "in12", title: "Mexico Elects First Woman President — Claudia Sheinbaum", summary: "Claudia Sheinbaum wins Mexican presidential election by landslide. Promises continuity of AMLO's social programs plus stronger climate action. US-Mexico border policy key priority.", date: "May 26, 2025", source: "AP / Reuters", category: "international", icon: "🇲🇽" },
  { id: "in13", title: "Sudan Civil War Escalates — 5 Million Displaced", summary: "RSF captures key Darfur towns. SAF launches counter-offensive near Khartoum. 5 million internally displaced. UN warns of genocide risk. India evacuates remaining diplomats.", date: "Jun 2, 2025", source: "UNHCR / BBC", category: "international", icon: "🇸🇩" },
  { id: "in14", title: "North Korea Launches ICBM — Pacific Alert Raised", summary: "North Korea tests Hwasong-18 solid-fuel ICBM with 15,000 km range. Japan issues emergency alerts. US-ROK conduct joint missile defense drills. UNSC emergency session called.", date: "Jun 9, 2025", source: "Yonhap / Reuters", category: "international", icon: "🚀" },
  { id: "in15", title: "EU Elections — Far-Right Gains Across Europe", summary: "European Parliament elections see significant far-right gains in France, Germany, Italy, and Netherlands. Von der Leyen secures second term. Green Deal faces political headwinds.", date: "Jun 16, 2025", source: "Euronews / BBC", category: "international", icon: "🇪🇺" },
  { id: "in16", title: "India-Canada Diplomatic Crisis — Envoys Expelled", summary: "India-Canada diplomatic standoff intensifies over Nijjar case. Both nations expel senior diplomats. Trade and visa processing disrupted. Five Eyes nations issue joint concern.", date: "Jun 23, 2025", source: "MEA / Globe & Mail", category: "international", icon: "🇨🇦" },
  { id: "in17", title: "Flooding in Southern China — 100+ Dead, Millions Displaced", summary: "Worst flooding in Guangdong province in 100 years. Over 100 dead, 3 million evacuated. Pearl River Delta factories shut. Global electronics supply chain impacted.", date: "Jun 30, 2025", source: "Xinhua / Reuters", category: "international", icon: "🌊" },
  { id: "in18", title: "NATO Summit — Alliance Expands Asia-Pacific Focus", summary: "NATO summit in The Hague addresses Ukraine support, China competition, and AI warfare. Japan, South Korea, Australia attend as partners. India declines invitation, maintains non-alignment.", date: "Jul 7, 2025", source: "NATO / BBC", category: "international", icon: "🏛️" },
  { id: "in19", title: "Iran-Israel Proxy War Escalates in Lebanon", summary: "Hezbollah-Israel cross-border clashes intensify. 200,000 displaced in southern Lebanon. US mediates ceasefire. Iran threatens to intervene directly. Oil prices surge to $88/barrel.", date: "Jul 14, 2025", source: "Reuters / Al Jazeera", category: "international", icon: "🇱🇧" },
  { id: "in20", title: "Bangladesh Protests — PM Hasina Ousted by Military", summary: "Massive student-led protests force PM Sheikh Hasina to flee. Military installs interim government led by Nobel laureate Muhammad Yunus. India secures border and evacuates nationals.", date: "Jul 21, 2025", source: "Dhaka Tribune / NDTV", category: "international", icon: "🇧🇩" },
  { id: "in21", title: "Venezuela Election Crisis — Maduro Claims Victory Amid Fraud Allegations", summary: "Nicolas Maduro declares election victory despite exit polls showing opposition win. Mass protests erupt. US, EU, and Latin American nations refuse to recognize results.", date: "Jul 28, 2025", source: "AP / Reuters", category: "international", icon: "🇻🇪" },
  { id: "in22", title: "Paris Olympics 2025 — India Wins Record 10 Medals", summary: "India achieves best-ever Olympic performance with 10 medals including 3 golds (shooting, wrestling, badminton). Total global medal count led by US and China.", date: "Aug 4, 2025", source: "Olympics / ESPN", category: "international", icon: "🏅" },
  { id: "in23", title: "Wildfires Ravage Greece and California Simultaneously", summary: "Record-breaking wildfires destroy 500,000 hectares across Greece and California. 50+ deaths. Climate scientists attribute to 1.4°C warming. Insurance losses exceed $15B.", date: "Aug 11, 2025", source: "WMO / NYT", category: "international", icon: "🔥" },
  { id: "in24", title: "Afghanistan — Taliban Bans All Women's Education Permanently", summary: "Taliban government permanently bans girls' education at all levels. UN condemns as 'gender apartheid'. India provides scholarships for 10,000 Afghan students. Humanitarian crisis deepens.", date: "Aug 18, 2025", source: "UN / BBC", category: "international", icon: "🇦🇫" },
  { id: "in25", title: "India's Chandrayaan-4 — Lunar Sample Return Mission Launched", summary: "ISRO launches Chandrayaan-4 for India's first lunar sample return mission. Expected to collect 2 kg of lunar soil. Makes India 4th country to attempt sample return.", date: "Aug 25, 2025", source: "ISRO", category: "international", icon: "🌙" },
  { id: "in26", title: "Libya Floods Aftermath — Derna Reconstruction Begins", summary: "One year after devastating floods, Derna reconstruction begins with $3B international aid. 12,000 confirmed dead. UN leads rebuilding. India contributes engineering teams.", date: "Sep 1, 2025", source: "UNDP / Reuters", category: "international", icon: "🇱🇾" },
  { id: "in27", title: "South China Sea — Philippines-China Standoff at Sabina Shoal", summary: "Philippine and Chinese coast guard ships collide near Sabina Shoal. US invokes Mutual Defense Treaty. ASEAN calls for de-escalation. India supports freedom of navigation.", date: "Sep 8, 2025", source: "Reuters / Manila Times", category: "international", icon: "🌊" },
  { id: "in28", title: "Ukraine Drone War — Largest Drone Attack on Moscow", summary: "Ukraine launches 200+ drones targeting Moscow region infrastructure. Russia retaliates with missile barrage on Odesa. Drone warfare escalates to unprecedented scale.", date: "Sep 15, 2025", source: "Reuters / Ukrinform", category: "international", icon: "🇺🇦" },
  { id: "in29", title: "Global Refugee Count Hits 120 Million — UNHCR Report", summary: "UNHCR reports record 120 million forcibly displaced worldwide. Top sources: Syria, Ukraine, Sudan, Myanmar, Afghanistan. India hosts 300K+ refugees despite no refugee law.", date: "Sep 22, 2025", source: "UNHCR", category: "international", icon: "🏚️" },
  { id: "in30", title: "Israel-Hezbollah — Full-Scale War Declared", summary: "Israel launches ground invasion of southern Lebanon after months of escalation. Hezbollah responds with 2,000+ rocket barrage. 500,000 Lebanese flee north. UN peacekeepers evacuated.", date: "Sep 29, 2025", source: "Reuters / Al Jazeera", category: "international", icon: "⚠️" },
  { id: "in31", title: "Pakistan Political Crisis — Imran Khan Released from Prison", summary: "Pakistan Supreme Court orders Imran Khan's release. PTI supporters celebrate. Military establishment under pressure. Political instability affects economy — PKR drops to 300/USD.", date: "Oct 6, 2025", source: "Dawn / Reuters", category: "international", icon: "🇵🇰" },
  { id: "in32", title: "Hurricane Maria — Category 5 Storm Devastates Caribbean", summary: "Category 5 Hurricane Maria slams into Jamaica and Cuba. 200+ dead, $50B in damages. US declares emergency. Climate attribution studies link intensity to ocean warming.", date: "Oct 13, 2025", source: "NHC / AP", category: "international", icon: "🌪️" },
  { id: "in33", title: "India-China Border — LAC Disengagement at Depsang Plains", summary: "Historic disengagement at Depsang Plains and Demchok after 4-year standoff. Both sides pull back troops and equipment. PM Modi and Xi meet at BRICS sidelines. Full normalization pending.", date: "Oct 20, 2025", source: "MEA / ANI", category: "international", icon: "🇮🇳" },
  { id: "in34", title: "Myanmar Resistance — NUG Controls Half the Country", summary: "National Unity Government and ethnic armies control 55% of Myanmar. Junta loses major strongholds in Sagaing and Shan states. ASEAN imposes sanctions. India secures northeastern border.", date: "Oct 27, 2025", source: "BBC / Irrawaddy", category: "international", icon: "🇲🇲" },
  { id: "in35", title: "SpaceX — First Private Moon Landing with Japanese Crew", summary: "SpaceX's dearMoon mission successfully orbits the Moon with Japanese crew. First fully private lunar mission. Space tourism industry valued at $8B. India's Gaganyaan tests crewed capsule.", date: "Nov 3, 2025", source: "SpaceX / NASA", category: "international", icon: "🚀" },
  { id: "in36", title: "Ethiopia-Eritrea Tensions — Troops Massed at Border", summary: "Ethiopia and Eritrea mass troops at shared border amid Tigray peace deal collapse. AU mediates. Horn of Africa stability at risk. India calls for peaceful resolution.", date: "Nov 10, 2025", source: "Africa Report / Reuters", category: "international", icon: "🇪🇹" },
  { id: "in37", title: "Indonesia Inaugurates New Capital — Nusantara", summary: "Indonesia officially moves capital from Jakarta to Nusantara in East Kalimantan. $32B new city project. Government offices begin operating. Environmental concerns remain.", date: "Nov 17, 2025", source: "Jakarta Post / BBC", category: "international", icon: "🇮🇩" },
  { id: "in38", title: "Iran Strikes Israel — Largest Direct Attack", summary: "Iran launches 400+ drones and missiles at Israel in retaliation for Damascus consulate strike. 95% intercepted by Iron Dome and allied defenses. UN Security Council emergency session. Oil spikes to $95.", date: "Nov 24, 2025", source: "Reuters / NYT", category: "international", icon: "🇮🇷" },
  { id: "in39", title: "US Midterm Results Finalized — Divided Government Confirmed", summary: "Final midterm count: Republicans hold House 218-217, Democrats gain 3 Senate seats. Bipartisan AI bill expected. Immigration reform stalled. Market uncertainty persists.", date: "Dec 1, 2025", source: "AP / CNN", category: "international", icon: "🇺🇸" },
  { id: "in40", title: "COP30 Aftermath — Climate Finance Commitments Under Scrutiny", summary: "Post-COP30, activists criticize rich nations for slow climate finance delivery. Only $80B of $300B pledge disbursed. India demands technology transfer and green climate fund reform.", date: "Dec 8, 2025", source: "UNFCCC / Guardian", category: "international", icon: "🌿" },
  { id: "in41", title: "Japan Enters Technical Recession — Yen at 155/USD", summary: "Japan's GDP contracts 0.4% in Q3 and 0.2% in Q4. Bank of Japan raises rates to 0.5%. Yen weakens to 155/USD. Toyota announces $5B cost-cutting plan.", date: "Dec 15, 2025", source: "Nikkei / Bloomberg", category: "international", icon: "🇯🇵" },
  { id: "in42", title: "Syria — Assad Regime Weakens as Rebels Advance", summary: "Opposition forces capture Aleppo suburbs. Russian air support reduced. Turkey mediates between factions. 500,000 newly displaced. Humanitarian corridors demanded by UN.", date: "Dec 22, 2025", source: "Reuters / SOHR", category: "international", icon: "🇸🇾" },
  { id: "in43", title: "Arctic — Record Low Sea Ice Extent in December", summary: "Arctic sea ice reaches record low December extent — 30% below 1981-2010 average. Northern Sea Route fully navigable year-round for first time. Geopolitical competition intensifies.", date: "Dec 29, 2025", source: "NSIDC / NASA", category: "international", icon: "🧊" },
  { id: "in44", title: "US 2026 — New Congress Sworn In, AI Bill Priority", summary: "118th Congress sworn in. Bipartisan AI Safety and Innovation Act introduced as first major bill. Tech industry lobbying intensifies. Global implications for AI governance.", date: "Jan 5, 2026", source: "Congress / Politico", category: "international", icon: "🇺🇸" },
  { id: "in45", title: "Pakistan Economic Crisis — IMF $7B Bailout Extended", summary: "Pakistan secures extended IMF facility of $7 billion amid 25% inflation, depleted reserves, and political instability. Rupee hits 310/USD.", date: "Jan 12, 2026", source: "IMF / Dawn", category: "international", icon: "🇵🇰" },
  { id: "in46", title: "Climate — 2025 Confirmed Hottest Year on Record", summary: "WMO confirms 2025 as the hottest year since records began — 1.55°C above pre-industrial levels. India faced record heatwaves in May-June 2025. COP31 planned for Australia.", date: "Jan 19, 2026", source: "WMO", category: "international", icon: "🌡️" },
  { id: "in47", title: "Brazil Amazon Deforestation Hits 5-Year Low", summary: "Under Lula's administration, Amazon deforestation drops 42% — lowest since 2018. EU deforestation regulation drives demand for certified products. Indigenous territories expanded.", date: "Jan 26, 2026", source: "INPE / Reuters", category: "international", icon: "🌳" },
  { id: "in48", title: "North Korea Tests Hypersonic Missile — Asia on Alert", summary: "North Korea tests Hwasong-19 hypersonic missile with 6,000 km range. Japan and South Korea activate missile defence. US deploys additional THAAD systems in the region.", date: "Feb 2, 2026", source: "Yonhap / Reuters", category: "international", icon: "🚀" },
  { id: "in49", title: "Africa's Continental Free Trade Area Gains Momentum", summary: "AfCFTA trade volume doubles in 2025. Nigeria, Kenya, South Africa lead intra-African trade. India signs bilateral agreements with 12 African nations under 'Africa Forward' initiative.", date: "Feb 9, 2026", source: "AU / Economic Times", category: "international", icon: "🌍" },
  { id: "in50", title: "Canada-India Relations Normalize After Diplomatic Standoff", summary: "After 18-month diplomatic freeze over Nijjar case, Canada and India restore full ambassador-level ties. Trade and visa processing resume normalcy.", date: "Feb 16, 2026", source: "MEA / Global News", category: "international", icon: "🇨🇦" },
  { id: "in51", title: "European Energy Crisis — Natural Gas Prices Surge Again", summary: "EU gas prices jump 35% as Russian pipeline disruptions continue. Germany accelerates LNG terminal construction. India secures 20-year LNG deal with Qatar at discounted rates.", date: "Feb 23, 2026", source: "Eurostat / Bloomberg", category: "international", icon: "⛽" },
  { id: "in52", title: "Russia-Ukraine War — Ceasefire Talks Resume", summary: "After 4 years of conflict, Turkey-mediated ceasefire talks resume in Istanbul. Both sides agree to partial prisoner exchange. EU extends sanctions package. India maintains neutral stance.", date: "Mar 2, 2026", source: "Reuters / MEA", category: "international", icon: "🕊️" },
  { id: "in53", title: "US-Israel Launch Strikes on Iran — Full-Scale War Erupts", summary: "US and Israel launch coordinated air strikes on Iranian military and nuclear facilities after months of escalation. Iran retaliates with missile barrage. Strait of Hormuz partially blocked. Oil surges past $95/barrel.", date: "Mar 15, 2026", source: "AP / Reuters", category: "international", icon: "💥" },
  { id: "in54", title: "Iran War — Trump Issues 8 PM Tuesday Deadline to Tehran", summary: "Trump threatens to destroy Iran's power plants and bridges if no deal reached by Tuesday 8 PM ET. Iran rejects 45-day ceasefire proposal, demands permanent end to war. Global markets in turmoil.", date: "Apr 6, 2026", source: "AP / Washington Post", category: "international", icon: "⚠️" },
  { id: "in55", title: "Iran Rejects Ceasefire — Demands Permanent Peace Deal", summary: "Tehran rejects US-proposed 45-day ceasefire, insisting on permanent end to hostilities and lifting of all sanctions. Khamenei warns of 'severe and expansive' response to infrastructure strikes.", date: "Apr 6, 2026", source: "NBC / Reuters", category: "international", icon: "🇮🇷" },
  { id: "in56", title: "Zelenskyy Warns Long Iran War Will Hurt Ukraine Support", summary: "Ukrainian President Zelenskyy expresses concern that prolonged US-Israeli war on Iran could erode America's support for Ukraine. Kyiv braces for reduced Patriot missile deliveries.", date: "Apr 5, 2026", source: "AP / ABC News", category: "international", icon: "🇺🇦" },
  { id: "in57", title: "Ukraine Drones Strike Russian Oil Facilities", summary: "Ukrainian drones attack Sheskharis oil terminal and multiple Russian energy facilities. Pro-Russian bloggers complain repairs will be slow and costly. Zelenskyy tours Middle East for support.", date: "Apr 6, 2026", source: "Guardian / Reuters", category: "international", icon: "🔥" },
  { id: "in58", title: "Myanmar — Devastating 7.7 Earthquake Kills Thousands", summary: "A 7.7 magnitude earthquake strikes central Myanmar, killing over 3,000 and displacing millions. Thailand also affected. India sends NDRF teams and ₹100 crore humanitarian aid.", date: "Mar 28, 2026", source: "USGS / BBC", category: "international", icon: "🌍" },
  { id: "in59", title: "Trump 'Liberation Day' Tariffs — 26% on India, 145% on China", summary: "US imposes sweeping reciprocal tariffs: 26% on India, 34% on EU, 145% on China. Global trade war escalates. Sensex crashes 1,800 points. India negotiates interim trade deal.", date: "Apr 2, 2026", source: "Economic Times / USTR", category: "international", icon: "📊" },
  { id: "in60", title: "Raghav Chadha vs AAP — Political Rift Deepens", summary: "AAP MP Raghav Chadha faces intense public attack from his own party. BJP steps in to defend him, triggering speculation of a political switch. Chadha suggests India use Starlink as tariff leverage.", date: "Apr 4, 2026", source: "Mathrubhumi / TOI", category: "international", icon: "🇮🇳" },
  { id: "in61", title: "Trump Imposes 100% Tariff on Pharma Imports", summary: "US imposes 100% tariffs on patented pharmaceutical imports. Indian generic pharma industry faces significant impact. Govt explores WTO dispute resolution. Drug prices may rise globally.", date: "Apr 5, 2026", source: "Hindustan Times", category: "international", icon: "💊" },
  { id: "in62", title: "Sudan Civil War — 10 Million Displaced, World's Largest Crisis", summary: "Fighting between RSF and SAF forces continues into second year. Over 10 million internally displaced. UN warns of genocide risk in Darfur. Humanitarian access severely limited.", date: "Mar 7, 2026", source: "UNHCR", category: "international", icon: "🇸🇩" },
  { id: "in63", title: "Global Markets Crash — Dow Falls 2,000+ Points on Tariff Fears", summary: "Nifty drops to 22,331, Dow plunges 2,000+ points. Gold hits record $2,500/oz. Investors flee to bonds. Trade war threatens global recession. IMF warns of 1.5% global growth reduction.", date: "Apr 7, 2026", source: "Bloomberg / ET", category: "international", icon: "📉" },
  { id: "in64", title: "India Chip Fab — Tata-PSMC Gujarat Plant Starts Trial Production", summary: "India's first semiconductor fab in Dholera, Gujarat starts trial production of 28nm chips. India targets 10% global chip packaging by 2030. ₹76,000 crore invested in semiconductor ecosystem.", date: "Mar 2026", source: "MeitY / ET", category: "international", icon: "💻" },
  { id: "in65", title: "Strait of Hormuz Crisis — Oil Prices Spike, Global Shipping Disrupted", summary: "Iran's partial blockade of Strait of Hormuz disrupts 20% of global oil trade. India's crude oil import bill surges. Govt releases strategic petroleum reserves. LPG commercial prices hiked ₹195.", date: "Apr 3, 2026", source: "Reuters / Bloomberg", category: "international", icon: "🛢️" },
];
