$(document).ready(function(){
    $(this).scrollTop(0);
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 450) {
    $("header").addClass("black");
    $("#logo").attr("src", "./images/logo-black.png");
  } else {
    $("header").removeClass("black");
    $("#logo").attr("src", "./images/logo.png");
  }
});
