let heartsInterval;

function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function goToPage3() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");

  playMusic();
  startHearts();
}

/* ===================== MUSIC ===================== */
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;

  music.play().catch(() => {
    alert("Ayang, klik tombol 🎵 Music biar lagunya nyala yaa ❤️");
  });
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* ===================== HEARTS ===================== */
function startHearts() {
  if (heartsInterval) clearInterval(heartsInterval);

  heartsInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 18 + 18 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 450);
}

/* ===================== SURPRISE ===================== */
function showSurprise() {
  document.getElementById("surpriseBox").classList.remove("hidden");
  document.getElementById("surpriseBox").scrollIntoView({ behavior: "smooth" });
}

/* ===================== POPUP CATALOG (FIX UTAMA) ===================== */
function openPopup(title, text) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupText").innerText = text;

  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

/* ===================== CLOSE POPUP KLIK LUAR ===================== */
window.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");

  if (e.target === popup) {
    popup.classList.remove("show");
  }
});
