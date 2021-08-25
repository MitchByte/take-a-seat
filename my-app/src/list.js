import { useState,useEffect } from "react";
import './list.css';

export default function List({toilet}) {
    const [location,setLocation ] = useState("");

    useEffect( () => {
        console.log(`USERLOCATION ${location} has been rendered`);
        //refer to scallion network findpeople.js
        //axios.get("/api/user-location")
    })

    const filterToilets = (toilet, location)  =>{
        return toilet.filter(function (el) {
            return el.street.toLowerCase().startsWith(location.toLowerCase())
        })
    }
    console.log("your searched location:", location);
    console.log("new location array", filterToilets)

    return (
        <div className="list-component">
            <div className="user-location">
            <div className="input-user-location">
                <input className="input-field-userlocation" type="search" placeholder="Your location" onChange={(e)=> {setLocation(e.target.value)}} /> 
                <button className="button-userlocation" type="submit">
                    <img className="lupe-user-location" src="/lupe.png" alt="magificant-glass"/>
                </button>
                
            </div>
            </div>
            <div className="toilet-list-container">
                {toilet.slice(0, 10).map((toilet,index) => (
                    <div key={toilet.id} className="toilet-list-box">
                            <p>Located at {toilet.street}</p>
                            <p>Price {toilet.price}</p>
                        </div>
                ))}
            </div>
            
        </div>
    )
}