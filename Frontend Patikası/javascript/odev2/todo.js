var list = document.querySelector("ul");
var item = document.querySelector("#item");
var adding = document.querySelector("#adding");

adding.addEventListener("click", function () {
  var li = document.createElement("li");

  li.innerHTML = item.value;

  list.append(li);

  item.value = "";
});
