export interface Service {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  category: ServiceCategory;
  relatedSlugs: string[];
}

export type ServiceCategory =
  | "Audit & Assurance"
  | "Tax Advisory"
  | "GST & Indirect Tax"
  | "Corporate & Legal"
  | "Finance & Advisory";

export interface ServiceGroup {
  category: ServiceCategory;
  tagline: string;
  services: Service[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Statutory Audit",
    slug: "statutory-audit",
    shortDescription: "Comprehensive financial statement review ensuring regulatory compliance.",
    description:
      "Our statutory audit practice is led by partners with over two decades of experience across banking, government, and private sector clients. We conduct rigorous financial statement reviews that go beyond compliance — identifying control weaknesses, quantifying risk exposure, and providing actionable management letters. Our audit clients include scheduled banks, government institutions, trusts, and mid-market companies across Jharkhand.",
    featured: true,
    category: "Audit & Assurance",
    relatedSlugs: ["internal-financial-controls", "government-audit", "management-audit"],
  },
  {
    id: 2,
    name: "Internal Financial Controls",
    slug: "internal-financial-controls",
    shortDescription: "Processes designed to ensure accuracy and reliability of financial reporting.",
    description:
      "Internal Financial Controls (IFC) refer to the processes designed to ensure the accuracy and reliability of financial reporting, compliance with regulations, and safeguarding of assets. We help businesses establish and strengthen their IFC framework to minimise financial risks and operational inefficiencies.",
    featured: false,
    category: "Audit & Assurance",
    relatedSlugs: ["statutory-audit", "risk-advisory-services", "management-audit"],
  },
  {
    id: 3,
    name: "Direct Tax Consultancy",
    slug: "direct-tax-consultancy",
    shortDescription: "Strategic planning and compliance under the Income Tax Act.",
    description:
      "We structure your tax affairs so you pay what you owe — not a rupee more. Our direct tax practice covers strategic tax planning, return filing, advance tax computation, and representation before CIT(A), ITAT, and other appellate authorities. Senior Partner CA. Akhil Poddar leads this practice, bringing twenty-four years of applied experience in interpreting the Income Tax Act for businesses and high-net-worth individuals.",
    featured: true,
    category: "Tax Advisory",
    relatedSlugs: ["direct-tax-advisory", "accounting-solutions"],
  },
  {
    id: 4,
    name: "Direct Tax Advisory",
    slug: "direct-tax-advisory",
    shortDescription: "Expert advisory on navigating complex direct tax regulations.",
    description:
      "We provide strategic tax advisory services to businesses and individuals, helping them navigate complex tax laws. Our expert team ensures effective tax planning, minimises risks, and identifies opportunities for tax savings while maintaining compliance with direct tax regulations.",
    featured: false,
    category: "Tax Advisory",
    relatedSlugs: ["direct-tax-consultancy", "risk-advisory-services"],
  },
  {
    id: 5,
    name: "Corporate Law",
    slug: "corporate-law",
    shortDescription: "Company registration, governance, compliance, and legal advisory.",
    description:
      "Our corporate law services cover company registration, corporate governance, regulatory compliance, contract drafting, and legal advisory. We help businesses stay compliant with corporate laws and ensure smooth business operations with legally sound strategies.",
    featured: false,
    category: "Corporate & Legal",
    relatedSlugs: ["legal-secretarial-services", "due-diligence"],
  },
  {
    id: 6,
    name: "Government Audit",
    slug: "government-audit",
    shortDescription: "Assessment of government financial transactions for accountability.",
    description:
      "A government audit is an assessment of government financial transactions, policies, and procedures to ensure accountability, transparency, and compliance with regulations. We conduct government audits for various agencies, focusing on fraud detection and efficiency improvements.",
    featured: false,
    category: "Audit & Assurance",
    relatedSlugs: ["statutory-audit", "concurrent-audit"],
  },
  {
    id: 7,
    name: "Management Audit",
    slug: "management-audit",
    shortDescription: "Evaluating management processes, controls, and decision-making efficiency.",
    description:
      "A management audit evaluates the efficiency and effectiveness of a company's management processes, internal controls, and decision-making. Our services help businesses identify operational weaknesses, optimise resource utilisation, and enhance overall performance.",
    featured: false,
    category: "Audit & Assurance",
    relatedSlugs: ["internal-financial-controls", "risk-advisory-services"],
  },
  {
    id: 8,
    name: "Concurrent Audit",
    slug: "concurrent-audit",
    shortDescription: "Real-time review of financial transactions for early error detection.",
    description:
      "A concurrent audit is a real-time review of financial transactions to detect errors and fraud at an early stage. It is crucial for banks, financial institutions, and large organisations to ensure compliance and operational integrity. We provide expert concurrent audit services to mitigate risks.",
    featured: false,
    category: "Audit & Assurance",
    relatedSlugs: ["statutory-audit", "government-audit"],
  },
  {
    id: 9,
    name: "GST Consultancy Services",
    slug: "gst-consultancy-services",
    shortDescription: "Registration, return filing, audits, and dispute resolution.",
    description:
      "CA. Anish Agarwal leads our GST practice with deep expertise in dispute resolution and appellate matters. We handle the full lifecycle — from registration and monthly return filing to input tax credit reconciliation, annual audits, and representation before GST appellate authorities. For businesses facing notices, demands, or assessment proceedings, we provide end-to-end litigation support grounded in a thorough understanding of CGST and JGST provisions.",
    featured: true,
    category: "GST & Indirect Tax",
    relatedSlugs: ["gst-advisory-services", "direct-tax-consultancy"],
  },
  {
    id: 10,
    name: "GST Advisory Services",
    slug: "gst-advisory-services",
    shortDescription: "Expert guidance on GST implications and compliance strategies.",
    description:
      "We offer expert guidance on GST implications for businesses, including transaction structuring, tax planning, and compliance strategies. Our advisory services ensure that businesses stay ahead of regulatory changes and optimise their GST position.",
    featured: false,
    category: "GST & Indirect Tax",
    relatedSlugs: ["gst-consultancy-services", "direct-tax-advisory"],
  },
  {
    id: 11,
    name: "Loan Syndication",
    slug: "loan-syndication",
    shortDescription: "Structuring and securing multi-lender financing for growth.",
    description:
      "Loan syndication involves arranging large-scale financing for businesses through multiple lenders. We assist businesses in structuring and securing loans, negotiating terms, and ensuring smooth fund disbursement for projects and expansions.",
    featured: true,
    category: "Finance & Advisory",
    relatedSlugs: ["project-consultancy", "accounting-solutions"],
  },
  {
    id: 12,
    name: "Project Consultancy",
    slug: "project-consultancy",
    shortDescription: "Project planning, feasibility studies, and implementation strategy.",
    description:
      "Our project consultancy services help businesses with project planning, financial feasibility studies, risk assessment, and implementation strategies. We assist in securing funding, preparing detailed project reports, and ensuring regulatory compliance.",
    featured: false,
    category: "Finance & Advisory",
    relatedSlugs: ["loan-syndication", "due-diligence"],
  },
  {
    id: 13,
    name: "Due Diligence",
    slug: "due-diligence",
    shortDescription: "Financial, legal, and operational risk assessment for informed decisions.",
    description:
      "Before you acquire, invest, or merge — we examine what the numbers are not telling you. Our due diligence process covers financial statement analysis, contingent liability identification, regulatory compliance verification, and operational risk mapping. We deliver findings in a structured report with specific risk quantification, enabling promoters and boards to negotiate from a position of full information.",
    featured: true,
    category: "Corporate & Legal",
    relatedSlugs: ["risk-advisory-services", "corporate-law"],
  },
  {
    id: 14,
    name: "Legal & Secretarial Services",
    slug: "legal-secretarial-services",
    shortDescription: "Corporate compliance, incorporation, filings, and restructuring.",
    description:
      "We provide legal and secretarial services to ensure corporate compliance, including company incorporation, regulatory filings, board meeting documentation, and corporate restructuring. Our services help businesses meet statutory requirements.",
    featured: false,
    category: "Corporate & Legal",
    relatedSlugs: ["corporate-law", "accounting-solutions"],
  },
  {
    id: 15,
    name: "Accounting Solutions",
    slug: "accounting-solutions",
    shortDescription: "Bookkeeping, financial statements, payroll, and tax accounting.",
    description:
      "Our accounting solutions cover bookkeeping, financial statement preparation, payroll processing, and tax accounting. We help businesses maintain accurate financial records and comply with accounting standards while optimising their financial performance.",
    featured: false,
    category: "Finance & Advisory",
    relatedSlugs: ["statutory-audit", "direct-tax-consultancy"],
  },
  {
    id: 16,
    name: "Risk Advisory Services",
    slug: "risk-advisory-services",
    shortDescription: "Identifying, assessing, and mitigating enterprise-wide risks.",
    description:
      "Our Risk Advisory services help businesses identify, assess, and mitigate financial, operational, and compliance risks. We provide tailored risk management strategies, internal control assessments, and regulatory compliance support to enhance business resilience and ensure long-term success.",
    featured: true,
    category: "Finance & Advisory",
    relatedSlugs: ["due-diligence", "internal-financial-controls", "management-audit"],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getServiceGroups(): ServiceGroup[] {
  const categoryOrder: ServiceCategory[] = [
    "Audit & Assurance",
    "Tax Advisory",
    "GST & Indirect Tax",
    "Corporate & Legal",
    "Finance & Advisory",
  ];

  const taglines: Record<ServiceCategory, string> = {
    "Audit & Assurance": "Rigour that protects. Insight that strengthens.",
    "Tax Advisory": "Structure your obligations. Maximise your position.",
    "GST & Indirect Tax": "End-to-end compliance. Decisive dispute resolution.",
    "Corporate & Legal": "Governance, diligence, and legal precision.",
    "Finance & Advisory": "Capital strategy. Risk intelligence. Growth advisory.",
  };

  return categoryOrder.map((category) => ({
    category,
    tagline: taglines[category],
    services: services.filter((s) => s.category === category),
  }));
}
