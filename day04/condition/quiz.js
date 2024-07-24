// 1. 각도를 물어보고, 0 ~ 90 예각, 90 직각, 90 ~180 둔각, 180 평각

// const num = Number(prompt("각도 물어보기"));
// if (num <= 90) {
//   alert("예각");
// } else if (num == 90) {
//   alert("직각");
// } else if (num <= 180) {
//   alert("둔각");
// } else {
//   alert("평각");
// }

const angle = Number(prompt("각도"));
if (0 <= angle && angle < 90) {
  alert("예각");
} else if (angle == 90) {
  alert("직각");
} else if (90 < angle && angle < 180) {
  alert("둔각");
} else if (angle == 180) {
  alert("평각");
} else {
  alert("입력 오류");
}

// // 2. 영어 시험 점수를 입력하고
// // 90 A, 80 B, 70 C, 60 D, 그 외는 F
const eng = Number(prompt("영어 시험 점수"));
if (eng >= 90) {
  alert("A");
} else if (eng >= 80) {
  alert("B");
} else if (eng >= 70) {
  alert("C");
} else if (eng >= 60) {
  alert("D");
} else {
  alert("F");
}

// 3.[object 문제] mbti를 물어봐서 어떤 성향인지 알려주는 프로그램
// 4번 물어보기
// e, i / n, s/ f, t / j, p
// entj = > 외향적이고 직관적이고 이상적이고 계획적이군요!

const ei = prompt("e or i");
const ns = prompt("n or s");
const ft = prompt("f or t");
const jp = prompt("j or p");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "직관적",
  s: "감각적",
  f: "감정적",
  t: "사고적",
  j: "판단적",
  p: "인식적",
};
console.log(
  `${mbti[ei]}이고, ${mbti[ns]}이고, ${mbti[ft]}이고, ${mbti[jp]}이군요!`
);
