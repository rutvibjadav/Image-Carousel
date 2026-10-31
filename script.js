"use strict";

const carousel = document.querySelector(".carousel");
const slides = Array.from(document.querySelectorAll(".slide"));
const indicators = Array.from(document.querySelectorAll(".indicator"));
const previousButton = document.querySelector(".nav-previous");
const nextButton = document.querySelector(".nav-next");
const currentSlideLabel = document.querySelector(".current-slide");
const totalSlidesLabel = document.querySelector(".total-slides");
const rotationDelay = 3000;

let currentIndex = 0;
let rotationTimer = null;

totalSlidesLabel.textContent = String(slides.length).padStart(2, "0");

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  indicators.forEach((indicator, indicatorIndex) => {
    const isActive = indicatorIndex === currentIndex;
    indicator.classList.toggle("is-active", isActive);

    if (isActive) {
      indicator.setAttribute("aria-current", "true");
    } else {
      indicator.removeAttribute("aria-current");
    }
  });

  currentSlideLabel.textContent = String(currentIndex + 1).padStart(2, "0");
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function previousSlide() {
  showSlide(currentIndex - 1);
}

function stopRotation() {
  if (rotationTimer !== null) {
    window.clearInterval(rotationTimer);
    rotationTimer = null;
  }
}

function startRotation() {
  stopRotation();

  if (!carousel.matches(":hover") && !document.hidden) {
    rotationTimer = window.setInterval(nextSlide, rotationDelay);
  }
}

function handleManualNavigation(index) {
  showSlide(index);
  startRotation();
}

previousButton.addEventListener("click", () => {
  handleManualNavigation(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  handleManualNavigation(currentIndex + 1);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    handleManualNavigation(index);
  });
});

carousel.addEventListener("mouseenter", stopRotation);
carousel.addEventListener("mouseleave", startRotation);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopRotation();
  } else {
    startRotation();
  }
});

showSlide(currentIndex);
startRotation();
