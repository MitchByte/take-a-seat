//import axios from "axios";
import { useState,useEffect } from "react";
import './userlocation.css';


export default function UserLocation () {
    const [location,setLocation ] = useState("");
    useEffect( () => {
        console.log(`USERLOCATION ${location} has been rendered`);
        //refer to scallion network findpeople.js
        //axios.get("/api/user-location")
    })

    
    return (
        <div className="user-location">
            <div className="input-user-location">
                <input className="input-field-userlocation" type="search" placeholder="Your location" onChange={(e)=> {setLocation(e.target.value)}} /> 
                <button className="button-userlocation" type="submit">
                    <img className="lupe-user-location" src="/lupe.png" alt="magificant-glass"/>
                </button>
                
            </div>
        </div>
    )
}