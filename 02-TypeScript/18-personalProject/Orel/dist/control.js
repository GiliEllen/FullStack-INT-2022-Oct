// 
var userIndex;
function checkMatchUserDetails(emailUser, passwordUser) {
    try {
        if (storageData === undefined)
            throw new Error("the storageData no exist");
        for (var i = 0; i < storageData.length; i++) {
            //@ts-ignore
            if (emailUser === lastUserIn.email.toLowerCase() && passwordUser === lastUserIn.password) {
                // userIndex = localStorage.users.findIndex( e => e.email == emailUser)
                // console.log(userIndex);
                userIndex = 0;
                localStorage.setItem("userIndex", userIndex.toString());
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
function checksIfUserExists(emailUser) {
    try {
        var find = users.filter(function (user) { return user.email === emailUser; });
        if (!find)
            throw new Error("the filter find not exist");
        if (find.length === 0)
            return false;
        else
            return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
function openMenuLogoutBtn() {
    try {
        var collapseUserLogout_1 = document.querySelector(".user-box-profile-collapse");
        var collapseUserLogoutIcon_1 = document.querySelector(".user-box-profile i");
        var userBoxProfileClick = document.querySelector('.user-box-profile ');
        ;
        userBoxProfileClick === null || userBoxProfileClick === void 0 ? void 0 : userBoxProfileClick.addEventListener('click', function (e) {
            collapseUserLogout_1.classList.toggle('active');
            if (collapseUserLogout_1.classList.contains('active')) {
                collapseUserLogoutIcon_1.style.rotate = '180deg';
            }
            else {
                collapseUserLogoutIcon_1.style.rotate = '0deg';
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function makeSectionsActive(element) {
    try {
        var containerMainAppDivs = document.querySelectorAll('.container-main-app div');
        containerMainAppDivs.forEach(function (ele) {
            ele.classList.remove("active");
        });
        element.classList.add('active');
        var buttons = document.querySelectorAll('.menu-navbar li button');
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });
    }
    catch (error) {
        console.log(error);
    }
}
function logout() {
    try {
        localStorage.setItem("userLogIn", "false");
    }
    catch (error) {
        console.log(error);
    }
}
function insideTheUser() {
    try {
        if (localStorage.getItem("userLogIn") === "true") {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
//---------------------------- LOGIN-/-Sign-Up--Pages------------------
// LOg in function
function handleSubmitSignIn(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, email = _a.email, password = _a.password, username = _a.username, gender = _a.gender;
        var errorMsgEmailInput = document.getElementById('errorMsgEmailInput');
        var errorMsgPasswordInput = document.getElementById('errorMsgPasswordInput');
        if (checksIfUserExists(email.value)) {
            errorMsgEmailInput.innerText = "This Email Exist in The System";
            errorMsgEmailInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInput.parentElement.classList.remove("empty");
        }
        if (email.value == '') {
            errorMsgEmailInput.innerText = "Please enter your ProList username or email address.";
            errorMsgEmailInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInput.parentElement.classList.remove("empty");
        }
        if (password.value == '') {
            errorMsgPasswordInput.innerText = "Please enter your password.";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else if (password.value.length <= 5) {
            errorMsgPasswordInput.innerText = "Password Must to be with 5 letter or more";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else if (password.value.length <= 5) {
            errorMsgPasswordInput.innerText = "Password Must to be with 5 letter or more";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgPasswordInput.parentElement.classList.remove("empty");
        }
        users.push(new Users(email.value, password.value, username.value, gender.value, false));
        // updateInfoToLocalStorage()
        ev.target.reset();
        return location.href = './login.html';
    }
    catch (error) {
        console.error(error);
    }
}
// Sign IN function
function handleSubmitLogIn(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, emailLogin = _a.emailLogin, passwordLogin = _a.passwordLogin;
        var errorMsgEmailInputLog = document.getElementById('errorMsgEmailInputLOG');
        var errorMsgPasswordInputLog = document.getElementById('errorMsgPasswordInputLOG');
        if (emailLogin.value == '') {
            errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address.";
            errorMsgEmailInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInputLog.parentElement.classList.remove("empty");
        }
        if (passwordLogin.value == '') {
            errorMsgPasswordInputLog.innerText = "Please enter your password.";
            errorMsgPasswordInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgPasswordInputLog.parentElement.classList.remove("empty");
        }
        // אם יש התאמה תעשה משהו
        console.log(checkMatchUserDetails(emailLogin.value, passwordLogin.value));
        if (checkMatchUserDetails(emailLogin.value, passwordLogin.value)) {
            ifRefresh();
            // updateInfoToLocalStorage()
            ev.target.reset();
            return location.href = './index.html';
        }
        else {
            var textWarning = document.getElementById('pNotLoginSucc');
            textWarning.innerHTML =
                "\n             <i class=\"fa-solid fa-triangle-exclamation\"></i>\n              The email or password not match!\n              ";
            textWarning.style.color = "red";
        }
    }
    catch (error) {
        console.error(error);
    }
}
//----------------------------------------------------------------------
function handleClickLogOut() {
    try {
        logout();
        location.reload();
    }
    catch (error) {
        console.log(error);
    }
}
//---------------------------Handle Click Function List Left-----------------
//home
function handleClickHomeList(ev) {
    try {
        var sectionsHome = document.querySelector('.sections-home');
        var lists = document.querySelectorAll('.list ');
        makeSectionsActive(sectionsHome);
        lists.forEach(function (list) {
            list.classList.add("active");
        });
    }
    catch (error) {
        console.log(error);
    }
}
//search
function handleClickSearchList(ev) {
    try {
        var sectionsSearch = document.querySelector('.sections-search');
        makeSectionsActive(sectionsSearch);
    }
    catch (error) {
        console.log(error);
    }
}
//library
function handleClickLibraryList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsLibrary = document.querySelector('.sections-library');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            makeSectionsActive(sectionsLibrary);
        }
    }
    catch (error) {
        console.log(error);
    }
}
//Create Album
function handleClickCreateAlbumList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsCreateAlbum = document.querySelector('.sections-create-album');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            makeSectionsActive(sectionsCreateAlbum);
            createListToOptions();
        }
    }
    catch (error) {
        console.log(error);
    }
}
//Liked Song
function handleClickLikedPhotosList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsLikedPhotos = document.querySelector('.liked-photos');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            makeSectionsActive(sectionsLikedPhotos);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleClickLists(ev) {
    try {
        var sectionsHome = document.querySelectorAll('.sections-home div');
        if (!sectionsHome)
            throw new Error("section Home Divs not exist");
        sectionsHome.forEach(function (e) {
            e.classList.remove("active");
            if ((e.getAttribute("datalist") !== null) && e.getAttribute("datalist") === ev.target.textContent) {
                var element = e;
                element.classList.add("active");
            }
            console.log();
        });
    }
    catch (error) {
        console.error(error);
    }
}
//--------------------------------------------------------------------------
//---------------------------Handle Submit Function List Left-----------------
function createListToOptions() {
    try {
        // sent data list to options
        var selectList_1 = document.getElementById('selectList');
        selectList_1.innerHTML = '';
        albums.forEach(function (album) {
            selectList_1.innerHTML += "<option value=\"" + album.name + "\">" + album.name + "</option>";
            console.log(album.name);
        });
        return;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function handleSubmitCreateAlbumsList(ev) {
    try {
        ev.preventDefault();
        var nameListValue = ev.target.elements.createListName.value.toString();
        console.log(nameListValue);
        createNewList(nameListValue, nameListValue, "sections-library");
        createListToOptions();
        ev.target.reset();
    }
    catch (error) {
        console.log(error);
    }
}
function handleSubmitCreatePhoto(ev) {
    try {
        ev.preventDefault();
        var createListToListValue_1 = ev.target.elements.selectList.value;
        var photoName = ev.target.elements.photoNameCreateImage.value;
        var date = ev.target.elements.photoDateCreateImage.value;
        var src = ev.target.elements.photoSrcCreateImage.value;
        var findIndex = albums.findIndex(function (album) { return album.name === createListToListValue_1; });
        var photoArr = albums[findIndex].photos;
        console.log(findIndex);
        console.log(albums[findIndex]);
        // make new Photo
        photoArr.push(new Photos(photoName, date, src));
        renderPhotoCard(photoArr, createListToListValue_1, "sections-library");
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
// Get and render Cards On DOM
//--------------------------------
function NewPhotoCard(namePhoto, date, src, albumName) {
    try {
        var index = Number(localStorage.getItem("userIndex"));
        var patten = "\n    <div class=\"photo-card\">\n    <img src=\"" + src + "\" alt=\"\">\n    <h3>" + namePhoto + "</h3>\n    <p>" + users[index].username + "</p>\n    <small>" + date + "</small>\n    <button class=\"collapse-play\">\n    <i class=\"fa-solid fa-add\"></i>\n</button>\n</div>\n    ";
        // const findIndex  = albums.findIndex(album => album.name === albumName)
        // const photoArr = albums[findIndex].photos
        // photoArr.push(new Photos(namePhoto,date, src))
        albums.forEach(function (album) {
            var _a;
            if (album.name === albumName) {
                (_a = album.photos) === null || _a === void 0 ? void 0 : _a.push(new Photos("" + namePhoto, "" + date, "" + src));
            }
        });
        return patten;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// create New list
function createNewList(nameList, titleList, classNameContainer) {
    var sectionsHome = document.querySelector("." + classNameContainer);
    var patten = "\n    <div id=\"" + nameList + "\" class=\"list\" class=\"" + nameList + "\">\n    <h4>" + titleList + "</h4>\n    <div class=\"recommended-list " + nameList + "\">\n    </div>\n</div>\n    ";
    sectionsHome.innerHTML += patten;
    albums.push(new Albums(nameList, []));
    return patten;
}
//Render All Cards On Dom
function renderPhotoCard(cards, containerClass, albumName) {
    var mainContainer = document.querySelector("." + containerClass);
    mainContainer.innerHTML = '';
    if (mainContainer === undefined)
        throw new Error('the Element not found');
    var AllCards = "";
    cards.forEach(function (photo) {
        AllCards += NewPhotoCard(photo.photoName, photo.date.toString(), photo.src);
    });
    mainContainer.innerHTML += AllCards;
    return AllCards;
}
function changeProfileUserName() {
    var nameProfile = document.querySelector('.user-box-profile h5');
    nameProfile.textContent = users[Number(localStorage.getItem("userIndex"))].username;
}
function renderLists() {
    try {
        var containerPlaylist = document.querySelector(".container-playlist");
        if (!containerPlaylist)
            throw new Error("the playlist container not exist");
        containerPlaylist.innerHTML = '';
        var html_1 = '';
        albums.forEach(function (album) {
            var tamp = "\n        <button onclick=\"handleClickLists(event)\"   class=\"playlistBTN " + album.name + "\">\n        " + album.name + "\n        </button>";
            html_1 += tamp;
        });
        containerPlaylist.innerHTML += html_1;
        return html_1;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
// function showALLlists(nameClassContainer:string){
// try {
//     const sectionsHome = document.querySelectorAll(`.${nameClassContainer} div`);
//         sectionsHome.forEach(e=>{
//             e.parentElement!.classList.add("active")})
// } catch (error) {
//     console.log(error);
// }
// }
// getArrayPhotoAlbumWithName("Jungle")
// function getArrayPhotoAlbumWithName(name:string){
//      try {
//      } catch (error) {
//         console.log(error);
//      }
// }
