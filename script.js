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
  { name: "愚者", meaning: "自由。始まり。" },
  { name: "魔術師", meaning: "希望。成功への期待。" },
  { name: "女教皇", meaning: "知性。精神の強さ。賢明。" },
  { name: "女帝", meaning: "繁栄。実り。愛情。" },
  { name: "皇帝", meaning: "積極性。秩序。達成。" },
  { name: "教皇", meaning: "規律。道徳。信頼。" },
  { name: "恋人", meaning: "愛情。絆。" },
  { name: "戦車", meaning: "勝利。前進。" },
  { name: "力", meaning: "勇気。忍耐。" },
  { name: "隠者", meaning: "自己の追求。慎重さ。内省。" },
  { name: "運命の輪", meaning: "転機。チャンス。進展。" },
  { name: "正義", meaning: "公平。規則。道理。" },
  { name: "吊るされた男", meaning: "拘束。忍耐。献身。" },
  { name: "死神", meaning: "終わり。転換期。" },
  { name: "節制", meaning: "バランス。安定。" },
  { name: "悪魔", meaning: "欲望。執着" },
  { name: "塔", meaning: "崩壊。喪失。大きな変化。" },
  { name: "星", meaning: "希望。可能性。チャンス。" },
  { name: "月", meaning: "不安。迷い。" },
  { name: "太陽", meaning: "成功。活力。情熱。" },
  { name: "審判", meaning: "復活。目覚め。良き転機。" },
  { name: "世界", meaning: "完全。達成。解放。"},
];

btn.addEventListener("click", () => {
  const userName = nameInput.value;
  if (!userName) return alert("名前を入力してください");

  const i = Math.floor(Math.random() * tarot.length);

  back.textContent = tarot[i].name;
  result.textContent = "";

  cardElement.classList.add("shuffle");

  setTimeout(() => {
    cardElement.classList.remove("shuffle");
    cardElement.style.transform = "rotateY(180deg)"; 
    result.textContent = tarot[i].meaning;
  }, 2000); 
});





