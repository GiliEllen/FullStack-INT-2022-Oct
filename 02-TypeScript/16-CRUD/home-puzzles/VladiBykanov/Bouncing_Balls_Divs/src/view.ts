const wrapper = document.querySelector(".playground") as HTMLDivElement;

const tinkAudio = document.querySelector("#tinkSound") as HTMLAudioElement;
const clapAudio = document.querySelector("#clapSound") as HTMLAudioElement;

const midScreenX = window.innerWidth / 2;
const midScreenY = window.innerHeight / 2;

const randomDirection = () => {
  if (Math.random() > 0.5) {
    return 1;
  } else {
    return -1;
  }
};
