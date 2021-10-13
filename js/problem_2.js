// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if (num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');


// Write your code here
thingInput.onchange = function updateValue() {
    var userInput = thingInput.value;
    console.log(userInput)
    if (userInput == 1) {
        thingCountOutput.textContent = "You added " + userInput + " thing";
    } else {
        thingCountOutput.textContent = "You added " + userInput + " things";
    }
};

