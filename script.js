const filterButtons = document.querySelectorAll('[data-filter]');
const galleryCards = document.querySelectorAll('.cartao-galeria');

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