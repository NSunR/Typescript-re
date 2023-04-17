const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

//js-only.js 복사본으로 시작
//수정할 에러가 즉시 반환될 거야.
// 이게 올바른 IDE를 사용하는 경우에 얻을 수 있는 타입스크립트의 큰 장점 중 하나야.
// 추가로, IDE에서 큰 도움을 받을 수 있어.
//코드는 기본적으로 타입스크립트가 코드를 분석하고 몇 가지 약점을 식별할 수 있도록 해.
//이게 바로 아주 좋은 장점이야.
//// const button = document.querySelector("button");
//// const input1 = document.getElementById("num1"); //2.여기선 id별로 요소를 선택하고있어.
//// const input2 = document.getElementById("num2");
//3. 이 경우 코드가 정말 작동할 지 알 수 없어. 오타가 있을 수 있고.
//이런 경우 요소를 선택할 수 없어. 이 요소는 페이지에 존재하지 않아서 오타가 있을 수 있어.
//타입스크립트는 HTML코드가 작동하는 지 확인하기 위해 분석하는 게 아니야.
//하지만 성공해서 우리가 요소를 선택해도 그게 input요소가 될 필요없어.
//다른 어떤 요소든 될 수 있어.

//1.
//js파일의 내용(혹은 파일)을 삭제했어.
//일부 상수 등이 여러 파일에서 사용됐음을 식별해서 삭제하면 일부 에러가 사라지지만
//여전히 에러가 발생해.
//예를 들어 value 속성이 실제로 있는지 확실하지 않음을 알 수 있어.
//이건 자바스크립트에서 이전엔 고려조차 하지 못한 실수야.
//// function add(num1, num2) {
////   return num1 + num2;
//// }

//// button.addEventListener("click", function () {
////   console.log(add(input1.value, input2.value));
//// });
//4. 대부분의 HTML요소들은 액세스할 수 있는 value속성을 가지고 있지않아.
//5. 타입스크립트는 우리가 의도를 더 명확히하고 코드를 다시 확인하도록 요구해.
//예를 들어, 여기서 모든 구문을 이해할 필요가 없어. 전반에 걸쳐 단계적으로 학습할거니까.

//6.하지만 여기에 느낌표를 추가해서 요소를 얻을 것임을 타입스크립트에게 알릴 수 있어.
//기본적으로 타입스크립트에게 이게 결코 null값이 발생하지 않을 걸 알려주는 거야.
//이렇게 항상 요소를 찾을 수 있어.
//// const button = document.querySelector("button");
//// const input1 = document.getElementById("num1")! as HTMLInputElement; //7.id가 여기 있음을 알고있어서.
//// const input2 = document.getElementById("num2")! as HTMLInputElement;

//8.또한 이게 항상 input요소라서 형 변환이라는 HTMLInputElement로
//사용할 수 있음을 알고있어. 나중에 타입스크립트에 이게 어떤 유형의 요소인지 자세히 써볼거야.
//이건 두번째 요소에도 적용할 수 있어 cf) ..("num2") ! as HTMLInputElement;
//명확히 하자면 이건 타입스크립트 구문이야.
//.ts파일에서 작업을 수행하고 있어서 여기에 느낌표를 사용할 수 있고,
//이런 유형의 유형 변환을 사용할 수 있어.
//두 개의 자바스크립트를 컴파일할 거야.이건 바닐라 자바스크립트에서는 작동하지 않아.
//// function add(num1, num2) {
////   return num1 + num2;
//// }
//
//// button.addEventListener("click", function () {
////   console.log(add(input1.value, input2.value));
//// });

//9.이처럼 의도를 더 명확히 하고 코드를 면밀히 다시 확인할 수 밖에 없는데,
//이것도 장점이라할 수 있지만 가장 큰 장점은 "추가 타입"이야.
//이 때문에 타입스크립트라고 불리는 거야.
//예를 들어, 이 매개변수들 중 하나에 마우스 커서를 올리면 any를 확인할 수 있는데,
//결국 타입스크립트는 그 안에 무엇이 있는 지 알 지 못하고 어떤 타입의 값이든 될 수 있단거야.
//이제 타입스크립트 파일에 보다 명시적인 타입을 추가할 수 있어.

//10.따라서 자바스크립트 파일이 아닌 타입스크립트 파일에서
// 쌍점을 추가한 다음 num1, num2에 number를 지정해줘.
// 컴파일러가 이해할 수 있는 타입스크립트인 추가 구문을 사용해서.
// num1 : number, num2 : number 이렇게.
// 타입스크립트에 num1, num2이 숫자 타입이 될 거라고 입력하는 거야.
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   //11. 근데 여기서 또 에러가 발생해.
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(input1.value, input2.value));
// });

//12. IDE에서만 에러가 발생하는 게 아니야.
//이 코드를 컴파일하려고 할 때도 에러가 발생해.
//올바르게 수행해야하는 작업이기 때문이야.
//이제 이걸 컴파이하기 위해 터미널을 열고,
//cd를 사용해서 해당 폴더에 들어가면 TSC를 실행해서 using-ts.ts에
//앞서 설치된 타입스크립트 컴파일러를 호출할 수 있어.
//근데 에러가 발생해. 기본적으로 타입스크립트는 여전히 자바스크립트로
//컴파일해서 여전히 자바스크립트 파일을 가져와.
//현재 이를 수행하는 과정에서 컴파일러 에러가 발생하는데,
//이를 통해서 타입 문자열의 인수를 숫자 타입의 매개변수에
//할당할 수 없음을 알 수 있어.

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
