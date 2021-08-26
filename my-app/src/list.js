import { useState,useEffect } from "react";
import './list.css';

export default function List({toilet}) {
    const [toiletArrayList, setToiletArrayList] = useState(toilet);
    console.log("LIST.js: toilet array", toiletArrayList)
    const [location,setLocation ] = useState("");

    useEffect(()=> {
        setToiletArrayList(toilet)
    },[toilet]);

    useEffect( () => {
        setToiletArrayList(toilet.filter(function (el) {
            return el.street.toLowerCase().startsWith(location.toLowerCase())
        }))
    },[location])

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
            <div>
                <p> There are {toiletArrayList.length} toilets found with your preferences.</p>
            </div>
            <div className="toilet-list-container">
                <div>
                    {toiletArrayList && toiletArrayList.slice(0, 10).map((toilet,index) => (
                        <div key={toilet.id} className="toilet-list-box">
                                <p>Located at {toilet.street}</p>
                                <p>Price {toilet.price}</p>
                            </div>
                    ))}
                </div>
                <div>
                    {!toiletArrayList && <p> No toilets found</p>}
                </div>
                

            </div>
            
        </div>
    )
}