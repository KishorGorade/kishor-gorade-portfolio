export const siteConfig = {
  name: "Kishor Gorade",
  role: "Security Operations Engineer",
  headline: "SIEM Monitoring • Incident Response • Threat Hunting • EDR/XDR • Vulnerability Management",
  description:
    "Proactive and analytical Security Operations Engineer with 2+ years of hands-on experience in SOC monitoring, incident response, and threat analysis. Skilled in SIEM (Splunk, QRadar) and EDR tools (CrowdStrike, Qualys EDR) for real-time detection, triage, and remediation of security incidents.",
  url: "https://kishorgorade.dev",
  email: "kishorgorade007@gmail.com",
  phone: "+91 77589 82610",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/kishorgorade", // TODO: replace with your real GitHub username
  linkedin: "https://linkedin.com/in/kishor-gorade-691a90251",
};

export const rotatingRoles = [
  "Security Operations Engineer",
  "SOC Analyst",
  "Threat Hunter",
  "Incident Responder",
  "SIEM Specialist",
];

export const stats = [
  { label: "Years Experience", value: 2 },
  { label: "Tools Mastered", value: 20 },
  { label: "Certifications", value: 5 },
  { label: "Frameworks Used", value: 3 },
];

export const achievements = [
  { label: "Alerts Investigated", value: 1500 },
  { label: "Incidents Resolved", value: 300 },
  { label: "Playbooks Authored", value: 15 },
  { label: "Tools & Platforms", value: 20 },
];

export const skills = [
  { cat: "SIEM", icon: "📊", tags: ["Splunk", "QRadar", "Use Case Development", "Correlation & Alert Analysis"] },
  { cat: "EDR / XDR", icon: "🛡️", tags: ["CrowdStrike", "Qualys EDR/XDR"] },
  { cat: "Network & Perimeter", icon: "🌐", tags: ["Palo Alto Firewall", "Zscaler", "BlueCoat", "Imperva WAF", "Silverline"] },
  { cat: "Threat Intelligence", icon: "🎯", tags: ["Recorded Future", "VirusTotal", "AnyRun", "MITRE ATT&CK"] },
  { cat: "Incident Response", icon: "🚨", tags: ["Threat Hunting", "Malware & Phishing Analysis", "RCA Documentation", "Forensic Investigation", "NIST IR Framework"] },
  { cat: "Vulnerability Mgmt", icon: "🩹", tags: ["Qualys VMDR", "Patch Coordination", "Risk Prioritization"] },
  { cat: "Cloud & Automation", icon: "☁️", tags: ["Azure", "AWS", "PowerShell", "Python", "SOAR", "UEBA Analytics"] },
  { cat: "Ticketing & Reporting", icon: "🗂️", tags: ["ServiceNow", "OS Ticket", "SOC Dashboards", "Incident Reports"] },
];

export const experience = [
  {
    title: "Security Operations Engineer",
    date: "Present · Qualys",
    items: ["SIEM Monitoring", "Incident Response", "Threat Hunting", "EDR/XDR Triage", "Vulnerability Coordination", "SOC Automation"],
  },
  {
    title: "SOC Analyst",
    date: "03 July 2023 — Present · AARNA Technologies Pvt. Ltd.",
    items: [
      "Monitor & analyze alerts via Splunk, CrowdStrike, Qualys EDR",
      "L2/L3 escalation investigation & log analysis",
      "Malware & network traffic investigation",
      "CSIRT collaboration for containment & recovery",
      "Threat hunting & IOC identification",
      "Threat intel integration into SOC workflows",
      "Firewall / IDS-IPS / proxy tuning",
      "IR playbooks & SOP development",
      "Post-incident RCA documentation",
      "Python & PowerShell SOC automation",
      "Qualys VMDR vulnerability coordination",
    ],
  },
];

export const projects = [
  { icon: "🖥️", title: "SOC Alert Triage Automation", desc: "Python/PowerShell scripts that auto-enrich alerts with threat intel and reduce manual triage time.", tech: ["Python", "PowerShell", "VirusTotal API"] },
  { icon: "📄", title: "Splunk Correlation Use Cases", desc: "Custom correlation searches and detection rules tuned to reduce false positives across SIEM data.", tech: ["Splunk", "SPL", "MITRE ATT&CK"] },
  { icon: "🔎", title: "IOC Cross-Source Correlator", desc: "Correlates IOCs across SIEM, EDR, and threat intel feeds to speed up threat hunting workflows.", tech: ["Python", "Recorded Future", "QRadar"] },
  { icon: "🧠", title: "Incident Response Playbooks", desc: "Authored SOPs and IR playbooks aligned to the NIST IR framework for consistent incident handling.", tech: ["NIST IR", "Documentation"] },
  { icon: "🛠️", title: "Qualys VMDR Risk Dashboard", desc: "Vulnerability prioritization dashboard combining VMDR data with asset criticality scoring.", tech: ["Qualys VMDR", "Python"] },
  { icon: "🦠", title: "Malware & Phishing Analysis Reports", desc: "Static & dynamic analysis write-ups on real phishing kits and malware samples using sandboxing.", tech: ["AnyRun", "VirusTotal", "CrowdStrike"] },
];

export const certifications = [
  { icon: "🏅", name: "Network Defense Essentials", org: "EC-Council" },
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
  { icon: "📝", tag: "Threat Report", title: "Anatomy of a Phishing Campaign", desc: "Breaking down a real-world phishing kit and its detection artifacts." },
  { icon: "🧪", tag: "Write-up", title: "Detecting Lateral Movement with SIEM", desc: "Correlation rules that catch pass-the-hash and RDP abuse early." },
  { icon: "🔬", tag: "Malware Analysis", title: "Reverse Engineering a Stealer", desc: "Static and dynamic analysis notes from a recent infostealer sample." },
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
  { icon: "🛡️", title: "Skills", sub: "SIEM, EDR, Networking, Tools...", tag: "NAV", href: "#skills" },
  { icon: "📈", title: "Experience", sub: "Security Operations Engineer @ Qualys", tag: "NAV", href: "#experience" },
  { icon: "🗂️", title: "Projects", sub: "Alert Automation, Splunk Use Cases, IOC Correlator...", tag: "NAV", href: "#projects" },
  { icon: "🎓", title: "Certifications", sub: "EC-Council, Cisco...", tag: "NAV", href: "#certifications" },
  { icon: "📰", title: "Blog", sub: "Threat write-ups & malware analysis", tag: "NAV", href: "#blog" },
  { icon: "📄", title: "Resume", sub: "Download PDF resume", tag: "NAV", href: "#resume" },
  { icon: "✉️", title: "Contact", sub: "Get in touch with Kishor", tag: "NAV", href: "#contact" },
  { icon: "🐙", title: "GitHub", sub: "github.com/kishorgorade", tag: "LINK", href: "https://github.com/kishorgorade" },
  { icon: "💼", title: "LinkedIn", sub: "linkedin.com/in/kishor-gorade-691a90251", tag: "LINK", href: "https://linkedin.com/in/kishor-gorade-691a90251" },
];
