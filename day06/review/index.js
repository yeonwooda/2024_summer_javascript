// 1. 온도를 입력 받으면, 0 이하면 추워요
// 0~10 쌀쌀해요, 10~20 쾌적해요, 20~30 살짝 더워
// 30 이상이면 더워요라는 함수를 만들어주세요

function temp(v) {
  if (v < 0) {
    return "추워요";
  } else if (0 <= v && v < 10) {
    return "쌀쌀해요";
  } else if (10 <= v && v < 20) {
    return "쾌적해요";
  } else if (20 <= v && v < 30) {
    return "살짝더워요";
  } else {
    return "더워요";
  }
}

// 2. 올리브영에서 3만원 이상 구매하면, 10%할인 해주고
// 5만원 이상 구매하면 20% 할인해주는 가격 계산 함수를

function oliveyoung(v) {
  if (v > 50000) {
    // 할인 가격이랑 원래 가격을 같이 나타낼 수 있는
    return { originPrice: v, disconutPrice: v * 0.8 };
  } else if (v >= 30000) {
    return v * 0.9;
  } else {
    return { originPrice: v, disconutPrice: v * 1 };
    // return v라고치면 원래 가격만 보임+
  }
}

// 3.
