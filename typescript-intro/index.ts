// number;
// string;
// boolean;
// null;
// undefined;
// any; //이것도 저것도 아닌 모든 다른 타입들

//number타입
let a: number = 3;
// a = "asdfasdf";
a = 4;

//string타입
let b: string = "love you";
// b = true
b = "true";

//any타입
let c: any = 4;
c = "asdfasdf"; //에러는 안 나. 기존의 자바스크립트에서 쓰던 것 처럼 모든 걸 포용한 것처럼 쓸 수 있어.
//하지만 프로젝트에선 any타입을 쓰는 걸 자제해. 왜냐면 any를 쓰면 타입스크립트를 사용하는 의미 없음.
//하지만 이 변수를 써야하는데 타입이 정해지지않았다거나 타입을 자주 바꾼다하면 가아끔 쓰지만 보통은 안 쓰지.
