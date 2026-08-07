export const siteConfig = {
  name: "Kishor Gorade",
  role: "Security Operations Engineer",
  headline: "24x7 SOC Monitoring • Incident Response • Threat Hunting • Detection Engineering • Cloud & Email Security",
  description:
    "Results-driven Security Operations Engineer with 3+ years of experience across 24x7 SOC monitoring, incident response, and threat hunting in enterprise environments. Skilled in Elastic SIEM, Qualys EDR, Qualys VMDR, and Azure O365 to detect, investigate, and remediate threats across endpoint, network, cloud, and email attack surfaces.",
  url: "https://kishorgorade.dev",
  email: "kishorgorade007@gmail.com",
  phone: "+91 77589 82610",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/kishorgorade",
  linkedin: "https://linkedin.com/in/kishor-gorade-691a90251",
};

export const rotatingRoles = [
  "Security Operations Engineer",
  "Threat Hunter",
  "Incident Responder",
  "Detection Engineer",
  "SIEM Specialist",
];

export const stats = [
  { label: "Years Experience", value: 3 },
  { label: "Tools Mastered", value: 22 },
  { label: "Certifications", value: 4 },
  { label: "Frameworks Used", value: 3 },
];

export const achievements = [
  { label: "Alerts Investigated", value: 2200 },
  { label: "Incidents Resolved", value: 450 },
  { label: "Automation Scripts Built", value: 20 },
  { label: "Tools & Platforms", value: 22 },
];

export const skills = [
  { cat: "SIEM Engineering", icon: "📊", tags: ["Elastic SIEM", "Splunk", "QRadar", "Microsoft Sentinel", "Alert Triage", "Rule Optimization"] },
  { cat: "EDR / XDR", icon: "🛡️", tags: ["Qualys EDR", "CrowdStrike", "Endpoint Investigation", "Windows Security", "Linux Security"] },
  { cat: "Threat Intelligence & Hunting", icon: "🎯", tags: ["MITRE ATT&CK", "Cyber Kill Chain", "IOC/IOA Analysis", "VirusTotal", "AnyRun"] },
  { cat: "Cloud & Email Security", icon: "☁️", tags: ["Azure O365", "OCI", "AWS", "GCP", "Proofpoint TAP", "BEC Investigation"] },
  { cat: "Automation & Programming", icon: "🤖", tags: ["Python", "PowerShell", "SOAR Playbook Support", "Automation Scripting"] },
  { cat: "Vulnerability & Detection", icon: "🩹", tags: ["Qualys VMDR", "Detection Tuning", "False Positive Reduction", "UEBA"] },
  { cat: "Frameworks & Compliance", icon: "📐", tags: ["MITRE ATT&CK", "NIST IR Framework", "Root Cause Analysis"] },
  { cat: "Documentation & Ticketing", icon: "🗂️", tags: ["ServiceNow", "OS Ticket", "Jira", "Incident Reporting", "SOPs & Playbooks"] },
];

export const experience = [
  {
    title: "Security Operations Engineer — Qualys",
    date: "January 2026 — Present",
    items: [
      "24x7 SIEM/EDR/Cloud Alert Monitoring",
      "Endpoint, Network, Email & Cloud IR",
      "MITRE ATT&CK Threat Hunting",
      "Elastic SIEM + Qualys EDR + Azure O365 + Proofpoint TAP Correlation",
      "IOC Analysis via VirusTotal & AnyRun",
      "Azure O365 & Phishing/BEC Investigation",
      "Qualys VMDR Vulnerability Management",
      "CSIRT Collaboration & RCA",
      "Detection Tuning & SOAR Playbook Automation",
    ],
  },
  {
    title: "Jr. SOC Analyst — AARNA Technologies Pvt. Ltd.",
    date: "July 2023 — December 2025",
    items: [
      "Splunk SIEM & CrowdStrike EDR Alert Triage",
      "Log Analysis & Malware Investigation",
      "CSIRT & IT Infrastructure Collaboration",
      "Threat Hunting & IOC Correlation",
      "Recorded Future & VirusTotal Threat Intel Integration",
      "Firewall / IDS-IPS / Proxy Optimization",
      "IR Playbooks & SOP Authoring",
      "Post-Incident RCA Reviews",
      "Python & PowerShell SOC Automation",
    ],
  },
];

