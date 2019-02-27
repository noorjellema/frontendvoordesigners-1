var body = document.querySelector('body');
var hartje = document.querySelector('#main article div img')

hartje.onclick = function () {
    body.classList.add('toegevoegd');
    hartje.classList.add('play');
}

var i;
for (i = 0; i < hartje.length; i++) {

}
