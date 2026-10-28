import type { Dictionary } from './types';

const az: Dictionary = {
  meta: { title: 'Orkhan Ismayilov - Sistem administratoru', description: 'Sistem administratoru: Linux, email, şəbəkə və hostinq infrastrukturu. Problemin analizi, həlli və avtomatlaşdırılması.' },
  hero: { name: 'Orkhan Ismayilov', role: 'Sistem administratoru', tagline: 'Serverlər, şəbəkə, email və avadanlıq - Linux serverdən kamera sisteminə qədər. Problemin analizi, həlli və avtomatlaşdırılması ki, ikinci dəfə təkrarlanmasın.', location: 'Bakı, Azərbaycan', cv: 'CVni yüklə', contact: 'Əlaqə' },
  stats: [
    'email qutusunun miqrasiyası',
    'saytın köçürülməsi',
    'ən böyük tək qutu',
    'saytlı serverdə avtomatlaşdırma',
  ],
  about: { title: 'About me', text: '**Linux serverlər, şəbəkə, email və avadanlıq.** **100+ email qutusunun və ~100 saytın miqrasiyası**, yüzlərlə müştərinin infrastrukturunun dəstəyi. **Problemin analizi, həlli və avtomatlaşdırılması.**' },
  services: { title: 'Services', items: [
    { title: 'Email infrastrukturu', points: ['İstənilən həcmdə workspace miqrasiyası: Google, panellər, provayderlər', 'MX, SPF, DKIM, DMARC qurulması və diaqnostikası', 'IMAP protokol səviyyəsində: qovluqlar, flaglar, iş prinsipi'] },
    { title: 'Şəbəkə', points: ['Cisco və MikroTik: VLAN seqmentləşdirmə, SSH ilə qorunma', 'WireGuard ilə uzaqdan təhlükəsiz giriş', 'Loop və dövri kəsintilərin diaqnostikası'] },
    { title: 'Avadanlıq və müşahidə', points: ['Kompüterlərin yığılması, diaqnostikası, BIOS, Windows', 'DVR/NVR: qoşulma, disk dəyişmə, uzaqdan baxış', 'Android cihazların yenilənməsi, smartfon təmiri'] },
    { title: 'Avtomatlaşdırma və backup', points: ['Bash və PowerShell ilə xidməti skriptlər', 'Backup skriptləri, Hetzner Storage Box üzərində ehtiyat nüsxələr', 'Ansible ilə serverlərin konfiqurasiyası və deploy'] },
    { title: 'Server və hostinq', points: ['Linux və Windows Server administrasiyası', 'Enhance, cPanel, WHMCS: serverlər, hesablar, billinq', 'Proxmox VE, Docker, Cloudflare, müxtəlif VPS provayderləri'] },
    { title: 'Saytlar və domenlər', points: ['Hostinqlər arasında sayt miqrasiyası: əl ilə və API ilə', 'DNS, domenlər, SSL, Cloudflare', 'Statik saytlar: Astro, Git push ilə avtomatik deploy'] },
  ] },
  cases: {
    title: 'Cases',
    note: 'NDA: müştəri adları, ekran görüntüləri və daxili ünvanlar göstərilmir. Yalnız görülən iş və istifadə olunan üsullar təsvir olunur.',
    nda: 'nda',
    first: { tag: 'email migration', title: 'Böyük şirkətin korporativ workspace köçürülməsi', lead: 'Azərbaycanın böyük şirkətlərindən birinin email mühitinin yeni hostinqə keçidi.', numLabels: ['email qutusu', 'ən böyük qutu'], rows: ['Yeni paneldə yüzə yaxın qutunu düzgün parametrlərlə yaratmaq və 100+ GB məlumatı itkisiz köçürmək.', 'Qutuların kütləvi yaradılması və iki workspace arasında avtomatlaşdırılmış imapsync sinxronizasiyası.', 'Bütün arxiv saxlanıldı, iş yeni hostinqdə fasiləsiz davam etdi.'] },
    second: { title: 'Angular + ASP.NET saytının serverdə işə salınması', rows: ['Frontend Angular, backend ASP.NET, serverdə Nginx və PostgreSQL. Domenin backendə bağlanması, SSL qoşulması və frontun API ilə birləşdirilməsi tələb olunurdu.', 'Nginx reverse proxy ilə domen backendə bağlandı, Cloudflare SSL sertifikatı import edildi, frontend API ilə əlaqələndirildi.'] },
    satellites: [
      { title: 'DNS və domenlər', text: 'Qeydlərin qurulması, domen köçürmələri, problemlərin diaqnostikası' },
      { title: 'WordPress', text: 'Saytların köçürülməsi, bərpası və bot qeydiyyatlarından qorunma' },
      { title: '~100 sayt miqrasiyası', text: 'Panellər arasında əl ilə və API vasitəsilə' },
      { title: '~3000 saytlı server', text: '.htaccess dəyişikliklərinə avtomatik reaksiya verən skript' },
    ],
  },
  skills: { title: 'Skills', items: ['miqrasiya, IMAP, SPF/DKIM/DMARC', 'serverlər, hostinq panelləri', 'domenlər, Cloudflare, sayt miqrasiyası', 'kompüterlər, DVR/NVR, avadanlıq', 'Docker, Proxmox, Bash, Ansible', 'VLAN, MikroTik, Cisco, VPN', 'Chatwoot, bilik bazası; Claude Code, local LLM', 'Windows Server, Active Directory, IP telefoniya', 'VMware, Microsoft 365, AWS'] },
  process: { title: 'Process', steps: [
    { title: 'Analiz', text: 'Müştərinin tələblərinin və real problemin müəyyən edilməsi.' },
    { title: 'Variantlar', text: 'Peşəkarların bu problemi necə həll etdiyinin araşdırılması, bir neçə yolun təklifi: ən təmizdən ən praktikinə qədər.' },
    { title: 'İcra', text: 'Seçilmiş həllin mərhələlərlə, mövcud sistem pozulmadan tətbiqi.' },
    { title: 'Sənəd və avtomatlaşdırma', text: 'Həllin sənədləşdirilməsi və avtomatlaşdırılması ki, növbəti dəfə dəqiqələr çəksin.' },
  ] },
  experience: { title: 'Experience', jobs: [
      {
        company: 'Yepika',
        role: 'Sistem administratoru',
        period: 'apr 2026 - okt 2026',
        points: ['Yüzlərlə müştərinin web, email və VPS infrastrukturu: Enhance, cPanel, WHMCS', 'Email və sayt miqrasiyaları; backup və avtomatlaşdırma skriptləri', 'Dəstək platforması, bilik bazası və təlim kursu'],
      },
      {
        company: 'Just for Fun',
        role: 'Dəstək / sistem administratoru',
        period: '2025',
        points: ['Oyun klubu: 50+ kompüterin diaqnostikası və yığılması, PanCafe, şəbəkə, yerində dəstək'],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: ['Daxili texniki dəstək, ofis şəbəkəsi, vizual materiallar'],
      },
  ] },
  learning: { title: 'Learning now', items: [{ name: 'RHCSA', value: 'RHEL 9, Linux administrasiyası' }, { name: 'AD & VMware', value: 'Active Directory, VMware' }, { name: 'AWS', value: 'əsas xidmətlər, IAM, S3, CloudFront' }, { name: 'Cloudflare', value: 'bu sayt Workers & Pages üzərində işləyir' }, { name: 'Next', value: 'Terraform, RHCE' }] },
  education: { title: 'Education & languages', school: 'UNEC', degree: 'Bakalavr, dizayn', period: '2020 - 2024', languages: [{ name: 'Azərbaycan dili', value: 'ana dili', native: true }, { name: 'Rus dili', value: 'ana dili', native: true }, { name: 'İngilis dili', value: 'C1 · IELTS 7.0' }] },
  contact: { title: 'Contact', text: 'Sistem administrasiyası, texniki dəstək və cloud / DevOps vəzifələri üçün təkliflər qəbul edilir.' },
  footer: 'Cloudflare üzərində statik sayt. Astro ilə hazırlanıb.',
};

export default az;
