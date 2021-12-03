const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi."); // burada isteğimizin gönderildiğini simüle ediyoruz.

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Index sayfasina hos geldiniz</h1>");
  } else if (url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hakkimda sayfasina hos geldiniz</h1>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Iletisim sayfasina hos geldiniz</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
