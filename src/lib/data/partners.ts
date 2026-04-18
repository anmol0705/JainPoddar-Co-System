export interface Partner {
  name: string;
  slug: string;
  title: string;
  image: string;
  coreFocus: string;
  qualifications: string;
  bio: string[];
  expertise: string[];
  isSenior: boolean;
}

export const partners: Partner[] = [
  {
    name: "CA. Akhil Poddar",
    slug: "akhil-poddar",
    title: "Partner",
    image: "/images/partners/akhil-poddar.webp",
    coreFocus: "Direct Taxation & Loan Syndication",
    qualifications: "B.Com (Hons) (St. Xavier's College) | FCA | CS | DISA (ICAI) | IFRS Certified",
    bio: [
      "CA. Akhil Poddar is the Partner of the firm and has been in practice as a Chartered Accountant since 2002. He holds a B.Com (Hons) degree from St. Xavier's College and also cleared the Company Secretary examinations in 2002.",
      "He has qualified DISA from ICAI and completed certificate courses in Concurrent Audit and IFRS, bringing a multi-disciplinary perspective to every engagement.",
      "His two decades of experience span statutory audits, internal audits, audits of banks and government institutions, cost audit, direct taxation, due diligence, and corporate law matters. He is particularly sought after for his expertise in loan syndication and investment consultancy.",
    ],
    expertise: [
      "Statutory Audit",
      "Direct Taxation",
      "Loan Syndication",
      "Due Diligence",
      "Corporate Law",
      "Investment Consultancy",
    ],
    isSenior: false,
  },
  {
    name: "CA. Uttam Jain",
    slug: "uttam-jain",
    title: "Partner",
    image: "/images/partners/uttam-jain.webp",
    coreFocus: "Project Finance & Bank Financing",
    qualifications: "B.Com (Hons) | FCA (AIR 30) | CS | DISA (ICAI) | IFRS Certified",
    bio: [
      "CA. Uttam Jain is a Partner and has been in practice since 2002. He was placed in the merit list of ICAI in CA Final (All India Rank 30), Intermediate (All India Rank 36), and Foundation (All India Rank 19) — a testament to his academic rigour.",
      "He qualified DISA from ICAI, cleared Company Secretary examinations, and completed certificate courses in Concurrent Audit and IFRS.",
      "His core competency lies in bank financing activities, direct taxation, and company law. He leads the firm's project consultancy practice, advising clients on financial feasibility, project structuring, and regulatory compliance.",
    ],
    expertise: [
      "Project Consultancy",
      "Bank Financing",
      "Direct Taxation",
      "Company Law",
      "Statutory Audit",
      "IFRS Advisory",
    ],
    isSenior: false,
  },
  {
    name: "CA. Rahul Saraf",
    slug: "rahul-saraf",
    title: "Partner",
    image: "/images/partners/rahul-saraf.webp",
    coreFocus: "Direct Tax Advisory & Litigation",
    qualifications: "B.Com (Hons) (University of Calcutta) | FCA | DISA (ICAI)",
    bio: [
      "CA. Rahul Saraf joined the firm in 2007 immediately upon qualifying as a Chartered Accountant. A commerce graduate from the University of Calcutta, he holds DISA from ICAI and a certification in Concurrent Audit from ICAI, bringing nearly two decades of dedication and continuity to the firm's leadership team.",
      "While his core focus lies in Direct Tax Advisory and Litigation, he is recognised for his multidisciplinary approach. He provides high-level oversight in Statutory Audits, while guiding clients through complex milestones such as Mergers & Acquisitions, Greenfield projects, Project Finance, and capital fundraising.",
      "Known for his analytical rigour, he helps organisations move beyond compliance to identify operational vulnerabilities and establish resilient financial foundations.",
    ],
    expertise: [
      "Direct Tax Advisory & Litigation",
      "Statutory Audit",
      "Project Consultancy",
      "Management Audit",
      "Due Diligence",
      "Mergers & Acquisitions",
    ],
    isSenior: false,
  },
  {
    name: "CA. Anish Agarwal",
    slug: "anish-agarwal",
    title: "Partner",
    image: "/images/partners/anish-agarwal.webp",
    coreFocus: "Taxation, Audit & Financial Advisory",
    qualifications: "FCA",
    bio: [
      "CA. Anish Agarwal is a Fellow Chartered Accountant and Partner at Jain Poddar & Co., bringing extensive experience in taxation, audit, and financial advisory services.",
      "With a strong commitment to professional excellence and client-centric solutions, he has been instrumental in guiding individuals, businesses, and corporate clients through complex financial and regulatory landscapes.",
      "His practice encompasses income tax planning and return filing, tax audits under Section 44AB, statutory and internal company audits, GST consultancy, and litigation representation before Income Tax, GST(A), and GSTAT authorities.",
    ],
    expertise: [
      "Income Tax",
      "Tax Audits",
      "Company Audit",
      "GST Consultancy",
      "Litigation & Appeals",
      "ROC Compliance",
    ],
    isSenior: false,
  },
];
