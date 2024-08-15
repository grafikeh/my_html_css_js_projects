const panels = document.querySelectorAll(".panel");
// ".panel" sınıfına sahip tüm HTML elementlerini seçer ve "panels" adlı bir NodeList'e atar.
// Bu, her bir paneli temsil eden bir dizi gibi çalışır.

panels.forEach(panel => {
    panel.addEventListener("mouseover", () => {
        removeActive();
        panel.classList.add("active");
    });
});
// "panels" dizisindeki her bir panel için aşağıdaki işlevi gerçekleştirir:
// 1. `panel.addEventListener("mouseover", ...)`:
//    - Bir panelin üzerine fareyle gelindiğinde ("mouseover" olayı), bu kod çalışır.
// 2. `removeActive();`:
//    - Tüm panellerden "active" sınıfını kaldırmak için `removeActive()` fonksiyonu çağrılır.
// 3. `panel.classList.add("active");`:
//    - Fareyle üzerine gelinen panele "active" sınıfı eklenir, bu da genellikle o panelin vurgulanmasını sağlar.
function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}
// `removeActive()` fonksiyonu, "panels" dizisindeki her bir panelden "active" sınıfını kaldırır.
// Bu fonksiyon, sadece bir panelin aktif olması için diğer panellerin pasif hale getirilmesini sağlar.