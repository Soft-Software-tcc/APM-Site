$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
  });
  document.getElementById(".card").style.transition = "all 0.2s";