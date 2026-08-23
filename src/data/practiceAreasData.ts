export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  intro: string;
  services: string[];
  forums?: string;
  laws?: string;
}

export const practiceAreasList: PracticeArea[] = [
  {
    id: "banking-law",
    title: "Banking & Financial Laws (DRT/DRAT & SARFAESI)",
    subtitle: "DRT, DRAT, and SARFAESI Act Litigation",
    description: "We represent banks, financial institutions, companies, borrowers, guarantors, and individuals in diverse banking and financial disputes.",
    icon: "🏦",
    intro: "We represent banks, financial institutions, companies, borrowers, guarantors, and individuals in diverse banking and financial disputes. Our practice covers the full spectrum of recovery proceedings, borrower defense, enforcement of security interests, loan documentation disputes, and banking litigation.",
    services: [
      "Representation in Original Applications (OAs) filed by banks and financial institutions.",
      "Securitisation Applications (SAs) challenging enforcement measures under the SARFAESI Act.",
      "Recovery certificate proceedings, interim relief applications, and stay matters.",
      "Auction disputes and strategic One-Time Settlement (OTS) negotiations.",
      "Enforcement and defense of security interests and guarantees."
    ],
    forums: "Debt Recovery Tribunal (DRT) Jaipur, Debt Recovery Appellate Tribunal (DRAT), Civil Courts, and the High Court."
  },
  {
    id: "civil-law",
    title: "Civil Litigation",
    subtitle: "Comprehensive Civil Suits and Appeals",
    description: "We provide comprehensive legal representation across a broad spectrum of civil disputes under the CPC and other core civil acts.",
    icon: "⚖️",
    intro: "We provide comprehensive legal representation across a broad spectrum of civil disputes. Our practice encompasses every stage of civil litigation—from pre-litigation legal strategy and pleading drafting to trial, appeals, revisions, review petitions, execution proceedings, and enforcement of decrees.",
    services: [
      "Suits & Property Disputes: Suits for declaration, permanent/temporary/mandatory injunctions, specific performance of contracts, partition, possession, and title disputes.",
      "Monetary & Contractual Claims: Recovery of money, damages and compensation, mesne profits, and complex contractual disputes.",
      "Specialized Litigation: Mortgage disputes, easement rights, cancellation of documents, succession and inheritance matters, and trust/society disputes.",
      "Drafting & Vetting: Preparation of legal notices, plaints, written statements, appeals, revisions, and other vital civil pleadings.",
      "Execution: Enforcement of judgments, decrees, and arbitral awards."
    ],
    forums: "Civil Courts, Commercial Courts, District & Sessions Courts, Appellate Courts, Tribunals, and the High Court.",
    laws: "Code of Civil Procedure (1908); Indian Contract Act (1872); Specific Relief Act (1963); Transfer of Property Act (1882); Indian Easements Act (1882); Registration Act (1908); Limitation Act (1963); Indian Stamp Act (1899); Commercial Courts Act (2015); Trusts Act (1882); Societies Registration Act (1860)."
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    subtitle: "Robust Criminal Defense and Trials",
    description: "We deliver robust legal representation in criminal matters, defending the rights of complainants, accused persons, and victims.",
    icon: "🛡️",
    intro: "We deliver robust legal representation in criminal matters, defending the rights of complainants, accused persons, victims, and stakeholders at every phase of the criminal justice process. Our practice extends from initial police investigations and FIR registrations through trial, appellate, revision, and post-conviction proceedings.",
    services: [
      "Bail & Pre-Trial Relief: Anticipatory bail, regular bail, transit bail, cancellation of bail, and quashing of FIRs or criminal proceedings.",
      "Trial Representation: Defense and prosecution in criminal trials, discharge applications, framing of charges, private complaints, and protest petitions.",
      "Appellate & Revisionary Practice: Appeals against conviction or acquittal, criminal revisions, suspension of sentence, and compounding of offenses.",
      "Specialized Crimes: Representation in matters involving economic and financial crimes, cyber offenses, misappropriation, cheating, criminal breach of trust, forgery, matrimonial offenses, sexual offenses, and public servant corruption.",
      "Investigative Support: Strategic legal advice during ongoing investigations, police inquiries, and protection of constitutional rights."
    ],
    forums: "Criminal Courts, Judicial Magistrates, Sessions Courts, Special Courts, Appellate Courts, and the High Court.",
    laws: "Bharatiya Nyaya Sanhita (2023); Bharatiya Nagarik Suraksha Sanhita (2023); Bharatiya Sakshya Adhiniyam (2023); Negotiable Instruments Act (1881); Information Technology Act (2000); Prevention of Corruption Act (1988); NDPS Act (1985); POCSO Act (2012)."
  },
  {
    id: "revenue-law",
    title: "Revenue & Land Laws",
    subtitle: "Agricultural and Land Tenancy Disputes",
    description: "We provide dedicated representation in agricultural and non-agricultural land disputes and revenue matters.",
    icon: "🌾",
    intro: "We provide dedicated representation in agricultural and non-agricultural land disputes and revenue matters. Our practice covers original proceedings, appeals, revisions, reviews, and writ petitions to protect the proprietary rights of landowners, khatedars, tenants, developers, trusts, and institutions.",
    services: [
      "Title & Rights: Declaration of khatedari rights, tenancy disputes, succession and inheritance of agricultural land, and settlement/record-of-rights disputes.",
      "Land Administration: Mutation proceedings, cancellation of mutations, partition of agricultural land, demarcation, boundary disputes, and correction of revenue records.",
      "Regulatory & Statutory Compliance: Conversion of agricultural land for non-agricultural purposes (Section 90-A/Rules), land acquisition matters, eviction proceedings, and encroachment/easement disputes.",
      "Due Diligence: Conducting comprehensive legal due diligence of agricultural land, obtaining certified revenue records, and advising on real estate transactions."
    ],
    forums: "Tehsildar, Sub-Divisional Officer (SDO), Assistant Collector, Collector, Divisional Commissioner, Revenue Appellate Authority (RAA), Board of Revenue, Civil Courts, and the High Court.",
    laws: "Rajasthan Tenancy Act (1955); Rajasthan Land Revenue Act (1956); Rajasthan Land Revenue Conversion Rules; Rajasthan Colonisation Act (1954); Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act (2013); Registration Act (1908); Transfer of Property Act (1882)."
  },
  {
    id: "cheque-bounce",
    title: "Negotiable Instruments Act (Cheque Bounce/Dishonour)",
    subtitle: "Cheque Bounce/Dishonour Prosecution and Defense",
    description: "We focus heavily on financial disputes arising under the NI Act, representing creditors, businesses, and individuals.",
    icon: "🖋️",
    intro: "We focus heavily on financial disputes arising under the Negotiable Instruments Act, representing individuals, businesses, commercial partnerships, financial institutions, and creditors. We manage litigation from the initial issuance of statutory demand notices through to trial, appeals, revisions, and execution of compensation orders.",
    services: [
      "Statutory Compliance: Drafting, issuing, and replying to statutory demand notices under Section 138 of the NI Act.",
      "Trial & Defense: Filing and defending complaints, contesting interim compensation and deposit applications, bail proceedings, cross-examination of witnesses, and applications for recalling witnesses.",
      "Settlement & Execution: Compounding and negotiation of cheque bounce/dishonour settlements, appeals against conviction/acquittal, suspension of sentences, and enforcement of compensation orders.",
      "Commercial Advisory: Legal counsel on promissory notes, bills of exchange, commercial loan recoveries, friendly loans, and partnership debt liabilities."
    ],
    forums: "Judicial Magistrate Courts, Sessions Courts, Appellate Courts, and the High Court.",
    laws: "Negotiable Instruments Act (1881); Bharatiya Nagarik Suraksha Sanhita (2023); Bharatiya Sakshya Adhiniyam (2023); Bharatiya Nyaya Sanhita (2023); Indian Contract Act (1872); Limitation Act (1963)."
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    subtitle: "Compassionate Guidance for Matrimonial Matters",
    description: "Resolving sensitive family disputes with professionalism, confidentiality, and a practical approach.",
    icon: "👨‍👩‍👧‍👦",
    intro: "Our matrimonial practice is dedicated to resolving sensitive family disputes with professionalism, strict confidentiality, and a practical approach. We aim to achieve efficient resolutions while safeguarding the dignity, welfare, and long-term legal and financial interests of our clients and their children.",
    services: [
      "Matrimonial Disputes: Contested and mutual consent divorce, restitution of conjugal rights, judicial separation, and annulment of marriage.",
      "Financial & Property Claims: Maintenance, interim relief, permanent alimony, dowry-related proceedings, matrimonial property disputes, and execution of maintenance orders.",
      "Child Welfare: Child custody, visitation rights, adoption, and guardianship proceedings.",
      "Protective Litigation: Representation in domestic violence matters under the PWDV Act.",
      "Amicable Resolutions: Pre-litigation counseling, mediation, drafting of matrimonial settlements, and family arrangements."
    ],
    forums: "Family Courts, Judicial Magistrate Courts, Civil Courts, Sessions Courts, Appellate Courts, and the High Court.",
    laws: "Hindu Marriage Act (1955); Hindu Succession Act (1956); Hindu Minority and Guardianship Act (1956); Guardians and Wards Act (1890); Protection of Women from Domestic Violence Act (2005); Dowry Prohibition Act (1961); Special Marriage Act (1954); Muslim Women (Protection of Rights on Divorce) Act (1986); Bharatiya Nagarik Suraksha Sanhita (2023 - Maintenance provisions)."
  },
  {
    id: "personal-law",
    title: "Personal Laws & Succession",
    subtitle: "Wills, Probates, and Inheritance Disputes",
    description: "Assisting individuals and families in protecting and enforcing their inheritance and ancestral property rights.",
    icon: "📜",
    intro: "We assist individuals, families, executors, trustees, and beneficiaries in protecting and enforcing their legal rights concerning estate administration, inheritance, and ancestral property transfer.",
    services: [
      "Testamentary & Intestate Succession: Probate of wills, letters of administration, succession certificates, legal heir declarations, and challenges to the validity of wills.",
      "Property Partition: Partition of ancestral and self-acquired property, nomination disputes, and administration of estates involving movable and immovable assets.",
      "Deeds & Settlements: Drafting and registration of family settlements, gift deeds, relinquishment and release deeds, and partition deeds.",
      "Estate Planning: Comprehensive legal drafting of wills, codicils, private family trusts, and succession planning structures for business and personal assets."
    ],
    forums: "Civil Courts, Family Courts, Revenue Courts, District Courts, Appellate Courts, and the High Court.",
    laws: "Hindu Succession Act (1956); Indian Succession Act (1925); Hindu Marriage Act (1955); Special Marriage Act (1954); Muslim Personal Law (Shariat) Application Act (1937); Indian Trusts Act (1882); Registration Act (1908); Transfer of Property Act (1882)."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution (ADR)",
    subtitle: "Domestic and Commercial Dispute Resolution",
    description: "Resolving complex commercial disputes efficiently through arbitration and structured mediation frameworks.",
    icon: "🤝",
    intro: "Our ADR practice is designed to help corporate entities, partnerships, financial institutions, and individuals resolve complex commercial disputes efficiently and cost-effectively, minimizing prolonged court litigation while fiercely protecting commercial interests.",
    services: [
      "Agreement Drafting & Structuring: Drafting and reviewing arbitration agreements, dispute resolution clauses, and mediation frameworks.",
      "Arbitral Proceedings: Invocation of arbitration, appointment and challenge of arbitrators, and representation before domestic and international arbitral tribunals.",
      "Court Intervention & Enforcement: Applications for interim measures of protection (Section 9/17), execution and enforcement of arbitral awards, and challenges/applications for setting aside awards (Section 34).",
      "Mediation & Conciliation: Structured settlement negotiations, commercial conciliation, and representation under the Mediation Act.",
      "Sector-Specific Expertise: Handling disputes arising from construction contracts, infrastructure projects, partnership agreements, real estate transactions, and banking finance agreements."
    ],
    forums: "Arbitral Tribunals, Commercial Courts, Civil Courts, Appellate Courts, and the High Court.",
    laws: "Arbitration and Conciliation Act (1996); Mediation Act (2023); Commercial Courts Act (2015); Indian Contract Act (1872); Code of Civil Procedure (1908)."
  }
];

export const getPracticeAreaById = (id: string): PracticeArea | undefined => {
  return practiceAreasList.find(area => area.id === id);
};
