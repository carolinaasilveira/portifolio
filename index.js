document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.topo, .perfilWrap, .profPic, .stacks p, .ttlProj, .cardProjeto, .rodape');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach((element, index) => {
    let directionClass = 'from-bottom';

    if (element.matches('.topo')) {
      directionClass = 'from-top';
    } else if (element.matches('.perfilWrap')) {
      directionClass = 'from-left';
    } else if (element.matches('.profPic')) {
      directionClass = 'from-right';
    }

    element.classList.add('reveal', directionClass);

    if (element.matches('.stacks p')) {
      element.style.transitionDelay = `${index * 0.1}s`;
    } else if (element.matches('.cardProjeto')) {
      element.style.transitionDelay = `${(index % 4) * 0.12}s`;
    }

    observer.observe(element);
  });
});

