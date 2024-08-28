// Stylesheet
import './styles/style.scss';

// Components
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import LoaderOverlay from './components/LoaderOverlay/LoaderOverlay';

// Dependencies
import { useState, useEffect } from 'react';

function App() {
  // States
  const [loading, setLoading] = useState(true);

  // UseEffects
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <>
      {loading ? <LoaderOverlay/> : null}
      <div style={ loading ? { display: 'none'} : {}}>
        <Header/>
        <Cursor/>
        <Body/>
        <Footer/> 
      </div>
    </>
  )
}

export default App;
