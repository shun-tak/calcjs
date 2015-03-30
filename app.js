(function() {
var imputableNewNumbers = true;
var pointed = false;
var prevNumber = 0;
var calcMode = null; // FIXME Javaのenum的なの使いたい

/**
 * クリアボタン
 */
$(".btn-calc-c").click(function () {
  clearDisplay();
  clearStates();
  prevNumber = 0;
  calcMode = null;
});

/**
 * 数字ボタン
 */
$(".btn-calc-0").click(function () {
  if (!imputableNewNumbers) {
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
 * 小数点ボタン
 */
$(".btn-calc-point").click(function () {
  if (!pointed) {
    pointed = true;
    if (imputableNewNumbers) {
      imputableNewNumbers = false;
      $("#result").html("0.");
    } else {
      $("#result").append(".");
    }
  }
});

/**
 * イコールボタン
 */
$(".btn-calc-eq").click(function () {
  if (calcMode === 'add') {
    doAddition();
  }
});

/**
 * 加算ボタン
 */
$(".btn-calc-add").click(function () {
  if (!imputableNewNumbers) {
    calcMode = 'add';
    doAddition();
    prevNumber = getCurrentNumber();
  }
});

/**
 * 加算処理
 */
function doAddition() {
  var sum = prevNumber + getCurrentNumber();
  clearStates();
  $("#result").html(sum);
  console.log(prevNumber);
}

/**
 * 受け取った数値を結果ウィンドウに並べる
 * @param num
 */
function clickNumberButton(num) {
  if (imputableNewNumbers) {
    imputableNewNumbers = false;
    $("#result").html(num);
  } else {
    $("#result").append(num);
  }
}

/**
 * 結果ウィンドウ内に表示されている数値を返す
 * @returns {number}
 */
function getCurrentNumber() {
  return +$("#result").html();
}

/**
 * 状態のクリア
 */
function clearStates() {
  imputableNewNumbers = true;
  pointed = false;
}

/**
 * 表示のクリア
 */
function clearDisplay() {
  $("#result").html("0");
}
}());
