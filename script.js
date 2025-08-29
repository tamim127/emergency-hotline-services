//  Heart Icons Functionalities:

const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
for (let btn of heartButtons) {
    btn.addEventListener("click", function () {
        let current = parseInt(heartCount.innerText);
        heartCount.innerText = current + 1;
    });
}

// Copy button Functionalities

const copyButtons = document.querySelectorAll(".copy-btn");
const copyCount = document.getElementById("copy-count");


copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const card = button.closest(".card");
        const number = card.querySelector(".argent-num").textContent;


        navigator.clipboard.writeText(number)
            .then(function () {

                let count = parseInt(copyCount.textContent);
                count = count + 1 + " ";
                copyCount.textContent = count;

                alert("Number Copied successfully!");
            })
            .catch(function (err) {
                console.error("Failed to copy:", err);
            });
    });
});
