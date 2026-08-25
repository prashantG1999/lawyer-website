// Auto-generated practice areas data from Update.docx & downloaded assets
import bankingImg from '../assets/services/01_banking_financial_laws_light.webp';
import civilImg from '../assets/services/02_civil_litigation_light.webp';
import criminalImg from '../assets/services/03_criminal_law_light.webp';
import revenueImg from '../assets/services/04_revenue_land_law_light.webp';
import niActImg from '../assets/services/05_negotiable_instruments_act_light.webp';
import familyImg from '../assets/services/06_family_matrimonial_law_light.webp';
import personalLawImg from '../assets/services/07_personal_law_succession_light.webp';
import arbitrationImg from '../assets/services/08_arbitration_adr_light.webp';

export interface PracticeAreaMaxim {
  latin: string;
  meaning: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  maxim: PracticeAreaMaxim;
  intro: string;
  paragraphs: string[];
  services: string[];
  forums?: string;
  laws?: string;
}

export const practiceAreasList: PracticeArea[] = [
  {
    id: "banking-law",
    title: "Banking & Financial Laws (DRT/DRAT & SARFAESI)",
    subtitle: "Debt Recovery Tribunals & Financial Asset Enforcement",
    description: "We represent companies, borrowers, guarantors, lenders, and individuals in a wide range of banking and financial disputes, providing strategic legal assistance from the inception of a dispute through recovery, enforcement, and appellate proceedings.",
    icon: "🏦",
    image: bankingImg,
    maxim: {
      latin: "Vigilantibus non dormientibus jura subveniunt",
      meaning: "The law assists those who are vigilant, not those who sleep on their rights.",
    },
    intro: "We represent companies, borrowers, guarantors, lenders, and individuals in a wide range of banking and financial disputes, providing strategic legal assistance from the inception of a dispute through recovery, enforcement, and appellate proceedings. Our practice encompasses the full spectrum of banking litigation, including recovery proceedings, enforcement of security interests, borrower and guarantor defence, loan and financing documentation disputes, and challenges to measures taken by financial institutions.",
    paragraphs: [
      "We represent companies, borrowers, guarantors, lenders, and individuals in a wide range of banking and financial disputes, providing strategic legal assistance from the inception of a dispute through recovery, enforcement, and appellate proceedings. Our practice encompasses the full spectrum of banking litigation, including recovery proceedings, enforcement of security interests, borrower and guarantor defence, loan and financing documentation disputes, and challenges to measures taken by financial institutions.",
      "We advise and represent clients in matters concerning loan defaults, classification of accounts, recovery of outstanding dues, invocation of guarantees, mortgage and hypothecation disputes, possession and sale of secured assets, and enforcement proceedings under applicable banking and securitisation laws. We also assist borrowers and guarantors in scrutinising the legality and procedural validity of recovery measures and in pursuing appropriate remedies against unlawful, excessive, or procedurally defective actions.",
      "We advise and represent clients in matters involving SARFAESI demand notices under Section 13(2), measures under Section 13(4), possession proceedings, assistance for taking possession under Section 14, enforcement and sale of secured assets, auction proceedings, valuation disputes, and challenges to recovery and enforcement measures. We also assist clients in examining the legality, validity, and procedural compliance of actions undertaken by banks and financial institutions and in pursuing appropriate remedies against unlawful or defective enforcement.",
      "Our practice extends to proceedings before the Debt Recovery Tribunal (DRT), Debt Recovery Appellate Tribunal (DRAT), High Courts, and other competent judicial and quasi-judicial forums, including matters involving original, appellate, revisional, supervisory, and writ jurisdiction. We handle applications under Section 17 of the SARFAESI Act, appeals under Section 17(1), challenges to orders of the DRT/DRAT, and constitutional remedies under Articles 226 and 227, wherever legally maintainable.",
      "We further represent clients in recovery proceedings under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act), proceedings relating to recovery certificates, invocation of guarantees, mortgages, hypothecation, attachment and sale of secured assets, and disputes concerning loan restructuring, settlement, and financing arrangements.",
      "We also advise on disputes arising from loan agreements, sanction letters, security documents, guarantees, mortgages, settlement arrangements, restructuring and recovery proposals, and other financing instruments. Whether acting for a financial institution seeking effective recovery or for a borrower or guarantor seeking to protect their legal and commercial interests, our approach combines detailed examination of the underlying documentation with focused statutory and procedural analysis."
    ],
    services: [
      "Representation in Original Applications (OAs) and recovery certificate proceedings filed by banks and financial institutions.",
      "Securitisation Applications (SAs) challenging enforcement measures under the SARFAESI Act (Section 13(2), 13(4), 14, and 17).",
      "Stay proceedings, urgent interim relief, and appellate challenges before the Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT).",
      "Auction disputes, valuation irregularities, borrower & guarantor defense, and strategic One-Time Settlement (OTS) structuring.",
      "Litigation concerning loan agreements, sanction letters, mortgage enforcement, and constitutional writ remedies before the High Court."
    ],
    forums: "Debt Recovery Tribunal (DRT) Jaipur, Debt Recovery Appellate Tribunal (DRAT) Delhi, District & Sessions Courts, and the Rajasthan High Court.",
    laws: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI Act, 2002); Recovery of Debts and Bankruptcy Act (RDB Act, 1993); Banking Regulation Act (1949); RBI Prudential Guidelines; Transfer of Property Act (1882); Indian Contract Act (1872)."
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    subtitle: "Comprehensive Civil Suits, Injunctions & Property Litigation",
    description: "We provide comprehensive legal representation across a broad spectrum of civil disputes, with a strategic and solution oriented approach to every stage of litigation.",
    icon: "⚖️",
    image: civilImg,
    maxim: {
      latin: "Res judicata pro veritate accipitur",
      meaning: "A matter adjudicated is accepted as true.",
    },
    intro: "We provide comprehensive legal representation across a broad spectrum of civil disputes, with a strategic and solution-oriented approach to every stage of litigation. Our practice encompasses the full lifecycle of a civil dispute—from initial assessment, strategy formulation, and pre-litigation correspondence through to trial, appellate, revisional, and execution proceedings.",
    paragraphs: [
      "We provide comprehensive legal representation across a broad spectrum of civil disputes, with a strategic and solution-oriented approach to every stage of litigation. Our practice encompasses the full lifecycle of a civil dispute—from initial assessment, strategy formulation, and pre-litigation correspondence through to trial, appellate, revisional, and execution proceedings.",
      "We advise and represent clients in suits concerning declaration of rights, title, and legal status; permanent, mandatory, and temporary injunctions; specific performance of contracts; partition and separate possession; cancellation and setting aside of instruments, deeds, and decrees; recovery of possession of immovable property; mesne profits and damages; boundary and easement disputes; mortgage and charge-related claims; and other matters governing proprietary and contractual interests.",
      "Our practice also extends to monetary and commercial claims, including suits for recovery of money, damages for breach of contract, indemnity claims, rendition of accounts, disputes arising out of supply agreements, construction contracts, agency relationships, commercial transactions, and related contractual and business arrangements.",
      "We handle every phase of civil trial practice with meticulous attention to detail, including drafting of plaints, written statements, replications, and interlocutory applications; framing of issues; discovery and inspection of documents; preparation and filing of evidence affidavits; comprehensive examination and cross-examination of witnesses; and advance preparation of final arguments.",
      "Our appellate practice includes first and second appeals, civil revisions, review petitions, transfer applications, and restoration proceedings before District and Appellate Courts, the High Court, and other competent appellate authorities. We also represent clients in execution proceedings to ensure that decrees, orders, and awards obtained in civil litigation are effectively enforced through attachment, sale, delivery of possession, arrest, and other statutory mechanisms.",
      "We approach every civil matter by identifying the precise legal and factual issues, assessing the evidentiary record, ensuring procedural and statutory compliance, and crafting a tailored litigation strategy designed to protect the client's rights while pursuing a timely and effective resolution."
    ],
    services: [
      "Property & Title Litigation: Declaration of title, partition of ancestral/joint property, possession suits, boundary disputes, and easement rights.",
      "Injunctions & Contractual Enforcement: Temporary/permanent/mandatory injunctions, specific performance of agreements to sell, and rescission of contracts.",
      "Financial & Commercial Claims: Recovery of money, commercial damages, mesne profits, settlement of accounts, and contractual breach remedies.",
      "Pleadings & Trial Advocacy: Drafting plaints, written statements, interlocutory applications, discovery, and detailed witness cross-examination.",
      "Appellate & Execution: First and second appeals, civil revisions, review petitions, and execution proceedings for decree enforcement."
    ],
    forums: "Civil Courts (Junior/Senior Division), Commercial Courts, District & Sessions Courts, Appellate Courts, Tribunals, and the Rajasthan High Court.",
    laws: "Code of Civil Procedure (1908); Specific Relief Act (1963); Indian Contract Act (1872); Transfer of Property Act (1882); Indian Easements Act (1882); Registration Act (1908); Limitation Act (1963); Commercial Courts Act (2015); Indian Stamp Act (1899)."
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    subtitle: "Defense, Trials, Bail, Appeals & Special Offenses",
    description: "We provide comprehensive and committed legal representation in criminal matters, defending the rights of individuals, corporate entities, and other stakeholders across every stage of the criminal justice process.",
    icon: "🛡️",
    image: criminalImg,
    maxim: {
      latin: "Ei incumbit probatio qui dicit, non qui negat",
      meaning: "The burden of proof lies upon him who asserts, not upon him who denies.",
    },
    intro: "We provide comprehensive and committed legal representation in criminal matters, defending the rights of individuals, corporate entities, and other stakeholders across every stage of the criminal justice process. Our practice encompasses the full spectrum of criminal proceedings—from the inception of an investigation and pre-charge proceedings through to trial, appellate, revisional, and post-conviction remedies.",
    paragraphs: [
      "We provide comprehensive and committed legal representation in criminal matters, defending the rights of individuals, corporate entities, and other stakeholders across every stage of the criminal justice process. Our practice encompasses the full spectrum of criminal proceedings—from the inception of an investigation and pre-charge proceedings through to trial, appellate, revisional, and post-conviction remedies.",
      "We advise and represent clients in bail and pre-trial proceedings, including anticipatory bail applications under Section 482 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) (and corresponding provisions of the Code of Criminal Procedure), regular bail applications under Sections 480 and 483, interim bail, transit bail, modification or relaxation of bail conditions, and defense against applications for cancellation of bail.",
      "We represent clients at every stage of police and investigative proceedings, including advising during ongoing investigations, responding to summonses and notices, seeking protection against coercive steps, filing applications under Section 175(3) of the BNSS (and Section 156(3) CrPC) for registration of FIRs, and preparing and filing private complaints and protest petitions before competent Magistrate Courts.",
      "Our trial practice encompasses comprehensive defense and prosecution representation in criminal trials before Judicial Magistrates, Metropolitan Magistrates, Sessions Courts, and Special Courts. We handle matters involving discharge applications under Sections 250, 262, and 257 of the BNSS, framing of charges, handling of documentary and electronic evidence, thorough examination and cross-examination of prosecution and defense witnesses, and final arguments.",
      "We represent clients in appellate and revisional proceedings before Sessions Courts and the High Court, including appeals against conviction or acquittal, criminal revision petitions, applications for suspension of sentence and grant of bail pending appeal, and applications for compounding of offenses and quashing of proceedings based on settlements.",
      "Our practice also encompasses petitions for quashing of FIRs, charge-sheets, and criminal proceedings under Section 528 of the BNSS (and Section 482 CrPC), writ petitions under Articles 226 and 227 of the Constitution of India, and representation in specialized criminal matters involving economic offenses, cyber crimes, commercial fraud, Negotiable Instruments Act proceedings, Prevention of Corruption matters, and proceedings under other special penal statutes.",
      "We recognize the profound personal, professional, and liberty-related consequences of criminal proceedings, and therefore approach each matter with rigorous preparation, careful evidentiary analysis, and strategic defense planning designed to protect the client's rights at every stage."
    ],
    services: [
      "Bail & Liberty Protection: Anticipatory bail, regular bail, interim bail, transit bail, and defense against bail cancellation applications.",
      "Quashing & Constitutional Remedies: Petitions for quashing of FIRs, charge-sheets, and criminal complaints under Section 528 BNSS / 482 CrPC and High Court Writs.",
      "Trial Advocacy: Discharge applications, framing of charges, handling documentary/electronic evidence, aggressive cross-examination, and final defense arguments.",
      "Investigation Advisory: Assisting during police inquiries, notices, Section 175(3) BNSS / 156(3) CrPC applications, and protest petitions.",
      "Appeals & Revisions: Criminal appeals against conviction/acquittal, revision petitions, suspension of sentences, and compounding of offenses."
    ],
    forums: "Courts of Judicial Magistrate (JMFC/CJM), Courts of Session, Special Criminal Courts (CBI/ACB/POCSO), Appellate Courts, and the Rajasthan High Court.",
    laws: "Bharatiya Nyaya Sanhita (BNS, 2023); Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023); Bharatiya Sakshya Adhiniyam (BSA, 2023); Indian Penal Code (1860); Code of Criminal Procedure (1973); Indian Evidence Act (1872); Information Technology Act (2000); Prevention of Corruption Act (1988)."
  },
  {
    id: "revenue-law",
    title: "Revenue & Land Laws",
    subtitle: "Land Tenancy, Khatedari Rights, Mutations & Revenue Appeals",
    description: "We provide dedicated and comprehensive legal representation in agricultural and non-agricultural land disputes, tenancy matters, and revenue litigation.",
    icon: "🌾",
    image: revenueImg,
    maxim: {
      latin: "Nemo dat quod non habet",
      meaning: "No one gives what they do not have.",
    },
    intro: "We provide dedicated and comprehensive legal representation in agricultural and non-agricultural land disputes, tenancy matters, and revenue litigation, assisting landowners, khatedars, tenants, buyers, developers, institutions, and families in protecting and enforcing their rights in land.",
    paragraphs: [
      "We provide dedicated and comprehensive legal representation in agricultural and non-agricultural land disputes, tenancy matters, and revenue litigation, assisting landowners, khatedars, tenants, buyers, developers, institutions, and families in protecting and enforcing their rights in land.",
      "Our practice encompasses proceedings before all levels of the revenue hierarchy, from original proceedings before the Tehsildar, Sub-Divisional Officer (SDO), Assistant Collector, and Collector, through appellate and revisional proceedings before the Revenue Appellate Authority (RAA), Divisional Commissioner, and the Board of Revenue, as well as writ petitions before the High Court.",
      "We advise and represent clients in suits concerning declaration of khatedari and tenancy rights; partition of agricultural holdings; correction of revenue records, jamabandi, and khasra entries; demarcation, measurement, and boundary disputes; disputes relating to right of way, easements, and passage over agricultural land; suits for possession and prevention of unlawful dispossession; and matters involving succession, transfer, and alienation of agricultural land.",
      "We handle matters relating to revenue administration and land transactions, including mutation proceedings, challenges to mutation entries, cancellation of illegal or fraudulent mutations, conversion of agricultural land for non-agricultural or commercial purposes under Section 90-A and applicable conversion rules, regularization of land use, and proceedings involving ceiling, resumption, and government land grants.",
      "Our litigation practice covers original revenue proceedings, first and second appeals, revisions, review applications, restoration proceedings, and writ petitions under Articles 226 and 227 of the Constitution of India. Where revenue orders have significant consequences for title, possession, or proprietary rights, we carefully assess the appropriate forum and remedy, including whether the matter requires proceedings before a civil court or invocation of the supervisory or writ jurisdiction of the High Court.",
      "We also assist in property due diligence and documentation, including examination of title documents, revenue records, allotment documents, conversion orders, sale deeds, lease deeds, inheritance documents, and other instruments affecting rights in land. Where disputes arise in connection with development, construction, acquisition, transfer, or use of land, we provide legal advice designed to identify potential risks and protect the client's interests at the earliest possible stage.",
      "Land disputes frequently involve overlapping questions of title, possession, revenue records, statutory restrictions, government action, and competing claims, making a carefully structured legal strategy essential. We therefore approach each matter by examining the underlying title and documentary record, the applicable statutory framework, the jurisdiction of the concerned authority, limitation and procedural requirements, and the most effective remedy available."
    ],
    services: [
      "Khatedari & Tenancy Rights: Declaration of agricultural khatedari rights, tenancy disputes, partition of holdings, and possession restoration.",
      "Record Corrections & Mutations: Mutation entry proceedings, challenging illegal/fraudulent mutations, correction of jamabandi, and khasra record entries.",
      "Demarcation & Land Disputes: Boundary disputes, official demarcation, right of way, easement pathways, and agricultural land transfers.",
      "Statutory Conversions & Compliance: Land use conversion for non-agricultural/commercial use (Section 90-A), regularization, and land acquisition claims.",
      "Revenue Appeals & Writs: First/second appeals before RAA & Board of Revenue, revisions, and High Court writ petitions under Articles 226/227."
    ],
    forums: "Tehsildar, Sub-Divisional Officer (SDO), Assistant Collector, Collector, Divisional Commissioner, Revenue Appellate Authority (RAA), Board of Revenue (Ajmer), and Rajasthan High Court.",
    laws: "Rajasthan Tenancy Act (1955); Rajasthan Land Revenue Act (1956); Rajasthan Land Revenue (Conversion of Agricultural Land) Rules; Rajasthan Colonisation Act (1954); Right to Fair Compensation and Transparency in Land Acquisition Act (2013); Registration Act (1908); Transfer of Property Act (1882)."
  },
  {
    id: "cheque-bounce",
    title: "Negotiable Instruments Act (Cheque Dishonour / Section 138)",
    subtitle: "Section 138 Prosecution, Defense & Financial Dispute Resolution",
    description: "We provide focused and comprehensive legal representation in financial and commercial disputes arising under the Negotiable Instruments Act, 1881, with particular emphasis on cheque dishonour proceedings under Section 138.",
    icon: "🖋️",
    image: niActImg,
    maxim: {
      latin: "Consensus facit legem",
      meaning: "Agreement makes the law",
    },
    intro: "We provide focused and comprehensive legal representation in financial and commercial disputes arising under the Negotiable Instruments Act, 1881, with particular emphasis on cheque dishonour proceedings under Section 138. We represent individuals, companies, commercial establishments, partnership firms, financial institutions, creditors, and other stakeholders, providing strategic assistance from the earliest stage of a dispute through trial, appellate and revisional proceedings.",
    paragraphs: [
      "We provide focused and comprehensive legal representation in financial and commercial disputes arising under the Negotiable Instruments Act, 1881, with particular emphasis on cheque dishonour proceedings under Section 138. We represent individuals, companies, commercial establishments, partnership firms, financial institutions, creditors, and other stakeholders, providing strategic assistance from the earliest stage of a dispute through trial, appellate and revisional proceedings.",
      "Our practice begins with careful assessment of the underlying transaction, liability, cheque, supporting documentation, correspondence, and statutory requirements, followed by preparation and issuance of legally compliant statutory demand notices. We advise clients on the appropriate course of action following dishonour of a cheque, including preservation of evidence, computation of legally recoverable amounts, limitation requirements, and preparation of the complaint.",
      "We represent complainants and accused persons in Section 138 proceedings, including matters concerning legally enforceable debt or liability, issuance and presentation of cheques, dishonour, statutory notices, presumptions under the Negotiable Instruments Act, replies to demand notices, filing and defence of complaints, service of process, appearance, bail, evidence, examination and cross-examination, statements of the accused, and final arguments.",
      "Our practice also encompasses disputes involving commercial loans, business transactions, supply of goods and services, partnership and proprietary business dealings, security cheques, repayment arrangements, settlements, invoices, accounts, and other commercial transactions where negotiable instruments form part of the underlying financial relationship.",
      "We also assist clients in matters concerning interim compensation under Section 143A, compensation upon conviction under Section 357 of the Code of Criminal Procedure and corresponding provisions Section 395 of Bharatiya Nagarik Suraksha Sanhita, suspension of sentence, recovery and execution of monetary awards, and enforcement of orders passed by competent courts, wherever applicable.",
      "For accused persons, our approach involves a detailed examination of the existence and enforceability of the alleged debt, statutory compliance, issuance and presentation of the cheque, notice requirements, limitation, presumptions and rebuttal, documentary evidence, and the complainant's evidence and testimony. For complainants and creditors, we focus on establishing the statutory ingredients of the offence, effectively presenting documentary and oral evidence, and pursuing appropriate remedies for recovery and compensation.",
      "We understand that cheque dishonour litigation frequently involves an underlying commercial or financial dispute, and therefore approach each matter not merely as a statutory prosecution but as part of the broader legal and commercial relationship between the parties. Our objective is to develop a focused, evidence-driven, and strategically appropriate litigation plan aimed at protecting the client's financial interests while pursuing every legally available remedy."
    ],
    services: [
      "Statutory Demand Notices: Drafting, issuing, and legally replying to statutory demand notices under Section 138 of the NI Act.",
      "Complaint Filing & Defense: Filing complaints for creditors and comprehensive defense for accused persons in Section 138 proceedings.",
      "Interim Compensation & Bail: Representing clients on Section 143A interim compensation applications, bail, and personal appearance exemptions.",
      "Trial Advocacy & Rebuttal: Cross-examination of complainants, establishing security cheque defenses, and rebutting statutory presumptions under Sections 118 & 139.",
      "Compounding & Appellate Defense: Negotiated compounding of offenses, appeals against conviction, suspension of sentences, and monetary recovery."
    ],
    forums: "Special NI Act Courts, Courts of Judicial Magistrate (JMFC/Metropolitan Magistrate), Courts of Session, Appellate Courts, and the Rajasthan High Court.",
    laws: "Negotiable Instruments Act (1881); Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023); Bharatiya Sakshya Adhiniyam (BSA, 2023); Code of Criminal Procedure (1973); Indian Contract Act (1872); Limitation Act (1963)."
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    subtitle: "Divorce, Maintenance, Custody, Domestic Violence & Family Settlements",
    description: "We provide comprehensive, sensitive, and strategic legal representation in family and matrimonial matters, assisting individuals and families through some of the most challenging and personal legal disputes they may face.",
    icon: "👨‍👩‍👧‍👦",
    image: familyImg,
    maxim: {
      latin: "Salus populi suprema lex esto",
      meaning: "The welfare of the people shall be the supreme law.",
    },
    intro: "We provide comprehensive, sensitive, and strategic legal representation in family and matrimonial matters, assisting individuals and families through some of the most challenging and personal legal disputes they may face. Our matrimonial practice is committed to delivering thoughtful counsel and effective advocacy, balancing the need for firm protection of our clients' legal and financial interests with a practical approach aimed at minimizing emotional and familial disruption.",
    paragraphs: [
      "We provide comprehensive, sensitive, and strategic legal representation in family and matrimonial matters, assisting individuals and families through some of the most challenging and personal legal disputes they may face. Our matrimonial practice is committed to delivering thoughtful counsel and effective advocacy, balancing the need for firm protection of our clients' legal and financial interests with a practical approach aimed at minimizing emotional and familial disruption.",
      "We advise and represent clients in matrimonial proceedings under applicable personal and secular laws, including petitions for dissolution of marriage by mutual consent; contested divorce proceedings on grounds of cruelty, desertion, adultery, and other statutory grounds; petitions for restitution of conjugal rights; judicial separation; and nullity and annulment of marriage.",
      "Our practice encompasses all aspects of financial provision and matrimonial property claims, including applications for interim maintenance, permanent alimony, maintenance under Section 144 of the Bharatiya Nagarik Suraksha Sanhita (and corresponding Section 125 CrPC), maintenance under personal laws, litigation concerning streedhan and return of matrimonial property, execution of maintenance orders, and proceedings relating to matrimonial settlements.",
      "We represent parents and guardians in sensitive matters involving child custody, care and control, visitation rights, relocation, international child custody disputes, guardianship petitions, and adoption proceedings under applicable statutory and personal laws, keeping the best interests and welfare of the child as the paramount consideration.",
      "We also handle proceedings under the Protection of Women from Domestic Violence Act, 2005 (PWDV Act), including applications for protection orders, residence orders, monetary relief, and custody orders, as well as defending against unwarranted or retaliatory domestic violence proceedings.",
      "Our practice extends to pre-litigation counseling, negotiated matrimonial settlements, mediation, drafting of comprehensive settlement agreements, family arrangements, and resolution of ancillary disputes arising from matrimonial breakdown.",
      "We recognize that matrimonial and family disputes require a balanced approach combining strong courtroom advocacy with discretion, sensitivity, and strategic perspective, and we work closely with each client to achieve outcomes that safeguard their dignity, financial security, and future well-being."
    ],
    services: [
      "Divorce Proceedings: Contested divorce, mutual consent divorce, annulment of marriage, judicial separation, and restitution of conjugal rights.",
      "Maintenance & Alimony: Interim and permanent maintenance claims under Section 144 BNSS / 125 CrPC and personal laws, streedhan recovery, and order execution.",
      "Child Custody & Guardianship: Child custody petitions, visitation arrangements, guardianship proceedings, and child welfare litigation.",
      "Domestic Violence Protection: Proceedings under the Protection of Women from Domestic Violence Act (PWDV Act, 2005) for protection and residence orders.",
      "Mediation & Family Settlements: Pre-litigation counseling, alternative dispute resolution, and drafting binding matrimonial settlement deeds."
    ],
    forums: "Family Courts, Courts of Judicial Magistrate, District & Sessions Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Hindu Marriage Act (1955); Hindu Adoption and Maintenance Act (1956); Guardians and Wards Act (1890); Protection of Women from Domestic Violence Act (2005); Special Marriage Act (1954); Muslim Personal Law / Dissolution of Muslim Marriages Act (1939); Bharatiya Nagarik Suraksha Sanhita (2023)."
  },
  {
    id: "personal-law",
    title: "Personal Laws & Succession",
    subtitle: "Wills, Probates, Succession Certificates & Ancestral Property Partition",
    description: "We provide comprehensive legal services in personal laws, succession, inheritance, and estate planning, assisting individuals, families, executors, trustees, and beneficiaries in managing and protecting their proprietary and personal rights.",
    icon: "📜",
    image: personalLawImg,
    maxim: {
      latin: "Nemo potest plus juris ad alium transferre quam ipse habet",
      meaning: "No one can transfer more right to another than he himself has.",
    },
    intro: "We provide comprehensive legal services in personal laws, succession, inheritance, and estate planning, assisting individuals, families, executors, trustees, and beneficiaries in managing and protecting their proprietary and personal rights across generations.",
    paragraphs: [
      "We provide comprehensive legal services in personal laws, succession, inheritance, and estate planning, assisting individuals, families, executors, trustees, and beneficiaries in managing and protecting their proprietary and personal rights across generations.",
      "Our succession and estate practice encompasses both testamentary and intestate succession under the Indian Succession Act, 1925, the Hindu Succession Act, 1956, and other applicable personal laws. We advise and represent clients in proceedings for the grant of probate of wills, letters of administration with or without will annexed, succession certificates for debts and securities, legal heir declarations, and challenges to the validity, execution, or genuineness of testamentary instruments.",
      "We represent clients in disputes concerning ancestral property, coparcenary rights, partition of joint family and inherited property, claims of exclusion from inheritance, shares of female heirs under the Hindu Succession Act (including post-2005 coparcenary rights), nomination disputes relating to bank accounts, shares, insurance policies, and immovable property, and disputes between co-heirs and legal representatives.",
      "Our practice also includes comprehensive estate planning and documentation services, including drafting and execution of wills, codicils, family settlement deeds, relinquishment deeds, gift deeds, partition deeds, and instruments creating private family trusts, designed to ensure orderly devolution of assets and minimize potential for future disputes.",
      "We represent clients in contentious succession and inheritance litigation before Civil Courts, Family Courts, Revenue Courts, and Appellate Courts, handling complex questions involving validity of wills, suspicious circumstances, capacity and undue influence, interpretation of testamentary provisions, rights of adopted children, succession under customary law, and administration of estates.",
      "We approach every personal law and succession matter with sensitivity, meticulous attention to documentary and genealogical evidence, and a clear focus on achieving legally sound and sustainable outcomes that protect our clients' inheritance and family wealth."
    ],
    services: [
      "Probate & Succession: Applications for probate of wills, letters of administration, succession certificates for bank assets/securities, and legal heir declarations.",
      "Will Disputes & Validity: Challenging and defending wills on grounds of genuineness, capacity, suspicious circumstances, or undue influence.",
      "Ancestral & Coparcenary Partition: Litigation over ancestral property, coparcenary rights of daughters/female heirs, and joint family property division.",
      "Estate Planning & Documentation: Drafting wills, codicils, family settlement agreements, release/relinquishment deeds, gift deeds, and private family trusts.",
      "Nomination & Estate Administration: Resolution of nomination conflicts vs legal heir rights across immovable property, bank accounts, and shares."
    ],
    forums: "Civil Courts, District & Sessions Courts, Family Courts, Revenue Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Indian Succession Act (1925); Hindu Succession Act (1956); Hindu Marriage Act (1955); Special Marriage Act (1954); Muslim Personal Law (Shariat) Application Act (1937); Indian Trusts Act (1882); Transfer of Property Act (1882); Registration Act (1908)."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution (ADR)",
    subtitle: "Domestic & Commercial Arbitration, Section 9/11/34 Proceedings",
    description: "Our Arbitration and Alternative Dispute Resolution (ADR) practice is designed to help corporate entities, partnerships, financial institutions, businesses, and individuals resolve complex commercial and contractual disputes efficiently, strategically, and cost-effectively.",
    icon: "🤝",
    image: arbitrationImg,
    maxim: {
      latin: "Pacta sunt servanda",
      meaning: "Agreements must be kept",
    },
    intro: "Our Arbitration and Alternative Dispute Resolution (ADR) practice is designed to help corporate entities, partnerships, financial institutions, businesses, and individuals resolve complex commercial and contractual disputes efficiently, strategically, and cost-effectively, while minimising prolonged court litigation and protecting our clients' legal and commercial interests.",
    paragraphs: [
      "Our Arbitration and Alternative Dispute Resolution (ADR) practice is designed to help corporate entities, partnerships, financial institutions, businesses, and individuals resolve complex commercial and contractual disputes efficiently, strategically, and cost-effectively, while minimising prolonged court litigation and protecting our clients' legal and commercial interests.",
      "We provide comprehensive representation throughout the entire arbitration lifecycle, beginning with the identification and invocation of an arbitration agreement and continuing through constitution of the arbitral tribunal, pleadings, evidence, hearings, interim measures, final award, and post-award proceedings.",
      "Our practice includes drafting and issuing notices invoking arbitration under the applicable provisions of the Arbitration and Conciliation Act, 1996, including notices concerning commencement of arbitral proceedings and appointment of arbitrators. We also assist clients in filing applications under Section 11 of the Arbitration and Conciliation Act, 1996 before the competent High Court or other appropriate forum for appointment of arbitrators where the agreed appointment mechanism has failed or the opposing party has failed to act in accordance with the arbitration agreement.",
      "We represent clients before Arbitral Tribunals and institutional and ad hoc arbitration forums, handling the full range of proceedings including statement of claim, statement of defence, counterclaims, rejoinders, interim applications, documentary evidence, examination and cross-examination of witnesses, written submissions, oral arguments, and final hearings. We also assist in matters concerning the jurisdiction and competence of the tribunal, validity and interpretation of arbitration agreements, limitation, admissibility of claims, procedural objections, and evidentiary issues.",
      "Our practice includes proceedings for interim relief and protection of assets, including applications under Section 9 before courts and Section 17 before the Arbitral Tribunal, where appropriate. We advise clients on urgent protective measures, preservation of assets and evidence, security for claims, injunctions, and other interim remedies available under the arbitration framework.",
      "We further represent clients in challenges to arbitral awards under Section 34, appeals under Section 37, and proceedings concerning enforcement and execution of arbitral awards. Where appropriate, we assist with proceedings concerning setting aside, modification-related issues, stay of enforcement, and resistance to enforcement on legally recognised grounds.",
      "Our ADR practice also encompasses mediation, conciliation, negotiated settlements, commercial negotiations, and other consensual dispute-resolution mechanisms, with a focus on achieving commercially viable outcomes without unnecessarily escalating disputes.",
      "We approach every arbitration by carefully examining the underlying contract, arbitration clause, correspondence, financial records, supporting documentation, chronology of events, and applicable contractual and statutory provisions. This enables us to formulate a focused strategy concerning jurisdiction, claims, counterclaims, evidence, limitation, interim relief, and the ultimate relief sought.",
      "Whether assisting with issuance of an arbitration notice, filing a Section 11 application, constitution of an arbitral tribunal, representation before the Tribunal, seeking interim protection, challenging an adverse award, or enforcing a favourable award, we provide end-to-end arbitration and ADR representation designed to protect our client's position while pursuing the most efficient and effective resolution available in law."
    ],
    services: [
      "Arbitration Invocation & Section 11: Drafting notices of arbitration and filing Section 11 petitions before the High Court for arbitrator appointment.",
      "Tribunal Representation: Statement of claims, statement of defense, counterclaims, witness examination, and arguments before ad-hoc & institutional tribunals.",
      "Interim Protection: Section 9 petitions before Commercial/Civil Courts and Section 17 applications before Arbitral Tribunals for asset protection and injunctions.",
      "Award Challenges & Enforcement: Setting aside arbitral awards under Section 34, appeals under Section 37, and execution/enforcement of arbitral awards.",
      "Commercial Mediation & Conciliation: Structured pre-litigation settlement negotiations, mediation proceedings, and drafting binding settlement terms."
    ],
    forums: "Arbitral Tribunals (Sole Arbitrators & Panels), Commercial Courts, Civil Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Arbitration and Conciliation Act (1996); Mediation Act (2023); Commercial Courts Act (2015); Indian Contract Act (1872); Specific Relief Act (1963); Code of Civil Procedure (1908)."
  }
];

export const getPracticeAreaById = (id: string): PracticeArea | undefined => {
  // Match either exact ID or common aliases
  return practiceAreasList.find(area => area.id === id || (id === 'civil-law' && area.id === 'civil-litigation'));
};
