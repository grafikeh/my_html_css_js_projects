const open = document.getElementById("open"); /* "open" id'li elementi seçer */
const close =
  document.getElementById("close"); /* "close" id'li elementi seçer */
const container =
  document.querySelector(
    ".container"
  ); /* ".container" sınıfına sahip elementi seçer */

open.addEventListener("click", () => {
  container.classList.add(
    "show-nav"
  ); /* "container" elementine "show-nav" sınıfını ekler */
});

close.addEventListener("click", () => {
  container.classList.remove(
    "show-nav"
  ); /* "container" elementinden "show-nav" sınıfını kaldırır */
});