//import fs from "fs";
const fs = require("fs");

// Dosya oluştur ve yaz
fs.writeFile(
  "employees.json",
  '{ "name:" "Employee 1 Name", "salary": 2000 },',
  (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  }
);

//Dosyayı oku
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Dosyayı güncelle
fs.appendFile(
  "employees.json",
  '\n{ "name:" "Employee 2 Name", "salary": 5000 }',
  (err) => {
    if (err) throw err;
    console.log("The file has been updated");
  }
);

//Dosyayı sil
fs.unlink("employees.json", (err) => {
  if(err) throw err;
})
