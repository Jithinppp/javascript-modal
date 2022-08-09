"use strict";

const modalButton = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

modalButton.forEach((button) => {
  button.addEventListener("click", showModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
