export const prompt = { user: 'orkhan@khandev', path: '~', command: 'cd ~/sysadmin' };

export const sections = {
  about: { cmd: '$ whoami', num: '01' },
  services: { cmd: '$ ls services/', num: '02' },
  cases: { cmd: '$ cat cases.md', num: '03' },
  skills: { cmd: '$ ./skills --map', num: '04' },
  process: { cmd: '$ cat process.md', num: '05' },
  experience: { cmd: '$ cat experience.log', num: '06' },
  learning: { cmd: '$ tail -f learning.log', num: '07' },
  education: { cmd: '$ cat about.txt', num: '08' },
  contact: { cmd: '$ ping orkhan', num: '09' },
};

export const status = 'open to work';

export const neofetch = [
  { key: 'role', value: 'system administrator' },
  { key: 'os', value: 'linux · windows server' },
  { key: 'shell', value: 'bash · powershell' },
  { key: 'focus', value: 'mail, hosting, network' },
  { key: 'loc', value: 'baku, az' },
];

export const statNumbers = ['100+', '~100', '50+ GB', '~3000'];

// Same order as services.items in the dictionaries.
export const serviceMeta = [{'code': 'MAIL', 'chips': ['imapsync', 'IMAP', 'DNS']}, {'code': 'NET', 'chips': ['TCP/IP', 'VLAN', 'VPN']}, {'code': 'HW', 'chips': ['Hikvision', 'BIOS', 'PanCafe']}, {'code': 'OPS', 'chips': ['Bash', 'Ansible', 'cron']}, {'code': 'SRV', 'chips': ['Ubuntu', 'RHEL', 'Docker']}, {'code': 'WEB', 'chips': ['WordPress', 'Astro', 'Nginx']}] as const;

export const noteMark = '#';
export const caseNumbers = [['~100', '50+ GB']];
export const caseLabels = { problem: 'problem', solution: 'solution', result: 'result', task: 'task' };
export const caseFiles = { first: 'case-01.md', second: 'case-02', tag: 'email migration' };
export const caseSecondChips = ['Angular', 'ASP.NET', 'Nginx', 'PostgreSQL', 'Cloudflare'];
export const satelliteCodes = ['DNS', 'WP', 'MIG', 'OPS'];

// Same order as skills.items in the dictionaries.
export const skillMeta = [{'name': 'Email', 'state': 'core', 'label': 'CORE'}, {'name': 'Linux', 'state': 'core', 'label': 'CORE'}, {'name': 'DNS & web', 'state': 'core', 'label': 'CORE'}, {'name': 'Hardware', 'state': 'core', 'label': 'CORE'}, {'name': 'Tooling', 'state': 'ready', 'label': 'READY'}, {'name': 'Network', 'state': 'ready', 'label': 'READY'}, {'name': 'Support & AI', 'state': 'ready', 'label': 'READY'}, {'name': 'Windows', 'state': 'up', 'label': 'LEVELING UP'}, {'name': 'Virtual & cloud', 'state': 'up', 'label': 'LEVELING UP'}] as const;
export const skillsFooter = 'waiting for new entries';
export const stepLabels = ['step 01', 'step 02', 'step 03', 'step 04'];

// Same order as learning.items in the dictionaries.
export const learningStatus = [{'state': 'progress', 'label': 'in progress'}, {'state': 'progress', 'label': 'in progress'}, {'state': 'progress', 'label': 'in progress'}, {'state': 'done', 'label': 'live'}, {'state': 'queued', 'label': 'queued'}] as const;

export const learningFooter = 'waiting for new entries';

export const cardCaptions = { education: 'education', languages: 'languages' };

// Decorative background syslog. Never put real claims or client data here.
export const logLines = [
  'Oct 20 03:00:01 cron[2214]: (root) CMD (/opt/scripts/backup.sh)',
  'Oct 20 03:00:02 backup: archive created, verifying integrity',
  'Oct 20 03:00:41 backup: rsync to storage box ok',
  'Oct 20 03:01:07 systemd[1]: Started logrotate.service',
  'Oct 20 03:04:12 dovecot: imap-login: Login: user=info@example.az, TLS',
  'Oct 20 03:04:13 postfix/smtpd[3381]: connect from mail relay',
  'Oct 20 03:05:55 sshd[4102]: Accepted publickey for moonlever',
  'Oct 20 03:06:20 kernel: eth0: link up, 1000Mbps, full duplex',
  'Oct 20 03:07:02 nginx: configuration file test is successful',
  'Oct 20 03:07:03 systemd[1]: Reloaded nginx.service',
  'Oct 20 03:09:44 imapsync: 1842 messages transferred, 0 errors',
  'Oct 20 03:11:18 named: zone khandev.xyz/IN: loaded serial 2026102001',
  'Oct 20 03:12:30 opendkim: DKIM-Signature field added',
  'Oct 20 03:14:09 quota: usage within limits on /var/www',
  'Oct 20 03:15:51 wg-quick: interface wg0 up',
  'Oct 20 03:17:26 systemd[1]: Started certbot-renew.timer',
  'Oct 20 03:18:40 docker: container support-desk healthy',
  'Oct 20 03:20:03 fail2ban: Ban 203.0.113.42',
  'Oct 20 03:21:15 dnf: Complete! 14 packages upgraded',
  'Oct 20 03:22:58 systemd[1]: Reached target multi-user.target',
];

export const ping = {
  host: 'orkhan (khandev.xyz)',
  replyFrom: 'reply from',
  labels: { email: 'email', whatsapp: 'whatsapp', github: 'github' },
};
