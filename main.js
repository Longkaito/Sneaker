// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
$(".header__nav-login a").onclick = function () {
  $(".modal-login").style.display = "block";
};

$(".modal-login .content__info .close").onclick = function () {
  $(".modal-login").style.display = "none";
};

// Chuyển ảnh banner
var count = 0;
$(".header__banner-btnRight").onclick = function () {
  if (count >= -300) {
    count = count - 100;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  } else {
    count = 0;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  }
};

$(".header__banner-btnLeft").onclick = function () {
  if (count <= -100) {
    count = count + 100;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  } else {
    count = -400;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  }
};

setInterval(() => {
  if (count >= -300) {
    count = count - 100;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  } else {
    count = 0;
    $(".header__banner .header__banner-list").style.marginLeft = `${count}%`;
  }
}, 5000);
// Bật tắt modal Login
