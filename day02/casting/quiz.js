// 1. 프롬프트로 몇년생인가요 물어보고 (숫자로 입력)
// 콘솔로 당신의 나이는 **이군요!

// const a = window.prompt("당신은 몇년생인가요");
// console.log(Number(2025 - a));

// // const year = Number(2024 - a);
// console.log(year);
// const age = 2024 - Number(year)
// (`당신의 나이는 ${age}이군요`)

// 2. 숫자를 두 번 프롬프트로 물어보고,
// 콘솔로 합, 차, 곱 나타내는 프로그램 만들기
const first = window.prompt("첫번째 숫자 :");
const second = window.prompt("두번째 숫자 :");

const a = Number(first) + Number(second);
const b = Number(first - second);
const c = Number(first * second);

console.log(`합 : ${a} 차 : ${b} 곱 : ${c} `);

// 3. 프롬프트로 한 변의 길이를 입력하고
// 콘솔로 정사각형의 넓이는 ~입니다.

const side = prompt("정사각형의 한 변의 길이");
const numSide = Number(side * side);
console.log(`정사각형의 넓이는 ${numSide}입니다`);

// const side = Number(prompt("한변의 길이"));
// console.log(`정사각형의 넓이는 ${side * side 입니다`})

// 4. 아아(1500) 주문 갯수 프롬프트, 라떼(2500) 주문 갯수 프롬프트
// 콘솔로 총 가격은 ~ ex )

const e = window.prompt("아이스아메리카노 주문 갯수");
const f = window.prompt("라떼 주문 갯수");

const num3 = 1500 * Number(e);
const num4 = 2500 * Number(f);
const price = num3 + num4;
console.log(`총가격은 ${price} 입니다`);
