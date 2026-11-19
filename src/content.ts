export const languages = ['az', 'ru', 'en'] as const;
export type Lang = (typeof languages)[number];

interface Content {
  title: string;
  role: string;
  about: string;
  stats: [string, string][];
  skillsTitle: string;
  skills: string[];
  location: string;
  cv: string;
}

export const content: Record<Lang, Content> = {
  az: {
    title: 'Orkhan Ismayilov - Sistem administratoru',
    role: 'Sistem administratoru',
    about:
      'Linux və Windows serverlər, şəbəkə, email və avadanlıq. 100+ email qutusunun və ~100 saytın miqrasiyası, yüzlərlə müştərinin infrastrukturunun dəstəyi. Problemin analizi, həlli və avtomatlaşdırılması.',
    stats: [
      ['100+', 'email qutusu miqrasiyası'],
      ['~100', 'sayt köçürməsi'],
      ['50+ GB', 'ən böyük tək qutu'],
      ['~3000', 'saytlı serverdə skript'],
    ],
    skillsTitle: 'Bacarıqlar',
    skills: ['Linux', 'Windows Server', 'Active Directory', 'GPO', 'Docker', 'CI/CD', 'GitHub Actions', 'Ansible', 'Proxmox', 'VMware', 'AWS', 'MikroTik', 'Cisco', 'VLAN', 'VPN', 'Bash', 'PowerShell', 'SPF / DKIM / DMARC', 'Hikvision'],
    location: 'Bakı, Azərbaycan',
    cv: 'CV yüklə (PDF)',
  },
  ru: {
    title: 'Orkhan Ismayilov - Системный администратор',
    role: 'Системный администратор',
    about:
      'Linux- и Windows-серверы, сеть, почта и оборудование. Миграция 100+ почтовых ящиков и ~100 сайтов, поддержка инфраструктуры сотен клиентов. Анализ проблемы, решение и автоматизация.',
    stats: [
      ['100+', 'ящиков перенесено'],
      ['~100', 'перенесённых сайтов'],
      ['50+ GB', 'самый большой ящик'],
      ['~3000', 'сайтов обслуживал скрипт'],
    ],
    skillsTitle: 'Навыки',
    skills: ['Linux', 'Windows Server', 'Active Directory', 'GPO', 'Docker', 'CI/CD', 'GitHub Actions', 'Ansible', 'Proxmox', 'VMware', 'AWS', 'MikroTik', 'Cisco', 'VLAN', 'VPN', 'Bash', 'PowerShell', 'SPF / DKIM / DMARC', 'Hikvision'],
    location: 'Баку, Азербайджан',
    cv: 'Скачать CV (PDF)',
  },
  en: {
    title: 'Orkhan Ismayilov - System Administrator',
    role: 'System Administrator',
    about:
      'Linux and Windows servers, networks, email and hardware. Migrated 100+ mailboxes and ~100 websites, supported infrastructure for hundreds of clients. I analyze the problem, solve it and automate the fix.',
    stats: [
      ['100+', 'mailboxes migrated'],
      ['~100', 'websites migrated'],
      ['50+ GB', 'largest single mailbox'],
      ['~3000', 'sites on a server running my script'],
    ],
    skillsTitle: 'Skills',
    skills: ['Linux', 'Windows Server', 'Active Directory', 'GPO', 'Docker', 'CI/CD', 'GitHub Actions', 'Ansible', 'Proxmox', 'VMware', 'AWS', 'MikroTik', 'Cisco', 'VLAN', 'VPN', 'Bash', 'PowerShell', 'SPF / DKIM / DMARC', 'Hikvision'],
    location: 'Baku, Azerbaijan',
    cv: 'Download CV (PDF)',
  },
};
