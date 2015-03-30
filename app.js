(function() {
var cleared = true;

/**
 * クリアボタン
 */
$(".btn-calc-c").click(function () {
  cleared = true;
  $("#result").html("0");
});

/**
 * 数字ボタン
 */
$(".btn-calc-0").click(function () {
  if (!cleared) {
    clickNumberButton(0);
  }
});

$(".btn-calc-1").click(function () {
  clickNumberButton(1);
});

$(".btn-calc-2").click(function () {
  clickNumberButton(2);
});

$(".btn-calc-3").click(function () {
  clickNumberButton(3);
});

$(".btn-calc-4").click(function () {
  clickNumberButton(4);
});

$(".btn-calc-5").click(function () {
  clickNumberButton(5);
});

$(".btn-calc-6").click(function () {
  clickNumberButton(6);
});

$(".btn-calc-7").click(function () {
  clickNumberButton(7);
});

$(".btn-calc-8").click(function () {
  clickNumberButton(8);
});

$(".btn-calc-9").click(function () {
  clickNumberButton(9);
});

/**
 *
 * @param num
 */
function clickNumberButton(num) {
  if (cleared) {
    cleared = false;
    $("#result").html(num);
  } else {
    $("#result").append(num);
  }
}
}());
