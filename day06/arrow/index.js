// general function[일반 함수]
function smaller(v, i) {
  return v > i ? v : i;
}

// arrow function [화살표 함수]
const smaller1 = (v, i) => {
  return v > i ? i : v;
};

// 어떠한 단어가 들어오면 뒤에 "!" 붙혀서 돌려주는 함수
const word = (v) => {
  return v + "!";
};

// 어떠한 숫자가 들어오면 반 나눠서 돌려주는 함수
const num = (v) => {
  return v / 2;
};

// 어떠한 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const addDouble = (v, i) => {
  return (v + i) * 2;
};

// 어떠한 배열과 과일을 넣었을 때, 배열에 과일을 추가해주는 함수
// v = arr, i = fruit
const cart = (v, i) => {
  v.push(i);
};

// 어떠한 배열과 과일을 영어로 넣었을 때,
// 과일에 알파벳이 a 또는 p가 들어가면 배열에 추가가 안되고
// 그게 아니면 추가 되는 함수 만들기

const noap = (v, i) => {
  if (!i.includes("a") && !i.includes("p")) {
    v.push(i);
  }
};

// 비밀번호를 입력했을 때, ! or #이 들어가면 비밀번호 충족 아니면 비밀번호 재설정
// const password = (v) => {
//   v.includes("!") || v.includes("#") ? "비밀번호 충족" : "비밀번호 재설정";
// };

// if (v.includes("!") || v.includes("#")) {
//   return "비밀번호 충족";
// } else {
//   return "비밀번호 재설정";
// }

const pwCheck = (v) => {
  if (v.includes("!") || v.includes("#")) {
    return "비밀번호 충족";
  } else {
    return "비밀번호 재설정";
  }
};

// 비밀번호를 입력했을때,
// 1. ! or # 이 안들어가면 특수문자 필수
// 2. 비밀번호의 길이가 6 ~ 20사이가 아니면 비밀번호 길이를 재수정
// 3. 비밀번호의 시작이 IT or it로 시작안하면 반드시 IT or it로 시작
// 다 통과되면 비밀번호 통과

const password = (v) => {
  if (!v.includes("!") && !v.includes("#")) {
    return "특수 문자 필수";
  } else if (v.length <= 6 || 20 < v.length) {
    return "비밀번호 길이 재 수정";
  } else if (!(v.startsWith("IT") || v.startsWith("it"))) {
    return "반드시 IT OR it로 시작";
  } else {
    return "비밀번호 통과";
  }
};

// v.includes("!") || v.includes("#");
// 6 <= v.length <= 20;
// v.startsWith("IT") || v.startsWith("it");
