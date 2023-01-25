var registerForm = document.querySelector("#form");
function handleUser(event) {
    try {
        event.preventDefault();
        var gender = event.target.elements.gender.value;
        var username = event.target.elements.username.value;
        var password = event.target.elements.password.value;
        var email = event.target.elements.email.value;
        var theOfBirth = event.target.elements.theOfBirth.value;
        var country = event.target.elements.country.value;
        // const profileImage = imgSrc;
        userList.push(new User(gender, username, password, email, theOfBirth, country));
        console.log(userList);
        event.target.reset();
        renderCard(userList);
    }
    catch (error) {
        console.error(error);
    }
}
function renderCard(userList) {
    try {
        wrapper.replaceChildren();
        userList.forEach(function (user) {
            var userCard = document.createElement("div");
            userCard.classList.add("newCard");
            userCard.innerHTML = " \n    <ul>\n    <li>Gender: " + user.gender + "</li>\n    <li>Username: " + user.username + "</li>\n    <li>Password: " + user.password + "</li>\n    <li>Email: " + user.email + "</li>\n    <li>Date Of Birth: " + user.theOfBirth + "</li>\n    <li>country: " + user.country + "</li>\n    </ul>";
            // <img class="userImg" src="${user.getProfileImg()}"/>`;
            wrapper.appendChild(userCard);
        });
    }
    catch (error) {
    }
}
