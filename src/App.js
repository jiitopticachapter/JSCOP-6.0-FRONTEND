import Event from './Pages/Event/Event.js'
import Gallery from './Pages/Gallery/Gallery.js'
import Homepage from './Pages/Homepage/Homepage.js'
import Timeline from './Pages/Timeline/Timeline.js'

import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'

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
