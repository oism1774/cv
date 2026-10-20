// Terminal decoration: identical (English) in every language.
export const prompt = { user: 'orkhan@khandev', path: '~', command: 'cd ~/devops' };

export const sections = {
  about: { cmd: '$ whoami', num: '01' },
  experience: { cmd: '$ cat experience.log', num: '02' },
  learning: { cmd: '$ tail -f learning.log', num: '03' },
  education: { cmd: '$ cat about.txt', num: '04' },
  contact: { cmd: '$ ping orkhan', num: '05' },
};

export const status = 'open to work';

export const neofetch = [
  { key: 'role', value: 'system administrator' },
  { key: 'os', value: 'linux · rhel · ubuntu' },
  { key: 'shell', value: 'bash' },
  { key: 'focus', value: 'hosting, mail, cloud' },
  { key: 'loc', value: 'baku, az' },
];

// Same order as learning.items in the dictionaries.
export const learningStatus = [
  { state: 'progress', label: 'in progress' },
  { state: 'progress', label: 'in progress' },
  { state: 'done', label: 'live' },
  { state: 'queued', label: 'queued' },
] as const;

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
