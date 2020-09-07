$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
  $(".fa-times").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});
