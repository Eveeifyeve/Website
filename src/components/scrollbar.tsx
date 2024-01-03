import {useState}  from 'react';
import '../styles/scrollbar.css';
import rocketImage from '../assets/react.svg'; // replace with your rocket image path
import defaultImage from '../assets/react.svg'; // replace with your default image path
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const Scrollbar = () => {
  const [showScroll, setShowScroll] = useState(true) // set to true
  const [currentImage, setCurrentImage] = useState(defaultImage)
  const [atTop, setAtTop] = useState(false)

  const scrollTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    setCurrentImage(rocketImage); // switch to the rocket image
    setAtTop(true);
  };
  
  const scrollDown = () => {
    window.scroll({top: document.body.scrollHeight, left: 0, behavior: 'smooth'});
    setCurrentImage(defaultImage); // switch to the default image
    setAtTop(false);
  };

  return (
    <div className="scrollbar-container">
      <img src={currentImage} className={`scrollTop ${atTop ? 'at-top' : ''}`} onClick={atTop ? scrollDown : scrollTop} style={{height: 50, display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
};

export default Scrollbar;