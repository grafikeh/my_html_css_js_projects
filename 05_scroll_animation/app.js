const boxes = document.querySelectorAll(".box"); 
/* .box sınıfına sahip tüm elementleri seçer ve 'boxes' adlı bir NodeList olarak saklar. */

window.addEventListener("scroll", checkBoxes); 
/* Kullanıcı sayfayı kaydırdığında 'checkBoxes' fonksiyonunu çalıştırır. */

checkBoxes(); 
/* Sayfa yüklendiğinde 'checkBoxes' fonksiyonunu hemen çalıştırır. */

function checkBoxes() { 
    const triggerBottom = (window.innerHeight / 6) * 4; 
    /* Ekran yüksekliğinin 4/6'sını (yani ekranın 2/3'ü) hesaplar ve 'triggerBottom' değişkenine atar. 
       Bu, kutuların görünür olup olmadığını kontrol etmek için bir tetikleme noktası olarak kullanılır. */
    
    boxes.forEach(box => { 
        const boxTop = box.getBoundingClientRect().top; 
        /* Her bir .box elementinin üst kısmının, görünür ekrana olan mesafesini hesaplar. */

        if(boxTop < triggerBottom){ 
            /* Eğer kutunun üst kısmı, tetikleme noktasından (triggerBottom) yukarıdaysa, yani görünür alandaysa: */
            box.classList.add("show"); 
            /* .show sınıfını ekler, bu sınıf genellikle CSS'te görünür hale getirmek için kullanılır. */
        } else { 
            /* Aksi takdirde, yani kutunun üst kısmı tetikleme noktasının altındaysa: */
            box.classList.remove('show'); 
            /* .show sınıfını kaldırır, bu da kutuyu görünmez hale getirir veya başka bir stil değişikliğine neden olur. */
        }
    });
}