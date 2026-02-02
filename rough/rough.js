let price = 329.1349382348372;
const buyBtn = document.querySelector("#buy-btn");

buyBtn.addEventListener("click", buttonClicked);

function buttonClicked() {
    alert("Clicked the button");
}

buyBtn.textContent = `Buy $${Number(price).toFixed(2)}`;