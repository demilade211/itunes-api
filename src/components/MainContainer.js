import React from 'react'
import MobileSideBar from "./MobileSideBar"
import MainSec from "./MainSec";
import SideBar from './SideBar';

const MainContainer = ({isShow}) => {
    return (
        <section className="sec">
            <SideBar isShow={isShow}/>
            <MobileSideBar/>
            <MainSec/>
        </section>
    )
}

export default MainContainer
