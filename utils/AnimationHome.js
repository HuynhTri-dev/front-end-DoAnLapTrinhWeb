$(window).on("scroll", function () {
  let scrollPosition = $(window).scrollTop();
  let opacity = Math.max(0, 1 - scrollPosition / 500);

  $("#rocket").css({
    transform: `translate(${scrollPosition / 5}px, ${-scrollPosition / 5}px)`,
  });

  $("#fire").css({
    opacity: opacity,
    transform: `translate(${scrollPosition / 5}px, ${-scrollPosition / 5}px)`,
  });
});

let $list = $(".startup-list");
let itemWidth = $(".startup-item").outerWidth(true);
let position = 0;

$("#nextBtn").click(function () {
  if (position > -itemWidth * ($(".startup-item").length - 3)) {
    position -= itemWidth;
    $list.css("transform", `translateX(${position}px)`);
  }
});

$("#prevBtn").click(function () {
  if (position < 0) {
    position += itemWidth;
    $list.css("transform", `translateX(${position}px)`);
  }
});
