import { useEffect, useRef } from 'react';
import CardComponent from './components/card-component';
import { sedansImg, 
  sedansTitle, 
  sedansParagraph, 
  suvsImg, 
  suvsTitle, 
  suvsParagraph, 
  luxuryImg, 
  luxuryTitle, 
  luxuryParagraph } from './data-cards/data-file';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const  appRef = useRef(null);

  useEffect(() => {
    gsap.from('.App', {
      opacity: 0,
      duration: 1,
      ease: 'none',
      background: '#000'

    })
    gsap.to('.App', {
      opacity: 1,
      duration: 1,
      ease: 'none',
      background: '#fff'
    })
  }, [])

  return (
    <div className="App row" ref={appRef}>
        <CardComponent img={sedansImg} title={sedansTitle} paragraph={sedansParagraph} />
        <CardComponent img={suvsImg} title={suvsTitle} paragraph={suvsParagraph} />
        <CardComponent img={luxuryImg} title={luxuryTitle} paragraph={luxuryParagraph} />
    </div>
  );
}

export default App;
