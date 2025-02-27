$(window).on("scroll", function () {
  let scrollPosition = $(window).scrollTop();
  let opacity = Math.min(1, scrollPosition / 500);
  $("#rocket").css({
    transform: `translate(${scrollPosition / 5}px, -${
      scrollPosition / 5
    }px) rotate(45deg)`,
  });

  $("#fire").css({
    opacity: opacity,
    transform: `translate(${scrollPosition / 5}px, -${
      scrollPosition / 5
    }px) rotate(225deg)`,
  });
});
