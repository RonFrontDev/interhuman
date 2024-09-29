document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-my-body-bg]");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "-50% 0px",
    threshold: 0, // 50% of section must be visible
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      if (entry.isIntersecting) {
        const bodyBg = section.dataset.myBodyBg;
        const bodyColor = section.dataset.myBodyColor;
        const sectionBg = section.dataset.mySectionBg;
        const sectionColor = section.dataset.mySectionColor;

        console.log(sectionColor);
        document.documentElement.style.setProperty("--bodyBg", bodyBg);
        document.documentElement.style.setProperty("--bodyColor", bodyColor);
        if (sectionBg) {
          document.documentElement.style.setProperty("--sectionBg", sectionBg);
        }
        if (sectionColor) {
          //prettier-ignore
          document.documentElement.style.setProperty('--sectionColor',sectionColor);
        }

        // Store the original background color if not already stored
        //   if (!originalColors.has(section)) {
        //     originalColors.set(section, section.style.backgroundColor);
        //   }
        //   // Change to the intersection colors
        //   const bgColor = section.dataset.myColor;
        //   const textColor = section.dataset.myTextColor;
        //   const innerColor = section.dataset.myInnerColor;
        //   section.style.backgroundColor = innerColor;
        //   section.style.color = textColor;
        //   document.body.style.backgroundColor = bgColor;
        //   document.body.style.color = textColor;
        // } else {
        //   // Restore the original background color
        //   if (originalColors.has(section)) {
        //     section.style.backgroundColor = originalColors.get(section);
        //     section.style.color = originalColors.get(section);
        // }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
