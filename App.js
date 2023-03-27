import React, { useState } from 'react';
import './style.css';

// This is a React component that displays a random quote when the "New Quote" button is clicked
function App() {
  // state variables to store the quote and author
  const [quote, setQuote] = useState(
    'Click New Quote to generate a Random Quote'
  );
  const [author, setAuthor] = useState('');

  // function to fetch a random quote from the API
  const quotes = [
    {
      content: 'Be the change that you wish to see in the world.',
      author: 'Mahatma Gandhi',
    },
    {
      content: 'No one can make you feel inferior without your consent.',
      author: 'Eleanor Roosevelt',
    },
    {
      content: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      content: 'If you want to lift yourself up, lift up someone else.',
      author: 'Booker T. Washington',
    },
    {
      content: "Nothing is impossible, the word itself says 'I'm possible'!",
      author: 'Audrey Hepburn',
    },
    {
      content: "It always seems impossible until it's done.",
      author: 'Nelson Mandela',
    },
  ];

  let prevIndex;
  const getQuote = () => {
    // get a random index from the quotes array
    let randomIndex = Math.floor(Math.random() * quotes.length);

    // check if the index is the same as before
    if (randomIndex === prevIndex) {
      // choose another index
      randomIndex = Math.floor(Math.random() * quotes.length);
    }

    // get the random quote from the quotes array
    const randomQuote = quotes[randomIndex];

    // set the state variables to the quote and author from the array
    setQuote(randomQuote.content);
    setAuthor(randomQuote.author);
    // set the prevIndex to the current index
    prevIndex = randomIndex;
  };

  // return the JSX to render
  return (
    <div className="App">
      <h2 className="heading">Random Quote Generator</h2>
      <div id="quote-box">
        {/* display the quote and author */}
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        {/* button to fetch a new quote */}
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
        {/* link to tweet the quote */}
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
      <p className="developer">Developed by Naqhid</p>
    </div>
  );
}

export default App;
