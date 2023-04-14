const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3");
const status4 = document.getElementById("status4");
const status5 = document.getElementById("status5");


btn1.addEventListener("click", function () {
    if (btn1.textContent == "禁止") {
        status1.textContent = "禁止停車";
        btn1.textContent = "開啟";
        btn1.className = "btn btn-outline-success";
    } else if (btn1.textContent == "開啟") {
        status1.textContent = "可以停車";
        btn1.textContent = "禁止";
        btn1.className = "btn btn-danger";
    }
})
btn2.addEventListener("click", function () {
    if (btn2.textContent == "禁止") {
        status2.textContent = "禁止停車";
        btn2.textContent = "開啟";
        btn2.className = "btn btn-outline-success";
    } else if (btn2.textContent == "開啟") {
        status2.textContent = "可以停車";
        btn2.textContent = "禁止";
        btn2.className = "btn btn-danger";
    }
})
btn3.addEventListener("click", function () {
    if (btn3.textContent == "禁止") {
        status3.textContent = "禁止停車";
        btn3.textContent = "開啟";
        btn3.className = "btn btn-outline-success";
    } else if (btn3.textContent == "開啟") {
        status3.textContent = "可以停車";
        btn3.textContent = "禁止";
        btn3.className = "btn btn-danger";
    }
})
btn4.addEventListener("click", function () {
    if (btn4.textContent == "禁止") {
        status4.textContent = "禁止停車";
        btn4.textContent = "開啟";
        btn4.className = "btn btn-outline-success";
    } else if (btn4.textContent == "開啟") {
        status4.textContent = "可以停車";
        btn4.textContent = "禁止";
        btn4.className = "btn btn-danger";
    }
})
btn5.addEventListener("click", function () {
    if (btn5.textContent == "禁止") {
        status5.textContent = "禁止停車";
        btn5.textContent = "開啟";
        btn5.className = "btn btn-outline-success";
    } else if (btn5.textContent == "開啟") {
        status5.textContent = "可以停車";
        btn5.textContent = "禁止";
        btn5.className = "btn btn-danger";
    }
})


