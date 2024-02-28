var max = 711
var current = 0; //Math.floor(Math.random() * max);
change();
preloadImages();

function left() {
  current = mod((current - 1), max);
  change();
}

function right() {
  current = mod((current + 1), max);
  change();
}

function change() {
  document.getElementById("avatar1").src = 'https://restrealitaet.de/avatare/' + ('00' + current).slice(-3) + '_1.png';
  document.getElementById("avatar2").src = 'https://restrealitaet.de/avatare/' + ('00' + current).slice(-3) + '_2.png';
  document.getElementById("avatar3").src = 'https://restrealitaet.de/avatare/' + ('00' + current).slice(-3) + '_3.png';
  document.getElementById('number').innerHTML = current;
  preloadImages();
}

function preloadImages()
{
    var img1a=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current - 1), max)).slice(-3) + '_1.png';
    var img2a=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current - 1), max)).slice(-3) + '_2.png';
    var img3a=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current - 1), max)).slice(-3) + '_3.png';
    var img1b=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current + 1), max)).slice(-3) + '_1.png';
    var img2b=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current + 1), max)).slice(-3) + '_2.png';
    var img3b=new Image();
    img1.src='https://restrealitaet.de/avatare/' + ('00' + mod((current + 1), max)).slice(-3) + '_3.png';
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
