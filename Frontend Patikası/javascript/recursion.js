// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8

//pow(2,4) = 2 * pow(2,3)
//pow(2,3) = 2 * pow(2,2)
//pow(2,2) = 2 * pow(2,1)
//pow(2,1) = 2
//Sonuç olarak recursion, bir fonksiyonu en basit haline kadar getiriyor. Sonuç en açık hale gelene kadar.

//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
