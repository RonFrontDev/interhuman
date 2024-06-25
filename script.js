document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll(
    '[data-my-color][data-my-text-color]'
  );
  let currentSection = null;

  const observerOptions = {
    root: null, // viewport
    rootMargin: '-60px',
    threshold: 0.5, // 50% of section must be visible
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const bgColor = entry.target.dataset.myColor;
        const textColor = entry.target.dataset.myTextColor;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        currentSection = entry.target;
      } else if (entry.target === currentSection && !entry.isIntersecting) {
        // Reset colors only if the current section is no longer intersecting
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        currentSection = null;
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
