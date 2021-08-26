import { useEffect, useState} from "react";
import './filter.css';



export default function Filter ({toilet,updateParent, berlin}) {
    const [toiletArray, setToiletArray] = useState(toilet);

    const [checkedPrice, setCheckedPrice] = useState(false);
    const handlePrice = () => {
        setCheckedPrice(!checkedPrice)
    };
    const [checkedCoins, setCheckedCoins] = useState(false);
    const handleCoins = () => {
        setCheckedCoins(!checkedCoins);
    };

    const [checkedApp, setCheckedApp] = useState(false);
    const handleApp = () => {
        setCheckedApp(!checkedApp);
    };

    const [checkedNFC, setCheckedNFC] = useState(false);
    const handleNFC = () => {
        setCheckedNFC(!checkedNFC);
    };

    const [checkedWheel, setCheckedWheel] = useState(false);
    const handleWheel = () => {
        setCheckedWheel(!checkedWheel);
    };

    const [checkedTable, setCheckedTable] = useState(false);
    const handleTable = () => {
        setCheckedTable(!checkedTable);
    };

    const [checkedUrinal, setCheckedUrinal] = useState(false);
    const handleUrinal = () => {
        setCheckedUrinal(!checkedUrinal);
    };

    /*
    console.log("Price checked? ",checkedPrice);
    console.log("Coins checked? ",checkedCoins.toString());
    console.log("App checked? ",checkedApp.toString());
    console.log("NFC checked? ",checkedNFC.toString());
    console.log("Wheelchair checked? ",checkedWheel.toString());
    console.log("Table checked? ",checkedTable.toString());
    console.log("Urinal checked? ",checkedUrinal.toString());
    */
    useEffect(() => {
        console.log("FILTER.js: checkbox changed ")
        console.log("wheelchair", checkedWheel);
        //one prop for the filter
        const newArray = toilet.filter(function (el) {
            return (
                (!checkedPrice || el.price === 0 )
                && (!checkedCoins || el.canBePaidWithCoins === checkedCoins)
                && (!checkedApp || el.canBePaidWithApp === checkedApp)
                && (!checkedNFC || el.canBePaidWithNFC === checkedNFC )
                && ( !checkedWheel || el.isWheelchairAccesible === checkedWheel)
                && (!checkedTable || el.hasChangingTable === checkedTable)
                && (!checkedUrinal || el.hasUrinal === checkedUrinal)
                ) 
            });
        setToiletArray(newArray);
        console.log("FILTER.js: new array", toiletArray)
    },[checkedPrice,checkedCoins,checkedApp,checkedNFC,checkedWheel,checkedTable,checkedUrinal])

    useEffect(()=> {
        console.log("Filter.js: Toiletarray update ")
        updateParent(toiletArray);
    },[toiletArray])
    
    
    


    return (
        <div>
            <div className="berlin-img" >
                <img src={berlin} alt="berlin"/>
            </div>
        <div className="filter">
            <div className="checkbox">
                <h4>Pricing</h4>
                <div>
                    <label>
                        <input type="checkbox" id="price" name="price" checked={checkedPrice} onChange={handlePrice}/> For free 
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="canBePaidWithCoins" name="canBePaidWithCoins" checked={checkedCoins} onChange={handleCoins} /> Pay with coins
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="canBePaidWithApp" name="canBePaidWithApp" checked={checkedApp} onChange={handleApp}/> Pay with app
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="canBePaidWithNFC" name="canBePaidWithNFC" checked={checkedNFC} onChange={handleNFC}/> Pay with NFC
                    </label>
                </div>
            </div>
            <div className="checkbox">
                <h4>Accessibility</h4>
                <div>
                    <label>
                        <input type="checkbox" id="isWheelchairAccesible" name="isWheelchairAccesible" checked={checkedWheel} onChange={handleWheel}/> Wheelchair accessible
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="hasChangingTable" name="hasChangingTable" checked={checkedTable} onChange={handleTable}/> Changing Table
                    </label>
                </div>
            </div>
            <div className="checkbox">
                <h4>Extras</h4>
                <div>
                    <label>
                        <input type="checkbox" id="hasUrinal" name="hasUrinal" checked={checkedUrinal} onChange={handleUrinal}/> Urinal
                    </label>
                </div>
            </div>
        </div>
        </div>
    )

}
