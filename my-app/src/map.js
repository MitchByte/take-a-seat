import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

const accessToken = 'pk.eyJ1IjoibWl0Y2hlcnltaXRjaCIsImEiOiJja3NvcXZkYjkxZjNtMnBwbnpmdm8weXowIn0.hdlxepHl1Y9R0_0stASkmg';


export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 13.383309,
        longitude: 52.516806,
        zoom: 8
    });

    return (
        <div className="map-component">
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={(viewport) => setViewport(viewport)}
                mapboxApiAccessToken={accessToken}

            />
        </div>
    );
}