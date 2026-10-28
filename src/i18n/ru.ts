import type { Dictionary } from './types';

const ru: Dictionary = {
  meta: { title: 'Orkhan Ismayilov - Системный администратор', description: 'Системный администратор: Linux, почта, сеть и хостинг-инфраструктура. Анализ проблемы, решение и автоматизация.' },
  hero: { name: 'Orkhan Ismayilov', role: 'Системный администратор', tagline: 'Серверы, сеть, почта и оборудование - от Linux-сервера до системы видеонаблюдения. Анализ проблемы, её решение и автоматизация, чтобы она не повторялась.', location: 'Баку, Азербайджан', cv: 'Скачать CV', contact: 'Связаться' },
  stats: [
    'почтовых ящиков перенесено',
    'сайтов перенесено',
    'самый большой ящик',
    'сайтов на сервере: автоматизация',
  ],
  about: { title: 'About me', text: '**Linux-серверы, сеть, почта и оборудование.** **Миграция 100+ почтовых ящиков и ~100 сайтов**, поддержка инфраструктуры сотен клиентов. **Анализ проблемы, её решение и автоматизация.**' },
  services: { title: 'Services', items: [
    { title: 'Почтовая инфраструктура', points: ['Миграция workspace любого объёма: Google, панели, провайдеры', 'Настройка и диагностика MX, SPF, DKIM, DMARC', 'Работа на уровне протокола IMAP: папки, флаги, принцип работы'] },
    { title: 'Сеть', points: ['Cisco и MikroTik: сегментация VLAN, защита через SSH', 'Безопасный удалённый доступ через WireGuard', 'Диагностика петель и периодических обрывов'] },
    { title: 'Оборудование и видеонаблюдение', points: ['Сборка и диагностика компьютеров, BIOS, Windows', 'DVR/NVR: подключение, замена дисков, удалённый просмотр', 'Прошивка Android-устройств, ремонт смартфонов'] },
    { title: 'Автоматизация и бэкапы', points: ['Служебные скрипты на Bash и PowerShell', 'Скрипты бэкапов, резервные копии на Hetzner Storage Box', 'Конфигурация серверов и деплой через Ansible'] },
    { title: 'Серверы и хостинг', points: ['Администрирование Linux и Windows Server', 'Enhance, cPanel, WHMCS: серверы, аккаунты, биллинг', 'Proxmox VE, Docker, Cloudflare, разные VPS-провайдеры'] },
    { title: 'Сайты и домены', points: ['Перенос сайтов между хостингами: вручную и через API', 'DNS, домены, SSL, Cloudflare', 'Статические сайты: Astro, автодеплой через Git push'] },
  ] },
  cases: {
    title: 'Cases',
    note: 'NDA: имена клиентов, скриншоты и внутренние адреса не раскрываются. Описано только то, что было сделано и как.',
    nda: 'nda',
    first: { tag: 'email migration', title: 'Миграция корпоративного workspace крупной компании', lead: 'Переход почтовой среды одной из крупных компаний Азербайджана на новый хостинг.', numLabels: ['почтовых ящиков', 'самый большой ящик'], rows: ['Создать в новой панели около сотни ящиков с правильными параметрами и перенести 100+ ГБ данных без потерь.', 'Массовое создание ящиков и автоматизированная синхронизация imapsync между двумя workspace.', 'Весь архив сохранён, работа на новом хостинге продолжилась без перерыва.'] },
    second: { title: 'Запуск сайта на Angular + ASP.NET на сервере', rows: ['Frontend на Angular, backend на ASP.NET, на сервере Nginx и PostgreSQL. Нужно было привязать домен к backend, подключить SSL и связать фронтенд с API.', 'Домен привязан к backend через Nginx reverse proxy, импортирован SSL-сертификат Cloudflare, фронтенд связан с API.'] },
    satellites: [
      { title: 'DNS и домены', text: 'Настройка записей, перенос доменов, диагностика проблем' },
      { title: 'WordPress', text: 'Перенос и восстановление сайтов, защита от ботов-регистраций' },
      { title: 'Миграция ~100 сайтов', text: 'Между панелями вручную и через API' },
      { title: 'Сервер с ~3000 сайтов', text: 'Скрипт, автоматически реагирующий на изменения .htaccess' },
    ],
  },
  skills: { title: 'Skills', items: ['миграция, IMAP, SPF/DKIM/DMARC', 'серверы, хостинг-панели', 'домены, Cloudflare, миграция сайтов', 'компьютеры, DVR/NVR, оборудование', 'Docker, Proxmox, Bash, Ansible', 'VLAN, MikroTik, Cisco, VPN', 'Chatwoot, база знаний; Claude Code, локальные LLM', 'Windows Server, Active Directory, IP-телефония', 'VMware, Microsoft 365, AWS'] },
  process: { title: 'Process', steps: [
    { title: 'Анализ', text: 'Выяснение требований клиента и реальной проблемы.' },
    { title: 'Варианты', text: 'Изучение задачи и предложение нескольких путей: от самого чистого до самого практичного.' },
    { title: 'Выполнение', text: 'Внедрение выбранного решения по этапам, не ломая существующую систему.' },
    { title: 'Документация и автоматизация', text: 'Документирование и автоматизация решения, чтобы в следующий раз это занимало минуты.' },
  ] },
  experience: { title: 'Experience', jobs: [
      {
        company: 'Yepika',
        role: 'Системный администратор',
        period: 'апр 2026 - окт 2026',
        points: ['Web, почтовая и VPS-инфраструктура сотен клиентов: Enhance, cPanel, WHMCS', 'Миграции почты и сайтов; скрипты бэкапов и автоматизации', 'Платформа поддержки, база знаний и обучающий курс'],
      },
      {
        company: 'Just for Fun',
        role: 'Поддержка / системный администратор',
        period: '2025',
        points: ['Игровой клуб: диагностика и сборка 50+ компьютеров, PanCafe, сеть, поддержка на месте'],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: ['Внутренняя техподдержка, офисная сеть, визуальные материалы'],
      },
  ] },
  learning: { title: 'Learning now', items: [{ name: 'RHCSA', value: 'RHEL 9, администрирование Linux' }, { name: 'AD & VMware', value: 'Active Directory, VMware' }, { name: 'AWS', value: 'базовые сервисы, IAM, S3, CloudFront' }, { name: 'Cloudflare', value: 'этот сайт работает на Workers & Pages' }, { name: 'Next', value: 'Terraform, RHCE' }] },
  education: { title: 'Education & languages', school: 'UNEC', degree: 'Бакалавр, дизайн', period: '2020 - 2024', languages: [{ name: 'Азербайджанский', value: 'родной', native: true }, { name: 'Русский', value: 'родной', native: true }, { name: 'Английский', value: 'C1 · IELTS 7.0' }] },
  contact: { title: 'Contact', text: 'Открыт к предложениям по системному администрированию, технической поддержке и cloud / DevOps.' },
  footer: 'Статический сайт на Cloudflare. Сделан на Astro.',
};

export default ru;
