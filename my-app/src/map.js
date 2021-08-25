import * as React from 'react';
import ReactMapGL,{Popup, GeolocateControl,FullscreenControl,NavigationControl} from 'react-map-gl';
import { useState } from 'react';
import "./map.css";
import Pins from './pins';
import ToiletInfo from './toilet-info';

const accessToken = 'pk.eyJ1IjoibWl0Y2hlcnltaXRjaCIsImEiOiJja3NvcXZkYjkxZjNtMnBwbnpmdm8weXowIn0.hdlxepHl1Y9R0_0stASkmg';

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};


export default function Map({toilet}) {
    //console.log("MAP.js toilet array: ", toilet)
    const [viewport, setViewport] = useState({
        latitude: 52.516806,
        longitude: 13.383309,
        zoom: 12
    });

  const [popupInfo, setPopupInfo] = useState(null);

    return (
        <div className="map-component">
            <ReactMapGL
                {...viewport}
                width="80vw"
                height="85vh"
                onViewportChange={(viewport) => setViewport(viewport)}
                mapboxApiAccessToken={accessToken}
            >
                <Pins data={toilet} onClick={setPopupInfo}/>
                {popupInfo && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        closeOnClick={false}
                        onClose={setPopupInfo}
                    >
                        <ToiletInfo info={popupInfo} />
                    </Popup>
                    )}  


                <GeolocateControl style={geolocateStyle} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />

            </ReactMapGL>
        </div>
    );
}