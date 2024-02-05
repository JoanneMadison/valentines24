import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


const phrases = [ 
      "No", 
      "You can't do that",
      "You REALLY can't do that",
      "Are you sure?", 
      "Really sure?", 
      "Pookie please", 
      "I'm gonna cry", 
      "You're breaking my heart :(", 
      "Ok you're really not playing around :0", 
];

function App() {

  const [noCount, setNoCount] = useState(0);
  const [yesPress, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() { 
    return phrases[Math.min(noCount, phrases.length - 1)];
  }


  return (
    <div className="valentine-container">
      {yesPress ? (
        <>
          {/* add a a photo of both of us here.*/}
          <img src={logo} className="App-logo" alt="logo" />
          <div className="accept"> Yay!! Thanks Pookie!! &lt;3</div>
        </>
      ) : (

        <>
          {/* Add a valentine's day photo here.*/}
          <iframe 
            src="https://giphy.com/embed/XYm7qC0WfvhGB3B1HN" 
            width="480" 
            height="480" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen>

            </iframe>
            <p>
              <a href="https://giphy.com/gifs/valentine-valentines-day-vday-XYm7qC0WfvhGB3B1HN"></a>
            </p>
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton" 
              style = {{fontSize: yesButtonSize,}}
              onClick = {() => setYesPressed(true)}
            >
            Yes
            </button>
              
            <button 
              className="noButton" 
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
