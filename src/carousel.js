let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Inicializa o carrossel e o autoplay
showSlide(currentIndex);
startAutoPlay();

// Pausa o autoplay quando o utilizador interage com os botões
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoPlay);