export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: "Banking & SARFAESI" | "Civil Law" | "Criminal Defense" | "Property Law" | "Corporate Law";
  readTime: string;
  summary: string;
  content: string;
  keyTakeaways?: string[];
  tags: string[];
  featured?: boolean;
}

export const blogCategories = [
  "All",
  "Banking & SARFAESI",
  "Civil Law",
  "Criminal Defense",
  "Property Law",
  "Corporate Law"
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-sarfaesi-act-borrower-rights",
    title: "Understanding SARFAESI Act 2002: Key Borrower Rights and Legal Remedies",
    slug: "understanding-sarfaesi-act-borrower-rights",
    date: "August 18, 2026",
    author: "Adv. Nishant Giri",
    category: "Banking & SARFAESI",
    readTime: "6 min read",
    featured: true,
    summary: "When a bank issues a Section 13(2) notice under the SARFAESI Act, borrowers often panic. Here is a step-by-step breakdown of your statutory rights, Section 17 applications before DRT, and staying auction proceedings.",
    keyTakeaways: [
      "A Section 13(2) notice grants 60 days to clear outstanding dues or submit a formal objection.",
      "The secured creditor is legally obligated to reply to borrower objections under Section 13(3A) within 15 days.",
      "Borrowers can file a Securitisation Application (SA) under Section 17 before the DRT against illegal possession or auction notices.",
      "DRT has statutory powers to restore possession of the asset if procedural non-compliance is established."
    ],
    tags: ["SARFAESI", "DRT Litigation", "Banking Law", "NPA Recovery"],
    content: `
The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 was enacted to enable banks and financial institutions to recover Non-Performing Assets (NPAs) without judicial intervention. However, statutory power must follow statutory procedure.

### 1. The Trigger: Demand Notice Under Section 13(2)
When an account is classified as an NPA, the bank issues a demand notice under Section 13(2), giving the borrower 60 days to discharge the liability.

**Borrower Remedy (Section 13(3A)):**
Within the 60-day period, the borrower has the statutory right to file a formal representation or objection against the notice. The bank is legally mandated to consider this objection and communicate its reasoned response within 15 days. Failure by the bank to respond invalidates subsequent enforcement steps.

### 2. Possession Notice Under Section 13(4)
If the 60-day period expires without settlement, the bank may issue a Possession Notice under Section 13(4) and take symbolic or actual physical possession of the secured asset.

### 3. Judicial Remedy: Securitisation Application (SA) Under Section 17 Before DRT
Borrowers and aggrieved third parties can file a Securitisation Application under Section 17 before the Debt Recovery Tribunal (DRT) within 45 days from the date measure under Section 13(4) is taken.

**Grounds for DRT Relief:**
- Classification of NPA without complying with RBI prudential norms.
- Non-compliance with Rule 8(1) and Rule 8(2) of Security Interest (Enforcement) Rules (improper publication and affixation of possession notice).
- Failure to issue valuation reports prior to fixing reserve prices for auction.
- Violation of 30-day statutory notice requirement prior to property sale (Rule 8(6)).

### Strategic Legal Takeaway
SARFAESI proceedings are highly technical. Timely legal intervention before the Debt Recovery Tribunal (DRT) can successfully stay illegal auctions, protect valuable commercial or residential properties, and facilitate structured One-Time Settlement (OTS) negotiations.
`
  },
  {
    id: "essential-steps-in-civil-property-disputes",
    title: "Essential Legal Steps in Civil Property Disputes in India",
    slug: "essential-steps-in-civil-property-disputes",
    date: "August 10, 2026",
    author: "Adv. Nishant Giri",
    category: "Property Law",
    readTime: "5 min read",
    featured: false,
    summary: "Property litigation requires careful documentation, correct valuation, and timely application for temporary injunctions under Order 39 of CPC to protect possession.",
    keyTakeaways: [
      "Always obtain certified copies of title deeds, revenue records (Khasra/Khatauni), and municipal permits before filing a suit.",
      "An interim injunction under Order 39 Rules 1 & 2 CPC prevents alienation or destruction of the property during litigation.",
      "Ensure proper suit valuation and court fee payment to prevent rejection of plaint under Order 7 Rule 11 CPC."
    ],
    tags: ["Civil Law", "Property Dispute", "CPC", "Injunction"],
    content: `
Property disputes are among the most common and complex civil litigations in Indian courts. Whether dealing with encroachment, ancestral property partition, or breach of sale agreement, procedural diligence is paramount.

### Pre-Litigation Legal Checklist
- **Title Due Diligence:** Gather complete chain of registered title deeds, mutation records, and encumbrance certificates.
- **Legal Notice:** Issue a clear legal notice detailing the cause of action and demanding compliance within 15 to 30 days.

### Protecting Possession: Order 39 Injunctions
The primary objective in property litigation is securing interim relief. Under Order 39, Rules 1 and 2 of the Code of Civil Procedure (CPC), the court can grant a temporary injunction if the plaintiff establishes:
- A prima facie case.
- Balance of convenience in favor of the applicant.
- Irreparable injury if interim relief is withheld.

### Rejection of Plaint Risks (Order 7 Rule 11)
Defendants often seek early dismissal on technical grounds. Ensure your suit is filed within the limitation period (Limitation Act 1963) and is not barred by statutory provisions.
`
  },
  {
    id: "bailable-vs-non-bailable-offences-rights-explained",
    title: "Bailable vs. Non-Bailable Offences: Knowing Your Constitutional & Statutory Rights",
    slug: "bailable-vs-non-bailable-offences-rights-explained",
    date: "July 28, 2026",
    author: "Adv. Nishant Giri",
    category: "Criminal Defense",
    readTime: "7 min read",
    featured: false,
    summary: "Understanding the crucial distinction between bailable and non-bailable offences under Indian criminal law, anticipatory bail safeguards, and conditions for regular bail.",
    keyTakeaways: [
      "In bailable offences, bail is a statutory right granted by the police officer or court upon submitting requisite sureties.",
      "In non-bailable offences, granting bail is at the judicial discretion of the court considering the gravity of the offence.",
      "Anticipatory Bail under Section 438 CrPC (or corresponding BNSS provisions) protects individuals against apprehension of arrest in non-bailable matters."
    ],
    tags: ["Criminal Defense", "Bail Law", "CrPC", "BNSS", "Constitutional Rights"],
    content: `
Navigating the criminal justice system requires immediate legal representation to safeguard individual liberty guaranteed under Article 21 of the Constitution of India.

### Bailable Offences
In bailable offences (listed under Schedule I of CrPC / BNSS), bail is an absolute right. The police station house officer (SHO) or Magistrate is bound to release the accused upon furnishing a bail bond with sureties.

### Non-Bailable Offences & Judicial Discretion
In non-bailable offences, bail is not automatic. The court considers parameters such as:
- Nature and gravity of the accusation.
- Severity of potential punishment upon conviction.
- Likelihood of the accused tampering with evidence or influencing witnesses.
- Antecedents and risk of absconding.

### Anticipatory Bail: Pre-Arrest Protection
Where a person has reason to believe that they may be arrested on an accusation of having committed a non-bailable offence, an application for Anticipatory Bail can be moved before the Sessions Court or the High Court.
`
  },
  {
    id: "commercial-arbitration-clause-drafting-best-practices",
    title: "Drafting Effective Commercial Arbitration Clauses: Avoiding Common Pitfalls",
    slug: "commercial-arbitration-clause-drafting-best-practices",
    date: "July 14, 2026",
    author: "Adv. Nishant Giri",
    category: "Corporate Law",
    readTime: "5 min read",
    featured: false,
    summary: "A poorly drafted arbitration clause can lead to years of jurisdictional litigation before arbitration even begins. Learn how to draft clear, enforceable dispute resolution clauses.",
    keyTakeaways: [
      "Clearly specify the seat and venue of arbitration to determine court jurisdiction.",
      "Define the number of arbitrators and the mechanism for appointment.",
      "Specify the governing law of the contract and the arbitration agreement."
    ],
    tags: ["Arbitration", "Commercial Law", "Contract Drafting", "Dispute Resolution"],
    content: `
Arbitration has emerged as the preferred mechanism for resolving commercial disputes in India. However, ambiguous arbitration clauses often result in preliminary litigation under Section 11 of the Arbitration and Conciliation Act, 1996.

### Key Elements of an Enforceable Clause

1. **Seat vs. Venue:** The "Seat" determines the curial law and supervisory jurisdiction of courts. Always state: *"The seat of arbitration shall be Jaipur/New Delhi."*
2. **Governing Law:** Explicitly state the substantive law governing the contract.
3. **Number & Appointment of Arbitrators:** Decide whether a sole arbitrator or a 3-member tribunal will adjudicate disputes.
`
  }
];
