const projects = {
  mudang: { title: '무당 — XBOX GAMES SHOWCASE', tag: 'MOTION GRAPHICS · FACIAL ANIMATION · 2025', description: '캐릭터 정보와 기밀 문서를 그런지 무드의 모션그래픽으로 구성하고, 타이틀·엔딩 모션과 시네마틱 및 NPC 페이셜 애니메이션을 제작했습니다.', image: 'assets/project-veil.png', url: 'https://www.youtube.com/watch?v=NFeSWXwK2tc&t=16s' },
  superb: { title: 'SUPERB TRAILER', tag: 'DIRECTION · STORYBOARD · MOTION GRAPHICS · 2024', description: '프로젝트 리드로 기획, 프리비즈, 편집, 모션그래픽 디자인, 인게임 촬영과 사운드 편집까지 트레일러 제작 전반을 진행했습니다.', image: 'assets/project-bloom.png', url: 'https://youtu.be/CY6zVN78V_8?si=l91aCL2_Ow79o4zR' },
  hyundai: { title: 'HD HYUNDAI CES 2024', tag: 'PROJECT LEAD · MOTION · LEVEL DESIGN · 2023', description: 'CES 2024 전시 콘텐츠의 프로젝트 리드를 맡아 모션그래픽 디자인, Unreal Engine 레벨 디자인과 편집을 진행했습니다.', image: 'assets/project-horizon.png', url: 'https://www.behance.net/gallery/189147181/HD-HYUNDAI-CES-2024' },
  harman: { title: 'SAMSUNG HARMAN CES 2023', tag: 'LEVEL DESIGN · MOTION GRAPHICS · 2022', description: 'Unreal Engine을 활용한 첫 클라이언트 프로젝트로, 3D 공간의 레벨 디자인과 모션그래픽, 후반 편집을 담당했습니다.', image: 'assets/project-veil.png', url: 'https://www.behance.net/gallery/162718801/SAMSUNG-HARMAN-Ready-Care-CES-2023' },
  hunmin: { title: '훈민정음 해례본 NFT', tag: 'PLANNING · STORYBOARD · MOTION GRAPHICS · 2022', description: '긴 호흡의 영상 기획과 프리비즈, 스토리보드 단계에 참여하고 2D 모션그래픽과 이펙트 작업을 담당했습니다.', image: 'assets/project-bloom.png', url: 'https://youtu.be/e3vEbhbUVsU' }
};

const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
menuButton.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? 'Close' : 'Menu'; });
sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { sidebar.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu'; }));

const modal = document.querySelector('.modal');
document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => { const data = projects[button.dataset.project]; modal.querySelector('img').src = data.image; modal.querySelector('img').alt = data.title; modal.querySelector('.eyebrow').textContent = data.tag; modal.querySelector('h2').textContent = data.title; modal.querySelector('.modal-description').textContent = data.description; modal.querySelector('.modal-link').href = data.url; modal.showModal(); }));
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

const revealItems = document.querySelectorAll('.project, .about-grid, .career-list article');
revealItems.forEach(item => item.classList.add('reveal'));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
revealItems.forEach(item => observer.observe(item));

const sections = document.querySelectorAll('main section, footer');
const navLinks = document.querySelectorAll('.sidebar nav a');
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-25% 0px -65%' });
sections.forEach(section => { if (section.id) navObserver.observe(section); });
