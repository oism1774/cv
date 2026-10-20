import type { Dictionary } from './types';

const ru: Dictionary = {
  meta: {
    title: 'Orkhan Ismayilov - Системный администратор',
    description: 'Linux, хостинг и почтовая инфраструктура - двигаюсь в сторону cloud и DevOps.',
  },
  hero: {
    name: 'Orkhan Ismayilov',
    role: 'Системный администратор',
    tagline: 'Linux, хостинг и почтовая инфраструктура - двигаюсь в сторону cloud и DevOps.',
    location: 'Баку, Азербайджан',
    cv: 'Скачать CV',
    contact: 'Связаться',
  },
  about: {
    title: 'Обо мне',
    text: 'Слежу, чтобы серверы, сайты и почта работали. Последнее место - хостинговая компания: администрировал shared hosting и VPS, миграции, DNS, почту, проблемы клиентов. Сейчас систематизирую знания Linux по программе RHCSA и осваиваю AWS.',
  },
  experience: {
    title: 'Опыт',
    jobs: [
      {
        company: 'Yepika',
        role: 'Системный администратор',
        period: 'Апр 2026 - Окт 2026',
        points: [
          'Администрирование shared hosting и VPS на Enhance и cPanel, аккаунты клиентов и биллинг в WHMCS',
          'Миграции сайтов и почтовых ящиков между серверами и провайдерами; хорошо понимаю IMAP и как миграция почты устроена изнутри',
          'Настройка почтового DNS: MX, SPF, DKIM, DMARC',
          'Администрирование Linux-серверов; Bash-скрипты для бэкапов, мониторинга и массовых операций',
          'Разворачивал и настраивал self-hosted сервисы для команды (платформа поддержки, внутренние инструменты)',
          'Настройка VPN; решение нестандартных задач за пределами основного стека',
        ],
      },
      {
        company: 'Just for Fun Gaming Club',
        role: 'Поддержка / системный администратор',
        period: '2025',
        points: [
          'Диагностика, ремонт и сборка 50+ игровых станций',
          'Обслуживание локальной сети и развёртывание ОС по клубу',
          'Первая линия поддержки по всем техническим вопросам на месте',
        ],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: [
          'Визуальные материалы для цифровых проектов',
          'Внутренняя техподдержка сотрудников: софт, железо, связь в офисе совместно с IT-отделом',
        ],
      },
      {
        company: 'Фриланс',
        role: 'Графический дизайнер',
        period: '2023 - 2026',
        points: [
          'Визуальная коммуникация и вёрстка макетов для цифровых проектов (Adobe Creative Suite, Figma)',
        ],
      },
    ],
  },
  stack: {
    title: 'Стек',
    groups: [
      { name: 'Linux', tags: ['Ubuntu', 'Fedora', 'RHEL', 'Bash', 'SSH', 'cron'] },
      { name: 'Хостинг', tags: ['Enhance', 'cPanel', 'WHMCS'] },
      { name: 'Почта', tags: ['IMAP', 'SMTP', 'imapsync', 'MX / SPF / DKIM / DMARC'] },
      { name: 'Виртуализация', tags: ['Proxmox', 'Docker'] },
      { name: 'Сеть', tags: ['DNS', 'VPN', 'Cloudflare'] },
    ],
  },
  learning: {
    title: 'Сейчас изучаю',
    items: [
      { name: 'RHCSA', value: 'RHEL 9, администрирование Linux' },
      { name: 'AWS', value: 'базовые сервисы, IAM, S3, CloudFront' },
      { name: 'Cloudflare', value: 'этот сайт работает на Pages и R2' },
      { name: 'Дальше', value: 'Ansible, Terraform, RHCE' },
    ],
  },
  education: {
    title: 'Образование и языки',
    school: 'UNEC',
    degree: 'бакалавр, дизайн',
    period: '2020 - 2024',
    languages: [
      { name: 'Азербайджанский', value: 'родной' },
      { name: 'Русский', value: 'родной' },
      { name: 'Английский', value: 'B2 (IELTS 7.0)' },
    ],
  },
  contact: {
    title: 'Контакты',
    text: 'Открыт к позициям в системном администрировании, техподдержке и cloud / DevOps.',
  },
  footer: 'Статический сайт на Cloudflare. Сделан на Astro.',
};

export default ru;
