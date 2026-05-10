const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.style.display = "none";
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scroll / maxScroll;

  const scene = document.getElementById("scene1");

  const r = Math.floor(255 - progress * 200);
  const g = Math.floor(126 - progress * 100);
  const b = Math.floor(95 + progress * 100);

  scene.style.background = `rgb(${r}, ${g}, ${b})`;
});
