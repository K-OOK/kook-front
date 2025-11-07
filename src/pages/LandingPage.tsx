import { useState } from "react";
import SplashScreen from "../components/landing/SplashScreen";

const LandingPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return <div>랜딩</div>;
};

export default LandingPage;
