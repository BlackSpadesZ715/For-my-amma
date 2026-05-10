const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.style.display = "none";
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scroll / maxScroll;

  const scene = document.getElementById("scene1");

  const r = Math.floor(255 - progress * 255);
  const g = Math.floor(150 - progress * 150);
  const b = Math.floor(100 + progress * 155);

  scene.style.background = `rgb(${r}, ${g}, ${b})`;

  // 👇 ADD THIS PART
  const moon = document.getElementById("moon");
  moon.style.top = `${80 - progress * 60}%`;
});
const flowerContainer = document.querySelector(".flowers");

if (flowerContainer) {
  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";

  flowerContainer.appendChild(petal);

  setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createPetal, 300);
}

setInterval(createPetal, 300);
document.addEventListener("mousemove", (e) => {
  const spark = document.createElement("div");
  spark.classList.add("spark");

  spark.style.left = e.pageX + "px";
  spark.style.top = e.pageY + "px";

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 500);
});

