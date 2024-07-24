// Operator[연산] : something을 토큰에 의해서 새로운거 만들기
// token[토큰] : 기호들
// ex)
// 사칙연산 : +,-,*
// ? 연산 : !, &&, ||, ...

// 수리 연산 [arithmath]
// 1 + 2  더하기
// 1- 2 뺴기
// 1 * 2 곱하기
// 2 ** 3 제곱
// 3 / 2 나누기
// 3 % 2 나머지

// 10 + "10" 문자열 연결 연산 -> 암묵적
// +"100" 단항 덧셈 연산 -> 암묵적[숫자화]

// 대입 연산
const a = 10; // =

// 비교 연산 [>, <, >=, <= , ==(같다), !=(다르다)]
const b = 5 > 3; // true
const b1 = 5 < 3; //false
const b2 = 5 == 1; //false
const b3 = 5 != 1; //true

// 논리 연산
// && [and] :  모든 조건이 true이여야 true / ~하고,
// || [or] : 하나라도 조건이 true면 true / ~이거나,
// ! [not] : 값을 반대로 하기

const c1 = 10 > 5 && 10 > 3 && 10 >= 11; // false
const c2 = 10 > 5 || 10 > 3 || 10 >= 11; // true
const c3 = !false; // true
const c4 = !!false; // false

// 삼항 연산자
const d1 = 5 > 3 ? "장원영" : "아이유"; //장원영
const d2 = 5 != 5 ? "안유진" : "윈터"; // 윈터 5랑 5랑 다르냐