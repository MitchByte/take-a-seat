import { BrowserRouter, Route } from 'react-router-dom';
import { useState} from "react";
import './App.css';
import Welcome from './welcome';
import Headline from './headline';
import Map from './map';
import List from './list';
import 'mapbox-gl/dist/mapbox-gl.css';
import Filter from './filter';
import TOILET from './publicToilette.json';
import bath from "./background-s.jpg";
import berlin from "./berlin.jpg";



export default function App() {
  const [window,setWindow ] = useState(true);
  const [toilet, setToilet] = useState(TOILET);

  const [backgroundColorList, setBackgroundColorList] = useState("#bcd0b1");
  const [backgroundColorMap, setBackgroundColorMap] = useState("#f8eec194");


  function listOrMap() {
    setWindow(!window);
    backgroundColorList === "#bcd0b1" ? setBackgroundColorList("#f8eec194") : setBackgroundColorList("#bcd0b1");
    backgroundColorMap === "#bcd0b1" ? setBackgroundColorMap("#f8eec194"): setBackgroundColorMap("#bcd0b1") ;

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
                <Welcome bath={bath} />
            </div>
            )}
          />
          <Route path="/Berlin"
            render={() => (
              <div>
                <div>
                  <Headline/>
                </div>
                <div className="filter-box">
                  <Filter toilet={toilet} updateParent={filterToilets} berlin={berlin}/>
                </div>
                <div className="window">
                  <div className="button-window">
                    <p className="list-window" style={{background:backgroundColorList}} onClick={listOrMap}>List</p>
                    <p className="map-window" style={{background:backgroundColorMap}} onClick={listOrMap}>Map</p>
                  </div>
                  <div className="inside-window">
                    {window && <div><List toilet={toilet}/></div>}
                    {!window && <div><Map toilet= {toilet}/></div>}
                  </div>
                </div>

              </div>
            )}
          />
          <Route path="/Düsseldorf"
            render={()=> (
              <div>
                <div>
                  <Headline/>
                </div>
                <p>Under construction</p>
              </div>
            )}
            />
          <Route path="/Hamburg"
            render={()=> (
              <div>
                <div>
                  <Headline/>
                </div>
                <p>Under construction</p>
                <a href="https://www.hamburg.de/oeffentliche-toiletten/" target="_blank">But you can search here</a>
              </div>
            )}
          
          />

          
        </BrowserRouter>
      
    </div>
    </div>
  );

}

