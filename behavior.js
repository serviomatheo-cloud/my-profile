console.log("behavior.js is running");

const title = document.querySelector(".page-title");
const shoutButton = document.querySelector(".shout-button");

function sayHello() {
  title.textContent = "Bienvenue sur mon profil !";
}

shoutButton.addEventListener("click", sayHello);

const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copié !";

  setTimeout(function () {
    copyButton.textContent = "Copier mon email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);
