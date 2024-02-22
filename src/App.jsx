import Event from "./Pages/Event/Event.jsx";
import Gallery from "./Pages/Gallery/Gallery.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Timeline from "./Pages/Timeline/Timeline.jsx";
import EventDetailPage from "./Pages/Event/EventDetailPage.jsx";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
// import PartnersSlider from "./Pages/Sponsors/Sponsors.jsx";
import "./App.css";
import Speaker from "./Pages/Speakers/Speakers.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    
      <About />
      <Speaker/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/:id" element={<EventDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Timeline />
      <Gallery />
     {/* <PartnersSlider/> */}
      <Footer />

    </>
  );
}

export default App;
