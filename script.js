document.addEventListener('DOMContentLoaded', function() {
    const productContainers = document.querySelectorAll('.product-container');

    productContainers.forEach(container => {
        const thumbnails = container.querySelectorAll('.thumbnail');
        const images = container.querySelectorAll('.product-image');

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
                images.forEach(image => image.classList.remove('active'));

                thumbnail.classList.add('active');
                images[index].classList.add('active');
            });
        });
    });
});
