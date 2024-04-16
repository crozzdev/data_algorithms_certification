const $inputCash = document.getElementById("cash");
const $purchaseBtn = document.getElementById("purchase-btn");
const $totalDisplayDiv = document.querySelector(".total-display");
const $changeDueDiv = document.getElementById("change-due");
const $drawerDisplayParagraphs = document.querySelectorAll(".drawer-display")


const CURRENCY = {
    PENNY: 0.01,
    NICKLE: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
}


let price = 1.87;
let cash = 100;


let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];
let drawCash = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
];


const clearOutput = () => {
    $inputCash.value = "";
    $changeDueDiv.innerHTML = "";

}

const outputMessage = msg => {
    clearOutput();
    $changeDueDiv.innerHTML = msg;
}


const updateDrawerDisplay = () => {

        for (let i = 0; i < $drawerDisplayParagraphs.length; i++) {
            let item = $drawerDisplayParagraphs[i]
            item.textContent += ` ${cid[i][1]}`
        }
    }



const calculateDraw = cash => {
    //TODO: Create the calculation of the draw and the output message
    const outputMsg = ``


}

$purchaseBtn.addEventListener("click", () => {
    const input = Number($inputCash.value)
    if (!$inputCash.value || isNaN(input)) {
        outputMessage("Please enter a valid input")
        return;
    } else if (input < price) {
        outputMessage("Customer does not have enough money to purchase the item")
        return
    } else if (input === price) {
        outputMessage("No change due - customer paid with exact cash")
        return
    } else {
        calculateDraw(input);
        updateDrawerDisplay();
    }
})

window.onload = () => {
    $totalDisplayDiv.textContent = `Total: $${price}`;
    updateDrawerDisplay()
}
