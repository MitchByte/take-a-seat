//import axios from "axios";
//import { useState,useEffect } from "react";
import './map.css';
import mapboxgl from 'mapbox-gl'; 

export default function Map() {
    const map = 0;
    
    return (
        <div className="map-component">
            <p>Map</p>
            <div id="map"></div>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.js"></script>
            <script>
            {mapboxgl.accessToken = pk.eyJ1IjoibWl0Y2hlcnltaXRjaCIsImEiOiJja3NvcXZkYjkxZjNtMnBwbnpmdm8weXowIn0.hdlxepHl1Y9R0_0stASkmg,
            map = new mapboxgl.Map({
                container : "map",
                style : "mapbox://styles/mapbox/terrain-v2",
                center : [13.383309, 52.516806],
                zoom : 9
            })}
        </script>
        </div>
    )
}
