// Evento de clique para rolar até a seção de projetos
document.addEventListener('DOMContentLoaded', () => {
  const linkProjetos = document.getElementById('btnProjetos');
  const secaoProjetos = document.getElementById('projetos');

  if (linkProjetos && secaoProjetos) {
    linkProjetos.addEventListener('click', (event) => {
      event.preventDefault();
      secaoProjetos.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // evento que ocorre utilizando o scroll como trigger,
  // para que as animações ocorram quando o usuário rolar a
  // página até determinado ponto
  if (typeof gsap === 'undefined') return;

  if (gsap.registerPlugin && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Animação 1: Cabeçalho (fade + slide de cima)
    gsap.from('.topo', {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animação 2: Seção Perfil (elementos entram de lados opostos)
    gsap.from('.perfilWrap', {
      opacity: 0,
      x: -100,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.perfil',
        start: 'top 60%'
      }
    });

    gsap.from('.profPic', {
      opacity: 0,
      x: 100,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.perfil',
        start: 'top 80%'
      }
    });

    gsap.from('.stacks p', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.perfil',
        start: 'top 60%'
      }
    });

    // Animação 3: Título Projetos (fade + slide)
    gsap.from('.ttlProj', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.ttlProj',
        start: 'top 85%'
      }
    });

    // Animação 4: Cards Projetos (cascata - fade + slide de baixo)
    gsap.from('.cardProjeto', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cardsProjetos',
        start: 'top 75%'
      }
    });

    // Animação 5: Footer (fade + slide de baixo)
    gsap.from('.rodape', {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: 'power2.out',
      immediateRender: false, // não aplicar estilos iniciais até a animação rodar
      scrollTrigger: {
        trigger: '.rodape',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});
