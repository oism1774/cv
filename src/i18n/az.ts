import type { Dictionary } from './types';

const az: Dictionary = {
  meta: {
    title: 'Orkhan Ismayilov - Sistem administratoru',
    description: 'Linux, hostinq və email infrastrukturu - cloud və DevOps istiqamətində inkişaf edirəm.',
  },
  hero: {
    name: 'Orkhan Ismayilov',
    role: 'Sistem administratoru',
    tagline: 'Linux, hostinq və email infrastrukturu - cloud və DevOps istiqamətində inkişaf edirəm.',
    location: 'Bakı, Azərbaycan',
    cv: 'CV-ni yüklə',
    contact: 'Əlaqə',
  },
  about: {
    title: 'Haqqımda',
    text: "**Linux serverlərini, hostinqi və email-i idarə edirəm.** Son iş yerim hostinq şirkəti olub: shared hosting və VPS, miqrasiyalar, DNS, email və müştəri məsələləri. Hazırda RHCSA proqramı üzrə **Linux biliklərimi dərinləşdirirəm** və AWS öyrənirəm.",
  },
  experience: {
    title: 'Təcrübə',
    jobs: [
      {
        company: 'Yepika',
        role: 'Sistem administratoru',
        period: 'Apr 2026 - Okt 2026',
        points: [
          'Enhance və cPanel üzərində shared hosting və VPS administrasiyası, WHMCS-də müştəri hesabları və billinq',
          'Saytların və email qutularının serverlər və provayderlər arasında miqrasiyası; IMAP protokolunu və email miqrasiyasının daxili iş prinsipini yaxşı bilirəm',
          'Email DNS qeydlərinin qurulması: MX, SPF, DKIM, DMARC',
          'Linux serverlərinin administrasiyası; backup, monitorinq və kütləvi əməliyyatlar üçün Bash skriptləri',
          'Komanda üçün self-hosted xidmətlərin qurulması və konfiqurasiyası (dəstək platforması, daxili alətlər)',
          'VPN qurulması; əsas stekdən kənar qeyri-standart tapşırıqların həlli',
        ],
      },
      {
        company: 'Just for Fun',
        role: 'Dəstək / sistem administratoru',
        period: '2025',
        points: [
          '50+ oyun kompüterinin diaqnostikası, təmiri və yığılması',
          'Klubun lokal şəbəkəsinə qulluq və əməliyyat sistemlərinin quraşdırılması',
          'Yerində bütün texniki məsələlər üzrə birinci xətt dəstəyi',
        ],
      },
      {
        company: 'Azerbaijan Global IT Technology',
        role: 'Digital Specialist',
        period: '2025',
        points: [
          'Rəqəmsal layihələr üçün vizual materiallar',
          'Əməkdaşlar üçün daxili texniki dəstək: proqram təminatı, avadanlıq, IT şöbəsi ilə birlikdə ofis şəbəkəsi',
        ],
      },
      {
        company: 'Frilans',
        role: 'Qrafik dizayner',
        period: '2023 - 2026',
        points: [
          'Rəqəmsal layihələr üçün vizual kommunikasiya və maket dizaynı (Adobe Creative Suite, Figma)',
        ],
      },
    ],
  },
  learning: {
    title: 'Hazırda öyrənirəm',
    items: [
      { name: 'RHCSA', value: 'RHEL 9, Linux administrasiyası' },
      { name: 'AWS', value: 'əsas xidmətlər, IAM, S3, CloudFront' },
      { name: 'Cloudflare', value: 'bu sayt Pages və R2 üzərində işləyir' },
      { name: 'Növbəti', value: 'Ansible, Terraform, RHCE' },
    ],
  },
  education: {
    title: 'Təhsil və dillər',
    school: 'UNEC',
    degree: 'bakalavr, dizayn',
    period: '2020 - 2024',
    languages: [
      { name: 'Azərbaycan dili', value: 'ana dili', native: true },
      { name: 'Rus dili', value: 'ana dili', native: true },
      { name: 'İngilis dili', value: 'C1 (IELTS 7.0)' },
    ],
  },
  contact: {
    title: 'Əlaqə',
    text: 'Sistem administrasiyası, texniki dəstək və cloud / DevOps vəzifələrinə açığam.',
  },
  footer: 'Cloudflare üzərində statik sayt. Astro ilə hazırlanıb.',
};

export default az;
