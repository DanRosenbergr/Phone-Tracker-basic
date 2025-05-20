document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease";

    setTimeout(() => {
      el.style.opacity = 1;
    }, index * 300);
  });
});
