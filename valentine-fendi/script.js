function enterWebsite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  // Play Music
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    console.log("Autoplay dicegah oleh browser");
  });

  showFadeElements();
  startHearts();
}

function openSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("surprise").scrollIntoView({ behavior: "smooth" });
}

/* Fade-in Animation */
function showFadeElements() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showFadeElements);

/* Floating Hearts Animation */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = Math.random() * 0.6 + 0.4;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 700);
}

/* Catalog Popup */
function openCatalog(title, desc) {
  alert(title + "\n\n" + desc);
}
