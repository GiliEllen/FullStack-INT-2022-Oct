const img:HTMLDivElement | null = document.querySelector(".imgBox");

const addImg=[];


function addPrompt(){
    for(let a = 0 ; a < 5; a++){
        let pr = prompt("enter an url");
        
        if (!pr || pr=== null) {
            alert("please enter a vail url");
        } else {
            img?.innerHTML=`<div class="imgBox">
            <img src='${pr}'/>
        </div>`;
        const count =addImg.push(pr);

        }
    }
}
addPrompt()
console.log(addImg)

