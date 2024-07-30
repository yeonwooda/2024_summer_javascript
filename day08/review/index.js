const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. 홀수는 2배 짝수는 제곱으로 다시 만들기

const a = arr.map((v) => {
  return v % 2 == 1 ? v * 2 : v ** 2;
});

// // 2. 3의 배수는 '🥕' 5의 배수는 '🍒' 나머지는 '🍉'
const b = arr.map((v) => {
  return v % 3 == 0 ? "🥕" : v % 5 == 0 ? "🍒" : "🍉";
});

// if (v % 3 == 0) {
//   return "🥕";
// } else if (v % 5 == 0) {
//   return "🍒";
// } else {
//   return "🍉";
// }
console.log(b);
const fruits = ["apple", "banana", "melen", "kiwi", "mango", "strawberry"];

// //3. 6글자 이상만 과일 명단 남기기

const c = fruits.filter((v) => {
  return v.length >= 6;
});

// // 4. 알파벳 a가 포함된 과일만 남기기
const d = fruits.filter((v) => {
  return v.includes("a");
});
console.log(d);
