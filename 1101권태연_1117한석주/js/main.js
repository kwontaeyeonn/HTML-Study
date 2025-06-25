// 팝업 열기 함수
function openPopup() {
    const pleft = window.screenX;  // 현재 창의 화면 X 좌표
    const ptop = window.screenY;   // 현재 창의 화면 Y 좌표
    const L = pleft + 10;          // 팝업 왼쪽 위치 (현재 창 기준 +10)
    const R = ptop + 10;           // 팝업 위쪽 위치 (현재 창 기준 +10)

    // 팝업 창 열기
    window.open(
        "../popup/popup.html",
        "noticePopup",
        `width=600,height=500,left=${L},top=${R}`
    );

    // 로컬스토리지에서 username 가져오기
    let userN = localStorage.getItem("username");
    console.log(userN);

    // .name 클래스를 가진 요소 찾기
    let Uname = document.querySelector(".name");
    if (Uname) {
        if (userN) {
            // 로그인 상태면 사용자 이름 표시 및 href 비활성화
            Uname.innerHTML = `${userN}님`;
            Uname.href = "#";
        } else {
            // 로그인 안 되어있으면 '로그인' 텍스트 표시 및 로그인 페이지 링크
            Uname.innerText = "로그인";
            Uname.href = "../html/login.html";
        }
    }
}

// 기본 form 제출 방지용 함수 (사용처 확인 필요)
function showResult(event) {
    event.preventDefault();
}

// 로그아웃 처리 함수
function GB() {
    let userN = localStorage.getItem("username");
    if (userN) {
        // 로그인 되어 있으면 로컬스토리지 값 삭제 후 팝업 열기
        localStorage.removeItem("username");
        localStorage.removeItem("user");
        localStorage.removeItem("call");
        alert("로그아웃되었습니다.");
        openPopup();
    } else {
        alert("로그인을 해주세요");
    }
}

// 마이페이지 모달 열기 함수
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

// 마이페이지 모달 닫기 함수
function closeMypage() {
    document.getElementById("mypageModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none"; // 오버레이 숨김
}

// 홈화면 박스 보여주는 함수
function showHome() {
    const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
    if (homeBox) homeBox.style.display = "block";

    // 홈화면 콘텐츠 숨기기 및 보이기 조절
    const one = document.querySelector("#one");
    const oldone = document.querySelector("#oldone");
    const imgArea = document.querySelector(".img");
    const footer = document.querySelector(".footer");

    if (one) one.style.display = "none";
    if (oldone) oldone.style.display = "none";
    if (imgArea) imgArea.style.display = "flex";
    if (footer) footer.style.display = "flex";
}

// 1인 복지 클릭 시 처리 함수
function person() {
    const name = localStorage.getItem("username");
    if (name) {
        // 홈 박스 숨기기
        const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
        if (homeBox) homeBox.style.display = "none";

        // 화면 구성 변경
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

// 노인 복지 클릭 시 처리 함수
function oldperson() {
    const name = localStorage.getItem("username");
    if (name) {
        // 홈 박스 숨기기
        const homeBox = document.querySelector(".box") || document.getElementById("homeBox");
        if (homeBox) homeBox.style.display = "none";

        // 화면 구성 변경
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

// 개발 중인 페이지 알림 함수
function none() {
    alert("이 페이지는 개발중입니다.");
}

// 신청하기 후 해당 박스 숨기고 로컬스토리지에 저장 및 알림
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

// 페이지 로드 시 로컬스토리지에 신청 기록이 있으면 해당 박스 숨김 처리
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

// 신청 목록을 모달 내 리스트에 출력하는 함수
function loadApplyList() {
    const listEl = document.getElementById("applyList");
    listEl.innerHTML = ""; // 기존 내용 초기화

    const applyKeys = ["please1", "please2", "please3", "please4", "please5", "please6"];

    applyKeys.forEach((key) => {
        const value = localStorage.getItem(key);
        if (value) {
            const li = document.createElement("li");
            li.textContent = value;
            listEl.appendChild(li);
        }
    });

    // 신청 내역 없으면 안내 문구 표시
    if (listEl.children.length === 0) {
        const li = document.createElement("li");
        li.textContent = "신청 내역이 없습니다.";
        listEl.appendChild(li);
    }
}

// 슬라이드 쇼 관련 변수 및 요소
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// 특정 인덱스 슬라이드 보여주기 함수
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

// 이전 슬라이드 보여주기
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// 다음 슬라이드 보여주기
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// DOM 로드 완료 시 첫 번째 슬라이드 보여주기
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    // 3초(3000ms)마다 자동으로 다음 슬라이드 보여주기
    setInterval(nextSlide, 3000);
});
