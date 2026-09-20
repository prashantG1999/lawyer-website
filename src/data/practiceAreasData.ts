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
    subtitle: "Debt Recovery Tribunals, SARFAESI Enforcement & Appellate Proceedings",
    description: "Legal representation and advisory in banking and financial matters, encompassing proceedings under the SARFAESI Act, Recovery of Debts and Bankruptcy (RDB) Act, and related regulatory frameworks before Debt Recovery Tribunals, Appellate Tribunals, and High Courts.",
    icon: "🏦",
    image: bankingImg,
    maxim: {
      latin: "Vigilantibus non dormientibus jura subveniunt",
      meaning: "The law assists those who are vigilant, not those who sleep on their rights.",
    },
    intro: "The practice encompasses legal representation and advisory in banking and financial disputes, including proceedings concerning the enforcement of security interests, debt recovery, borrower and guarantor representation, and challenges to measures initiated by banks and financial institutions.",
    paragraphs: [
      "The practice encompasses legal representation and advisory in banking and financial disputes, including proceedings concerning the enforcement of security interests, debt recovery, borrower and guarantor representation, and challenges to measures initiated by banks and financial institutions before competent judicial and quasi-judicial forums.",
      "Matters undertaken include proceedings relating to loan defaults, classification of accounts, recovery of outstanding dues, invocation of guarantees, mortgage and hypothecation disputes, and attachment, possession, and sale of secured assets under applicable banking and securitisation statutes.",
      "Representation is provided in proceedings arising under the SARFAESI Act, 2002, including demand notices under Section 13(2), objections under Section 13(3A), enforcement measures under Section 13(4), applications for taking possession under Section 14 before the Chief Metropolitan Magistrate or District Magistrate, and Securitisation Applications under Section 17 before the Debt Recovery Tribunal.",
      "The practice includes original and appellate litigation before the Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT), as well as writ petitions under Articles 226 and 227 of the Constitution of India before the High Court where maintainable under law.",
      "Work also includes proceedings under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act) concerning Original Applications (OAs), recovery certificates, warrant of attachment, and sale of movable and immovable mortgaged properties.",
      "Legal work includes the examination and scrutiny of loan agreements, sanction letters, guarantee deeds, mortgage documents, restructuring proposals, settlement terms, and regulatory compliance under Reserve Bank of India (RBI) circulars and prudential guidelines."
    ],
    services: [
      "Original Applications (OAs) and recovery certificate proceedings under the Recovery of Debts and Bankruptcy Act (RDB Act).",
      "Securitisation Applications (SAs) challenging enforcement measures under Sections 13(2), 13(4), 14, and 17 of the SARFAESI Act.",
      "Interim stay proceedings and appellate challenges before the Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT).",
      "Legal examination of auction notices, valuation disputes, possession proceedings, and statutory settlement proposals.",
      "Litigation concerning loan agreements, mortgages, invocation of guarantees, and constitutional writ remedies before the High Court."
    ],
    forums: "Debt Recovery Tribunal (DRT) Jaipur, Debt Recovery Appellate Tribunal (DRAT) Delhi, District & Sessions Courts, and the Rajasthan High Court.",
    laws: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI Act, 2002); Recovery of Debts and Bankruptcy Act (RDB Act, 1993); Banking Regulation Act (1949); RBI Prudential Guidelines; Transfer of Property Act (1882); Indian Contract Act (1872)."
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    subtitle: "Civil Suits, Injunctions, Property Disputes & Appellate Proceedings",
    description: "Legal representation in civil proceedings, encompassing original suits, property disputes, injunctions, specific performance, contractual claims, appeals, and execution of decrees before competent civil courts and appellate forums.",
    icon: "⚖️",
    image: civilImg,
    maxim: {
      latin: "Res judicata pro veritate accipitur",
      meaning: "A matter adjudicated is accepted as true.",
    },
    intro: "The practice encompasses legal representation across various categories of civil disputes before civil courts, commercial courts, and appellate authorities, covering every stage of litigation from pleadings and trial to appeals, revisions, and execution proceedings.",
    paragraphs: [
      "The practice encompasses legal representation across various categories of civil disputes before civil courts, commercial courts, and appellate authorities, covering every stage of litigation from pleadings and trial to appeals, revisions, and execution proceedings.",
      "Matters undertaken include suits for declaration of title, rights, and legal status; permanent, mandatory, and temporary injunctions under the Code of Civil Procedure and Specific Relief Act; suits for partition and separate possession of ancestral or joint family properties; cancellation or setting aside of registered deeds, instruments, and decrees; and suits for recovery of possession of immovable property.",
      "The practice includes monetary and commercial claims, encompassing suits for recovery of money, damages for breach of contract, rendition of accounts, mesne profits, and disputes arising out of commercial agreements, partnership deeds, construction contracts, and business transactions under the Commercial Courts Act, 2015.",
      "Trial proceedings include drafting of plaints, written statements, replications, and interlocutory applications; framing of issues; discovery, production, and inspection of documents; filing of evidence affidavits; examination and cross-examination of witnesses; and advance preparation of final arguments under the Code of Civil Procedure, 1908.",
      "Appellate and revisional work includes regular first appeals (RFA), second appeals (RSA), civil revisions, review petitions, transfer applications, and restoration applications before District Courts, Appellate Courts, and the High Court.",
      "Representation is also undertaken in execution proceedings under Order XXI of the Code of Civil Procedure for enforcement of decrees, orders, and awards, including attachment of property, warrant of possession, arrest and detention, and precept proceedings."
    ],
    services: [
      "Property & Title Suits: Declaration of title, partition of ancestral and joint property, possession suits, boundary disputes, and easement rights.",
      "Injunctions & Contract Enforcement: Temporary, permanent, and mandatory injunctions, specific performance of agreements to sell, and rescission of contracts.",
      "Money & Commercial Claims: Recovery of money, contractual damages, mesne profits, settlement of accounts, and commercial suits.",
      "Pleadings & Trial Procedure: Drafting plaints, written statements, interlocutory applications, evidence affidavits, and examination of witnesses.",
      "Appeals, Revisions & Execution: First and second appeals, civil revisions, review petitions, and execution proceedings under Order XXI CPC."
    ],
    forums: "Civil Courts (Junior/Senior Division), Commercial Courts, District & Sessions Courts, Appellate Courts, Tribunals, and the Rajasthan High Court.",
    laws: "Code of Civil Procedure (1908); Specific Relief Act (1963); Indian Contract Act (1872); Transfer of Property Act (1882); Indian Easements Act (1882); Registration Act (1908); Limitation Act (1963); Commercial Courts Act (2015); Indian Stamp Act (1899)."
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    subtitle: "Criminal Defense, Trials, Bail, Appeals & Statutory Offenses",
    description: "Legal representation in criminal proceedings, encompassing defense during investigation, bail applications, trial proceedings, criminal appeals, revisions, and quashing petitions under the Bharatiya Nagarik Suraksha Sanhita (BNSS) and substantive criminal statutes.",
    icon: "🛡️",
    image: criminalImg,
    maxim: {
      latin: "Ei incumbit probatio qui dicit, non qui negat",
      meaning: "The burden of proof lies upon him who asserts, not upon him who denies.",
    },
    intro: "The practice encompasses legal representation in criminal matters across all stages of proceedings, from pre-trial investigations and bail to trial before Magistrate Courts, Sessions Courts, and appellate and revisional proceedings before the High Court.",
    paragraphs: [
      "The practice encompasses legal representation in criminal matters across all stages of proceedings, from pre-trial investigations and bail to trial before Magistrate Courts, Sessions Courts, and appellate and revisional proceedings before the High Court.",
      "Matters undertaken include applications for anticipatory bail under Section 482 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) (corresponding to Section 438 CrPC), regular bail under Sections 480 and 483 BNSS (Sections 437 and 439 CrPC), interim bail, transit bail, modification or relaxation of bail conditions, and defense against applications for cancellation of bail.",
      "Representation is provided during investigation and inquiry proceedings, including responding to statutory notices and summonses, applications under Section 175(3) BNSS (Section 156(3) CrPC) for registration of FIRs, and preparation and filing of private criminal complaints and protest petitions before competent Magistrate Courts.",
      "Trial representation encompasses proceedings before Courts of Judicial Magistrate, Chief Judicial Magistrate, Courts of Session, and Special Courts. This includes discharge applications under Sections 250, 262, and 257 BNSS, framing of charges, handling of documentary and electronic evidence under the Bharatiya Sakshya Adhiniyam, 2023 (BSA), examination and cross-examination of witnesses, and final arguments.",
      "Appellate and revisional practice includes criminal appeals against conviction or acquittal, criminal revision petitions, applications for suspension of sentence and grant of bail pending appeal, and applications for compounding of compoundable offenses under Section 359 BNSS.",
      "The practice also includes petitions for quashing of FIRs, charge-sheets, and criminal proceedings under Section 528 BNSS (Section 482 CrPC), writ petitions under Articles 226 and 227 of the Constitution of India, and matters arising under special penal statutes including the Information Technology Act, Prevention of Corruption Act, and economic offenses."
    ],
    services: [
      "Bail Proceedings: Anticipatory bail, regular bail, interim bail, transit bail, and responses to cancellation of bail applications under the BNSS.",
      "Quashing & Inherent Powers: Petitions for quashing of FIRs, police reports, charge-sheets, and criminal complaints under Section 528 BNSS (Section 482 CrPC).",
      "Criminal Trial Practice: Discharge applications, framing of charges, evidence under Bharatiya Sakshya Adhiniyam, examination of witnesses, and final defense arguments.",
      "Pre-Trial & Investigative Inquiries: Representation during investigative summonses, applications under Section 175(3) BNSS, and filing of protest petitions.",
      "Appeals & Revisions: Criminal appeals against conviction or acquittal, revision petitions, applications for suspension of sentence, and compounding of offenses."
    ],
    forums: "Courts of Judicial Magistrate (JMFC/CJM), Courts of Session, Special Criminal Courts (CBI/ACB/POCSO), Appellate Courts, and the Rajasthan High Court.",
    laws: "Bharatiya Nyaya Sanhita (BNS, 2023); Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023); Bharatiya Sakshya Adhiniyam (BSA, 2023); Indian Penal Code (1860); Code of Criminal Procedure (1973); Indian Evidence Act (1872); Information Technology Act (2000); Prevention of Corruption Act (1988)."
  },
  {
    id: "revenue-law",
    title: "Revenue & Land Laws",
    subtitle: "Land Tenancy, Khatedari Rights, Mutations & Revenue Appeals",
    description: "Legal representation in agricultural and revenue matters, including tenancy disputes, khatedari rights, mutation proceedings, partition of agricultural holdings, and appeals before revenue courts and authorities.",
    icon: "🌾",
    image: revenueImg,
    maxim: {
      latin: "Nemo dat quod non habet",
      meaning: "No one gives what they do not have.",
    },
    intro: "The practice encompasses legal representation in land, tenancy, and revenue matters arising under the Rajasthan Tenancy Act, Rajasthan Land Revenue Act, and related statutory enactments governing agricultural and non-agricultural land.",
    paragraphs: [
      "The practice encompasses legal representation in land, tenancy, and revenue matters arising under the Rajasthan Tenancy Act, Rajasthan Land Revenue Act, and related statutory enactments governing agricultural and non-agricultural land.",
      "Proceedings are undertaken across the revenue administrative and judicial hierarchy, including before the Tehsildar, Sub-Divisional Officer (SDO), Assistant Collector, Collector, Divisional Commissioner, Revenue Appellate Authority (RAA), and the Board of Revenue for Rajasthan at Ajmer.",
      "Matters include suits for declaration of khatedari and tenancy rights; partition of agricultural holdings under Section 53 of the Rajasthan Tenancy Act; suits for possession and prevention of dispossession; demarcation, boundary, and measurement disputes; and disputes concerning right of way, easement pathways, and access to agricultural fields.",
      "The practice covers revenue administrative proceedings, including mutation proceedings (namantaran), challenges to contested or erroneous mutation entries, correction of revenue records including jamabandi and khasra girdawari entries, and proceedings relating to land conversion under Section 90-A of the Rajasthan Land Revenue Act.",
      "Litigation encompasses first appeals, second appeals, revisions, references, and review applications before the Revenue Appellate Authority and the Board of Revenue, as well as writ petitions before the High Court under Articles 226 and 227 of the Constitution of India challenging revenue orders.",
      "Work also includes examination and verification of revenue records, trace maps, revenue entries, conversion orders, allotment conditions, and inheritance records in connection with agricultural land titles and tenancy succession."
    ],
    services: [
      "Khatedari & Tenancy Proceedings: Declaration of khatedari rights, tenancy disputes, partition of agricultural land, and restoration of possession.",
      "Revenue Records & Mutation: Mutation entry proceedings (namantaran), cancellation of disputed mutations, and correction of jamabandi and khasra records.",
      "Demarcation & Right of Way: Official land demarcation, boundary settlement, easement pathways, and disputes regarding agricultural access.",
      "Land Conversion & Statutory Compliance: Applications and proceedings relating to agricultural land conversion (Section 90-A) and regularization.",
      "Revenue Appeals & High Court Writs: First and second appeals before the RAA and Board of Revenue, revisions, and writ petitions under Articles 226/227."
    ],
    forums: "Tehsildar, Sub-Divisional Officer (SDO), Assistant Collector, Collector, Divisional Commissioner, Revenue Appellate Authority (RAA), Board of Revenue (Ajmer), and Rajasthan High Court.",
    laws: "Rajasthan Tenancy Act (1955); Rajasthan Land Revenue Act (1956); Rajasthan Land Revenue (Conversion of Agricultural Land) Rules; Rajasthan Colonisation Act (1954); Right to Fair Compensation and Transparency in Land Acquisition Act (2013); Registration Act (1908); Transfer of Property Act (1882)."
  },
  {
    id: "cheque-bounce",
    title: "Negotiable Instruments Act (Cheque Dishonour / Section 138)",
    subtitle: "Section 138 Proceedings, Statutory Demands, Defense & Appellate Practice",
    description: "Legal representation in proceedings under the Negotiable Instruments Act, 1881, encompassing statutory demand notices, complaint filing, defense in cheque dishonour trials under Section 138, and related appellate proceedings.",
    icon: "🖋️",
    image: niActImg,
    maxim: {
      latin: "Consensus facit legem",
      meaning: "Agreement makes the law",
    },
    intro: "The practice encompasses legal representation in matters arising under the Negotiable Instruments Act, 1881, specifically concerning cheque dishonour proceedings under Section 138, covering statutory notice compliance, trial practice, and appellate remedies.",
    paragraphs: [
      "The practice encompasses legal representation in matters arising under the Negotiable Instruments Act, 1881, specifically concerning cheque dishonour proceedings under Section 138, covering statutory notice compliance, trial practice, and appellate remedies.",
      "Matters include the drafting, issuance, and legal reply to statutory demand notices under Section 138(b) of the Negotiable Instruments Act, examination of statutory timelines, service requirements, and evaluation of legally enforceable debt or liability.",
      "Representation is undertaken in complaint proceedings instituted before Special NI Act Courts and Courts of Judicial Magistrate, including filing of criminal complaints, verification of complainants, recording of preliminary evidence, summoning of accused, and appearance proceedings.",
      "Trial proceedings cover framing of notice under Section 251 CrPC / Section 274 BNSS, applications for interim compensation under Section 143A of the Negotiable Instruments Act, examination and cross-examination of witnesses, production of banking and transactional evidence, examination of the accused under Section 351 BNSS (Section 313 CrPC), and final arguments.",
      "The practice addresses questions concerning statutory presumptions under Sections 118 and 139 of the Negotiable Instruments Act, standard of proof required for rebuttal, commercial transactions, business agreements, security cheques, and account reconciliation.",
      "Appellate and revisional work includes criminal appeals against conviction or acquittal, applications for suspension of sentence under Section 430 BNSS (Section 389 CrPC), deposit of appellate compensation under Section 148 of the Act, compounding of offenses under Section 147, and settlement proceedings before Lok Adalats and mediation centers."
    ],
    services: [
      "Statutory Demand Notices: Drafting, issuance, and replies to demand notices under Section 138(b) within statutory limitation periods.",
      "Complaint Filing & Defense: Institution of complaints for complainants and trial defense for accused persons before Special NI Act Courts.",
      "Interim Compensation & Bail: Representation concerning Section 143A interim compensation applications, appearance, and regular bail proceedings.",
      "Trial Procedure & Presumption Rebuttal: Evidence presentation, cross-examination, and legal arguments regarding statutory presumptions under Sections 118 and 139.",
      "Compounding & Appellate Proceedings: Compounding of offenses under Section 147, appeals against conviction, suspension of sentence, and Section 148 deposits."
    ],
    forums: "Special NI Act Courts, Courts of Judicial Magistrate (JMFC/Metropolitan Magistrate), Courts of Session, Appellate Courts, and the Rajasthan High Court.",
    laws: "Negotiable Instruments Act (1881); Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023); Bharatiya Sakshya Adhiniyam (BSA, 2023); Code of Criminal Procedure (1973); Indian Contract Act (1872); Limitation Act (1963)."
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    subtitle: "Matrimonial Proceedings, Maintenance, Custody, Domestic Violence & Family Settlements",
    description: "Legal representation in family and matrimonial matters, including divorce proceedings, maintenance, child custody, guardianship, proceedings under the Protection of Women from Domestic Violence Act, and family settlement arrangements.",
    icon: "👨‍👩‍👧‍👦",
    image: familyImg,
    maxim: {
      latin: "Salus populi suprema lex esto",
      meaning: "The welfare of the people shall be the supreme law.",
    },
    intro: "The practice encompasses legal representation in matrimonial and family disputes under personal and secular laws, covering proceedings before Family Courts, Magistrate Courts, and appellate jurisdictions.",
    paragraphs: [
      "The practice encompasses legal representation in matrimonial and family disputes under personal and secular laws, covering proceedings before Family Courts, Magistrate Courts, and appellate jurisdictions.",
      "Matrimonial proceedings include petitions for dissolution of marriage by mutual consent under Section 13B of the Hindu Marriage Act, 1955 and corresponding personal laws; contested divorce petitions on statutory grounds including cruelty and desertion; restitution of conjugal rights under Section 9; judicial separation; and nullity or annulment of marriage.",
      "The practice covers claims for financial maintenance and alimony, including applications for interim maintenance, permanent alimony under personal laws, proceedings under Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) (corresponding to Section 125 CrPC), recovery and return of streedhan, and execution of maintenance orders.",
      "Matters involving child custody and welfare include petitions for custody, visitation arrangements, guardianship under the Guardians and Wards Act, 1890 and Hindu Minority and Guardianship Act, 1956, and related custody proceedings governed by the paramount welfare of the minor.",
      "Representation is also undertaken in proceedings under the Protection of Women from Domestic Violence Act, 2005 (PWDV Act), including applications and defense regarding protection orders, residence orders, monetary relief, and custody orders before Magistrate Courts.",
      "The practice also encompasses participation in court-directed mediation, conciliation proceedings, and the drafting of formal family settlements and memorandum of understanding (MoU) relating to matrimonial separation."
    ],
    services: [
      "Divorce Proceedings: Petitions for mutual consent divorce, contested divorce, judicial separation, annulment of marriage, and restitution of conjugal rights.",
      "Maintenance & Alimony: Applications for interim maintenance and permanent alimony under Section 144 BNSS / Section 125 CrPC and personal laws.",
      "Child Custody & Guardianship: Petitions concerning custody, visitation schedules, and guardianship under the Guardians and Wards Act.",
      "Domestic Violence Proceedings: Applications and defense under the Protection of Women from Domestic Violence Act (PWDV Act, 2005).",
      "Mediation & Settlement Deeds: Representation in matrimonial mediation and drafting of formal settlement agreements and memorandum of understanding."
    ],
    forums: "Family Courts, Courts of Judicial Magistrate, District & Sessions Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Hindu Marriage Act (1955); Hindu Adoption and Maintenance Act (1956); Guardians and Wards Act (1890); Protection of Women from Domestic Violence Act (2005); Special Marriage Act (1954); Muslim Personal Law / Dissolution of Muslim Marriages Act (1939); Bharatiya Nagarik Suraksha Sanhita (2023)."
  },
  {
    id: "personal-law",
    title: "Personal Laws & Succession",
    subtitle: "Testamentary Succession, Probates, Succession Certificates & Estate Devolution",
    description: "Legal representation and advisory in personal laws, succession, and inheritance, covering testamentary and intestate devolution, probate petitions, letters of administration, succession certificates, partition of coparcenary property, and estate documentation.",
    icon: "📜",
    image: personalLawImg,
    maxim: {
      latin: "Nemo potest plus juris ad alium transferre quam ipse habet",
      meaning: "No one can transfer more right to another than he himself has.",
    },
    intro: "The practice encompasses legal advisory and representation in matters governing inheritance, personal laws, and testamentary and intestate succession under applicable personal and civil statutes.",
    paragraphs: [
      "The practice encompasses legal advisory and representation in matters governing inheritance, personal laws, and testamentary and intestate succession under applicable personal and civil statutes.",
      "Matters include testamentary and intestate succession under the Indian Succession Act, 1925, the Hindu Succession Act, 1956, and other personal laws, encompassing petitions for grant of probate of wills, letters of administration with or without will annexed, succession certificates for debts and securities, and legal heir declarations.",
      "The practice covers contentious litigation concerning the validity, execution, and interpretation of wills, including disputes involving allegations of lack of testamentary capacity, undue influence, fraud, coercion, and suspicious circumstances surrounding testamentary instruments.",
      "Representation is provided in disputes regarding coparcenary rights, ancestral property partition, shares of female coparceners under Section 6 of the Hindu Succession Act, exclusion claims, and partition suits before Civil Courts.",
      "The practice also encompasses disputes concerning nomination rights versus legal heir succession regarding immovable property, bank accounts, deposits, shares, and insurance policies.",
      "Advisory services include drafting of testamentary instruments including wills and codicils, family settlement deeds, relinquishment deeds, gift deeds, partition deeds, and private trust instruments under the Indian Trusts Act, 1882."
    ],
    services: [
      "Probate & Succession: Petitions for probate of wills, letters of administration, succession certificates, and legal heir certificates.",
      "Will Litigation: Suits and objections regarding testamentary capacity, validity of wills, and suspicious circumstances.",
      "Coparcenary & Ancestral Partition: Litigation concerning Hindu undivided family (HUF) property, ancestral shares, and partition suits.",
      "Estate & Devolution Documentation: Drafting wills, codicils, family settlement agreements, relinquishment deeds, and private family trust deeds.",
      "Nomination & Succession Disputes: Legal resolution of nomination claims versus statutory succession rights across movable and immovable assets."
    ],
    forums: "Civil Courts, District & Sessions Courts, Family Courts, Revenue Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Indian Succession Act (1925); Hindu Succession Act (1956); Hindu Marriage Act (1955); Special Marriage Act (1954); Muslim Personal Law (Shariat) Application Act (1937); Indian Trusts Act (1882); Transfer of Property Act (1882); Registration Act (1908)."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution (ADR)",
    subtitle: "Domestic & Commercial Arbitration, Section 9, 11, 34 & 37 Proceedings",
    description: "Legal representation in domestic and commercial arbitration proceedings, mediation, and conciliation under the Arbitration and Conciliation Act, 1996 and the Mediation Act, 2023, including court proceedings under Sections 9, 11, 34, and 37.",
    icon: "🤝",
    image: arbitrationImg,
    maxim: {
      latin: "Pacta sunt servanda",
      meaning: "Agreements must be kept",
    },
    intro: "The practice encompasses legal representation in domestic and commercial arbitration and alternative dispute resolution mechanisms, covering proceedings before arbitral tribunals as well as related court proceedings under the Arbitration and Conciliation Act, 1996.",
    paragraphs: [
      "The practice encompasses legal representation in domestic and commercial arbitration and alternative dispute resolution mechanisms, covering proceedings before arbitral tribunals as well as related court proceedings under the Arbitration and Conciliation Act, 1996.",
      "Pre-arbitral and invocation proceedings include drafting and issuing statutory notices invoking arbitration, notices for appointment of arbitrators under Section 21 of the Act, and applications under Section 11 before the High Court for appointment of arbitrators where parties fail to agree on an arbitral tribunal.",
      "Representation is provided in interim measure proceedings, including applications under Section 9 of the Arbitration and Conciliation Act before Commercial and Civil Courts, and applications under Section 17 before Arbitral Tribunals for interim protection, preservation of assets, and injunctive relief.",
      "Tribunal proceedings cover representation before sole arbitrators and arbitral panels in institutional and ad-hoc arbitrations, including drafting statement of claim, statement of defence, counterclaims, interlocutory applications, handling of documentary evidence, witness examination, and final arguments.",
      "Post-award litigation encompasses petitions under Section 34 of the Act for setting aside arbitral awards before competent courts, appeals under Section 37, and execution and enforcement proceedings of arbitral awards as decrees of the civil court under Section 36.",
      "The practice also covers consensual dispute resolution under the Mediation Act, 2023, conciliation proceedings, structured negotiations, and the drafting of binding settlement agreements arising from alternative dispute resolution processes."
    ],
    services: [
      "Arbitration Invocation & Section 11: Drafting notices of arbitration, appointment notices, and filing Section 11 petitions before the High Court.",
      "Tribunal Proceedings: Pleadings, statement of claims, defense, counterclaims, evidence presentation, and final arguments before arbitral tribunals.",
      "Interim Measures: Petitions under Section 9 before Commercial Courts and Section 17 applications before Arbitral Tribunals for interim protection.",
      "Award Challenges & Enforcement: Setting aside petitions under Section 34, appeals under Section 37, and execution of arbitral awards under Section 36.",
      "Mediation & Conciliation: Representation in statutory mediation and conciliation proceedings, and drafting of binding commercial settlement agreements."
    ],
    forums: "Arbitral Tribunals (Sole Arbitrators & Panels), Commercial Courts, Civil Courts, Appellate Courts, and the Rajasthan High Court.",
    laws: "Arbitration and Conciliation Act (1996); Mediation Act (2023); Commercial Courts Act (2015); Indian Contract Act (1872); Specific Relief Act (1963); Code of Civil Procedure (1908)."
  }
];

export const getPracticeAreaById = (id: string): PracticeArea | undefined => {
  // Match either exact ID or common aliases
  return practiceAreasList.find(area => area.id === id || (id === 'civil-law' && area.id === 'civil-litigation'));
};
