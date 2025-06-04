// let heading = document.getElementById('heading');
//         heading.onclick = function() {
//             heading.style.color = 'red';
// }
// // alert("안녕하세요");

// // confirem("안녕하세요");

// // let u_name = prompt("이름이 뭔가요");
// // document.writeln("<h1>" + u_name + " 반 갑</h1>");

// // console.log("<h1" + u_name + "반갑<h1></h1>") 

// // let width;
// // let height;

// // width = 200;
// // height =  50;
// // let area = width * height;
// // console.log(area)

// // const PI = 3.14;
// // let radius = prompt("반지름을 입력하세요.");
// // let area = PI * radius * radius;
// // console.log(area) 

// console.log("I'm a student");

let num1 = parseInt(prompt("1과목 입력:"))
let num2 = parseInt(prompt("2과목 점수 입력:"))
let num3 = parseInt(prompt("3과목 점수 입력:"))

// 입력을 받은 경우
if ((num1+num2+num3 / 3 >= 60)) {
    if (num1 >= 40 && num2 >= 40 && num3 >= 40) {
        console.log("합격")
    } else {
        console.log("불합격")
    }
//    (parseInt(num)%3==0) ? console.log("3의 배수") : console.log("3의 배수가 아닙니다"); 
}
else {
    console.log("불합격")
}
// 입력을 받지 않은 경우
    // console.log("값이 입력되지 않았습니다")