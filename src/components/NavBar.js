import {FiMenu} from "react-icons/fi"
import {GiMusicSpell} from "react-icons/gi"

const NavBar = ({showNav}) => {
    return (
        <header>
          <nav  className="navbar">
                <div>
                    <h3><span><GiMusicSpell className="iconss" /></span>Muzikal</h3>
                </div>
                <div>
                    <input type= "search" placeholder="Click Here To Search" id="search"/>
                </div>
                <div>
                    <FiMenu className="iconss hamburger  " onClick={showNav} />
                </div>
          </nav>
            
        </header>
    )
}

export default NavBar

