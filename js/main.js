// === Adding a :hover and :focus classes to the inputs

const label = document.querySelector(".form-label");
const input = document.querySelector("#inputZip");
const inputEmail = document.querySelector(".inputMail__input");
const emailLabel = document.querySelector(".inputMail__label");
const inputName = document.querySelector(".inputName__input");
const nameLabel = document.querySelector(".inputName__label");
const formYes = document.querySelector("#yes");
const formNo = document.querySelector("#no");
const yes = document.querySelector('.formCheckYes');
const no = document.querySelector('.formCheckNo');


if (label) {

   input.addEventListener('mouseover', function (a) {
      label.classList.add('_pressed');
   })
   input.addEventListener('mouseout', function (a) {
      label.classList.remove('_pressed');
   })
   input.addEventListener('focusout', function (a) {
      label.classList.remove('_pressed');
   })
   input.addEventListener('click', function (a) {
      label.classList.add('_pressed');
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


yes.addEventListener('click', () => {
   formYes.classList.add('_checked');
   formNo.classList.remove('_checked');
})

no.addEventListener('click', () => {
   formNo.classList.add('_checked');
   formYes.classList.remove('_checked');
})


// Displaying the answer on the second modal step
function answer() {
   if (formYes.classList.contains('_checked')) {
      document.getElementById("result").innerHTML = "Yes";
   } else if (formNo.classList.contains('_checked')) {
      document.getElementById("result").innerHTML = "No";
   } else {
      document.getElementById("result").innerHTML = "Not sure? Please, go  one step back and choose the answer";
   }
}
