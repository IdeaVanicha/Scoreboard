const oneButton = document.querySelector("#p1Button");
const oneDisplay = document.querySelector("#p1Display");

alert(oneButton);

const twoButton = document.querySelector("#p2Button");
const twoDisplay = document.querySelector("#p2Display");

const resetButton = document.querySelector("#reset");
const selector = document.querySelector("#winningScore");

let selectorVal = 3;
let oneScore = 0;
let twoScore = 0;
let isGameOver = false;

selector.addEventListener('change', function() {
    selectorVal = selector.value;
    reset();
})

resetButton.addEventListener('click', reset);

oneButton.addEventListener('click', function() {

    if (!isGameOver) {
        oneScore += 1;
        oneDisplay.textContent = oneScore;
    }

    if (oneScore == selectorVal) {
        isGameOver = true;
        oneDisplay.style.color = "green";
        twoDisplay.style.color = "red";
    }
})

twoButton.addEventListener('click', function() {
    
    if (!isGameOver) {
        twoScore += 1;
        twoDisplay.textContent = twoScore;
    }

    if (twoScore == selectorVal) {
        isGameOver = true;
        twoDisplay.style.color = "green";
        oneDisplay.style.color = "red";
    }
})

function reset() {
    oneScore = 0;
    twoScore = 0;
    oneDisplay.textContent = oneScore;
    twoDisplay.textContent = twoScore;
    twoDisplay.style.color = "#264653";
    oneDisplay.style.color = "#264653";
    isGameOver = false;
}