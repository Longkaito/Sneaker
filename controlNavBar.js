document.onscroll = function () {
  const getScroll = window.scrollY;

  if (getScroll > 130) {
    // $(".header-inner").style.position = "fixed";
    // $(".header-inner").style.top = "0";
    // $(".header-inner").style.left = "0";
    // $(".header-inner").style.right = "0";
    // $(".header-inner").style["z-index"] = "1000";
    $(".header-inner").classList.add("nav-slide-down");
    if (getScroll < 330) {
      $(".nav-slide-down").style.top = "-13rem";
    } else {
      $(".nav-slide-down").style.top = "0";
    }
  } else {
    $(".header-inner").classList.remove("nav-slide-down");

    // var removeCss = document.styleSheets[0].cssRules[0].style;
    // $(".header-inner").style.top = "-13rem";
    // $(".header-inner").style.position = "relative";
    // removeCss.removeProperty("position");
    // removeCss.removeProperty("top");
    // removeCss.removeProperty("left");
    // removeCss.removeProperty("right");
    // removeCss.removeProperty("z-index");
  }
  console.log(getScroll);
};
