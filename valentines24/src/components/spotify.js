import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './spotify.css';

function SpotifyEmbed() {
  const embedRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  //List of Spotify URIs
  const trackURIs = [
    //Sunflower by Post Malone and Swae Lee
    'spotify:track:3KkXRkHbMCARz0aVfEt68P',

    //Yukon (Interlude) by Joji
    'spotify:track:5IPl8JpkbtSH1mdyq5ctSx',

    //BESO by Rosalía and Rauw Alejandro
    'spotify:track:609E1JCInJncactoMmkDon',

    //Dial Drunk by Post Malone and Noah Kahan
    'spotify:track:22VHOlVYBqytsrAqV8yXBK',

    //Sancutary by Joji
    'spotify:track:4VQH4VluDUOsOuDxccTeyN',
    
    //Die For You by Joji
    'spotify:track:26hOm7dTtBi0TdpDGl141t',

    //VAMPIROS by Rosalía and Rauw Alejandro
    'spotify:track:3Eax1yebRxj6LSYpxE9Yd3',
    ];

  useEffect(() => {
    //Get current reference
    const embedElement = embedRef.current;
    
    //Function to update the embed source, and parse the URI
    function updateEmbed() {
      const currentTrackURI = trackURIs[currentTrackIndex];
      const embedSource = `https://open.spotify.com/embed/track/${currentTrackURI.split(':')[2]}`;
      embedElement.src = embedSource;

      embedElement.contentWindow.postMessage(
        {
          event: 'command',
          func: 'playVideo',
        },
        '*'
      );
    }

    // Initial update
    updateEmbed();


  }, [currentTrackIndex]);

    //Go forward and backward in the track list and wrap around
    const goForward = () => {
      setCurrentTrackIndex((currentTrackIndex + 1) % trackURIs.length);
    
    };

    const goBackward = () => {
      setCurrentTrackIndex((currentTrackIndex - 1 + trackURIs.length) % trackURIs.length);
    };

  return (
    <>
        {/* Spotify Embed with Passed Reference */}
      <div id="spotify-embed-container">
        <h1> Jordan's Playlist! </h1>
        <iframe
          ref={embedRef}
          title="Spotify Embed"
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

        {/* Spotify Controls */}
      <div id="spotify-controls">
          <Icon icon="majesticons:arrow-right" className="spotify-controls-right" width="50" height="50" onClick={goForward} />
          <Icon icon="majesticons:arrow-left" className="spotify-controls-left" width="50" height="50" onClick={goBackward} />
      </div>
    </>
  );
}

export default SpotifyEmbed;
