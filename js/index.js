import { Wheel } from 'https://cdn.jsdelivr.net/npm/spin-wheel@5.0.2/dist/spin-wheel-esm.js';

window.onload = async () => {

    const images = [];

    var image = new Image();
    image.src = './img/background.png';
    images.push(image);

    var overlayImage = new Image();
    overlayImage.src = './img/example-0-overlay.svg';
    images.push(overlayImage);

    const promises = [];

    for (const img of images) {
        if (img instanceof HTMLImageElement) promises.push(img.decode());
    }

    try {
        await Promise.all(promises);
    } catch (error) {
        throw new Error('An image could not be loaded');
    }

    const props = {
        image: image,
        overlayImage: overlayImage,
        radius: 0.84
    };

    const container = document.querySelector('.wheel-wrapper');

    window.wheel = new Wheel(container, props);

};