import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataEntryPage from "./pages/DataEntryPage";
import PortfolioPage from "./pages/PortfolioPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"; // Global styles
import "./styles/custom.css"; // Component-specific styles
import "./styles/tailwind.css"; // Tailwind CSS

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<DataEntryPage setPortfolioData={setPortfolioData} />} />
            <Route path="/portfolio" element={<PortfolioPage data={portfolioData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
