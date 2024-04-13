const textInputButton = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkWord = () => {

    const inputValue = textInputButton.value
        .toLowerCase()
        .replace(/[^A-Za-z0-9]/g, "")
    console.log(inputValue);
    const reversedInputValue = [...inputValue].reverse().join('');

    return inputValue === reversedInputValue;
};

checkButton.addEventListener("click", () => {
    if (!textInputButton.value) {
        alert("Please input a value");
    } else {
        const isPalindrome = checkWord();

        if (isPalindrome) {
            resultDiv.innerText = `${textInputButton.value} is a palindrome`;
        } else {
            resultDiv.innerText = `${textInputButton.value} is not a palindrome`;
        }
        resultDiv.classList.remove("hidden");
    }
});
