const phillipPlayIcon = document.getElementById('phillipPlayIcon')
const phillipDebIframe = document.getElementById('phillipDebIframe')
const phillipDebPoster = document.getElementById('phillipDebPoster')

phillipPlayIcon.addEventListener('click', function() {
  phillipDebIframe.style.display = 'block';
  phillipDebIframe.style.animation = '1s fadeIn';
  phillipDebIframe.src += "?&autoplay=1";
  // phillipDebPoster.style.display = 'none'
  phillipPlayIcon.style.display = 'none';
  
})

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("story-templae__image-slider__slide");
//   let dots = document.getElementsByClassName("story-templae__image-slider__dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 