// INTRO + MUSIC
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

intro.onclick = () => {
  intro.style.display = "none";
  music.volume = 0.4;
  music.play().catch(()=>{});
};

// SKY
window.addEventListener("scroll", () => {
  let p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  scene1.style.background = `rgb(${255-200*p},${150-100*p},${100+150*p})`;
  moon.style.top = `${80 - p*60}%`;
});

// FLOWERS
setInterval(() => {
  let p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random()*100+"vw";
  document.querySelector(".flowers").appendChild(p);
  setTimeout(()=>p.remove(),10000);
},300);

// SPARK
document.addEventListener("mousemove", e=>{
  let s = document.createElement("div");
  s.className="spark";
  s.style.left=e.pageX+"px";
  s.style.top=e.pageY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),500);
});

// LETTER
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const message = `Amma…na buji buji amma...
There are so many things I carry in my heart that never quite make it to my lips. Words feel small sometimes, like trying to fit the ocean into a cup… but today I’m going to try anyway.
From the very beginning, before I even understood the world, you were already there… holding it together for me. You were my first home, my first comfort, my first safe place. Even now, no matter how big life gets or how far I wander, everything inside me still knows one truth… you are where I belong.
You’ve loved me in ways I didn’t even notice at the time. In the extra spoon of food you quietly added to my plate. In the way you stayed awake when I was sick, even if you had a long day ahead. In the scolding that sounded harsh but was always wrapped in worry. In the little sacrifices you never announced, never complained about… just did, because that’s who you are.
I know I don’t always make it easy for you.
Sometimes I answer back.
Sometimes I stay silent when I should say thank you.
Sometimes I act like I don’t care… even though I do, more than I can explain.
But Amma, every small thing you do… it stays with me. It shapes me. It becomes a part of who I am.
You are the reason I know what love feels like without conditions.
You are the reason I know what strength looks like, even when no one is watching.
You are the reason I can stand back up after falling… because somewhere in my heart, your voice is always there, telling me I can.
I’ve seen you tired… but still smiling.
I’ve seen you worried… but still strong.
I’ve seen you put everyone before yourself, again and again, like your love has no limit.
And sometimes I wonder… who takes care of you, Amma?
Because you deserve the same warmth you give so freely.
You deserve someone to notice when you’re tired.
You deserve someone to say, “Sit down, I’ll handle it today.”
Maybe I can’t do everything yet… but I promise, I’m learning. For you.
One day, I want to be the reason you rest peacefully.
One day, I want to give you a life where you don’t have to worry so much.
One day, I want to make you as proud as you’ve always made me feel safe.
And even if I don’t say it every day…
Even if I act distant or distracted…
Please know this, deeply and truly—
Every heartbeat of mine carries a piece of you.
You’re not just my mother.
You are my quiet strength.
My constant.
My forever person.
I love you more than my words will ever be able to hold… ❤️`;

function typeLetter(t, el){
  let i=0;
  el.innerHTML="";
  function typing(){
    if(i<t.length){
      el.innerHTML += t[i]==="\n"?"<br>":t[i];
      i++;
      setTimeout(typing,40);
    }
  }
  typing();
}

// FIREWORKS
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework(){
  for(let i=0;i<80;i++){
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height/2,2,2);
  }
}

envelope.onclick = () => {
  letter.style.display="block";
  setTimeout(()=>letter.style.opacity="1",50);
  typeLetter(message, letterText);
  firework();
};

// CLOSE LETTER
document.addEventListener("click", (e)=>{
  if(letter.style.display==="block" && !letter.contains(e.target) && e.target!==envelope){
    letter.style.opacity="0";
    setTimeout(()=>letter.style.display="none",500);
  }
});

// MEMORIES
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".memory").forEach((img,i)=>{
    if(scrollY>1000+i*400){
      img.style.opacity=1;
    }
  });
});

// 🎮 GAME FIXED
const gameArea = document.getElementById("gameArea");
let score = 0;

setInterval(()=>{
  let h=document.createElement("div");
  h.className="falling-heart";
  h.innerHTML="❤️";

  h.style.left = Math.random() * (gameArea.clientWidth - 30) + "px";

  gameArea.appendChild(h);

  h.onclick=(e)=>{
    e.stopPropagation();
    score++;
    document.getElementById("score").innerText=score;

    h.style.transform="scale(1.5)";
    setTimeout(()=>h.remove(),100);
  };

  setTimeout(()=>h.remove(),4000);
},800);
