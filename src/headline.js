import { Link } from "react-router-dom";
import "./headline.css"

export default function Headline () {
    return (
        <div className="headline-container">
            <div className="link">
                <Link to="/">Home</Link>
            </div>
            <div className="link">
                <Link to="/Berlin">Berlin</Link>
            </div>
            <div className="link">
                <Link to="/Düsseldorf">Düsseldorf</Link>
            </div>
            <div className="link">
                <Link to="/Hamburg">Hamburg</Link>
            </div>
            
        </div>
    )
}