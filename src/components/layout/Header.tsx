import { useNavigate } from "react-router-dom";
import logoAsset from "../../assets/logo.svg";
import { brandCluster, headerRoot, logoMark } from "../../styles/header.css.ts";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={headerRoot}>
      <div className={brandCluster}>
        <img
          src={logoAsset}
          alt="Kook"
          className={logoMark}
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
};

export default Header;
