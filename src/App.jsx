import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import EvetDetailPage from "./Pages/Event/EventDetailPage.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./Pages/Layout/Layout.jsx";
// import Team from "./Pages/Team/Team.jsx";
import Loader from "./Pages/Loader/Loader.jsx";
// import Webteam from "./Pages/Webteam/Webteam.jsx";
import WebTeamComponent from "./Components/WebteamComponent/Webteamcomponent.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
// import About from "./Pages/About/About.jsx";
import RegisterForm from "./Components/Register/RegisterForm.jsx";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 10200);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            color: "rgb(0,0,0)",
            transition: { duration: 0.2 },
          }}
          exit={{ opacity: 0 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/eventDetails/:id" element={<EvetDetailPage />} />
              <Route path="/:id" element={<Layout />} />
              {/* <Route path="/webteam" element={<WebTeamComponent />} /> */}
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
            <Footer />
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
