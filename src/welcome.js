import "./welcome.css";
import { Link } from "react-router-dom";


export default function Welcome ({bath}) {

    return (
        <div className="header">
            <h1 className="headline">Take a seat!</h1>
            <img src={bath} className="bath-header" alt="alter"/>
            <p> Your site for finding toilets for everyone!!</p>
            <div className="cities">
                <Link to="/Berlin" className="cities-links"> Berlin</Link>
                <Link to="/Düsseldorf" className="cities-links">Düsseldorf</Link>
                <Link to="/Hamburg" className="cities-links">Hamburg</Link>
            </div>
        </div>
    )
}