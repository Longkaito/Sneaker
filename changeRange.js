function ganDefound() {
  var x = $(".content__left-filter input").value;
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  $(".content__left-filter .price-after").innerHTML = x;
}
ganDefound();

$(".content__left-filter input").oninput = function () {
  var a = this.value;
  a = a.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(a)) a = a.replace(pattern, "$1,$2");
  $(".content__left-filter .price-after").innerHTML = a;
};
