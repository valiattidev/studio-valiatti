const filterButtons = document.querySelectorAll('[data-filter]');
const galleryCards = document.querySelectorAll('.cartao-galeria');
const revealItems = document.querySelectorAll('.reveal');

function filterGallery(category) {
    galleryCards.forEach((card) => {
        const isVisible = category === 'all' || card.classList.contains(category);
        card.hidden = !isVisible;
    });

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === category;
        button.classList.toggle('item-ativo', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

filterButtons.forEach((button) => {
    button.addEventListener('click', () => filterGallery(button.dataset.filter));
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
}