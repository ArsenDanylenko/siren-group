const label = document.querySelector(".form-label");
const input = document.querySelector("#inputZip");

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