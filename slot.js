const imgDirectory = "./img/";
const imgList = [];
const button = document.querySelector("#control");
const msg = document.querySelector("#message");
const tries = document.querySelector("#try");
const wins = document.querySelector("#wins");
const imgLeft = document.querySelector("#left");
const imgCenter = document.querySelector("#center");
const imgRight = document.querySelector("#right");
let clickControl = true;

for (let i = 0; i < 10; i++) {
  imgList[i] = `${imgDirectory}${i}.png`;
}

const textAlteration = (text, cn) => {
  msg.innerHTML = text;
  msg.className = cn;
};

const randomNum = () => {
  return Math.floor(Math.random() * 10);
};

const play = () => {
  let randomNumbers = [0, 0, 0];
  randomNumbers[0] = randomNum();
  randomNumbers[1] = randomNum();
  randomNumbers[2] = randomNum();

  imgLeft.src = imgList[randomNumbers[0]];
  imgCenter.src = imgList[randomNumbers[1]];
  imgRight.src = imgList[randomNumbers[2]];

  return randomNumbers;
};

const checkResult = (arr) => {
  let final_left = arr[0];
  let final_center = arr[1];
  let final_right = arr[2];

  if (final_left === final_center && final_left === final_right) {
    textAlteration("Venceu! Parabéns!", "win");
    score(true);
  } else {
    textAlteration("Perdeu. Tente outra vez!", "lost");
    score(false);
  }
};

const score = (result) => {
  let t = Number(tries.innerText);
  let w = Number(wins.innerText);

  if (result) {
    wins.innerText = w + 1;
  }
  tries.innerText = t + 1;
};

const slot = () => {
  let arrRN = [];
  textAlteration("", "");

  if (clickControl) {
    clickControl = false;
    let random = setInterval(() => {
      arrRN = play();
    }, 100);

    setTimeout(() => {
      clearInterval(random);
      checkResult(arrRN);
      clickControl = true;
    }, 1500);
  }
};

button.addEventListener("click", slot);
