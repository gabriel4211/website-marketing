'use strict';

/**
 * Element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * Navbar variables
 */

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header scroll sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

function enviarparazap() {
    
  var nome = document.getElementById("nome").value;
  var comentario = document.getElementById("comentario").value;

  var url = "https://wa.me/5512996266493?text=" 
  + "Olá meu nome é: " + nome + "%0a"
  + "*Informações*: " + comentario + "%0a"

  window.open(url, '_blank').focus();
}

function trabalheconosco(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var sobrevoce = document.getElementById("sobrevoce").value;

  var url = "https://wa.me/5512996266493?text="
  + "Nome:" + nome + "%0a"
  + "Email:" + email + "%0a"
  + "Sobre mim:" + sobrevoce + "%0a"

  window.open(url, "_blank").focus();
}

function comecaragora(){
  const url = "#";
  window.open(url, "_blank").focus();
}
