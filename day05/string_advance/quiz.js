// 1. 유저에게 뉴스기사를 입력받고, 바꾸고 싶은 단어로 바꾸고
// 바뀐 단어들로 대체된 뉴스기사를 콘솔로 보여주기!

// const use = prompt("뉴스기사");
// use.repeat("");
// function test(v) {
//   const use = prompt("뉴스기사");
// return use.repeat("v)
// }

// const news = prompt("뉴스 기사 입력");
// const word = prompt("바뀌게 하고 싶은 단어 입력");
// const want = prompt("바꾸고 싶은 단어 입력");
// //const changedNews = news.replace(word, want);
// const changedNews = news.replaceAll(word, want);
// console.log(changedNews);

// 단어와 숫자를 입력하면 대문자화시켜서
// 숫자만큼 반복된 단어 돌려주는 함수만들기

const word = prompt("단어입력");
const num = Number(prompt("숫자 입력"));
const result = word.toUpperCase().replace(num);

function test(word, count) {
  return word.toUpperCase().repeat(count);
}
