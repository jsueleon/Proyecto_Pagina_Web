document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;
    let autoScroll;

    function updateCarousel() {
        const offset = -index * images[0].clientWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", function () {
        nextSlide();
        resetAutoScroll();
    });

    prevButton.addEventListener("click", function () {
        prevSlide();
        resetAutoScroll();
    });

    function startAutoScroll() {
        autoScroll = setInterval(nextSlide, 4000);
    }

    function resetAutoScroll() {
        clearInterval(autoScroll);
        setTimeout(startAutoScroll, 5000); // Espera 5 segundos antes de reiniciar el auto-scroll
    }

    startAutoScroll(); // Inicia el auto-scroll al cargar la página
});



//expandir imagen

const images = document.querySelectorAll('.news-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

images.forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('active');
        modalImg.src = img.src;
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});