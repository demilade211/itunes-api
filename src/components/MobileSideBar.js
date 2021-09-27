import {FiHome} from "react-icons/fi"
import {GiLoveSong} from "react-icons/gi"
import {RiAlbumLine} from "react-icons/ri"
import { Link } from "react-router-dom"
import {useLocation } from 'react-router-dom';

const MobileSideBar = () => {
    const location = useLocation();
    return (
        <div className="sidebar-mobile">
            <ul className="list-group text-center">
                <li className="list-group-item activi" aria-current="true">
                    <Link to = "/">
                        <FiHome className={`icons ${location.pathname === "/"?"activi":""}`}/>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to = "/songs">
                        <GiLoveSong className={`icons ${location.pathname === "/songs"?"activi":""}`}/>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to = "/albums">
                        <RiAlbumLine className={`icons ${location.pathname === "/albums"?"activi":""}`}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileSideBar
