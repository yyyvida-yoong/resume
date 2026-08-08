const projects={
  veil:{title:'VEIL OF LIGHT',tag:'AI ART DIRECTION · 2026',description:'빛과 반투명한 물성의 관계를 탐구한 생성형 이미지 시리즈입니다.',image:'assets/project-veil.png'},
  bloom:{title:'SYNTHETIC BLOOM',tag:'GENERATIVE STUDY · 2026',description:'자연의 유기적인 구조를 디지털 소재로 재해석한 비주얼 스터디입니다.',image:'assets/project-bloom.png'},
  horizon:{title:'BLUE HORIZON',tag:'WORLD BUILDING · 2025',description:'현실과 상상의 경계에 존재하는 미래 풍경을 설계한 월드 빌딩 프로젝트입니다.',image:'assets/project-horizon.png'}
};

const menuButton=document.querySelector('.menu-button');
const sidebar=document.querySelector('.sidebar');
menuButton.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
sidebar.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{sidebar.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}));

const modal=document.querySelector('.modal');
document.querySelectorAll('.project-open').forEach(button=>button.addEventListener('click',()=>{const data=projects[button.dataset.project];modal.querySelector('img').src=data.image;modal.querySelector('img').alt=data.title;modal.querySelector('.eyebrow').textContent=data.tag;modal.querySelector('h2').textContent=data.title;modal.querySelector('.modal-description').textContent=data.description;modal.showModal()}));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});

const revealItems=document.querySelectorAll('.project,.about-grid');
revealItems.forEach(item=>item.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
revealItems.forEach(item=>observer.observe(item));

const sections=document.querySelectorAll('main section,footer');
const navLinks=document.querySelectorAll('.sidebar nav a');
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-25% 0px -65%'});
sections.forEach(section=>{if(section.id)navObserver.observe(section)});
