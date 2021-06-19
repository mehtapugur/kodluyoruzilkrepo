// Problem 1 start

let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let newArray = dizi.filter( function(number){
  return number > 10;
})

newArray = newArray.map( function(number){
  return number*5;
})

console.log(newArray);

// Problem 1 end

// Problem 2 start

let dizi = [3, 6, 9, 14, 16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction(dizi) {
  let bool = dizi.some(function (number) {
    return number > 5;
  });

  if (bool) console.log("Beşten büyük bir eleman mevcut.");
  else console.log("5'ten büyük eleman mevcut değil.");
}

myFunction(dizi);

// Problem 2 end

// Problem 3 start

let dizi = [2, 3, 4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

let myMulti = 1;
dizi.forEach(function (item, index) {
  return (myMulti *= item);
});

console.log(myMulti);

//Problem 3 end
