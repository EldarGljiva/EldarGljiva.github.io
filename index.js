document.querySelector(".rocket").addEventListener("click", function () {
  var rocket = document.querySelector(".rocket");
  rocket.classList.add("rocket-move");

  setTimeout(function () {
    rocket.classList.remove("rocket-move");
  }, 100);
});
