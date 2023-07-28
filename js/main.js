// seccion about enviarinformacion67()informacion67()
function informacion67() {
    window.location.href = "./Glosario.html";
}


// traductor
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'en,fr,de,ja,ko'}, 'google_translate_element');
}



// menu
var icon = document.querySelector(".icon");
var menu = document.querySelector(".infoheader");
var nav = document.querySelector(".nav");

icon.addEventListener('click', function () {
    menu.style.display = (menu.style.display == 'flex') ? 'none' : 'flex';
  menu.classList.add("menu");
  nav.classList.add("nav-menu")
})



