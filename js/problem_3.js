const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
let count = 0;

clickCountButton.onclick = function () {
    count++;
    if (count === 1) {
        clickCountButton.innerHTML = "You clicked the button " + count + " time";
    } else {
        clickCountButton.innerHTML = "You clicked the button " + count + " times";
    }
};