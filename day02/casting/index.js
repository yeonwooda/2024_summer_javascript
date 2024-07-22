// type casting : 타입 바꾸기

// 1. 문자/불리언 숫자로
const first = Number("100"); // 숫자 100
const second = Number("5");
const result = first + second;

const result1 = "100" + "200";

console.log(result); // 숫자
console.log(result1); // 문자

const third = Number(true); // 1
const fourth = Number(false); // 0

// 2. 숫자/불리언 문자로
const a = String(1500); // "1500"
const b = String(true); // "true"

// 3. 숫자/문자 -> 불리언
// 0, -0, ""(빈문자열) -> false
// 나머지 -> true

Boolean("마라탕");
Boolean(1004);
