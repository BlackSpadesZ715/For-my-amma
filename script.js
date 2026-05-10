const intro = document.getElementById("intro");
const text = document.querySelector(".text");

intro.addEventListener("click", () => {
  intro.style.display = "none";

  setTimeout(() => {
    text.classList.add("show");
  }, 500);
});
