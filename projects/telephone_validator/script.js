const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const resultsDiv = document.getElementById("results-div")


const numberRegex = /^(\d)?[ ]?(?:\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/;

const checkTelephoneNumber = (str) => {
    const validNumber = numberRegex.test(str);

    if(validNumber){
        const countryCode = numberRegex.exec(str)[1];

        return countryCode ? countryCode === "1" : true
    } else {
        return false
    }

    }



checkBtn.addEventListener("click", () => {
    const input = userInput.value
    if(input === ""){
        alert("Please provide a phone number")
        return
    }else{
        userInput.value = "";
        if(checkTelephoneNumber(input)){
            resultsDiv.innerHTML += `<p class="results-text">Valid US number: ${input}</p>`
        }else{
            resultsDiv.innerHTML += `<p class="results-text">Invalid US number: ${input}</p>`
        }

    }
})

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
})
