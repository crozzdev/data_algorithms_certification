const $inputCash = document.getElementById("cash");
const $purchaseBtn = document.getElementById("purchase-btn");
const $totalDisplayDiv = document.querySelector(".total-display");
const $changeDueDiv = document.getElementById("change-due");
const $changeDrawerDiv = document.querySelector(".change-drawer");




const CURRENCIES = [
    ["PENNY", 0.01],
    ["NICKLE", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
]



let price = 19.5;


let cid = [
    ["PENNY", 1.01, "Pennies"],
    ["NICKEL", 2.05, "Nickels"],
    ["DIME", 3.1, "Dimes"],
    ["QUARTER", 4.25, "Quarters"],
    ["ONE", 90, "Ones"],
    ["FIVE", 55, "Fives"],
    ["TEN", 20, "Tens"],
    ["TWENTY", 60, "Twenties"],
    ["ONE HUNDRED", 100, "Hundreds"],
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

    $changeDrawerDiv.innerHTML = "<p>Change in drawer:</p>";
    for (let i = 0; i < cid.length; i++) {
        $changeDrawerDiv.innerHTML += `<p>${cid[i][2]}: $${cid[i][1]}`
    }
}



const calculateDraw = (cash, open) => {
    let outputDrawElements = ``
    let toReturnCopy = cash
    if(!open){
        outputDrawElements = "<p>Status: CLOSED</p>"
    } else {
        outputDrawElements = "<p>Status: OPEN</p>"
    }
    CURRENCIES.slice().reverse().forEach((currency, index) => {
        const currencyValue = Number((currency[1]).toFixed(2))
        const currencyLabel = currency[0]
        let currToReturn = 0
        if (toReturnCopy >= currencyValue && Number((cid[cid.length - index - 1][1]).toFixed(2)) > 0) {
            while (toReturnCopy >= currencyValue && Number((cid[cid.length - index - 1][1]).toFixed(2)) >= currencyValue) {
                currToReturn += currencyValue;
                toReturnCopy = Number((toReturnCopy - currencyValue).toFixed(2));
                cid[cid.length - index - 1][1] = Number((cid[cid.length - index - 1][1] - currencyValue).toFixed(2));
            }
            outputDrawElements += `<p>${currencyLabel}: $${currToReturn.toFixed(2)}</p>`
        }
    })
    if (toReturnCopy > 0) {
        return `<p>Status: INSUFFICIENT_FUNDS</p>`;
    }
    return outputDrawElements;
}


$purchaseBtn.addEventListener("click", () => {
    const cash = Number($inputCash.value)
    let status
    if (!$inputCash.value || isNaN(cash)) {
        status = "Please enter a valid input"
    } else if (cash < price) {
        status = "Customer does not have enough money to purchase the item"
        alert(status);
    } else if (cash === price) {
        status = "<p>No change due - customer paid with exact cash</p>"
    } else {
        const toReturn = cash - price;
        const totalCid = cid.reduce((acc, num) => acc + num[1], 0);
        if (toReturn > totalCid) {
            status = "<p>Status: INSUFFICIENT_FUNDS</p>"
        } else if (toReturn == totalCid) {
            status = calculateDraw(toReturn, false)
        } else {
            status = calculateDraw(toReturn, true)
        }
    }
    outputMessage(status)
    updateDrawerDisplay()
})

window.onload = () => {
    $totalDisplayDiv.textContent = `Total: $${price}`;
    updateDrawerDisplay()
}
