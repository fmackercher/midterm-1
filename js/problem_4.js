const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
function countText() {
    var textLength = messageInput.value.length
    //var textLength = message.value.length;
    var charLeft = MAX_CHARACTERS - textLength;
    var charOver = textLength - MAX_CHARACTERS;
    if (charLeft < MAX_CHARACTERS) {
        messageInput.classList.add("is-valid");
        messageFeedback.classList.add("valid-feedback");
        messageFeedback.innerHTML = charLeft + " characters left";
    } else {
        messageInput.classList.add("invalid-feedback");
        messageFeedback.classList.add("invalid-feedback");
        messageFeedback.innerHTML = charOver + " characters too long";
    }
}

messageInput.addEventListener('input', countText);