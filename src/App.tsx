//import { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RecipePage from "./pages/Recipe/RecipePage";
import ResultPage from "./pages/ResultPage";
import TrendPage from "./pages/TrendPage";
import Header from "./components/layout/Header";
import TrendDetailPage from "./pages/Trend/TrendDetailPage";

function App() {
  //const [count, setCount] = useState(0);
  const location = useLocation();
  const shouldShowHeader = location.pathname !== "/";

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        {shouldShowHeader && <Header />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/recipe/result" element={<ResultPage />} />
          <Route path="/trend" element={<TrendPage />} />
          <Route path="/trend/:id" element={<TrendDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
