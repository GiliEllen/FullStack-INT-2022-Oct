const audio = new Audio("./KRS-One - Sound of da Police (Official Video).mp3");
const box = document.querySelectorAll(".box");

box.forEach(box => {
  box.addEventListener("click", () => {
    audio.play();
  });
});
