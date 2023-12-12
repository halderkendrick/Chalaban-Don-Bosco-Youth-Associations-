function openLightbox(imageSrc, captionText) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var caption = document.getElementById('caption');
  
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
    caption.innerHTML = captionText;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }
  let sliderWrapper = document.querySelector('.slider-wrapper');
let sliderImages = document.querySelectorAll('.slider img');

let currentImageIndex = 0;
const imageWidth = sliderImages[0].clientWidth;

function startImageSlider() {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    slideImage();
  }, 3000); // Change image every 3 seconds (adjust as needed)
}

function slideImage() {
  sliderWrapper.style.transform = `translateX(-${currentImageIndex * imageWidth}px)`;
}

// Start the image slider when the window loads
window.onload = startImageSlider;
