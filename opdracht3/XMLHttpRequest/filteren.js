var body = document.querySelector('body');
var alleGenresKnop = document.querySelector('.genres');
var actionKnop = document.querySelector('.action');
var adventureKnop = document.querySelector('.adventure');
var crimeKnop = document.querySelector('.crime');
var dramaKnop = document.querySelector('.drama');
var horrorKnop = document.querySelector('.horror');
var thrillerKnop = document.querySelector('.thriller');

//keyevent op de genres

var genreIndex = 1;
var i;
var genres = document.querySelectorAll("ul li a");
var dots = document.getElementsByClassName("dot");
var plusSlides;
var showGenre;
var volgende = document.querySelector(".volgend");
var vorige = document.querySelector(".vorig");

alleGenresKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('genres');
    slideIndex = 1;
});


actionKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('action');
    slideIndex = 2;
});

adventureKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('adventure');
    slideIndex = 3;
});

crimeKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('crime');
    slideIndex = 4;
});

dramaKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('drama');
    slideIndex = 5;
});

horrorKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('horror');
    slideIndex = 7;
});

thrillerKnop.addEventListener('click', function () {
    body.classList = '';
    body.classList.toggle('thriller');
    slideIndex = 8;
});

//keyevent op genres

showGenre(genreIndex);

// volgende en vorige controls
function plusGenre(x) {
  showGenre(genreIndex += x);
}

// geselecteerd genre
function currentGenre(x) {
  showGenre(genreIndex = x);
}

function showGenre (x) {
    if (x == 1) {
        slideIndex = 1;
        body.classList = '';
        body.classList.toggle('genres');
    }

    if (x == 2) {
        slideIndex = 2;
        body.classList = '';
        body.classList.toggle('action');
    }

    if (x == 3) {
        slideIndex = 3;
        body.classList = '';
        body.classList.toggle('adventure');
    }

    if (x == 4) {
        slideIndex = 4;
        body.classList = '';
        body.classList.toggle('crime');
    }

    if (x == 5) {
        slideIndex = 5;
        body.classList = '';
        body.classList.toggle('drama');
    }

    if (x == 6) {
        slideIndex = 6;
        body.classList = '';
        body.classList.toggle('horror');
    }

    if (x == 7) {
        slideIndex = 7;
        body.classList = '';
        body.classList.toggle('thriller');
    }

//    if (x > 7){
//        x == 1;
//    }
//    if (x < 1){
//        x == 7;
//    }
}

window.onkeydown = function(event) {
       if (event.keyCode == 37) {
           plusGenre(-1);
           console.log("hallo")
       }

       else if (event.keyCode == 39) {
           plusGenre(1);
       }
  };

