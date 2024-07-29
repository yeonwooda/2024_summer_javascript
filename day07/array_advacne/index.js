const arr = [1, 2, 3, 4, 5];
// arr.push(6) 6 추가

// map : 요소들을 바꾸끼
// 모두 토마토
const tomato = arr.map(() => {
  return "🍅";
});
console.log(tomato);

// 1. 모두 10
const ten = arr.map(() => {
  return 10;
});

console.log(ten);

// 2. v는 미지수 즉 v가 arr에 담긴 배열로 볼 수 있다.
const oneTwo = arr.map((v) => {
  return v % 2 == 1 ? 1 : 2;
});

console.log(oneTwo);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. 3번만 토마토로 바꾸기
const test = arr1.map((v) => {
  return v == 3 ? "🍅" : v;
});

console.log(test);

// 4. 숫자 문자로 바꾸기
const str = arr1.map((v) => {
  return String(v);
});

console.log(str);

// filter : 요소들을 필터링
const oddArr = arr1.filter((v) => {
  return v % 2 == 1; // 홀수
});
console.log(`oddArr: ${oddArr}`);

// 1. 3의 배수만 살리기
const threeArr = arr1.filter((v) => {
  return v % 3 == 0;
});

// 2. 6 이상만 살리기
const sixOverArr = arr1.filter((v) => {
  return v >= 6;
});

const fruits = [
  "peach",
  "apple",
  "mango",
  "strawberry",
  "avocado",
  "grape",
  "kiwi",
  "watermelon",
  "melon",
];

// 1. melon이 들어간 과일만 살리기
const a = fruits.filter((v) => {
  return v.includes("melon");
});

console.log(a);

// 2. 글자 길이가 6글자 이상만  살리기
const b = fruits.filter((v) => {
  return v.length >= 6;
});

console.log(b);

// 3. 모든 과일을 대문자로 바꾸기
const c = fruits.map((v) => {
  return v.toUpperCase();
});

console.log(c);
