const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  modalImg.src = images[currentIndex].src;
}

function closeModal() {
  modal.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

images.forEach((img, i) => {
  img.addEventListener("click", () => openModal(i));
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") closeModal();
  }
});
