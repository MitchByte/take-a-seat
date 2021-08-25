import { useState} from "react";
import './filter.css';
//import TOILET from "./publicToilette.json";


export default function Filter ({toilet,filterToilets}) {
    console.log("FILTER.js: props",filterToilets)

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


    console.log("Price checked? ",checkedPrice);
    console.log("Coins checked? ",checkedCoins.toString());
    console.log("App checked? ",checkedApp.toString());
    console.log("NFC checked? ",checkedNFC.toString());
    console.log("Wheelchair checked? ",checkedWheel.toString());
    console.log("Table checked? ",checkedTable.toString());
    console.log("Urinal checked? ",checkedUrinal.toString());
    
    const newArray = toilet.filter(function (el) {
        return !checkedPrice ? true : el.price === 0  &&
                !checkedCoins ? true : el.canBePaidWithCoins === checkedCoins &&
                !checkedCoins ? true : el.canBePaidWithApp === checkedApp &&
                !checkedCoins ? true : el.canBePaidWithNFC === checkedNFC &&
                !checkedCoins ? true :el.hasChangingTable === checkedTable &&
                !checkedCoins ? true :el.isWheelchairAccesible === checkedWheel &&
                !checkedCoins ? true : el.hasUrinal === checkedUrinal
    });

    console.log("new array", newArray);
    filterToilets = () => {
        filterToilets(newArray);
    }
    


    return (
        <div className="filter">
            <div>
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
            <div>
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
            <div>
                <h4>Extras</h4>
                <div>
                    <label>
                        <input type="checkbox" id="hasUrinal" name="hasUrinal" checked={checkedUrinal} onChange={handleUrinal}/> Urinal
                    </label>
                </div>
            </div>
        </div>
    )

}
