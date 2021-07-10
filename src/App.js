import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import {useState} from "react"
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [nav, setnav] = useState(true);

  const displayNav=()=>{
    setnav(!nav)
  }

  return (
    <div className="body">
      <Router>
          <NavBar showNav={displayNav}/>
          <MainContainer isShow={nav}/>
      </Router>
    </div>
  );
}

export default App;
