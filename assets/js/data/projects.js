export const projects = [
  {
    title: 'Home SOC Lab',
    img: 'assets/images/project1.png',
    category: 'Blue Team',
    tech: 'Wazuh, Elastic Stack, Sysmon',
    date: '2025',
    body: `<p>A fully self-hosted Security Operations Center built to detect and investigate attacks in a controlled environment. Windows and Linux endpoints ship telemetry through Sysmon and auditd into a Wazuh SIEM backed by the Elastic Stack.</p>
<ul>
<li>Custom detection rules mapped to MITRE ATT&amp;CK techniques</li>
<li>Simulated attacks with Atomic Red Team to validate coverage</li>
<li>Dashboards for authentication anomalies and lateral movement</li>
</ul>`
  },
  {
    title: 'NetRecon Scanner',
    img: 'assets/images/project2.png',
    category: 'Tooling',
    tech: 'Python, Nmap, Scapy',
    date: '2024',
    body: `<p>A modular network reconnaissance tool written in Python. It automates host discovery, port scanning, and service fingerprinting, then generates a clean HTML report highlighting likely vulnerabilities.</p>
<ul>
<li>Async scanning engine with configurable rate limiting</li>
<li>CVE lookups against detected service versions</li>
<li>Designed for authorized assessments and lab use only</li>
</ul>`
  },
  {
    title: 'CTF Writeups',
    img: 'assets/images/project3.png',
    category: 'Offensive',
    tech: 'Burp Suite, Ghidra, pwntools',
    date: 'Ongoing',
    body: `<p>A growing collection of detailed writeups from Hack The Box, TryHackMe, and live CTF events. Each writeup documents the full methodology — enumeration, exploitation, and post-exploitation — with lessons learned.</p>
<ul>
<li>Web exploitation, binary reverse engineering, and privilege escalation</li>
<li>Focus on repeatable methodology over one-off tricks</li>
<li>Published to share knowledge with the security community</li>
</ul>`
  }
];
