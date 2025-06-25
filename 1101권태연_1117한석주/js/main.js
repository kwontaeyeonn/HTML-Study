function openPopup() {
    const pleft = window.screenX;
    const ptop = window.screenY;
    const L = pleft + 10;
    const R = ptop + 10;
    window.open(
        "../popup/popup.html",
        "noticePopup",
        `width=600,height=500,left=${L},top=${R}`
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
    } else {
        alert("로그인을 해주세요");
    }
}

function M() {
    const name = localStorage.getItem("username");
    if (name) {
        loadApplyList(); // 신청 목록 불러오기
        document.getElementById("mypageModal").style.display = "block";
        document.getElementById("modalOverlay").style.display = "block"; // 오버레이 표시
    } else {
        alert("로그인을 해주세요");
    }
}

function closeMypage() {
    document.getElementById("mypageModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none"; // 오버레이 숨김
}

// 홈화면 박스 보여주는 함수 추가
function showHome() {
    const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
    if (homeBox) homeBox.style.display = "block";

    // 콘텐츠 숨김
    const one = document.querySelector("#one");
    const oldone = document.querySelector("#oldone");
    const imgArea = document.querySelector(".img");
    const footer = document.querySelector(".footer");

    if (one) one.style.display = "none";
    if (oldone) oldone.style.display = "none";
    if (imgArea) imgArea.style.display = "flex";
    if (footer) footer.style.display = "flex";
}

// 1인 복지 클릭
function person() {
    const name = localStorage.getItem("username");
    if (name) {
        // 홈 박스 숨기기
        const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
        if (homeBox) homeBox.style.display = "none";

        const one = document.querySelector("#one");
        const oldone = document.querySelector("#oldone");
        const imgArea = document.querySelector(".img");
        const footer = document.querySelector(".footer");

        if (one) one.style.display = "none";
        if (oldone) oldone.style.display = "flex";
        if (imgArea) imgArea.style.display = "none";
        if (footer) footer.style.display = "none";
    } else {
        alert("로그인을 해주세요");
    }
}

// 노인 복지 클릭
function oldperson() {
    const name = localStorage.getItem("username");
    if (name) {
        // 홈 박스 숨기기
        const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
        if (homeBox) homeBox.style.display = "none";

        const one = document.querySelector("#one");
        const oldone = document.querySelector("#oldone");
        const imgArea = document.querySelector(".img");
        const footer = document.querySelector(".footer");

        if (one) one.style.display = "flex";
        if (oldone) oldone.style.display = "none";
        if (imgArea) imgArea.style.display = "none";
        if (footer) footer.style.display = "none";
    } else {
        alert("로그인을 해주세요");
    }
}

// 홈 버튼 클릭시 홈화면 보이기
function H() {
    showHome();
}

function none() {
    alert("이페이지는 개발중입니다.");
}

function disapear() {
    const name = document.querySelector(".OF h2").innerText;
    localStorage.setItem("please1", name);
    const OF = document.querySelector(".OF");
    if (OF) OF.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}
function disapear1() {
    const name = document.querySelector(".OS h2").innerText;
    localStorage.setItem("please2", name);
    const OS = document.querySelector(".OS");
    if (OS) OS.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}
function disapear2() {
    const name = document.querySelector(".OT h2").innerText;
    localStorage.setItem("please3", name);
    const OT = document.querySelector(".OT");
    if (OT) OT.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}
function disapear3() {
    const name = document.querySelector(".Pf h2").innerText;
    localStorage.setItem("please4", name);
    const Pf = document.querySelector(".Pf");
    if (Pf) Pf.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}
function disapear4() {
    const name = document.querySelector(".Ps h2").innerText;
    localStorage.setItem("please5", name);
    const Ps = document.querySelector(".Ps");
    if (Ps) Ps.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}
function disapear5() {
    const name = document.querySelector(".Pt h2").innerText;
    localStorage.setItem("please6", name);
    const Pt = document.querySelector(".Pt");
    if (Pt) Pt.style.display = "none";
    alert(`${name}이 신청되었습니다.`);
}

document.addEventListener("DOMContentLoaded", function () {
    const classList = ["OF", "OS", "OT", "Pf", "Ps", "Pt"];

    classList.forEach((className, index) => {
        const key = `please${index + 1}`;
        const item = localStorage.getItem(key);
        if (item) {
            const el = document.querySelector(`.${className}`);
            if (el) el.style.display = "none";
        }
    });
});

function loadApplyList() {
    const listEl = document.getElementById("applyList");
    listEl.innerHTML = ""; // 초기화

    const applyKeys = ["please1", "please2", "please3", "please4", "please5", "please6"];

    applyKeys.forEach((key) => {
        const value = localStorage.getItem(key);
        if (value) {
            const li = document.createElement("li");
            li.textContent = value;
            listEl.appendChild(li);
        }
    });

    if (listEl.children.length === 0) {
        const li = document.createElement("li");
        li.textContent = "신청 내역이 없습니다.";
        listEl.appendChild(li);
    }
}
