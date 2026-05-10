// INTRO + MUSIC
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

intro.onclick = () => {
  intro.style.display = "none";
  music.volume = 0.4;
  music.play().catch(()=>{});
};

// SKY + MOON
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
  p.style.animationDuration = 5+Math.random()*5+"s";
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

I don’t say this enough...
but everything I am is because of you.

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
    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height/2;
    ctx.fillStyle="white";
    ctx.fillRect(x,y,2,2);
  }
}

// OPEN LETTER
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
      img.style.top="20%";
      img.style.left="10%";
    }
  });
});

// GAME
let score=0;
setInterval(()=>{
  let h=document.createElement("div");
  h.className="falling-heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  gameArea.appendChild(h);

  h.onclick=()=>{
    score++;
    document.getElementById("score").innerText=score;
    h.remove();
  };

  setTimeout(()=>h.remove(),4000);
},800);
