// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Array of quotes
const quotes = [
    {quote: "Solve the problem, idiot", person: "Vinland"},
    {quote: "Solve the problem, idiot1", person: "Vinland1"},
    {quote: "Solve the problem, idiot2", person: "Vinland2"},
    {quote: "Solve the problem, idiot3", person: "Vinland3"},
    {quote: "Solve the problem, idiot4", person: "Vinland4"},
    {quote: "Solve the problem, idiot5", person: "Vinland5"},
    {quote: "Solve the problem, idiot6", person: "Vinland6"}
];

// Event Listener for button click
btn.addEventListener('click', function() {
    // Generate random index
    let random = Math.floor(Math.random() * quotes.length);

    // Set random quote and person to HTML elements
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
