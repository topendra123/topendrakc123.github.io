function showCake() {
  document.getElementById("greeting").style.display = "none";
  document.getElementById("cake-section").classList.remove("hidden");
}

function blowCandle() {
  const candle = document.getElementById("candle");
  candle.classList.remove("glow");
  candle.src = "candle-off.png";
  candle.style.opacity = "0.3";

  setTimeout(() => {
    document.getElementById("cake-section").style.display = "none";
    document.getElementById("gallery").classList.remove("hidden");
    startSlideshow();
  }, 2000);
}

let currentSlide = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
  setTimeout(startSlideshow, 3000);
}