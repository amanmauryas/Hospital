document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let currentIndex = 0; // Start at the first carousel item

    nextBtn.addEventListener("click", () => {
        if (currentIndex < 2) { // Adjust max index based on the number of items - 1
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const transformValue = `translateX(-${currentIndex * 100 / 3}%)`; // Slide to the next/prev item
        carousel.style.transform = transformValue;
    }
});
