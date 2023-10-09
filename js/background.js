const imgs = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
const chosenImg = imgs[Math.floor(Math.random()* imgs.length)];

const bgImage = document.createElement("img");
bgImage.className="background";
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage);