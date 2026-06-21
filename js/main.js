const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealTargets = document.querySelectorAll('.reveal');
const timelineLayout = document.querySelector('.abordagem__layout');

if (prefersReducedMotion) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
  if (timelineLayout) timelineLayout.classList.add('is-visible');
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el) => observer.observe(el));
  if (timelineLayout) observer.observe(timelineLayout);
}
