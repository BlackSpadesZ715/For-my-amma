const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");

intro.addEventListener("click", () => {
  intro.style.display = "none";

  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      music.volume = vol;
    } else clearInterval(fade);
  }, 200);
});

/* 🌇 Scroll sky */
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  const p = scroll / max;

  const scene = document.getElementById("scene1");
  scene.style.background = `rgb(${255 - p*255}, ${150 - p*150}, ${100 + p*155})`;

  document.getElementById("moon").style.top = `${80 - p*60}%`;
});

/* 🌸 Petals */
const flowers = document.querySelector(".flowers");
setInterval(() => {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random()*100 + "vw";
  p.style.animationDuration = 5 + Math.random()*5 + "s";
  flowers.appendChild(p);
  setTimeout(()=>p.remove(),10000);
},300);

/* ✨ Spark */
document.addEventListener("mousemove", e => {
  const s = document.createElement("div");
  s.className="spark";
  s.style.left=e.pageX+"px";
  s.style.top=e.pageY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),500);
});

/* 💌 Letter */
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const textEl = document.getElementById("letterText");

const msg = `Amma...

Everything I am... is because of you.

You scold me… but still feed me extra.

You take care of me even when I don’t notice.

I may not always say it…

…but I love you ❤️`;

function type(text,i=0){
  if(i<text.length){
    textEl.innerHTML += text[i]==="\n"?"<br>":text[i];
    setTimeout(()=>type(text,i+1),35);
  }
}

/* 🎆 Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

function fire(){
  for(let i=0;i<100;i++){
    ctx.fillRect(Math.random()*canvas.width,Math.random()*canvas.height,2,2);
  }
}

envelope.onclick=()=>{
  letter.style.display="block";
  setTimeout(()=>letter.style.opacity=1,50);
  textEl.innerHTML="";
  type(msg);
  fire();
};

document.addEventListener("click",e=>{
  if(!letter.contains(e.target)&&e.target.id!=="envelope"){
    letter.style.opacity=0;
    setTimeout(()=>letter.style.display="none",500);
  }
});

/* 📸 Memories */
const mem=document.querySelectorAll(".memory");
window.addEventListener("scroll",()=>{
  const s=window.scrollY;
  mem.forEach((m,i)=>{
    if(s>1200+i*400) m.classList.add("show");
    else m.classList.remove("show");
  });
});
