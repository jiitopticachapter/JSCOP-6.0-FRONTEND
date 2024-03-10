import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import EvetDetailPage from "./Pages/Event/EventDetailPage.jsx";

import { Routes, Route } from "react-router-dom";

// import Register from "./Components/Register/Register.jsx";
import Layout from "./Pages/Layout/Layout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:id" element={<EvetDetailPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
