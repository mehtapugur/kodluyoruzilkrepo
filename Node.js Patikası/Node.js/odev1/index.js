const arguments = process.argv.slice(2);

function findArea(perimeter) {
  
  const area = Math.PI * perimeter**2;
  console.log(`Yarıcapı ${perimeter} olan dairenin alanı: ${area}`);
}

findArea(arguments[0]*1);
