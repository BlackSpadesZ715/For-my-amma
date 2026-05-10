const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.style.display = "none";
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scroll / maxScroll;

  const scene = document.getElementById("scene1");

  // STRONG color change (very visible)
  const r = Math.floor(255 - progress * 255);
  const g = Math.floor(150 - progress * 150);
  const b = Math.floor(100 + progress * 155);

  scene.style.background = `rgb(${r}, ${g}, ${b})`;
});
