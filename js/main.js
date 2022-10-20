// === Adding a :hover and :focus classes to the inputs

const label = document.querySelector(".form-label");
const input = document.querySelector("#inputZip");
const inputEmail = document.querySelector(".inputMail__input");
const emailLabel = document.querySelector(".inputMail__label");
const inputName = document.querySelector(".inputName__input");
const nameLabel = document.querySelector(".inputName__label");

if (label) {
   input.addEventListener('click', function (a) {
      label.classList.add('_pressed');
   })
   input.addEventListener('mouseover', function (a) {
      label.classList.add('_pressed');
   })
   input.addEventListener('mouseout', function (a) {
      label.classList.remove('_pressed');
   })
   input.addEventListener('focusout', function (a) {
      label.classList.remove('_pressed');
   })
}

if (inputEmail) {
   inputEmail.addEventListener('click', () => {
      emailLabel.classList.add('_pressed');
   })
   inputEmail.addEventListener('mouseover', () => {
      emailLabel.classList.add('_pressed');
   })
   inputEmail.addEventListener('mouseout', () => {
      emailLabel.classList.remove('_pressed');
   })
   inputEmail.addEventListener('focusout', () => {
      emailLabel.classList.remove('_pressed');
   })
}

if (inputName) {
   inputName.addEventListener('click', () => {
      nameLabel.classList.add('_pressed');
   })
   inputName.addEventListener('mouseover', () => {
      nameLabel.classList.add('_pressed');
   })
   inputName.addEventListener('mouseout', () => {
      nameLabel.classList.remove('_pressed');
   })
   inputName.addEventListener('focusout', () => {
      nameLabel.classList.remove('_pressed');
   })
}