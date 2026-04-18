export interface StaffMember {
  name: string;
  slug: string;
  role: string;
  division: string;
  qualifications: string;
  image: string;
  bio: string[];
}

export const seniorStaff: StaffMember[] = [
  {
    name: "Santosh Kumar Jha",
    slug: "santosh-kumar-jha",
    role: "Internal Audit Head",
    division: "Internal Audit",
    qualifications: "B.Com (Hons) · LLB · CA (Final)",
    image: "/images/partners/santosh-kumar-jha.webp",
    bio: [
      "Santosh Kumar Jha is a dynamic professional with a strong academic foundation and practical expertise in finance and law. Santosh leads the Internal Audit division, where he brings a meticulous approach to risk management, compliance, and process improvement.",
      "His dual background in commerce and law equips him with a unique perspective, enabling him to deliver comprehensive audit solutions that align with both financial accuracy and regulatory requirements. With a commitment to excellence and a keen eye for detail, Santosh plays a pivotal role in strengthening organisational governance and ensuring operational efficiency.",
    ],
  },
  {
    name: "Amarjeet Rai",
    slug: "amarjeet-rai",
    role: "Direct Tax Division Head",
    division: "Direct Tax",
    qualifications: "B.Com (Hons) · LLB · CA (Inter)",
    image: "/images/partners/amarjeet-rai.webp",
    bio: [
      "Amarjeet Rai is a dedicated professional with a strong academic background in commerce and law. At Jain Poddar & Co., Amarjeet heads the Direct Tax division, where he specialises in tax planning, compliance, and advisory services.",
      "His expertise lies in interpreting complex tax laws and providing practical solutions that help clients optimise their tax positions while ensuring full regulatory compliance. With his blend of legal and financial knowledge, Amarjeet brings clarity and precision to direct tax matters.",
    ],
  },
];
