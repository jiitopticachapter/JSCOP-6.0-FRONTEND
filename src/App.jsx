import Event from './Pages/Event/Event.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Homepage from './Pages/Homepage/Homepage.jsx'
import Timeline from './Pages/Timeline/Timeline.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'

import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <Event/>
      <Timeline/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
