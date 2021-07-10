import Home from "./Home"
import Songs from "./Songs"
import Albums from "./Albums"
import {Switch, Route } from 'react-router-dom';

const MainSec = () => {
    return (
        <div className="main-sec">    
          <Switch>
            <Route path="/" exact render={()=>(<Home/>)}/>
            <Route path="/songs" component={Songs}/>
            <Route path="/albums" component={Albums}/>
          </Switch>
        </div>
    )
}

export default MainSec
