import { BrowserRouter, Route } from 'react-router-dom';
import { useState} from "react";
import './App.css';
import Map from './map';
import List from './list';
import 'mapbox-gl/dist/mapbox-gl.css';
import Filter from './filter';
import TOILET from './publicToilette.json'


export default function App() {
  const [window,setWindow ] = useState(true);
  const [toilet, setToilet] = useState(TOILET);
  //console.log("APP.js toilet: ", toilet)
  const [backgroundColor, setBackgroundColor] = useState("");
  //console.log("APP.js: window state, when render", window);
  //console.log("APP.js: backgroundcolor: ", backgroundColor);

  function listOrMap() {
    setWindow(!window);
    return window ? setBackgroundColor("red") : setBackgroundColor("rgb(188 60 60)")
  }

  const filterToilets = (arg) => {
    setToilet(arg)
    console.log("APP.js: filter toilets:", arg)
  }
  

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Route exact path="/" 
            render={() => (
              <div>
                <div className="headline">
                  <h1>Take a seat!</h1>
                </div>
                <di>
                  <Filter toilet={toilet} filterToilets={filterToilets}/>
                </di>
                <div className="window">
                  <div className="button-window">
                    <p className="list-window" style={{background:backgroundColor}} onClick={listOrMap}>List</p>
                    <p className="map-window" style={{background:backgroundColor}} onClick={listOrMap}>Map</p>
                  </div>
                  <div className="inside-window">
                    {window && <div><List toilet={toilet} /></div>}
                    {!window && <div><Map toilet= {toilet} /></div>}
                  </div>
                </div>
              
            </div>
            )}
          />
          
        </BrowserRouter>
      
    </div>
    </div>
  );

}