export const projects = [
  { icon: "🕵️", title: "Vigilance — Threat Intel Aggregation Platform", desc: "Co-designed an internal platform consolidating multiple threat intelligence feeds into one centralized dashboard, improving indicator validation and investigation speed.", tech: ["Threat Intel", "Dashboarding", "Indicator Validation"] },
  { icon: "⚙️", title: "SOAR Automation — Orchestration & Response", desc: "Supported design, testing, and validation of SOAR playbooks to improve incident enrichment and response execution, accelerating IR times.", tech: ["SOAR", "Automation", "Playbooks"] },
  { icon: "🎚️", title: "Alert Fine Tuning — SIEM Detection Optimization", desc: "Partnered with senior security engineers to fine-tune recurring SIEM alerts via false-positive analysis and correlation rule optimization.", tech: ["Splunk", "Elastic SIEM", "Rule Tuning"] },
  { icon: "🐍", title: "Python Automation — SOC Tooling", desc: "Built an IOC Validator, Threat Intelligence Lookup tool, Log Parsing Automation, and Investigation Helper Scripts to cut repetitive SOC work.", tech: ["Python", "IOC Validator", "Log Parsing"] },
  { icon: "🔎", title: "IOC Cross-Source Correlator", desc: "Correlates IOCs across SIEM, EDR, and threat intel feeds to speed up threat hunting workflows across enterprise environments.", tech: ["Python", "VirusTotal", "AnyRun"] },
  { icon: "📄", title: "Incident Response Playbooks & SOPs", desc: "Authored and maintained IR playbooks and SOPs aligned to the NIST IR framework to standardize SOC operations and RCA documentation.", tech: ["NIST IR", "Documentation"] },
];

export const certifications = [
  { icon: "🩹", name: "Executive Vulnerability Management", org: "EC-Council" },
  { icon: "🚨", name: "Incident Response Lifecycle", org: "EC-Council" },
  { icon: "🏢", name: "Enterprise Security Leadership: World-Class SOC", org: "EC-Council" },
  { icon: "🔒", name: "Endpoint Security Essentials", org: "Cisco" },
];

export const education = [
  { degree: "Bachelor of Computer Science", school: "Modern College, Ganeshkhind, Pune", detail: "CGPA: 8.37" },
  { degree: "HSC", school: "Vijaymala Junior College of Science, Shirur", detail: "73.83%" },
  { degree: "SSC", school: "Rasiklal Manikchand Dhariwal English Medium School, Shirur", detail: "83.40%" },
];

export const testimonials: { text: string; name: string; role: string }[] = [
  // Add real recommendations here once available, e.g.:
  // { text: "...", name: "Manager Name", role: "SOC Team Lead" },
];

export const blogPosts = [
  { icon: "📝", tag: "Threat Report", title: "Anatomy of a Phishing Campaign", desc: "Breaking down a real-world phishing kit and its detection artifacts across email gateways." },
  { icon: "🧪", tag: "Write-up", title: "Detecting Lateral Movement with SIEM", desc: "Correlation rules that catch pass-the-hash and RDP abuse early using Elastic SIEM." },
  { icon: "🔬", tag: "Malware Analysis", title: "Reverse Engineering a Stealer", desc: "Static and dynamic analysis notes from a recent infostealer sample via AnyRun." },
];

export const navLinks = [
  { href: "#about", label: "About", index: "01" },
  { href: "#skills", label: "Skills", index: "02" },
  { href: "#experience", label: "Experience", index: "03" },
  { href: "#projects", label: "Projects", index: "04" },
  { href: "#certifications", label: "Certs", index: "05" },
  { href: "#blog", label: "Blog", index: "06" },
  { href: "#contact", label: "Contact", index: "07" },
];

export const commandItems = [
  { icon: "🏠", title: "Home", sub: "Back to hero section", tag: "NAV", href: "#home" },
  { icon: "👤", title: "About", sub: "Bio, timeline & live threat radar", tag: "NAV", href: "#about" },
  { icon: "🛡️", title: "Skills", sub: "SIEM, EDR, Cloud, Automation...", tag: "NAV", href: "#skills" },
  { icon: "📈", title: "Experience", sub: "Security Operations Engineer @ Qualys", tag: "NAV", href: "#experience" },
  { icon: "🗂️", title: "Projects", sub: "Vigilance, SOAR Automation, Python Tooling...", tag: "NAV", href: "#projects" },
  { icon: "🎓", title: "Certifications", sub: "EC-Council, Cisco...", tag: "NAV", href: "#certifications" },
  { icon: "📰", title: "Blog", sub: "Threat write-ups & malware analysis", tag: "NAV", href: "#blog" },
  { icon: "📄", title: "Resume", sub: "Download PDF resume", tag: "NAV", href: "#resume" },
  { icon: "✉️", title: "Contact", sub: "Get in touch with Kishor", tag: "NAV", href: "#contact" },
  { icon: "🐙", title: "GitHub", sub: "github.com/kishorgorade", tag: "LINK", href: "https://github.com/kishorgorade" },
  { icon: "💼", title: "LinkedIn", sub: "linkedin.com/in/kishor-gorade-691a90251", tag: "LINK", href: "https://linkedin.com/in/kishor-gorade-691a90251" },
];
