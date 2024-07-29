//burger
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('li');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = '1';
                }, index * 100); // Delay each link
            });
        } else {
            links.forEach(link => {
                link.style.opacity = '0';
            });
        }
    });
});


//carousel
let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${newTransformValue}%)`;
}

//accordeon
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            headers.forEach(h => h.setAttribute('aria-expanded', 'false'));
            if (!expanded) {
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});