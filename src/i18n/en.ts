import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Orkhan Ismayilov - System Administrator',
    description: 'Linux, hosting and mail infrastructure - moving into cloud and DevOps.',
  },
  hero: {
    name: 'Orkhan Ismayilov',
    role: 'System Administrator',
    tagline: 'Linux, hosting and mail infrastructure - moving into cloud and DevOps.',
    location: 'Baku, Azerbaijan',
    cv: 'Download CV',
    contact: 'Contact',
  },
  about: {
    title: 'About',
    text: "I keep servers, websites and mail running. Most recently I administered shared hosting and VPS at a hosting company: migrations, DNS, mail, client issues. Now I'm systematizing my Linux knowledge on the RHCSA track and learning AWS.",
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Yepika',
        role: 'System Administrator',
        period: 'Apr 2026 - Oct 2026',
        points: [
          'Administered shared hosting and VPS on Enhance and cPanel, client accounts and billing in WHMCS',
          'Migrated websites and mailboxes between servers and providers; solid understanding of IMAP and how mail migration works under the hood',
          'Configured mail DNS: MX, SPF, DKIM, DMARC',
          'Linux server administration; Bash scripts for backups, monitoring and bulk operations',
          'Deployed and configured self-hosted services for the team (support platform, internal tools)',
          'Set up VPN; handled non-standard tasks outside the main stack',
        ],
      },
      {
        company: 'Just for Fun Gaming Club',
        role: 'Support / System Administrator',
        period: '2025',
        points: [
          'Diagnosed, repaired and assembled 50+ gaming workstations',
          'Maintained the local network and OS deployment across the club',
          'First line of support for all technical issues on site',
        ],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: [
          'Produced visual assets for digital projects',
          'Internal tech support for staff: software and hardware issues, office connectivity together with the IT department',
        ],
      },
      {
        company: 'Freelance',
        role: 'Graphic Designer',
        period: '2023 - 2026',
        points: [
          'Visual communication and layout design for digital projects (Adobe Creative Suite, Figma)',
        ],
      },
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Linux', tags: ['Ubuntu', 'Fedora', 'RHEL', 'Bash', 'SSH', 'cron'] },
      { name: 'Hosting', tags: ['Enhance', 'cPanel', 'WHMCS'] },
      { name: 'Mail', tags: ['IMAP', 'SMTP', 'imapsync', 'MX / SPF / DKIM / DMARC'] },
      { name: 'Virtualization', tags: ['Proxmox', 'Docker'] },
      { name: 'Network', tags: ['DNS', 'VPN', 'Cloudflare'] },
    ],
  },
  learning: {
    title: 'Learning now',
    items: [
      { name: 'RHCSA', value: 'RHEL 9, Linux administration' },
      { name: 'AWS', value: 'core services, IAM, S3, CloudFront' },
      { name: 'Cloudflare', value: 'this site runs on Pages and R2' },
      { name: 'Next', value: 'Ansible, Terraform, RHCE' },
    ],
  },
  education: {
    title: 'Education & languages',
    school: 'UNEC',
    degree: "Bachelor's degree, Design",
    period: '2020 - 2024',
    languages: [
      { name: 'Azerbaijani', value: 'native' },
      { name: 'Russian', value: 'native' },
      { name: 'English', value: 'B2 (IELTS 7.0)' },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Open to system administration, support engineering and junior cloud / DevOps-adjacent roles.',
  },
  footer: 'Static site on Cloudflare. Built with Astro.',
};

export default en;
