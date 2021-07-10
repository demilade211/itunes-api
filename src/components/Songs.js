import React from 'react'
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {getSongsAsync} from "../actions/getSongs"

const Songs = () => {
const [state, setstate] = useState([])
const dispatch = useDispatch()
const postData = useSelector((state)=>state.songReducer?.songs)

useEffect(() => {
    dispatch(getSongsAsync());
 }, [dispatch])


useEffect(() => {
       if(postData.length){
            setstate(postData);
           
       }
}, [postData])
    return (
            <div className="con">
                <ul>
                    {
                        state.map((val,index)=>(
                            <li key={index} className="song-con">
                                <div className="num-con">
                                    <h4>{index+1}</h4>
                                </div>
                                <div className="img-con">
                                    <img src={val["im:image"][2].label} alt="thubnaail"/>
                                </div>
                                <div className="word-con">
                                    <h5>{val.title.label}
                                        <p>
                                            {val["im:artist"].label}
                                        </p>
                                    </h5>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default Songs
