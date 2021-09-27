import {FiHome} from "react-icons/fi"
import {GiLoveSong} from "react-icons/gi"
import {RiAlbumLine} from "react-icons/ri"
import { Link } from "react-router-dom"
import {useLocation } from 'react-router-dom';


const SideBar = ({isShow}) => {
    const location = useLocation();
    return (
            <div className={`sidebar ${isShow?"shownav":""}`}>
                <ul className="list-group">
                    <li  className={`list-group-item ${location.pathname === "/"?"activ":""}`} aria-current="true">
                            <Link to = "/">
                                <FiHome className="icon" />
                                Home
                            </Link>
                    </li>
                    <li  className={`list-group-item ${location.pathname === "/songs"?"activ":""}`}>
                            
                            <Link to = "/songs">
                                <GiLoveSong className="icon" />
                                Songs
                            </Link>
                    </li>
                
                    <li  className={`list-group-item ${location.pathname === "/albums"?"activ":""}`}>
                            
                            <Link to = "/albums">
                                <RiAlbumLine className="icon" />
                                Albums
                            </Link>
                    </li> 
                </ul>
            </div>
    )
}

export default SideBar
