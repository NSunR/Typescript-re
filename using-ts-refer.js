var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// var button = document.querySelector("button");
// var input1 = document.getElementById("num1"); //2. 유형 변환도 사라졌어.
// var input2 = document.getElementById("num2");
// function add(num1, num2) {
//   //1. 타입들이 사라졌음을 알 수 있고
//   return num1 + num2;
// }
// butoon.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
// //3. 바닐라 자바스크립트만 남았어.
// var button = document.querySelector("button");
// var input1 = document.getElementById("num1");
// var input2 = document.getElementById("num2");
// function add(num1, num2) {
//   return num1 + num2;
// }
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
