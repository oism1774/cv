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
    cv: 'CVni yüklə',
    contact: 'Əlaqə',
  },
  about: {
    title: 'Haqqımda',
    text: "**Sistem administratoruyam. Linux serverləri, saytlar və email ilə işləyirəm.** Mənim güclü tərəfim **qeyri-standart problemləri çevik şəkildə həll etməkdir.** Son iş yerimdə - hostinq şirkətində - çoxlu müştərinin websaytlarını və emaillərini idarə edirdim: sadə gündəlik suallardan başlamış yüzlərlə email olan workspace miqrasiyasına qədər. Hazırda RHCSA keçirəm, cloud öyrənirəm və DevOps istiqamətində inkişaf edirəm.",
  },
  experience: {
    title: 'Təcrübə',
    jobs: [
      {
        company: 'Yepika',
        role: 'Sistem administratoru',
        period: 'Apr 2026 - Okt 2026',
        points: [
          'Yüzlərlə müştəri üçün hostinq infrastrukturunun administrasiyası: Enhance və cPanel üzərində web, email və backup serverləri, VPS; WHMCS üzərində hesablar və billinq',
          'Yüzlərlə qutudan ibarət böyük korporativ email mühitinin avtomatlaşdırılmış şəkildə miqrasiyası; IMAP və SMTP protokolları ilə iş; email DNS qeydlərinin qurulması (MX, SPF, DKIM, DMARC)',
          'Linux serverlərində backup, monitorinq və kütləvi əməliyyatlar üçün avtomatlaşdırma skriptlərinin yazılması',
          'Ofis və müştərilər üçün self-hosted xidmətlərin qurulması (dəstək platforması, daxili alətlər), VPN konfiqurasiyası və əsas stekdən kənar qeyri-standart tapşırıqların həlli',
        ],
      },
      {
        company: 'Just for Fun',
        role: 'Dəstək / sistem administratoru',
        period: '2025',
        points: [
          '50+ oyun kompüterinin diaqnostikası, təmiri və yığılması; şəbəkəyə qulluq və əməliyyat sistemlərinin quraşdırılması',
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
    ],
  },
  learning: {
    title: 'Hazırda öyrənirəm',
    items: [
      { name: 'RHCSA', value: 'RHEL 9, Linux administrasiyası' },
      { name: 'AWS', value: 'əsas xidmətlər, IAM, S3, CloudFront' },
      { name: 'Cloudflare', value: 'bu sayt Workers & Pages üzərində işləyir' },
      { name: 'Növbəti', value: 'Ansible, Terraform, RHCE' },
    ],
  },
  education: {
    title: 'Təhsil və dillər',
    school: 'UNEC',
    degree: 'Bakalavr, dizayn',
    period: '2020 - 2024',
    languages: [
      { name: 'Azərbaycan dili', value: 'ana dili', native: true },
      { name: 'Rus dili', value: 'ana dili', native: true },
      { name: 'İngilis dili', value: 'C1 · IELTS 7.0' },
    ],
  },
  contact: {
    title: 'Əlaqə',
    text: 'Sistem administrasiyası, texniki dəstək və cloud / DevOps vəzifələrinə açığam.',
  },
  footer: 'Cloudflare üzərində statik sayt. Astro ilə hazırlanıb.',
};

export default az;
