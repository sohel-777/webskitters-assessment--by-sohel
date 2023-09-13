const cardItemsList = document.querySelectorAll(".cardItems");
const addCartList = document.querySelectorAll(".addToCart");

cardItemsList.forEach((cardItem, index) => {
  cardItem.addEventListener('mouseover', () => {
    addCartList[index].style.display = 'block';
  });

  cardItem.addEventListener('mouseout', () => {
    addCartList[index].style.display = 'none';
  });
});


// code for carousel
const carousel = document.querySelector(".crousel");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");


let scrollPosition = 0;


function slideLeft() {
  scrollPosition -= 300; 
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  carousel.scrollTo({
    left: scrollPosition,
    behavior: "smooth", 
  });
}


function slideRight() {
  scrollPosition += 300; 
  if (scrollPosition > carousel.scrollWidth - carousel.clientWidth) {
    scrollPosition = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({
    left: scrollPosition,
    behavior: "smooth", 
  });
}

// Add click event listeners to the arrow buttons
arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);
