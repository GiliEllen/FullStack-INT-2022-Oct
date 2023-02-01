var currentLine = 0;
var WORD_LENGTH = 5;
var LAST_CELL_IN_LINE = 4;
var currentCell = linesArray[0][0];
function insertLetterToCell(letter) {
    try {
        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
            currentCell.innerText = letter;
            if (currentCell.nextElementSibling) {
                currentCell = currentCell.nextElementSibling; //move to next cell
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function deleteLetterFromCell() {
    try {
        if (linesArray[currentLine][0].innerText !== "") {
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText === "") {
                currentCell = currentCell.previousElementSibling;
                currentCell.innerText = "";
            }
            if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
                currentCell.innerText = "";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
// function enter(): void { //clicking ENTER
//     try {
//         if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
//             let correctLetters: number = 0
//             for (let i = WORD_LENGTH-1; i >= 0; i--) {
//                 const checkedLetter = linesArray[currentLine][i];
//                 if (solution?.includesLetter(checkedLetter.innerText)) {
//                     if (checkedLetter.innerText === solution.name.toUpperCase()[i]) {
//                         checkedLetter.style.backgroundColor = "orange"; //exact spot
//                         correctLetters++
//                         if (correctLetters === WORD_LENGTH) alert("you win!"); // change to animation with 2sec delay//
//                     } else {
//                         if (solution?.letterRepetitions(checkedLetter.innerText) === 1) {
//                             //check if the checked letter wasn't painted blue/orange earlier
//                             if (linesArray[currentLine][1] || linesArray[currentLine][2] || linesArray[currentLine][3] || linesArray[currentLine][4]) {
//                                 if (
//                                     ((linesArray[currentLine][1].style.backgroundColor === "blue" || "orange") && checkedLetter.innerText === linesArray[currentLine][1].innerText) ||
//                                     ((linesArray[currentLine][2].style.backgroundColor === "blue" || "orange") && checkedLetter.innerText === linesArray[currentLine][2].innerText) ||
//                                     ((linesArray[currentLine][3].style.backgroundColor === "blue" || "orange") && checkedLetter.innerText === linesArray[currentLine][3].innerText) ||
//                                     ((linesArray[currentLine][4].style.backgroundColor === "blue" || "orange") && checkedLetter.innerText === linesArray[currentLine][4].innerText)
//                                 ) {
//                                     checkedLetter.style.backgroundColor = "blue";
//                                 } else{
//                                     checkedLetter.style.backgroundColor = "gray";
//                                 }
//                             }
//                         }
//                         if (solution?.letterRepetitions(checkedLetter.innerText) === 2) {
//                             checkedLetter.style.backgroundColor = "blue";
//                         }
//                         if (solution?.letterRepetitions(checkedLetter.innerText) === 3) {
//                             checkedLetter.style.backgroundColor = "blue";
//                         }
//                     }
//                 }
//             }
//             currentLine++;
//             currentCell = linesArray[currentLine][0]; // goes to the next line
//         }
//     } catch (error: unknown) {
//         console.error(error);
//     }
// }
// function enter(): void { //clicking ENTER
//     try {
//         if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") { //user can click ENTER only if she typed a letter in the last cell 
//             let correctLetters: number = 0
//             // for(let i=0; i<1; i++){}
//             if (linesArray[currentLine][0].innerText === solution?.name.toUpperCase()[0]) { //the 1st letter is on the exact spot
//                 linesArray[currentLine][0].style.backgroundColor = "orange";
//                 correctLetters++
//             } else if (solution?.includesLetter(linesArray[currentLine][0].innerText)) {
//                 linesArray[currentLine][0].style.backgroundColor = "blue";
//             } else {
//                 linesArray[currentLine][0].style.backgroundColor = "gray";
//             }
//             if (linesArray[currentLine][1].innerText === solution?.name.toUpperCase()[1]) { //the  2nd letter is on the exact spot
//                 linesArray[currentLine][1].style.backgroundColor = "orange";
//                 correctLetters++
//             } else if (
//                 (solution?.includesLetter(linesArray[currentLine][1].innerText)) &&
//                 (solution?.letterRepetitions(linesArray[currentLine][1].innerText) === 1)
//             ) {
//                 linesArray[currentLine][1].style.backgroundColor = "blue";
//             } else {
//                 linesArray[currentLine][1].style.backgroundColor = "gray";
//             }
//             if (linesArray[currentLine][2].innerText === solution?.name.toUpperCase()[2]) { //the 3rd letter is on the exact spot
//                 linesArray[currentLine][2].style.backgroundColor = "orange";
//                 correctLetters++
//             } else if (
//                 (solution?.includesLetter(linesArray[currentLine][2].innerText)) &&
//                 (solution?.letterRepetitions(linesArray[currentLine][2].innerText))
//             ) {
//                 linesArray[currentLine][1].style.backgroundColor = "blue";
//             } else {
//                 linesArray[currentLine][1].style.backgroundColor = "gray";
//             }
//             // if (correctLetters === WORD_LENGTH) alert("you win!"); // change to animation with 2sec delay//
//             currentLine++;
//             currentCell = linesArray[currentLine][0]; // goes to the next line
//         }
//     } catch (error: unknown) {
//         console.error(error);
//     }
// }
function enter() {
    try {
        if (linesArray[currentLine][LAST_CELL_IN_LINE].innerText !== "") {
            var correctLetters = 0;
            var _guess = [];
            for (var i = 0; i < WORD_LENGTH; i++) {
                _guess.push(linesArray[currentLine][i].innerText);
            }
            var guessName_1 = _guess.join("").toLowerCase();
            var guess = wordsArray.find(function (_a) {
                var name = _a.name;
                return name === guessName_1;
            });
            if (guess) {
                for (var i = 0; i < WORD_LENGTH; i++) {
                    var checkedLetter = linesArray[currentLine][i];
                    if ((solution === null || solution === void 0 ? void 0 : solution.letterRepetitions(checkedLetter.innerText)) === 1) { //each letter appears once in the solution
                        if ((guess === null || guess === void 0 ? void 0 : guess.letterRepetitions(checkedLetter.innerText)) === 1) {
                            if (solution === null || solution === void 0 ? void 0 : solution.includesLetter(checkedLetter.innerText)) {
                                checkedLetter.style.backgroundColor = "blue";
                                if (checkedLetter.innerText === solution.name.toUpperCase()[i]) {
                                    checkedLetter.style.backgroundColor = "orange"; //exact spot
                                    correctLetters++;
                                    if (correctLetters === WORD_LENGTH)
                                        alert("you win!"); // change to animation with 2sec delay//
                                }
                            }
                        } //else
                    }
                }
                currentLine++;
                currentCell = linesArray[currentLine][0]; // goes to the next line
            }
            else
                (alert("the word is not on our dictionary yet"));
        }
    }
    catch (error) {
        console.error(error);
    }
}
function randomSolutionSelector() {
    try {
        var randomIndex = getRandomInt(0, wordsArray.length - 1);
        if (!randomIndex)
            throw new Error("random index not found");
        var solution = wordsArray[randomIndex];
        return solution;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}