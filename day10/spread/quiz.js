// 유저에게 영단어를 입력 받고
// a,e,i를 제거해서 다시 콘솔로 보여주기
// ex) apple -> ppl, banana -> bnn, fine -> fn

const word = "apple";
[...word]
  .filter((x) => {
    return x != "a" && x != "e" && x != "i";
  })
  .join("");
