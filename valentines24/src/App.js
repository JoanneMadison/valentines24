
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from './components/carousel.js'
import Heart from './images/heart.gif';
import Pink from './images/multiple_hearts.gif';
import Love from './images/love_you.gif';

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
      "Bruh just hit yes at this point..."
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
          <img class="love-you" src={Love} alt="A love you gif" />
          <Carousel />
          <img class="pink" src={Pink} alt="A pink hearts gif" />
          <div className="accept"> 
            <h1>Yay!! Thanks Pookie!! Love you lots!! {"<"}3</h1>
            <h1> Enjoy some of my favorite memories of us, Happy Valentines Day!!</h1>
          </div>
        </>
      ) : (

        <>
          {/* Add a valentine's day photo here.*/}
          <img src={Heart} alt="A heart gif" />
          <div className="paragraphText">
            <h1>Will you be my valentine?</h1>
          </div>
          <div className="Buttons">
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
