const name = "연우";
const coffee = "아아";

// window.console.log(name);
// window.console.log(coffee); // const에 저장된 단어로 나옴
// window.console.log("coffee"); // coffee 문자로 나옴

// 제 이름은 ~이고, 좋아하는 커피는 ~ 입니다.
// window.console.log("제 이름은 name이고, 좋아하는 커피는 coffee 입니다.");

// // CONST에 저장된 단어로 나옴
// window.console.log(`제 이름은 ${name}이고, 좋아하는 커피는 ${coffee} 입니다.`);

// 1. mbti, weekend, youtube 각각 데이터 기억하고,
// 제 mbti는 ~이고, 주말에는 ~하고, 유튜브는 ~을 볼거예요
// 콘솔로 보여주기

// const mbti = "ENFP";
// const weekend = "학원을 가고";
// const youtube = ".";

// window.console.log(
//   `제 mbti는 ${mbti}이고 주말에는 ${weekend}, 유튜브는 ${youtube}을 볼거예요 `
// );

// 프롬프트로 당신의 핸드폰 기종은? 물어보고
// 프롬프트로 당신의 PC 기종은?
// 콘솔로 당신이 쓰는 핸드폰은 ~이고, 당신의 PC는 이군요!

const phone = window.prompt("당신의 핸드폰 기종은?");
const pc = window.prompt("당신의 PC기종은? ");
window.console.log(
  `당신이 쓰는 핸드폰 기종은 ${phone}이고, 당신의 PC는 ${pc}이군요!`
);
