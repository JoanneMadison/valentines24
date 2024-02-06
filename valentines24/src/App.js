import logo from './logo.svg';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from './components/carousel.js'
import './App.css';


const phrases = [ 
      "No", 
      "You can't do that",
      "You REALLY can't do that",
      "Are you sure?", 
      "Really sure?....", 
      "Pookie please....", 
      "I'm gonna cry :(", 
      "You're breaking my heart </3", 
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
          <Carousel />
          <div className="accept"> 
            <h1>Yay!! Thanks Pookie!! &lt;3</h1>
          </div>
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
          <div className="paragraphText">
            <h1>Will you be my valentine?</h1>
          </div>
          <div>
            <Button
              className="yesButton" 
              style = {{fontSize: yesButtonSize,}}
              onClick = {() => setYesPressed(true)}
              variant = "success"
              size = "lg"
            >
            Yes
            </Button>
              
            <Button 
              className = "noButton" 
              onClick = {handleNoClick}
              variant = "danger"
              size = "lg"
              
            >
              {getNoButtonText()}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
