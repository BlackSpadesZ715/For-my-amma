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

// 💌 Envelope + Letter + Fireworks
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ✍️ Message
const message = `Amma...

I don’t say this enough...
but everything I am… every little good thing in me… is because of you.

The way I speak, the way I care, the way I try again even when I’m tired…
that all comes from watching you.

You scold me… sometimes a lot…
but even then, you’re the same person who asks if I’ve eaten,
who secretly gives me the bigger portion,
who pretends to be strict but melts the second I’m quiet.

You always take care of me,
in ways so small I don’t even notice in the moment…
but later, they sit in my heart like warm light.

You’ve carried so much for me…
things I didn’t see, things I didn’t understand…
and yet you never let me feel that weight.

I may not always say it…
I may act stubborn, or distant, or lost in my own world…
but not a single day passes where I don’t feel your love around me.

It’s in the food you make,
in the way you call my name,
in the quiet way you worry about me even when you don’t say it out loud.

And maybe I don’t say this enough…
maybe I never will be able to say it as deeply as I feel it…

…but Amma, you are my home.
My safe place.
My everything.

I love you… more than my words know how to hold. ❤️`;

// ✍️ Typing effect
function typeLetter(text, element, speed = 35) {
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

  for (let i = 0; i < 60; i++) {
    let angle = Math.random() * 2 * Math.PI;
    let speed = Math.random() * 4;

    particles.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 60
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
envelope.addEventListener("click", () => {
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

// ❌ Close letter (click outside)
document.addEventListener("click", (e) => {
  if (
    letter.style.display === "block" &&
    !letter.contains(e.target) &&
    e.target.id !== "envelope"
  ) {
    letter.style.opacity = "0";

    setTimeout(() => {
      letter.style.display = "none";
      letterText.innerHTML = "";
    }, 500);
  }
});

// 📸 Memories (FIXED with class toggle)
const memories = document.querySelectorAll(".memory");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  memories.forEach((img, index) => {
    if (scroll > 1200 + index * 400) {
      img.classList.add("show");
    } else {
      img.classList.remove("show");
    }
  });
});
