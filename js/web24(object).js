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
let seed = prompt("전체 응모자 수 : ");
let picked = Math.floor((Math.random() * seed) + 1);


document.getElementById(`s`).innerText = seed
document.getElementById(`p`).innerText = picked

window.open("popup.html", "notice", "width=500, height=400");
// window.oepn(경로, 창 이름, 창 옵션)