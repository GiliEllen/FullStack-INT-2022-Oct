function goToUserProfile(event): void {
  try {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    const password = event.target.elements.userPassword.value;
    if (!usersList)
      throw new Error(
        `We don't have any users that have an account to our site`
      );
    const user: User | undefined = usersList.find(
      (user) => user.userId == userId
    );
    if (!user) {
      alert(
        `We can't find an account that match to your ID number... You can create an account :)`
      );
    } else if (password != user.userPassword) {
      alert(
        `${user.userFullName} the password don't match to your ID number... Try again`
      );
    } else {
      if (!link) 
        throw new Error(`We can't show the user page`);
      localStorage.setItem("user id", user.userId);
      localStorage.setItem("user name", user.userFullName);
      link.click();
    }
  } catch (error) {
    console.error(`something don't work with the log in function`);
  }
}

function btnAdd() {
  try {
    if (!form)
      throw new Error(`We don't have any element to add your user`);
    form.innerHTML = `
      <h3>Create a user:</h3>
      <form class="form__sign_in">
      <input type="text" name="newUserId" class="input" placeholder="Enter your ID number" required/>
      <br />
      <input type="password" name="newUserPassword" class="input" placeholder="Enter your password" required/>
      <br />
      <input type="text" name="newUserFullName" class="input" placeholder="Enter your full name           " required/>
      <br />
      <lable>Enter your date of birth:</lable> 
      <br />
      <input type="date" name="newUserBirthday" class="input" required/>
      <br />
      <input type="email" name="newUserEmail" class="input" placeholder="Enter your email" required/>
      <br />
      <input type="text" name="newUserPhone" class="input" placeholder="Enter your phone number" required/>
      <br />
      <input type="submit" id="sign_in_btn" value="Sign In" onclick="addUser(event)"/>
      </form>
  `;
  } catch (error) {
    console.error(`The form to add users have a problem`);
  }
}

function addUser(event) {
  try {
    event.preventDefault();
    const newUserId = event.target.elements.newUserId.value;
    const newUserPassword = event.target.elements.newUserPassword.value;
    const newUserFullName = event.target.elements.newUserFullName.value;
    const newUserBirthday = event.target.elements.newUserBirthday.value;
    const newUserEmail = event.target.elements.newUserEmail.value;
    const newUserPhone = event.target.elements.newUserPhone.value;
    usersList.push(
      new User(
        newUserId,
        newUserPassword,
        newUserFullName,
        newUserBirthday,
        newUserEmail,
        newUserPhone
      )
    );
    if (!form)
      throw new Error(`We don't have any element to add your user`);
    form.innerHTML = `<h1> The user has been succesfully created <h1>`;
  } catch (error) {
    console.error(`We didnt succeed to add the new user`);
  }
}

function showClubCards(clubCardsList) {
  try {
    if (!localStorage.getItem("user id"))
       throw new Error(`No user is log to the system`);
    if (clubCardsList.length == 0)
      throw new Error(`There is no club cards registed in the system`);
    const userClubCards = clubCardsList.filter(
      (user) => user.userId == localStorage.getItem("user id")
    );
    if (!clubCards)
      throw new Error(`We don't have a culb cards div to show you your cards`);
    if (!userClubCards)
      clubCards.innerHTML += `There is no club member in any store... \n ${localStorage.getItem("user name")}, it's time to go shopping`;
    else {
      clubCards.innerHTML = `<h2>Welcome ${localStorage.getItem("user name")}</h2>`;
      for (let i = 0; i < userClubCards.length; i++) {
        clubCards.innerHTML += `<div class="club_cards__store">
        <h3>Store: ${userClubCards[i].store.storeName}</h3>
        <h4>Amount of points: ${getAmountOfPoints(
          userClubCards[i].store.amountOfPoints,
          userClubCards[i].amountOfPoints
        )}</h4>
        <h4>Birthday discount:yes or no</h4>
      </div>
    `;
      }
    }
  } catch (error) {
    console.error(`error loading club cards for user`);
  }
}
