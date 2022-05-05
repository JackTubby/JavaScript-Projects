const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get elements
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function() {
    // init hexColour variable
    let hexColour = '#';
    // Loop 6 times (hex contains 6 chars)
    for(let i = 0; i < 6; i++){
        // Append random onto the hex
        hexColour += hex[getRandomNumber()]
    }

    // Display
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
})

// Get random number from hex array length
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}