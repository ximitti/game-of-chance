const imgDirectory = "./img/";
const imgList = [];
const button = document.querySelector("#control");
const msg = document.querySelector("#message");
let counter = 0;

for (let i = 0; i < 10; i++) {
  imgList[i] = `${imgDirectory}${i}.png`;
}

const slot = () => {
  msg.innerHTML = "";
  msg.className = "";

  let random = setInterval(() => {
    counter++;

    let left = Math.floor(Math.random() * 10);
    let center = Math.floor(Math.random() * 10);
    let right = Math.floor(Math.random() * 10);

    document.left.src = imgList[left];
    document.center.src = imgList[center];
    document.right.src = imgList[right];

    if (counter > 10) {
      let final_left = imgList[left];
      let final_center = imgList[center];
      let final_right = imgList[right];

      if (final_left === final_center && final_left === final_right) {
        msg.className = "win";
        msg.innerHTML = "Venceu! Parabéns!";
      } else {
        msg.className = "lost";
        msg.innerHTML = "Perdeu. Tente outra vez!";
      }

      counter = 0;
      clearInterval(random);
    }
  }, 100);
};

button.addEventListener("click", slot);
