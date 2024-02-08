import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import Cervezas from '../images/cervezas.jpeg';
import Coaster from '../images/coaster.jpeg';
import EscapeRoom from '../images/escape_room.jpeg';
import Frog from '../images/frog.jpeg';
import Hat from '../images/hat.jpeg';
import Hiking from '../images/hiking.jpeg';
import Hsk from '../images/hsk.jpeg';
import LightClose from '../images/light_close.jpeg';
import LightMeme from '../images/light_meme.jpeg';
import Light from '../images/light.jpeg';
import Minion from '../images/minion.jpeg';
import Mirage from '../images/mirage.jpeg';
import Octi from '../images/octi.jpeg';
import Omaha from '../images/omaha.jpeg';
import Paddleboard from '../images/paddleboard.jpeg';
import Parade from '../images/parade.jpeg';
import Pool from '../images/pool.jpeg';
import Unlv from '../images/unlv.jpeg';
import Vgk from '../images/vgk.jpeg';
import HighRoller from '../images/highroller.jpeg';


/* Array of photos to cycle through */
const images = {
    cervezas: <img src={Cervezas} alt="Jordan and Madison at a bar in Las Vegas" />,
    coaster: <img src={Coaster} alt="Jordan and Madison at Adventureland in Iowa" />,
    escapeRoom: <img src={EscapeRoom} alt="Jordan and Madison at an escape room in Lincoln" />,
    frog: <img src={Frog} alt="A cute frog meme"/>,
    hat: <img src={Hat} alt="Jordan wearing a funny hat"/>,
    hiking: <img src={Hiking} alt="Jordan and Madison hiking in Red Rock Canyon"/>,
    hsk: <img src={Hsk} alt="Jordan and Madison at a Henderson Silver Knights game"/>,
    lightClose: <img src={LightClose} alt="Jordan and Madison at Enchant in Las Vegas"/>,
    lightMeme: <img src={LightMeme} alt="Jordan and Madison at Enchant in Las Vegas"/>,
    light: <img src={Light} alt="Jordan and Madison at Enchant in Las Vegas"/>,
    minion: <img src={Minion} alt="Jordan and Madison in front of a funny minion cutout"/>,
    mirage: <img src={Mirage} alt="Jordan and Madison at the Mirage in Las Vegas"/>,
    octi: <img src={Octi} alt="A cute wholesome Octopus meme"/>,
    omaha: <img src={Omaha} alt="Jordan and Madison at the Illuminarium"/>,
    paddleboard: <img src={Paddleboard} alt="Jordan Paddleboarding in Holmes Lake"/>,
    parade: <img src={Parade} alt="Jordan and Madison at the VGK parade"/>,
    pool: <img src={Pool} alt="Jordan at a pool party"/>,
    unlv: <img src={Unlv} alt="Jordan and Madison at UNLV"/>,
    vgk: <img src={Vgk} alt="Jordan and Madison at VGK Fan Fest"/>,
    highRoller: <img src={HighRoller} alt="Jordan and Madison on the High Roller in Las Vegas."/>,
};



function CarouselImages() {

  const [currentIndex, setCurrentIndex] = useState(0);

  /* On effect, get a random photo index, change every 5 seconds. */
  useEffect (() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Object.keys(images).length);
      setCurrentIndex(randomIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  /* Enter, map, and cycle through images */
  const carouselItems = Object.entries(images).map(([key, image], index) => (
    <Carousel.Item key={key}>
      <div className="carousel">
        {image}
      </div>
    </Carousel.Item>
  ));

  return (
    <>
      <Carousel slide={false} activeIndex={currentIndex}>{carouselItems}</Carousel>
    </>
  
  )
}

export default CarouselImages;