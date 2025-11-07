import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreen from "../components/landing/SplashScreen";

const SplashPage = () => {
  const navigate = useNavigate();

  const handleComplete = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  return <SplashScreen onComplete={handleComplete} />;
};

export default SplashPage;


