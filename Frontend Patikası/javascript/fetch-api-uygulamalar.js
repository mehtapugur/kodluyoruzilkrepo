/* 1

Json Placeholder API dokümanında Resources bölümünde belirtilen kaynaklardan /users uzantısındaki verileri alıp console’a yazdıracak kodu yazın.

*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

/* 2

Json Placeholder API servisinin /comments uzantısında mevcut verilerden, her bir comment içerisindeki email’leri console’a yazdıracak kodu yazın.

*/

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then(function (comments) {
    comments.forEach((comment) => console.log(comment.email));
  })
  .catch((err) => console.log(err));

// Patika'daki çözüm

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => json.forEach((item) => console.log(item.email)))
    .catch((err) => console.log(err))
