// ===============================
// HERO SECTION INTERACTIVITY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const heroBtn = document.querySelector(".hero-btn");
  const heroText = document.querySelector(".hero h1");
  const heroSub = document.querySelector(".hero p");

  // 🌫️ Fade-in animation
  window.addEventListener("load", () => {
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
    heroSub.style.opacity = "1";
    heroSub.style.transform = "translateY(0)";
  });

  // ✨ Scroll to next section
  if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = heroBtn.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 🌠 Parallax effect
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroSub.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
});
