export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  paragraphs: string[];
}

export const practiceAreasList: PracticeArea[] = [
  {
    id: "civil-law",
    title: "Civil Law",
    subtitle: "Expert representation in civil disputes",
    description: "Specialized in property disputes, breach of contract, recovery suits, injunctions, and landlord-tenant litigation under the CPC and local state laws.",
    icon: "⚖️",
    paragraphs: [
      "Our practice specializes in property disputes, partition suits, declaration and injunction suits, breach of contract, specific performance of agreements, recovery of money, eviction, and landlord-tenant litigation.",
      "We regularly represent clients across various judicial forums, including Civil Courts (Senior and Junior Division), District Courts, and the High Courts. Our legal support covers all stages of civil litigation under the Code of Civil Procedure (CPC), 1908, from drafting pleadings (plaint and written statements) to execution petitions (EP) of decrees.",
      "We guide clients through complex civil proceedings with strategy and diligence, prioritizing alternative dispute resolution (ADR) channels such as mediation (under Section 89 CPC) when possible, and pursuing aggressive litigation when necessary to protect property and contractual interests."
    ]
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    subtitle: "Strong defense and legal representation",
    description: "Offering strong defense representation and bail applications, handling matters ranging from white-collar crimes and fraud to private complaints and FIR quashing.",
    icon: "🛡️",
    paragraphs: [
      "We provide comprehensive criminal defense representation and advice. Our expertise covers regular, anticipatory, and transit bail applications, trials, criminal appeals, revisions, and writ petitions for quashing of First Information Reports (FIRs) under the Code of Criminal Procedure (CrPC) and the new criminal laws (BNSS).",
      "Our team represents clients in matters involving white-collar crimes, corporate fraud, embezzlement, cybercrimes, offences under the Prevention of Money Laundering Act (PMLA), cheating, forgery, defamation, and complaints under the Protection of Women from Domestic Violence Act (DV Act).",
      "We handle trials before the Courts of Magistrates, Sessions Courts, Special Courts, and High Courts. We construct a meticulous defense strategy, conducting detailed cross-examinations and review of evidence to ensure our clients' rights and liberties are fully protected."
    ]
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    subtitle: "Compassionate guidance for family matters",
    description: "Providing compassionate yet assertive guidance through divorce proceedings, child custody battles, maintenance/Alimony issues, and domestic violence cases.",
    icon: "👨‍👩‍👧‍👦",
    paragraphs: [
      "We provide compassionate yet assertive guidance through divorce proceedings (mutual and contested), child custody and guardianship battles, maintenance and alimony claims (under Section 125 CrPC / Section 144 BNSS, Hindu Adoptions and Maintenance Act), and restitution of conjugal rights.",
      "We represent clients before the Family Courts, District Courts, and High Courts. We are highly proficient in handling domestic violence cases, dowry prohibition allegations (under Section 498A IPC / Section 85 BNS), and partition of joint family properties under Hindu, Muslim, and other personal laws.",
      "Recognizing the sensitivity of family matters, we explore counselling, mediation, and conciliation to resolve disputes amicably. When litigation is inevitable, we advocate fiercely to protect our clients' financial security and the welfare of children."
    ]
  },
  {
    id: "personal-law",
    title: "Personal Law & Succession",
    subtitle: "Protecting your legacy and succession rights",
    description: "Assisting with the drafting and execution of Wills, probate administration, partition suits, and succession certificates across different personal law frameworks in India.",
    icon: "📜",
    paragraphs: [
      "We assist with the drafting, vetting, and execution of Wills, Codicils, trust deeds, and family settlement agreements. We guide executors and administrators through probate administration, letters of administration, and succession certificates.",
      "We handle partition suits, disputes regarding ancestral and self-acquired properties, HUF (Hindu Undivided Family) divisions, and succession rights under the Hindu Succession Act, 1956, Indian Succession Act, 1925, and Muslim personal laws.",
      "We help secure legacies and ensure smooth transitions of estates. Our firm represents clients in dispute resolution among legal heirs, helping to settle conflicts before District Judges, High Courts, and probate authorities with clarity and legal precision."
    ]
  },
  {
    id: "revenue-law",
    title: "Revenue Law",
    subtitle: "Expertise in land and revenue disputes",
    description: "Expertise in land revenue, agricultural land disputes, mutations, land demarcation, and proceedings before various revenue authorities and courts.",
    icon: "🌾",
    paragraphs: [
      "We possess in-depth expertise in land revenue matters, agricultural land disputes, mutations, land demarcation (seema gyan), partitioning of agricultural holdings, and tenancy disputes.",
      "We represent clients in proceedings before various revenue authorities and courts, including the Tehsildar, Sub-Divisional Officer (SDO)/Assistant Collector, Collector, Revenue Appellate Authority (RAA), and the Board of Revenue.",
      "Our services extend to handling cases involving land acquisition and compensation under the Right to Fair Compensation and Transparency in Land Acquisition Act, conversions of land use, and violations of local state land revenue acts, protecting agricultural and land ownership rights."
    ]
  },
  {
    id: "other-legal-services",
    title: "Other Legal Services",
    subtitle: "Comprehensive legal solutions",
    description: "Proficient in consumer court disputes, cheque bounce cases (Section 138 of the NI Act), legal drafting, and comprehensive contract reviews.",
    icon: "💼",
    paragraphs: [
      "We handle consumer court disputes under the Consumer Protection Act, 2019, representing consumers and companies before District Commissions, State Commissions, and the National Commission (NCDRC).",
      "We handle summary suits, recovery proceedings, and cheque bounce cases under Section 138 of the Negotiable Instruments Act (NI Act) before Judicial Magistrates, as well as legal drafting, vetting of commercial contracts, and comprehensive legal opinions.",
      "We offer a versatile range of legal solutions for everyday business and personal matters, assisting in negotiations, legal notices, and compliance checks, ensuring a swift and pragmatic resolution of disputes outside full-fledged litigation."
    ]
  },
  {
    id: "banking-law",
    title: "Banking Law",
    subtitle: "Insolvency, debt recovery, and financial disputes",
    description: "Comprehensive representation under IBC, SARFAESI, and RDDBFI Acts, appearing before NCLT, NCLAT, DRT, and DRAT for debt recovery and insolvency.",
    icon: "🏦",
    paragraphs: [
      "We provide comprehensive representation and advisory in Banking Law, insolvency, and debt restructuring. Our practice handles proceedings under the Insolvency and Bankruptcy Code (IBC), 2016, and debt recovery laws. We support financial creditors, operational creditors, corporate debtors, and insolvency professionals.",
      "Our team represents banks, NBFCs, financial institutions, and corporate entities in recovery actions and litigations under the SARFAESI Act, 2002, and the Recovery of Debts and Bankruptcies Act (RDDBFI), 1993. We actively engage in proceedings before the Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT).",
      "Additionally, we handle NCLT and NCLAT applications, claims preparation, Resolution Plans drafting, and plan implementation. Our representation extends across key judicial bodies, including the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), High Courts, and the Supreme Court of India."
    ]
  }
];

export const getPracticeAreaById = (id: string): PracticeArea | undefined => {
  return practiceAreasList.find(area => area.id === id);
};
