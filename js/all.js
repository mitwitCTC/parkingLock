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
    if (btn1.textContent == "車位管制") {
        status1.textContent = "擋板升起";
        btn1.textContent = "車位開放";
        btn1.className = "btn btn-outline-success";
    } else if (btn1.textContent == "車位開放") {
        status1.textContent = "擋板降下";
        btn1.textContent = "車位管制";
        btn1.className = "btn btn-danger";
    }
})
btn2.addEventListener("click", function () {
    if (btn2.textContent == "車位管制") {
        status2.textContent = "擋板升起";
        btn2.textContent = "車位開放";
        btn2.className = "btn btn-outline-success";
    } else if (btn2.textContent == "車位開放") {
        status2.textContent = "擋板降下";
        btn2.textContent = "車位管制";
        btn2.className = "btn btn-danger";
    }
})
btn3.addEventListener("click", function () {
    if (btn3.textContent == "車位管制") {
        status3.textContent = "擋板升起";
        btn3.textContent = "車位開放";
        btn3.className = "btn btn-outline-success";
    } else if (btn3.textContent == "車位開放") {
        status3.textContent = "擋板降下";
        btn3.textContent = "車位管制";
        btn3.className = "btn btn-danger";
    }
})
btn4.addEventListener("click", function () {
    if (btn4.textContent == "車位管制") {
        status4.textContent = "擋板升起";
        btn4.textContent = "車位開放";
        btn4.className = "btn btn-outline-success";
    } else if (btn4.textContent == "車位開放") {
        status4.textContent = "擋板降下";
        btn4.textContent = "車位管制";
        btn4.className = "btn btn-danger";
    }
})
btn5.addEventListener("click", function () {
    if (btn5.textContent == "車位管制") {
        status5.textContent = "擋板升起";
        btn5.textContent = "車位開放";
        btn5.className = "btn btn-outline-success";
    } else if (btn5.textContent == "車位開放") {
        status5.textContent = "擋板降下";
        btn5.textContent = "車位管制";
        btn5.className = "btn btn-danger";
    }
})


