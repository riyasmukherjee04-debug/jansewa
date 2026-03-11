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

// --- Crop Prices & MSP (2025-26) ---
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
  { title: "IAS/IPS/IFS — UPSC Civil Services 2026", organization: "Union Public Service Commission", vacancies: "~1,000 posts", lastDate: "Feb 28, 2026", eligibility: "Graduate, 21–32 yrs", sector: "Administrative", icon: "🇮🇳" },
  { title: "SSC CGL 2026 — Group B & C Posts", organization: "Staff Selection Commission", vacancies: "~17,000 posts", lastDate: "Apr 30, 2026", eligibility: "Graduate", sector: "Central Govt", icon: "📝" },
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
  {
    id: "gp7", title: "US-China Tech Decoupling Intensifies",
    summary: "US bans export of advanced AI chips (H200, B100) to China. China retaliates with rare earth export controls on gallium and germanium. Global tech supply chains disrupted.",
    date: "March 2026", source: "US Commerce Dept", category: "global-policy", icon: "⚡"
  },
  {
    id: "gp8", title: "India's GDP Grows 6.8% — Fastest Major Economy",
    summary: "India posts 6.8% GDP growth in FY2025-26, driven by services, manufacturing (PLI), and digital economy. IMF projects 7.1% for FY2026-27. Rupee stable at ₹84.5/USD.",
    date: "March 2026", source: "MoSPI / IMF", category: "global-policy", icon: "🇮🇳"
  },
  {
    id: "gp9", title: "OPEC+ Extends Oil Production Cuts to Q3 2026",
    summary: "Saudi-led OPEC+ extends 2.2M bpd cuts through September 2026. Brent crude holds at $88-92/barrel. India pushes for long-term supply deals with Russia and UAE.",
    date: "Feb 2026", source: "OPEC", category: "global-policy", icon: "🛢️"
  },
  {
    id: "gp10", title: "WHO Declares End of Global COVID Emergency Monitoring",
    summary: "WHO formally ends all COVID-19 special monitoring programs. Global vaccination reached 75%. New combined flu-COVID annual vaccine recommended for elderly.",
    date: "Jan 2026", source: "WHO", category: "global-policy", icon: "🏥"
  },
  {
    id: "gp11", title: "EU Digital Services Act — Big Tech Fines Begin",
    summary: "EU fines Meta €1.2B and TikTok €800M under Digital Services Act for algorithmic transparency failures. India studying similar digital regulations.",
    date: "Feb 2026", source: "European Commission", category: "global-policy", icon: "📱"
  },
  {
    id: "gp12", title: "Global Debt Hits $315 Trillion — IMF Warning",
    summary: "IMF warns global debt surpasses $315 trillion — 330% of world GDP. Developing nations face debt distress. Sri Lanka, Ghana, Zambia undergo restructuring. G20 discusses reforms.",
    date: "March 2026", source: "IMF", category: "global-policy", icon: "💸"
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
  {
    id: "in9", title: "Gaza Conflict — Humanitarian Crisis Worsens",
    summary: "Over 18 months into the conflict, 2.3 million displaced in Gaza. ICJ orders expanded aid corridors. India sends $15M humanitarian relief. UN warns of famine conditions.",
    date: "March 2026", source: "UNRWA / Al Jazeera", category: "international", icon: "🆘"
  },
  {
    id: "in10", title: "North Korea Tests Hypersonic Missile — Asia on Alert",
    summary: "North Korea tests Hwasong-19 hypersonic missile with 6,000 km range. Japan and South Korea activate missile defence. US deploys additional THAAD systems in the region.",
    date: "Feb 2026", source: "Yonhap / Reuters", category: "international", icon: "🚀"
  },
  {
    id: "in11", title: "Sudan Civil War — 10 Million Displaced",
    summary: "Fighting between RSF and SAF forces continues. Over 10 million internally displaced — world's largest displacement crisis. AU calls for immediate ceasefire.",
    date: "March 2026", source: "UNHCR", category: "international", icon: "🇸🇩"
  },
  {
    id: "in12", title: "Canada-India Relations Normalize After Diplomatic Standoff",
    summary: "After 18-month diplomatic freeze over Nijjar case, Canada and India restore full ambassador-level ties. Trade and visa processing resume normalcy.",
    date: "Feb 2026", source: "MEA / Global News", category: "international", icon: "🇨🇦"
  },
  {
    id: "in13", title: "AI Arms Race — US, China, EU Compete for Dominance",
    summary: "OpenAI launches GPT-6, Google unveils Gemini 3, China's DeepSeek-V4 matches Western models. Global AI investment exceeds $200B in 2025. Calls for international AI treaty grow.",
    date: "March 2026", source: "TechCrunch / Wired", category: "international", icon: "🤖"
  },
  {
    id: "in14", title: "Brazil Amazon Deforestation Hits 5-Year Low",
    summary: "Under Lula's administration, Amazon deforestation drops 42% — lowest since 2018. EU deforestation regulation drives demand for certified products. Indigenous territories expanded.",
    date: "Jan 2026", source: "INPE / Reuters", category: "international", icon: "🌳"
  },
  {
    id: "in15", title: "Africa's Continental Free Trade Area Gains Momentum",
    summary: "AfCFTA trade volume doubles in 2025. Nigeria, Kenya, South Africa lead intra-African trade. India signs bilateral agreements with 12 African nations under 'Africa Forward' initiative.",
    date: "Feb 2026", source: "AU / Economic Times", category: "international", icon: "🌍"
  },
  {
    id: "in16", title: "Bangladesh Political Turmoil — Interim Government Faces Protests",
    summary: "Student-led protests demand fresh elections. Interim PM faces pressure from military and opposition parties. India monitors border situation closely. Trade disruptions reported.",
    date: "March 2026", source: "Dhaka Tribune / NDTV", category: "international", icon: "🇧🇩"
  },
  {
    id: "in17", title: "SpaceX Starship Completes First Orbital Cargo Mission",
    summary: "SpaceX Starship delivers 150 tons of cargo to orbit — largest payload in history. NASA selects Starship HLS for Artemis III Moon landing in late 2026. India's Gaganyaan on track.",
    date: "Feb 2026", source: "SpaceX / NASA", category: "international", icon: "🛸"
  },
  {
    id: "in18", title: "European Energy Crisis — Natural Gas Prices Surge Again",
    summary: "EU gas prices jump 35% as Russian pipeline disruptions continue. Germany accelerates LNG terminal construction. India secures 20-year LNG deal with Qatar at discounted rates.",
    date: "March 2026", source: "Eurostat / Bloomberg", category: "international", icon: "⛽"
  },
];
