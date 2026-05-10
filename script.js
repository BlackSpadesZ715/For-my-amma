// 🎬 Intro click
const intro = document.getElementById("intro");
intro.addEventListener("click", () => {
  intro.style.display = "none";
});

// 🌇 Scroll animation (sky + moon)
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scroll / maxScroll;

  const scene = document.getElementById("scene1");

  const r = Math.floor(255 - progress * 255);
  const g = Math.floor(150 - progress * 150);
  const b = Math.floor(100 + progress * 155);

  scene.style.background = `rgb(${r}, ${g}, ${b})`;

  const moon = document.getElementById("moon");
  moon.style.top = `${80 - progress * 60}%`;
});

// 🌸 Falling petals
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

// ✨ Cursor spark
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

// 💌 Elements
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
const letterText = document.getElementById("letterText");

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ✍️ Message
const message = `Amma...

I don’t say this enough...
but everything I am… every little good thing in me… is because of you.

You scold me… but still feed me extra.

You always take care of me,
even when I don’t notice.

I may not always say it...
but I feel it every day.

I love you ❤️`;

// ✍️ Typing effect
function typeLetter(text, element, speed = 40) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// 💥 Fireworks system
let fireworksActive = false;
let particles = [];

function createFirework() {
  let startX = Math.random() * canvas.width;
  let startY = Math.random() * canvas.height / 2;

  for (let i = 0; i < 50; i++) {
    let angle = Math.random() * 2 * Math.PI;
    let speed = Math.random() * 4;

    particles.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 50
    });
  }
}

function animateFireworks() {
  if (!fireworksActive) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    if (p.life > 0) {
      ctx.fillStyle = "white";
      ctx.fillRect(p.x, p.y, 2, 2);

      p.x += p.dx;
      p.y += p.dy;
      p.life--;
    }
  });

  particles = particles.filter(p => p.life > 0);

  requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  particles = [];
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createFirework();
    }, i * 150);
  }
}

// 💌 Open letter
envelope.addEventListener("click", (e) => {
  e.stopPropagation(); // 👈 VERY IMPORTANT (prevents instant close)

  letter.style.display = "block";

  setTimeout(() => {
    letter.style.opacity = "1";
  }, 50);

  typeLetter(message, letterText);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworksActive = true;
  startFireworks();
  animateFireworks();

  setTimeout(() => {
    fireworksActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
});

// 💌 Close letter (FIXED)
document.addEventListener("click", (e) => {
  if (letter.style.display === "block") {
    const insideLetter = letter.contains(e.target);

    if (!insideLetter) {
      letter.style.opacity = "0";

      setTimeout(() => {
        letter.style.display = "none";
        letterText.innerHTML = "";
      }, 400);
    }
  }
});

// 📸 Memories (FIXED overlap)
const memories = document.querySelectorAll(".memory");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  memories.forEach((img, index) => {
    if (scroll > 1000 + index * 400) {
      img.style.opacity = "1";
      img.style.zIndex = "10";
      img.style.transform = "scale(1)";
    } else {
      img.style.opacity = "0";
      img.style.zIndex = "1";
      img.style.transform = "scale(0.9)";
    }
  });
});
