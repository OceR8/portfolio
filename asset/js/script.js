'use strict';


    

<script src="asset/js/script.js"></script>

const hamburger = document.querySelector(".navBar_hamburger");
const navMenu = document.querySelector(".navBar_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}

ScrollReveal().reveal('.header');
        ScrollReveal().reveal('.navBar', { delay: 900 });
        ScrollReveal().reveal('.section1', { delay: 2000 });
        ScrollReveal().reveal('.container2', { delay: 2300 });
        ScrollReveal().reveal('.footer', { delay: 2500 });

        function VerifForm() {
          let nom=document.getElementById('formContact');
          let email=document.getElementById('formContact');
          let sujet=document.getElementById('formContact');
          let commentaire=document.getElementById('formContact');
          
          if (nom == "") {
            
              alert("Mettez votre nom.");
              nom.focus();
              return false;
          } 
          if (email == "") {
              alert("Mettez une adresse email valide.");
              email.focus();
              return false;
          } 
          if (email.value.indexOf("@", 0) < 0) {
                  alert("Mettez une adresse email valide.");
                  email.focus();
                 email.focus();
                  return false;
              
              
          }
          if  (sujet.value == "") {
              alert("Votre sujET.");
              sujet.focus();
              return false;
            
          } 
          if (commentaire.value == "") {
              alert("Écrivez un commentaire.");
              commentaire.focus();
              return false;
          }
          return true;
      }