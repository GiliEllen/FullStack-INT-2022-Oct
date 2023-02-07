var pacman = new Pacman();
startGame();
checkGameStatus();
window.addEventListener("keydown", function (e) {
    if (e.repeat)
        return;
    switch (e.key) {
        case "ArrowLeft":
            pacman.move(directions.moveLeft);
            break;
        case "ArrowRight":
            pacman.move(directions.moveRight);
            break;
        case "ArrowUp":
            pacman.move(directions.moveUp);
            break;
        case "ArrowDown":
            pacman.move(directions.movdeDown);
            break;
    }
});
backToStartingPageBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        window.location.href = "startPage.html";
        localStorage.removeItem("userChoice");
    });
});
tryAgainBtn.forEach(function (btn) { return btn.addEventListener("click", startGame); });
scoreboardBtn.forEach(function (btn) {
    return btn.addEventListener("click", function () { return (window.location.href = "scoreBoard.html"); });
});
