// let now = new Date();
// // 로컬 형식으로 표시하기
// console.log(`현재 시각은 ${now.toLocaleString()}`);

// let arr1 = new Array ();
// let numbers = ["one", "two", "three", "four"];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let date  = new Date();

// date = new Date('2024-02-23T18:00:00Z');
// // 맨 끝에 Z = 협정 세계시 (영국 기준))
// console.log(date);


// 예제3
// let start = new Date('2025-06-10');
// let today = new Date();

// let passday = today.getTime() - start.getTime();
// passday = Math.round(passday/1000/60/60/24);

// console.log(passday);
// document.getElementById('p_day').innerText = passday
// // document.getElementById('p_day') = passday

// 예제4
// let seed = prompt("전체 응모자 수 : ");
// let seed = 100;
// let picked = Math.floor((Math.random() * seed) + 1);

// 예제4
// document.getElementById('s').innerText = seed
// document.getElementById('p').innerText = picked

// window.open("popup.html", "notice", "width=500, height=400");
//window.oepn(경로, 창 이름, 창 옵션)

const b_left = window.screenX; // 브라우저의 왼쪽이 화면에서 어디있는지를 나타냄
const b_top = window.screenY; // 브라우저의 상단이 화면에서 어디있는지를 나타냄

const p_left = b_left + 100;
const p_top = b_top + 100;

function openPopup() {
    let newWin = window.open('popup.html','pop',`width=500, height=400, left=${p_left}, top=${p_top}`)
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.")
    }
}
// window.open('popup.html', 'pop', `width=500, height=400, left=${p_left}, top=${p_top}`)

