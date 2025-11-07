import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RecipePage from "./pages/RecipePage";
import ResultPage from "./pages/ResultPage";
import TrendPage from "./pages/TrendPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/recipe/result" element={<ResultPage />} />
          <Route path="/trend" element={<TrendPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
