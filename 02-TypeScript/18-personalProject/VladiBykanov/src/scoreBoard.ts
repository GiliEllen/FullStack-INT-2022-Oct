const users = localStorage.getItem("users") as string;
const sortedUsers = JSON.parse(users).sort(
  (a: User, b: User) => b.highScore - a.highScore
);

console.table(sortedUsers);

const userNamesListElement = document.querySelector(
  ".userNames"
) as HTMLUListElement;
const userScoreListElement = document.querySelector(
  ".userScore"
) as HTMLUListElement;

const newPlayerBtn = document.querySelector(
  ".newPlayerBtn"
) as HTMLButtonElement;

newPlayerBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "startPage.html";
});

function renderScoreTable() {
  try {
    sortedUsers.forEach((user: User) => {
      const liNameElement = document.createElement("li") as HTMLElement;
      liNameElement.textContent = user.userName;
      userNamesListElement.append(liNameElement);
      const liScoreElement = document.createElement("li") as HTMLElement;
      liScoreElement.textContent = user.highScore.toString();
      userScoreListElement.append(liScoreElement);
    });
  } catch (error) {
    console.log(error);
  }
}

renderScoreTable();
