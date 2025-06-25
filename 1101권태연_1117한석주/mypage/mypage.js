const please1 = localStorage.getItem("please1");
const please2 = localStorage.getItem("please2");
const please3 = localStorage.getItem("please3");
const please4 = localStorage.getItem("please4");
const please5 = localStorage.getItem("please5");
const please6 = localStorage.getItem("please6");

document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector("ul");

    // 확인하고 싶은 로컬스토리지 키들 (필요한 만큼)
    const keys = ["please1", "please2", "please3", "please4", "please5", "please6"];

    keys.forEach(function(key){
        const value = localStorage.getItem(key);
        if (value) {
        const li = document.createElement("li");
        li.textContent = value; // 혹은 `${key}: ${value}` 로 보여줘도 됨
        ul.appendChild(li);
        }
    });
});
function BACK(){
    window.location.href = "../html/main.html";   //메인으로돌아가기
}