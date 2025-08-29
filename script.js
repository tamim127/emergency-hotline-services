//  Heart Icons Functionalities:

const heartButtons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
for (let btn of heartButtons) {
    btn.addEventListener("click", function () {
        let current = parseInt(heartCount.innerText);
        heartCount.innerText = current + 1;
    });
}

// Copy button Functionalities:

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


//  call buttons Functionalities:


const callButtons = document.getElementsByClassName("call-btn");
const coinCount = document.getElementById("coin-count");
const historyBox = document.getElementById("call-history");

for (let btn of callButtons) {
    btn.addEventListener("click", function () {
        let coin = parseInt(coinCount.innerText);
        const coinCost = 20;

        if (coin < coinCost) {
            alert("Not enough coins! You need at least 20 coins to make a call");
            return;
        }

        coinCount.innerText = coin - coinCost;

        const card = btn.parentNode.parentNode
        const title = card.querySelector("h1").innerText;
        const number = card.querySelector(".argent-num").innerText;

        alert(`📞 Calling ${title} ${number}`);


 // call history Functionalities:
 

        const time = new Date().toLocaleTimeString();

        const div = document.createElement("div");
        div.className = "flex justify-between items-center bg-[#f2f2f2] text-[#5c5c5c] p-3 mb-2 rounded-lg";
        div.innerHTML = `
          <div>
            <h1>${title}</h1>
            <p>${number}</p>
          </div>
          <div>
            <p>${time}</p>
          </div>
        `;
        historyBox.appendChild(div);
    });
}



