// function clickTarget(): void {
//     try {
//       const myBox: HTMLElement | null = document.querySelector('.target');
//       if (myBox) {
//         myBox.addEventListener('click', (event) => {})
//         // console.log(myBox)
//       }
//       const target: any = document.querySelectorAll(`.white-outer`)
//       target.forEach((div) => {
//         div.addEventListener('click', (event) => {
//           div.style.backgroundColor = `black`;
//         //   console.log(div)
//         });
//         // div.addEventListener('dblclick', (event) => {
//         //   div.remove(event)
//         // })
//       });
//       const target2: any = document.querySelectorAll(`.white-inner`)
//       target2.forEach((div) => {
//         div.addEventListener('click', (event) => {
//           div.style.backgroundColor = `red`;
//         //   console.log(div)
//         });
//         // div.addEventListener('dblclick', (event) => {
//         //   div.remove(event)
//         // })
//       });
//     } catch (error) {}
//   }
var divs = document.querySelectorAll(".hit");
divs.forEach(function (div) {
    div.addEventListener("click", function (event) {
        console.log(div.innerHTML);
    });
});
