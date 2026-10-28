import type { Dictionary } from './types';

const en: Dictionary = {
  meta: { title: 'Orkhan Ismayilov - System Administrator', description: 'System administrator: Linux, email, networking and hosting infrastructure. Problem analysis, resolution and automation.' },
  hero: { name: 'Orkhan Ismayilov', role: 'System Administrator', tagline: 'Servers, networking, email and hardware - from a Linux server to a camera system. Problem analysis, resolution and automation, so it does not come back.', location: 'Baku, Azerbaijan', cv: 'Download CV', contact: 'Contact' },
  stats: [
    'mailboxes migrated',
    'sites migrated',
    'largest single mailbox',
    'sites on one server: automation',
  ],
  about: { title: 'About me', text: '**Linux servers, networking, email and hardware.** **Migration of 100+ mailboxes and ~100 websites**, infrastructure support for hundreds of clients. **Problem analysis, resolution and automation.**' },
  services: { title: 'Services', items: [
    { title: 'Email infrastructure', points: ['Workspace migration of any size: Google, control panels, providers', 'MX, SPF, DKIM, DMARC setup and diagnostics', 'Down to the IMAP protocol level: folders, flags, how it works'] },
    { title: 'Networking', points: ['Cisco and MikroTik: VLAN segmentation, SSH hardening', 'Secure remote access with WireGuard', 'Diagnostics of loops and intermittent outages'] },
    { title: 'Hardware & surveillance', points: ['PC assembly and diagnostics, BIOS, Windows', 'DVR/NVR: setup, disk replacement, remote viewing', 'Android device flashing, smartphone repair'] },
    { title: 'Automation & backup', points: ['Utility scripts in Bash and PowerShell', 'Backup scripts, backups on Hetzner Storage Box', 'Server configuration and deploys with Ansible'] },
    { title: 'Servers & hosting', points: ['Linux and Windows Server administration', 'Enhance, cPanel, WHMCS: servers, accounts, billing', 'Proxmox VE, Docker, Cloudflare, various VPS providers'] },
    { title: 'Sites & domains', points: ['Site migration between hosts: manual and via API', 'DNS, domains, SSL, Cloudflare', 'Static sites: Astro, automatic deploy on Git push'] },
  ] },
  cases: {
    title: 'Cases',
    note: 'NDA: client names, screenshots and internal addresses are not disclosed. Only what was done and how is described.',
    nda: 'nda',
    first: { tag: 'email migration', title: 'Corporate workspace migration for a large company', lead: 'Email environment of one of the large Azerbaijani companies moved to new hosting.', numLabels: ['mailboxes', 'largest mailbox'], rows: ['Create nearly a hundred mailboxes in the new panel with correct settings and move 100+ GB of data without loss.', 'Bulk mailbox creation and automated imapsync synchronization between the two workspaces.', 'The whole archive was preserved and work continued on the new hosting without interruption.'] },
    second: { title: 'Deploying an Angular + ASP.NET site on a server', rows: ['Angular frontend, ASP.NET backend, Nginx and PostgreSQL on the server. The domain had to be bound to the backend, SSL enabled and the frontend connected to the API.', 'Domain bound to the backend via an Nginx reverse proxy, Cloudflare SSL certificate imported, frontend connected to the API.'] },
    satellites: [
      { title: 'DNS and domains', text: 'Record setup, domain transfers, troubleshooting' },
      { title: 'WordPress', text: 'Site migration, recovery and protection from bot registrations' },
      { title: '~100 site migrations', text: 'Between panels, manual and via API' },
      { title: 'Server with ~3000 sites', text: 'Script that reacts automatically to .htaccess changes' },
    ],
  },
  skills: { title: 'Skills', items: ['migration, IMAP, SPF/DKIM/DMARC', 'servers, hosting panels', 'domains, Cloudflare, site migration', 'PCs, DVR/NVR, hardware', 'Docker, Proxmox, Bash, Ansible', 'VLAN, MikroTik, Cisco, VPN', 'Chatwoot, knowledge base; Claude Code, local LLMs', 'Windows Server, Active Directory, IP telephony', 'VMware, Microsoft 365, AWS'] },
  process: { title: 'Process', steps: [
    { title: 'Analysis', text: 'Understanding the client\'s requirements and the real problem.' },
    { title: 'Options', text: 'Studying how professionals solve this kind of problem and proposing several paths: from the cleanest to the most practical.' },
    { title: 'Execution', text: 'Rolling out the chosen solution in stages without breaking the existing system.' },
    { title: 'Docs & automation', text: 'Documenting and automating the solution so that next time it takes minutes.' },
  ] },
  experience: { title: 'Experience', jobs: [
      {
        company: 'Yepika',
        role: 'System Administrator',
        period: 'apr 2026 - oct 2026',
        points: ['Web, email and VPS infrastructure for hundreds of clients: Enhance, cPanel, WHMCS', 'Email and site migrations; backup and automation scripts', 'Support platform, knowledge base and training course'],
      },
      {
        company: 'Just for Fun',
        role: 'Support / system administrator',
        period: '2025',
        points: ['Gaming club: diagnostics and assembly of 50+ PCs, PanCafe, networking, on-site support'],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: ['Internal tech support, office network, visual materials'],
      },
  ] },
  learning: { title: 'Learning now', items: [{ name: 'RHCSA', value: 'RHEL 9, Linux administration' }, { name: 'AD & VMware', value: 'Active Directory, VMware' }, { name: 'AWS', value: 'core services, IAM, S3, CloudFront' }, { name: 'Cloudflare', value: 'this site runs on Workers & Pages' }, { name: 'Next', value: 'Terraform, RHCE' }] },
  education: { title: 'Education & languages', school: 'UNEC', degree: 'Bachelor\'s degree, design', period: '2020 - 2024', languages: [{ name: 'Azerbaijani', value: 'native', native: true }, { name: 'Russian', value: 'native', native: true }, { name: 'English', value: 'C1 · IELTS 7.0' }] },
  contact: { title: 'Contact', text: 'Open to system administration, support engineering and cloud / DevOps roles.' },
  footer: 'Static site on Cloudflare. Built with Astro.',
};

export default en;
