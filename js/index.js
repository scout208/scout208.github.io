import { Wheel } from 'https://cdn.jsdelivr.net/npm/spin-wheel@5.0.2/dist/spin-wheel-esm.js';

$(document).ready(function() {
    let element = $('#spinner'); // Replace 'myElement' with the actual ID or selector
    let duration = 5000; // Duration in milliseconds (5 seconds)
    let startTime;
    let animationFrameId;
  
    function rotate(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
  
      let elapsed = timestamp - startTime;
      let progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
  
      let angle = 720 * progress; // Calculate rotation angle
  
      element.css('transform', 'rotate(' + angle + 'deg)');
  
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(rotate);
      } else {
           element.css('transform', 'rotate(0deg)'); // Reset rotation after 5 seconds
      }
    }
  
    // Start the rotation animation
    animationFrameId = requestAnimationFrame(rotate);
  
    // Optional: Stop the animation after 5 seconds using setTimeout (alternative method)
    // setTimeout(function() {
    //   cancelAnimationFrame(animationFrameId);
    //   element.css('transform', 'rotate(0deg)');
    // }, duration);
  
  });

// window.onload = async () => {

//     const images = [];

//     var image = new Image();
//     image.src = './img/background.png';
//     images.push(image);

//     var overlayImage = new Image();
//     overlayImage.src = './img/example-0-overlay.svg';
//     images.push(overlayImage);

//     const promises = [];

//     for (const img of images) {
//         if (img instanceof HTMLImageElement) promises.push(img.decode());
//     }

//     try {
//         await Promise.all(promises);
//     } catch (error) {
//         throw new Error('An image could not be loaded');
//     }

//     const props = {
//         image: image,
//         overlayImage: overlayImage,
//         radius: 0.84
//     };

//     //const container = document.querySelector('.wheel-wrapper');

//     //window.wheel = new Wheel(container, props);

//     let angle = 0;
//     function rotateElement(degree) {
//         $('#spinner').css({
//             'transform': 'rotate(' + degree + 'deg)'
//         });
//     }
    
// };