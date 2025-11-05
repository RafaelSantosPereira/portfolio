// Animações de entrada com Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openVideoBtn");
  const popup = document.getElementById("videoPopup");
  const closeBtn = document.getElementById("closePopup");
  const video = document.getElementById("projectVideo");

  if (!openBtn || !popup || !closeBtn || !video) {
    console.warn("Algum elemento do popup não foi encontrado.");
    return;
  }

  
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    video.play().catch(() => {});
  });

  closeBtn.addEventListener("click", () => {
    console.log("Fechar clicado");
    popup.style.display = "none"; 
    video.pause();
    video.currentTime = 0;
  });


  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
});
