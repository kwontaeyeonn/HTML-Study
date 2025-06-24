function openPopup() {
    const pleft = window.screenX;
    const ptop = window.screenY;
    const L = pleft + 10;
    const R = ptop + 10;
    window.open(
        "../popup/popup.html",
        "noticePopup",
        `width=600,height=500,left = ${L},top = ${R}`
    );
    let userN = localStorage.getItem("username");
    console.log(userN);
    let Uname = document.querySelector(".name");
    if (Uname) {
        if (userN) {
        Uname.innerHTML = `${userN}님`;
        Uname.href = "#";
        } else {
        Uname.innerText = "로그인";
        Uname.href = "../html/login.html";
        }
    }
    }
    function showResult(event) {
    event.preventDefault();
    }
    function GB() {
    let userN = localStorage.getItem("username");
    if (userN) {
        localStorage.removeItem("username");
        localStorage.removeItem("user");
        localStorage.removeItem("call");
        alert("로그아웃되었습니다.");
        openPopup();
    }else{
        alert("로그인을 해주세요")
    }
    }
    function M() {
    const name = localStorage.getItem("username");
    if (name) {
        const My = document.querySelector(".mypage").href="/mypage/mypage.html";
    } else {
        alert("로그인을 해주세요");
    }
    }
    function person() {
    const name = localStorage.getItem("username");
    if (name) {
        const one = (document.querySelector("#one").style.display = "flex");
        const first = (document.querySelector(".img").style.display = "none");
        const old = (document.querySelector("#oldone").style.display = "none");
        const foot = (document.querySelector(".footer").style.display = "none");
    } else {
        alert("로그인을 해주세요");
    }
    }
    function H() {
    const one = (document.querySelector("#one").style.display = "none");
    const first = (document.querySelector(".img").style.display = "flex");
    const old = (document.querySelector("#oldone").style.display = "none");
    const foot = (document.querySelector(".footer").style.display = "flex");
    }
    function oldperson() {
    const name = localStorage.getItem("username");
    if (name) {
        const one = (document.querySelector("#one").style.display = "none");
        const first = (document.querySelector(".img").style.display = "none");
        const old = (document.querySelector("#oldone").style.display = "flex");
        const foot = (document.querySelector(".footer").style.display = "none");
    } else {
        alert("로그인을 해주세요");
    }
    }
    function none() {
    alert("이페이지는 개발중입니다.");
    }
    function disapear() {
    const name = document.querySelector(".OF h2").innerText;
    localStorage.setItem("please1", name);
    const OF = (document.querySelector(".OF").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }
    function disapear1() {
    const name = document.querySelector(".OS h2").innerText;
    localStorage.setItem("please2", name);
    const OS = (document.querySelector(".OS").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }
    function disapear2() {
    const name = document.querySelector(".OT h2").innerText;
    localStorage.setItem("please3", name);
    const OT = (document.querySelector(".OT").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }

    function disapear3() {
    const name = document.querySelector(".Pf h2").innerText;
    localStorage.setItem("please4", name);
    const Pf = (document.querySelector(".Pf").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }
    function disapear4() {
    const name = document.querySelector(".Ps h2").innerText;
    localStorage.setItem("please5", name);
    const Pf = (document.querySelector(".Ps").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }
    function disapear5() {
    const name = document.querySelector(".Pt h2").innerText;
    localStorage.setItem("please6", name);
    const Pf = (document.querySelector(".Pt").style.display = "none");
    alert(`${name}이 신청되었습니다.`);
    }

    document.addEventListener("DOMContentLoaded", function () {
    const classList = ["OF", "OS", "OT", "Pf", "Ps", "Pt"]; //리스트만들기

    classList.forEach((className, index) => { //인덱스번호
        const key = `please${index + 1}`; //플리즈는 1부터 시작이기때문에 +1
        const item = localStorage.getItem(key); //밸류를 아이템에다가받음
        if (item) {  //밸류가있다면
        const el = document.querySelector(`.${className}`);
        if (el) el.style.display = "none"; //디스플레이논상태유지
        }
    });
});