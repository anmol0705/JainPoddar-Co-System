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
    title: "Senior Partner",
    image: "/images/akhil.jpeg",
    coreFocus: "Direct Taxation & Loan Syndication",
    qualifications: "B.A. (St. Xavier's College) | FCA | CS | DISA (ICAI) | IFRS Certified",
    bio: [
      "CA. Akhil Poddar is the Senior Partner of the firm and has been in practice as a Chartered Accountant since 2002. He holds a bachelor's degree from St. Xavier's College and also cleared the Company Secretary examinations in 2002.",
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
    isSenior: true,
  },
  {
    name: "CA. Uttam Jain",
    slug: "uttam-jain",
    title: "Senior Partner",
    image: "/images/uttam.jpg",
    coreFocus: "Project Finance & Bank Financing",
    qualifications: "FCA (AIR 30) | CS | ISA/DISA (ICAI) | IFRS Certified",
    bio: [
      "CA. Uttam Jain is a Senior Partner and has been in practice since 2002. He was placed in the merit list of ICAI in CA Final (All India Rank 30), Intermediate (All India Rank 36), and Foundation (All India Rank 19) — a testament to his academic rigour.",
      "He qualified ISA/DISA from ICAI, cleared Company Secretary examinations, and completed certificate courses in Concurrent Audit and IFRS.",
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
    isSenior: true,
  },
  {
    name: "CA. Rahul Saraf",
    slug: "rahul-saraf",
    title: "Senior Partner",
    image: "/images/rahul.jpg",
    coreFocus: "Management Audit & Process Consultancy",
    qualifications: "B.Com (Calcutta University) | FCA | DISA (ICAI)",
    bio: [
      "CA. Rahul Saraf joined the firm after completing his Chartered Accountancy in 2007. He holds a bachelor's degree in Commerce from Calcutta University and has qualified DISA from ICAI.",
      "He has completed a certificate course in Concurrent Audit, further strengthening his credentials across audit disciplines.",
      "His core competency and areas of interest include management audit, process audit, and consultancy. He brings analytical depth to every engagement, helping organisations identify operational weaknesses and build stronger financial foundations.",
    ],
    expertise: [
      "Management Audit",
      "Process Audit",
      "Statutory Audit",
      "Project Consultancy",
      "Direct Taxation",
      "Due Diligence",
    ],
    isSenior: true,
  },
  {
    name: "CA. Anish Agarwal",
    slug: "anish-agarwal",
    title: "Partner",
    image: "/images/anish.jpg",
    coreFocus: "Indirect Tax & Corporate consultant",
    qualifications: "B.Com | FCA",
    bio: [
      "CA. Anish Agarwal is a Commerce Graduate and has been in practice as a Chartered Accountant since 2016. He brings a decade of focused expertise to the firm's indirect taxation practice.",
      "His core competency lies in GST consultancy, GST dispute redressal, and appeal matters. He is widely regarded within the firm as a reservoir of knowledge on GST and other indirect taxation matters.",
      "Beyond indirect tax, his expertise spans statutory audits, management audits, internal audits, bank and government institution audits, DGFT duty drawback, due diligence, and corporate law matters.",
    ],
    expertise: [
      "GST Consultancy",
      "GST Dispute Resolution",
      "Indirect Taxation",
      "DGFT Duty Drawback",
      "Management Audit",
      "Corporate Law",
    ],
    isSenior: false,
  },
];
