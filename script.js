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

const message = `Amma...

You scold me… but still feed me extra.

I love you ❤️`;

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
