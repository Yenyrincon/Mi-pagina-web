document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.dynamic-image');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert(`Has seleccionado: ${image.alt}`);
        });
    });
});
