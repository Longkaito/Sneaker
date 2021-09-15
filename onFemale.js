const $ = document.querySelector.bind(document);

$(".header__nav-icon-bars").onclick = () => {
  $(".mobile-menu .menu").style.marginLeft = "0";
  $(".mobile-menu .overlay").style.display = "block";
  $(".header__nav-icon-bars").style.display = "none";
  $(".header__nav-icon-close").style.display = "block";
};

$(".header__nav-icon-close").onclick = () => {
  $(".mobile-menu .menu").style.marginLeft = "-50vw";
  $(".mobile-menu .overlay").style.display = "none";
  $(".header__nav-icon-bars").style.display = "block";
  $(".header__nav-icon-close").style.display = "none";
};

$(".mobile-menu .overlay").onclick = () => {
  $(".mobile-menu .menu").style.marginLeft = "-50vw";
  $(".mobile-menu .overlay").style.display = "none";
  $(".header__nav-icon-bars").style.display = "block";
  $(".header__nav-icon-close").style.display = "none";
};
