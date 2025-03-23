import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataEntryPage from "./pages/DataEntryPage";
import PortfolioPage from "./pages/PortfolioPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"; // Import global styles
import "./styles/custom.css"; // Import component-specific styles (if needed)
import "./styles/tailwind.css"; // Import Tailwind (if using)

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DataEntryPage setPortfolioData={setPortfolioData} />} />
        <Route path="/portfolio" element={<PortfolioPage data={portfolioData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
