$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});


$(function () {
  $("#memu").click(function () {
    $("#modal").css({
      "display": "block"
    });
  })
  $("#cls").click(function () {
    $("#modal").css({
      "display": "none"
    });
  })
});

$(function () {
  $("div#memu").mouseover(function () {
    $("i#memuOff").css({ "display": "none" }),
      $("i#memuOn").css({
        "display": "inline-block",
        "font-size": "50px"
      })
  });
  $("div#memu").mouseout(function () {
    $("i#memuOff").css({ "display": "inline-block" }),
      $("i#memuOn").css({
        "display": "none"
      })
  });
})

