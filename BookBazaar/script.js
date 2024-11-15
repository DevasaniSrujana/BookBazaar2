// Carousel functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Set interval for auto-slide every 60 seconds (60000 milliseconds)
setInterval(() => {
  plusSlides(1);  // Move to the next slide
}, 10000); // 10 sec

// Login/Register popup toggle
const showLogin = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".form-container .close-btn");
const formContainer = document.querySelector(".form-container");
const registerLink = document.querySelectorAll(".form-box p a");

showLogin.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hideLogin.addEventListener("click", () => {
  showLogin.click();
});

registerLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList[link.id === "regLink" ? 'add' : 'remove']("show-reg");
  });
});


