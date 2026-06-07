// =========================
// ARCHIVO: js/script.js
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("active");

    });
});


// MENSAJE FORMULARIO
const formulario = document.querySelector(".contact-form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Mensaje enviado correctamente ✨");

    formulario.reset();

});