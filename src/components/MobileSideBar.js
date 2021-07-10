import {FiHome} from "react-icons/fi"
import {GiLoveSong} from "react-icons/gi"
import {RiAlbumLine} from "react-icons/ri"
import { useState } from "react"
import { Link } from "react-router-dom"

const MobileSideBar = () => {
    const [IsActive, setIsActive] = useState(2)
    const addActive=(num)=>{
        setIsActive(num);
    }
    return (
        <div className="sidebar-mobile">
            <ul className="list-group text-center">
                <li className="list-group-item activi" aria-current="true">
                    <Link to = "/">
                        <FiHome className={`icons ${IsActive === 1?"activi":""}`} onClick={()=>(addActive(1))}/>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to = "/songs">
                        <GiLoveSong className={`icons ${IsActive === 2?"activi":""}`} onClick={()=>(addActive(2))}/>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to = "/albums">
                        <RiAlbumLine className={`icons ${IsActive === 3?"activi":""}`} onClick={()=>(addActive(3))}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileSideBar
