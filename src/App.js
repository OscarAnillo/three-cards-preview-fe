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

import './App.css';

function App() {
  return (
    <div className="App">
      <CardComponent img={sedansImg} title={sedansTitle} paragraph={sedansParagraph} />
      <CardComponent img={suvsImg} title={suvsTitle} paragraph={suvsParagraph} />
      <CardComponent img={luxuryImg} title={luxuryTitle} paragraph={luxuryParagraph} />
    </div>
  );
}

export default App;
