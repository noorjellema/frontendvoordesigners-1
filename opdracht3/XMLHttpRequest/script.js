//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//var uri = "http://dennistel.nl/movies"; //online, geen https
var uri = 'movies.json'; //json file op github
var button = document.querySelector("button");
var loaderElement = document.querySelector("span");
var section = document.querySelector('section');
var div = document.querySelector('div');
var header = document.querySelector('header ul');
//console.log("loaderElement",loaderElement);

////https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
function showData(jsonObj) {
    var films = jsonObj;
    console.log("showData films", films);

    for (var i = 0; i < films.length; i++) {
        console.log("film " + i);
        var filmpiekijken = document.createElement('article');

        //TITEL, COVER EN BESCHRIJVING
        var filmcover = document.createElement('img');
        filmcover.src = films[i].cover;

        var filmtitel = document.createElement('h2');
        filmtitel.textContent = films[i].title;

        var filmplot = document.createElement('p');
        filmplot.textContent = films[i].simple_plot;

        //myImg.textContent = films[i].cover;
        //console.log(filmcover.src);

        //GENRES
        var genres = films[i].genres;
        console.log(genres);
        for (var n = 0; n < genres.length; n++) {
            console.log("genre: ", genres[n]);
        } //end for genres

        var genres = document.createElement('p');
        genres.textContent = films[i].genres;

        var release = document.createElement('p');
        release.textContent = films[i].release_date;

        var soortGenre = genres.innerHTML;

        if(soortGenre == "Horror"){

        }

        //REVIEWS
        var reviewslezen = document.createElement('ul');
        var reviewsbutton = document.createElement('button');
        reviewsbutton.textContent = "Lees reviews";
        //reviewslezen.appendChild(reviewsheader);
        var reviews = films[i].reviews;
        for (var j = 0; j < reviews.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = reviews[j].score + ' - ' + reviews[j].created_at;
            reviewslezen.appendChild(listItem);
        } //end: for reviews

        var meerlezen = document.createElement('p');
        var leesmeerbutton = document.createElement('button');
        leesmeerbutton.textContent = "Lees meer";
        meerlezen.textContent = films[i].plot;

        leesmeerbutton.info = meerlezen;
        leesmeerbutton.onclick = function () {
            console.log("click this =" + this.info, this); //met this, verwijs je naar het object zelf waar de functie wordt uitgevoerd, hier gebruik ik de variabale die in in het object heb aangemaakt
            //console.log("parentNode",this.parentNode);
            this.info.classList.toggle('show');
        }


        //functies om elementen toe te voegen
        reviewsbutton.info = reviewslezen; //zo kun je een variabele aanmaken in ene object om iets te 'bewaren', bijvoorbeel een verwijzing naar een ander element
        reviewsbutton.onclick = function () {
            console.log("click this =" + this.info, this); //met this, verwijs je naar het object zelf waar de functie wordt uitgevoerd, hier gebruik ik de variabale die in in het object heb aangemaakt
            //console.log("parentNode",this.parentNode);
            this.info.classList.toggle('show')
        } //end: reviewsheader onClick
        reviewslezen.addEventListener("click", function () {
            console.log("click this =", this);
            console.log("Wat is de parentNode?", this.parentNode); //met 'parentNode' kun je een element met een relatief pad bereiken
            console.log("Wat zijn de childNodes?", this.childNodes); //met 'childNodes' kun je de kinderen van een element met een relatief pad bereiken
            var button = this.parentNode.querySelector('button'); //relatief pad gebruiken voor een actie die moet plaatsvinden
            console.log("Is dit de button?", button);
        }); //end: reviewslezen click

        //ALLE DATA KOPPELEN
        filmpiekijken.appendChild(filmtitel);
        filmpiekijken.appendChild(filmcover);
        filmpiekijken.appendChild(release);
        filmpiekijken.appendChild(genres);
        filmpiekijken.appendChild(filmplot);
        filmpiekijken.appendChild(leesmeerbutton);
        filmpiekijken.appendChild(meerlezen);
        //      filmpiekijken.appendChild(reviewsbutton);
        //      filmpiekijken.appendChild(reviewslezen);

        //HTML INJECTION IN BESTAANDE SECTION
        section.appendChild(filmpiekijken);
        section.appendChild(filmpiekijken);

    } //end: for films
} //end: function showData

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadimagesmetXHR() {
    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        //console.log("request load: ",request.response);
        loaderElement.classList.remove('show');
        console.log("XHR data", request.response);
        console.table(request.response);
        showData(request.response);
    });
    //  request.onload = function() {
    //      console.log("request.onload: ",request.response);
    //    }
    /*request.timeout = 10000; // time in milliseconds
      request.ontimeout = function(e) {
        // XMLHttpRequest timed out. Do something here.
        console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
      };
      */
    request.onerror = function () {
        console.log('Fetch Error', request.status);
    };
}
//loadimagesmetXHR();

//actie
button.onclick = function () {
    loaderElement.classList.add('show');
    button.classList.add('hide');
    //this.classList.add('hide');
    //hier iets doen met de button die laadt, dan weer gewoon een button wordt ...
    header.classList.add("show");
    section.innerHTML = ""; //main leeghalen. just in case
    loadimagesmetXHR();
};

window.onkeydown = function (event) {
    if (event.keyCode == 32){
    loaderElement.classList.add('show');
    button.classList.add('hide');
    //this.classList.add('hide');
    //hier iets doen met de button die laadt, dan weer gewoon een button wordt ...
    header.classList.add("show");
    section.innerHTML = ""; //main leeghalen. just in case
    loadimagesmetXHR();
    }
};

function loadRestApiFetch() {
    console.log("function loadRestApiFetch");

    loaderElement.classList.add('show');
    fetch(uri)
        .then(function (response) {
            console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));

            console.log(response.status);
            console.log(response.statusText);
            console.log(response.type);
            console.log(response.url);

            return response.json();
        })
        .then(function (myJson) {
            console.log('Request successful', myJson);
            loaderElement.classList.remove('show');
        })
        .catch(function (error) {
            console.log('Request failed', error)
        });
}

