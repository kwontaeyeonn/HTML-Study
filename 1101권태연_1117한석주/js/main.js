
function openPopup() {
    window.open(".../1101권태연_1117한석주/popup/popup.html", "noticePopup", "width=500,height=500");
    let userN = localStorage.getItem("username");
    console.log(userN);
    let Uname = document.querySelector(".name");
    if (Uname) {
        if (userN) {
        Uname.innerHTML = `${userN}님`;
        Uname.href = "#";
        } else {
        Uname.innerText = "로그인";
        Uname.href = ".../1101권태연_1117한석주/html/login.html";
        }
    }
    }
    function showResult(event) {
    event.preventDefault();
    }
    function GB() {
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    openPopup();
}