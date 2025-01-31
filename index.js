const copyrightElement = document.querySelector("#copyright");
const year = new Date().getFullYear();

window.addEventListener("onload", updateYear());
function updateYear() {
  copyrightElement.innerHTML = `
  <p>Droits d'auteur &copy; ${year} Icyk Digital. Tous droits réservés.</p>
  `;
}
const hamburgerBtn = document.querySelector(".hamburger-btn");
const phoneNav = document.querySelector(".nav-items");

hamburgerBtn.addEventListener("click", function () {
  phoneNav.classList.toggle("nav-phone");
});
