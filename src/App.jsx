import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import EvetDetailPage from "./Pages/Event/EventDetailPage.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./Pages/Layout/Layout.jsx";
// import Team from "./Pages/Team/Team.jsx";
import Loader from "./Pages/Loader/Loader.jsx";
import Webteam from "./Pages/Webteam/Webteam.jsx";
import WebTeamComponent from "./Components/WebteamComponent/Webteamcomponent.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
import About from "./Pages/About/About.jsx";
import RegisterForm from "./Components/Register/RegisterForm.jsx";

function App() {
  // return (
  //   <>
  //     <Navbar />

  //     <Routes>
  //       <Route path="/" element={<Layout />} />
  //       <Route path="/:id" element={<EvetDetailPage />} />
  //       <Route path='/Webteam' element={<WebTeamComponent />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>

  //     <Footer />
  //   </>
  // );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10200);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // } else {
  if (1) {
    return (
      <>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:id" element={<EvetDetailPage />} />
          <Route path="/Webteam" element={<WebTeamComponent />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
