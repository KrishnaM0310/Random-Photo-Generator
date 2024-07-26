const ImageContainerEl = document.querySelector('.image-container');
const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener("click", () => {
  const imageNum = 10;
  addNewImages(imageNum);
});

function addNewImages(imageNum) {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    ImageContainerEl.appendChild(newImgEl);
  }
}
