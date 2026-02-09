window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

const btn = document.getElementById("fortuneBtn");
const cardElement = document.getElementById("card");
const back = cardElement.querySelector(".back");
const result = document.getElementById("result");
const nameInput = document.getElementById("nameInput");

const tarot = [
  { name: "愚者", meaning: "新しい始まり、自由、無邪気" },
  { name: "魔術師", meaning: "可能性、行動力、創造" },
  { name: "女教皇", meaning: "直感、知恵、内面" },
  { name: "女帝", meaning: "豊かさ、育み、愛" },
  { name: "皇帝", meaning: "安定、権威、責任" },
  { name: "法王", meaning: "伝統、知識、指導" },
  { name: "恋人", meaning: "愛、選択、調和" },
  { name: "戦車", meaning: "勝利、意志、前進" },
  { name: "力", meaning: "勇気、忍耐、自己制御" },
  { name: "隠者", meaning: "内省、探求、孤独" },
  { name: "運命の輪", meaning: "変化、運命、循環" },
  { name: "正義", meaning: "公平、バランス、判断" },
  { name: "吊るされた男", meaning: "試練、自己犠牲、視点の転換" },
  { name: "死神", meaning: "終わりと始まり、変容" },
  { name: "節制", meaning: "調和、節度、バランス" },
  { name: "悪魔", meaning: "誘惑、執着、影" },
  { name: "塔", meaning: "崩壊、衝撃、覚醒" },
  { name: "星", meaning: "希望、インスピレーション、癒し" },
  { name: "月", meaning: "不安、直感、幻想" },
  { name: "太陽", meaning: "成功、喜び、達成" },
  { name: "審判", meaning: "復活、決断、気づき" },
  { name: "世界", meaning: "完成、達成、旅の終わり" }
];

btn.addEventListener("click", () => {
  const userName = nameInput.value;
  if (!userName) return alert("名前を入力してください！");

  const i = Math.floor(Math.random() * tarot.length);

  back.textContent = tarot[i].name;
  result.textContent = "";

  // シャッフルアニメ開始
  cardElement.classList.add("shuffle");

  // アニメ終了後に裏面で止めて意味表示
  setTimeout(() => {
    cardElement.classList.remove("shuffle");
    cardElement.style.transform = "rotateY(180deg)"; // 裏面で止める
    result.textContent = tarot[i].meaning;
  }, 2000); // CSSアニメと同じ時間
});





