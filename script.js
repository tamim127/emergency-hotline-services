//  Heart Icons Functionalities:

const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
for (let btn of heartButtons) {
    btn.addEventListener("click", function () {
        let current = parseInt(heartCount.innerText);
        heartCount.innerText = current + 1;
    });
}
