const mapOne: number[] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0,
  9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0, 9, 9, 9, 9, 9, 0, 9, 0, 1, 0, 0,
  0, 0, 9, 9, 9, 9, 1, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 1, 9, 9, 9, 9, 0, 0, 0,
  0, 1, 0, 9, 0, 9, 9, 9, 9, 9, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0,
  0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 9, 9, 9, 5, 9, 9,
  9, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const mapTwo: number[] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0,
  1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0,
  1, 0, 0, 1, 0, 0, 1, 0, 9, 0, 9, 9, 9, 9, 9, 0, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9, 9, 5, 9, 9,
  9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

// 0 = wall
// 1 = point
// 2 = cherry

// an array that wil hold all the divs and their classes
const squares = [] as Array<HTMLElement>;

class Pacman {
  private pacmanSpeed: number = 150; // lower is faster
  private pacmanStrartingIndex: number = 283;
  public currentIndex: number;
  //   public nextIndex: number;
  public velocity: number;
  constructor() {
    this.velocity = this.pacmanSpeed;
    this.currentIndex = this.pacmanStrartingIndex;
  }
  draw() {
    const eye = document.createElement("div") as HTMLDivElement;
    eye.classList.add("eye");
    const mouth = document.createElement("div") as HTMLDivElement;
    mouth.classList.add("mouth");
    squares[pacman.currentIndex].innerHTML = "";
    squares[this.currentIndex].classList.add("pacman", "square");
    squares[this.currentIndex].append(eye);
    squares[this.currentIndex].append(mouth);
  }
}


class Ghost {
  public currentIndex: number;
  public isScared: boolean;
  public timerId: number;
  constructor(
    public className: string,
    public startIndex: number,
    public speed: number,
    public resetIndex: number
  ) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.resetIndex = resetIndex;
  }
  draw() {
    squares[this.currentIndex].classList.add(this.className, "ghost");
    squares[this.currentIndex].innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M50.8 452.1L19.2 477.4c-2.1 1.7-4.7 2.6-7.4 2.6C5.3 480 0 474.7 0 468.2V192C0 86 86 0 192 0S384 86 384 192V468.2c0 6.5-5.3 11.8-11.8 11.8c-2.7 0-5.3-.9-7.4-2.6l-31.6-25.3c-3.3-2.7-7.5-4.1-11.8-4.1c-5.9 0-11.5 2.8-15 7.5l-37.6 50.1c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4l-38.4-51.2c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-38.4 51.2c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L77.6 455.5c-3.6-4.7-9.1-7.5-15-7.5c-4.3 0-8.4 1.5-11.7 4.1zM160 192c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>';
  }
}

const ghosts = [
  new Ghost("purple", 22, 250, 279),
  new Ghost("pink", 40, 400, 287),
  new Ghost("blue", 400, 300, 161),
  new Ghost("green", 418, 200, 153),
];

let glide: number; //pacman glide interval
let scaredGhostsTime: number; //scared ghosts timeout
let score = 0;
let cherryIndex: number[] = [];

const directions = {
  moveLeft: -1,
  moveRight: 1,
  moveUp: -21,
  movdeDown: 21,
};

const randomDirection = () =>
  directions[
    Object.keys(directions)[
      Math.floor(Math.random() * Object.keys(directions).length)
    ]
  ];

const chosenMap = localStorage.getItem("userChoice");
const palletsMapOne = 144;
const palletsMapTwo = 161;
let palletsThisGame: number;


let gameOver: boolean;