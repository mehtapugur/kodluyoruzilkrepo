module.exports.circleArea = (perimeter) => {
  const area = Math.PI * perimeter ** 2;
  console.log(`Yarıcapı ${perimeter} olan dairenin alanı: ${area}`);
};

module.exports.circleCircumference = (perimeter) => {
  const circumference = Math.PI * 2 * perimeter;
  console.log(`Ve çevresi: ${circumference}`);
};
