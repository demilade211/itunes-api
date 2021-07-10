import React from 'react'
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {getAlbumsAsync} from "../actions/getAlbums"



const Albums = () => {
    const [state, setstate] = useState([])
    const dispatch = useDispatch()
    const postData = useSelector((state)=>state.albumReducer?.albums)

    useEffect(() => {
        dispatch(getAlbumsAsync());
    }, [dispatch])


    useEffect(() => {
        if(postData.length){
                setstate(postData);
            
        }
    }, [postData])
    return (
             <div className="album-con">
                 {
                     state.map((val,index)=>(
                        <div key={index} className="album-card">
                            <div className="album-picture">
                                <img src={val["im:image"][2].label} alt="thubnaail"/>
        
                            </div>
                            <div className="album-name">
                                <h5>{`(${index + 1}) ${val["im:name"].label}`}</h5>
        
                            </div>
    
                        </div>
                     ))
                 }
             </div>
    )
}

export default Albums
