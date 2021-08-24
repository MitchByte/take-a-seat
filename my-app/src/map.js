//import axios from "axios";
import './map.css';
import mapboxgl from 'mapbox-gl'; 
import React, { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hlcnltaXRjaCIsImEiOiJja3NvcXZkYjkxZjNtMnBwbnpmdm8weXowIn0.hdlxepHl1Y9R0_0stASkmg';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(13.383309);
    const [lat, setLat] = useState(52.516806);
    const [zoom, setZoom] = useState(9);
    // the coordinates of Berlin
    const lngLat = [13.383309, 52.516806];
    // marker creation and addition to the map
    const marker = new mapboxgl.Marker().setLngLat(lngLat).addTo(map);


    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });        

    });
            
    
    return (
        <div className="map-component">
            <p>Map</p>
            <div id="map" className="map-id">
                <div ref={mapContainer} className="map-container" />
            </div>
            
        </div>
    )
}
