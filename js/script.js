var quotes = [
  {
    quote: "It's a trap!",
    source: "Admiral Ackbar",
    citation: "Star Wars, Return of the Jedi",
    year: 1983,
  },
  {
    quote: "I know.",
    source: "Han Solo",
    citation: "Star Wars, Empire Strikes Back",
    year: 1980,
  },
  {
    quote: "You underestimate my powers",
    source: "Anakin Skywalker",
    citation: "Star Wars, Revenge of the Sith",
    year: 2005,
  },
  {
    quote: "Luke, I am your father.",
    source: "Darth Vader",
    citation: "Star Wars, Empire Strikes Back",
    year: 1980,
  },
  {
    quote: "That's no moon.",
    source: "Obi-wan Kenobi",
    citation: "Star Wars, A New Hope",
    year: 1977,
  }
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function print(message) {
	var quoteDiv = document.getElementById('quote-box');
	quoteDiv.innerHTML = message;
}

function getRandomQuote(){
  // generate a random number based on the lenth on the quotes array
  var i = Math.floor(Math.random() * quotes.length - 1) + 1;
  // use that random # generated to get a random quote from the array
  var randomQuote = quotes[i];
  return randomQuote;
}

function printQuote(){
  // assigns a random quote to variable
  var randomQuote = getRandomQuote();
  var message = "";
  //assigns randomQuote to the message to be printed
  message += '<p class="quote">'+ randomQuote.quote +'</p>';
  message += '<p class="source">'+ randomQuote.source;
  // if statements check citation and year in quotes array
  if (randomQuote.citation !== null) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== null) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  message += '</p>'
  print(message);
}
