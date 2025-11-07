import logoAsset from '../../assets/logo.svg'
import { brandCluster, headerRoot, logoMark } from '../../styles/header.css.ts'

const Header = () => {
  return (
    <header className={headerRoot}>
      <div className={brandCluster}>
        <img src={logoAsset} alt="Kook" className={logoMark} />
      </div>
    </header>
  )
}

export default Header
