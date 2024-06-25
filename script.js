document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null, // viewport
    // rootMargin: '400px',
    threshold: 0.5, // 50% of section must be visible
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        // const bgColor = getComputedStyle(entry.target).backgroundColor;
        document.body.style.color = '#d5c3fd';
        document.body.style.backgroundColor = 'black';
        section2_awareContainer.style.color = '#d5c3fd';
      } else {
        document.body.style.backgroundColor = '#d5c3fd';
        document.body.style.color = 'black';
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
