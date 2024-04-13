const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const showAlertMessage = () => {
    outputDiv.classList.remove("output", "hidden");
    outputDiv.classList.add("alert_message");
}

const showOutputMessage = () => {
    outputDiv.classList.remove("alert_message", "hidden");
    outputDiv.classList.add("output");
}

const decimalToRoman = (num) => {

    if (num === 0) {
        return '';
    } else {
        for (let i = 0; i < decimalValue.length; i++) {
            if (num >= decimalValue[i]) {
                return romanNumeral[i] + decimalToRoman(num - decimalValue[i]);
            }
        }
    }

}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);


    if (!numberInput.value || isNaN(inputInt)) {
        outputDiv.innerText = "Please enter a valid number";
        showAlertMessage();
        return;
    } else if (inputInt < 1) {
        outputDiv.innerText ="Please enter a number greater than or equal to 1";
        showAlertMessage();
        return;
    } else if (inputInt > 3999) {
        outputDiv.innerText ="Please enter a number less than or equal to 3999";
        showAlertMessage();
        return;
    } else {
        outputDiv.innerText = decimalToRoman(inputInt);
        showOutputMessage();
        numberInput.value = "";
    }    
}

convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkUserInput();
    }
})