// function addNumber() { //함수선언
//     let num1 = 2;
//     let num2 = 3;
//     let sum = num1 + num2;
//     console.log(`결괏값: ${sum}`)    
// }
// addNumber();
// addNumber();

// var sum = 0;
// function addNumber() {
//     // var result;
//     sum = 10 + 20;
//     result = 10 * 20;
// }
// addNumber();
// console.log(sum);
// console.log(result);

// var x = 10;
// function displayNumber() {
//     console.log(`x is ${x}`)
//     console.log(`y is ${y}`)
//     // var y = 20; // 지역 변수 선언 및 값 할당
//     // let y = 20; // 아예 오류 발생
// }
// displayNumber();

// var a = 3;
// var a = 5;
// console.log(a); 

// let a = 3;
// let a = 5;
// console.log(a);

// function multiple(a,b = 5, c = 10) {
//     return a*b+c;
// }
// multiple(5, 10, 20);
// multiple(10,20);
// multiple(30);

// console.log();

// let sum = function(a,b) {
//     return a + b;
// }
// console.log(`함수실행결과 : ${sum(10,20)}`)

// (function(a,b) {
//     sum = a+b;
// }(100,200));
// console.log(`함수실행결과: ${sum}`)

let sum = (a,b) => a+b;

console.log(`함수실행결과 : ${sum(10,20)}`)