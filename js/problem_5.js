const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({ rel_rhy })).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
showRhymesButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = '';
    getRhymes((wordInput, data) => {
        var wordInput = document.getElementById('rhyme-with-input');
        for (const key in data) {
            const rhyme = data[key];
            const rhymeList = document.createElement('li');
            rhymeList.textContent = rhyme.rhyme_title;

            rhymesOutput.append(rhymeList);
        }
    });
});


clearButton.onclick = function removeValues() {
    var rhymes = document.getElementById('rhymes');
    rhymes.remove();
    var words = document.getElementById('rhyme-with-input');
    words.remove();

};

