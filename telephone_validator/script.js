const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const resultsDiv = document.getElementById("results-div")






checkBtn.addEventListener("click", () => {
    const input = userInput.value
    if(input === ""){
        alert("Please provide a phone number")
        return
    }else{
        

    }
})

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
})