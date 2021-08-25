import { BrowserRouter, Route } from 'react-router-dom';
import UserLocation from './userlocation';
import { useState} from "react";
import './App.css';
import Map from './map';
import List from './list';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function App() {
  const [window,setWindow ] = useState(true);
  // const [backgroundColor, setBackgroundColor] = useState();
  console.log("APP.js: window state, when render", window);
  //console.log("APP.js: backgroundcolor: ", backgroundColor);

  function listOrMap() {
    setWindow(!window);
    if (window){
      //setBackgroundColor("rgb(188 60 60)")
    }
    console.log("APP.js: window state after click event: ", window)
  }
  
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Route exact path="/" 
            render={() => (
              <div>
                <div>
                  <UserLocation/>
                </div>
                <div className="window">
                  <div className="button-window">
                    <p className="list-window" /*style={window && {background:backgroundColor}}*/ onClick={listOrMap}>List</p>
                    <p className="map-window" /*style={!window && {background:backgroundColor}} */ onClick={listOrMap}>Map</p>
                  </div>
                  <div>
                    {window && <div><List/></div>}
                    {!window && <div><Map/></div>}
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

