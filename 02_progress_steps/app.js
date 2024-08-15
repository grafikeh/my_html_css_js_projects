const progress = document.getElementById("progress"); 
// "progress" id'sine sahip HTML elementini seçer ve "progress" adlı değişkene atar.

const circles = document.querySelectorAll(".circle");
// ".circle" sınıfına sahip tüm HTML elementlerini seçer ve "circles" adlı NodeList'e (bir tür dizi) atar.

const prev = document.getElementById("prev"); 
// "prev" id'sine sahip HTML elementini seçer ve "prev" adlı değişkene atar (önceki buton).

const next = document.getElementById("next"); 
// "next" id'sine sahip HTML elementini seçer ve "next" adlı değişkene atar (sonraki buton).

let currentActive = 1; 
// "currentActive" adlı değişkeni oluşturur ve başlangıçta 1 olarak ayarlar. Bu, şu anda aktif olan dairenin (circle) indeksini temsil eder.

next.addEventListener("click", () => { 
  currentActive++; 
  // "next" butonuna tıklandığında "currentActive" değerini 1 artırır.
  
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // Eğer "currentActive", dairelerin toplam sayısından büyükse, onu dairelerin toplam sayısına eşitler.
  
  update(); 
  // "update" fonksiyonunu çağırır. Bu fonksiyon, dairelerin ve ilerleme çubuğunun durumunu günceller.
});

prev.addEventListener("click", () => {
  currentActive--;
  // "prev" butonuna tıklandığında "currentActive" değerini 1 azaltır.
  
  if (currentActive < 1) {
    currentActive = 1;
  }
  // Eğer "currentActive" değeri 1'den küçükse, onu 1 yapar.
  
  update();
  // "update" fonksiyonunu çağırır. Bu fonksiyon, dairelerin ve ilerleme çubuğunun durumunu günceller.
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
      // Eğer dairenin indeksi "currentActive" değerinden küçükse, ona "active" sınıfını ekler (aktif duruma getirir).
    } else {
      circle.classList.remove("active");
      // Eğer dairenin indeksi "currentActive" değerinden büyük veya eşitse, "active" sınıfını kaldırır (pasif duruma getirir).
    }
  });

  const actives = document.querySelectorAll(".active");
  // Şu anda "active" sınıfına sahip tüm daireleri seçer ve "actives" adlı NodeList'e atar.

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
  // İlerleme çubuğunun genişliğini, aktif daire sayısına göre yüzde olarak ayarlar.
  // (actives.length - 1): Şu anda aktif olan dairelerin sayısını alır, fakat indeksle uyumlu olması için 1 çıkarır.
  // (circles.length - 1): Tüm dairelerin sayısını alır, fakat indeksle uyumlu olması için 1 çıkarır.
  // Genişliği, aktif dairelerin sayısının tüm dairelere oranına göre hesaplar.

  if (currentActive === 1) {
    prev.disabled = true;
    // Eğer "currentActive" 1 ise, "prev" butonunu devre dışı bırakır.
  } else if (currentActive === circles.length) {
    next.disabled = true;
    // Eğer "currentActive", toplam daire sayısına eşitse, "next" butonunu devre dışı bırakır.
  } else {
    prev.disabled = false;
    next.disabled = false;
    // Aksi durumda, hem "prev" hem de "next" butonlarını etkinleştirir.
  }
}
