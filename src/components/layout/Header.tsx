import logoAsset from '../../assets/logo.svg'
import { brandCluster, brandName, headerRoot, logoMark } from './header.css'

const Header = () => {
  return (
    <header className={headerRoot}>
      <div className={brandCluster}>
        <img src={logoAsset} alt="Kook" className={logoMark} />
        <span className={brandName}>K</span>
      </div>
    </header>
  )
}

export default Header
