var slideIndex = 1;
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var plusSlides;
var showSlides;
var volgende = document.querySelector(".volgend");
var vorige = document.querySelector(".vorig");

showSlides(slideIndex);

// volgende en vorige controls
function plusSlides(x) {
  showSlides(slideIndex += x);
}

// welke image vooraan is
function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  if (x > slides.length) {
      slideIndex = 1;
    }

  if (x < 1) {
      slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}


window.onkeydown = function(event) {
       if (event.keyCode == 37) {
           plusSlides(-1);
       }

       else if (event.keyCode == 39) {
           plusSlides(1);
       }
  };

volgende.onclick = function() {
    plusSlides(-1)
};

vorige.onclick = function() {
    plusSlides(1)
};
