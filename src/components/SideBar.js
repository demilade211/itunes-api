import {FiHome} from "react-icons/fi"
import {GiLoveSong} from "react-icons/gi"
import {RiAlbumLine} from "react-icons/ri"
import { useState } from "react"
import { Link } from "react-router-dom"


const SideBar = ({isShow}) => {
    const [active, setactive] = useState(1)
    const addActive=(num)=>{
        setactive(num);
    }

    return (
            <div className={`sidebar ${isShow?"shownav":""}`}>
                <ul className="list-group">
                    <li  className={`list-group-item ${active === 1?"activ":""}`} onClick={()=>(addActive(1))} aria-current="true">
                            <Link to = "/">
                                <FiHome className="icon" />
                                Home
                            </Link>
                    </li>
                    <li  className={`list-group-item ${active === 2?"activ":""}`} onClick={()=>(addActive(2))}>
                            
                            <Link to = "/songs">
                                <GiLoveSong className="icon" />
                                Songs
                            </Link>
                    </li>
                
                    <li  className={`list-group-item ${active === 3?"activ":""}`}onClick={()=>(addActive(3))}>
                            
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
