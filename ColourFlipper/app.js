const colours = ["green", "red", "rgba(133,122,200)", "#f15025"]


// Get Elements
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

// Everytime btn is clicked this will run 
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    // Display colour text and bg
    document.body.style.backgroundColor = colours[randomNumber]
    colour.textContent = colours[randomNumber];
})

function getRandomNumber() {
    // Returns a random number between 0 and the amount of elements in array
    return Math.floor(Math.random()*colours.length);
}