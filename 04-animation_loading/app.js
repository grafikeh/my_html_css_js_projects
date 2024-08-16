const loadingText = document.querySelector(".loading-text");
/* .loading-text sınıfına sahip olan HTML elementini seçer ve 'loadingText' değişkenine atar. Bu, yükleme yüzdesini gösterecek olan metin elementidir. */

const bg = document.querySelector(".bg");
/* .bg sınıfına sahip olan HTML elementini seçer ve 'bg' değişkenine atar. Bu, arka planın bulanıklaşma efekti uygulanan elementidir. */

let load = 0;
/* Yükleme yüzdesini takip eden 'load' adında bir değişken oluşturur ve başlangıç değerini 0 olarak ayarlar. */

let int = setInterval(bluring, 30);
/* 30 milisaniye aralıklarla 'bluring' fonksiyonunu çalıştırmak için bir interval (zamanlayıcı) başlatır ve 'int' değişkenine atar. */

function bluring() {
  load++;
  /* 'load' değişkenini her çalıştığında 1 artırır. */

  if (load > 99) {
    clearInterval(int);
    /* Eğer 'load' 99'dan büyükse, interval'i durdurur (artık bluring fonksiyonu çalışmaz). */
  }

  loadingText.innerText = `${load}%`;
  /* Yükleme yüzdesini gösteren metni günceller, örneğin '25%' gibi. */

  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  /* Yükleme yüzdesine göre 'loadingText' elementinin opaklığını (şeffaflığını) ayarlar. 
     Yükleme ilerledikçe opaklık 1'den (tamamen görünür) 0'a (tamamen görünmez) düşer. */

  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
  /* Yükleme yüzdesine göre arka planın bulanıklığını ayarlar. Yükleme ilerledikçe bulanıklık 30 piksellik değerden 0'a (tam net) düşer. */
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
/* 'scale' fonksiyonu, bir sayıyı belirli bir aralıktan (inMin - inMax) başka bir aralığa (outMin - outMax) dönüştürmek için kullanılır. 
   Bu, örneğin, 'load' değerini 0-100 aralığından 1-0 opaklık aralığına dönüştürmek için kullanılır. */