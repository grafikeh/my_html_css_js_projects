const left = document.querySelector(".left");
/* "left" adlı değişkeni, ".left" sınıfına sahip HTML öğesini seçerek tanımlar */

const right = document.querySelector(".right");
/* "right" adlı değişkeni, ".right" sınıfına sahip HTML öğesini seçerek tanımlar */

const container = document.querySelector(".container");
/* "container" adlı değişkeni, ".container" sınıfına sahip HTML öğesini seçerek tanımlar */

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
/* "left" öğesinin üzerine fareyle gelindiğinde ("mouseenter" olayı), "container" öğesine "hover-left" sınıfını ekler */

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
/* "left" öğesinden fareyle çıkıldığında ("mouseleave" olayı), "container" öğesinden "hover-left" sınıfını kaldırır */

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
/* "right" öğesinin üzerine fareyle gelindiğinde ("mouseenter" olayı), "container" öğesine "hover-right" sınıfını ekler */

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
/* "right" öğesinden fareyle çıkıldığında ("mouseleave" olayı), "container" öğesinden "hover-right" sınıfını kaldırır */
