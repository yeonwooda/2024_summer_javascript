function add100(v) {
  return v + 100;
}

function minus100(v) {
  return v - 100;
}

function wonyoungthinking(v) {
  return v + "럭키비키잖아✌🏻";
}

const a = add100(3000); // 3100
const b = minus100(1000); // 900
const c = wonyoungthinking("수업이 휴강이라서"); // 수업이 휴강이라서 럭키비키잖아✌🏻

function test(v, i) {
  return (v + i) ** 2;
} // +하고 제곱하기

// 1. 홀짝 구하기
function test1(v) {
  return v % 2 == 1 ? "홀수" : "짝수";
}

// if(v % 2 == 1){
//   return "홀수";
// }else{
//   return "짝수"
// }

// 2. 두 숫자를 넣어서 큰 숫자 돌려주기

function test2(v, i) {
  return v > i ? v : i;
}

// 3. 두 숫자 넣을때 같으면 같아요 아니면 달라요
function test3(v, i) {
  return v == i ? "같아요" : "달라요";
}
