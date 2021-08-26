import * as React from 'react';

export default function ToiletInfo(props) {
    const {info} = props;
    const location = `${info.street}`;
    const price = `${info.price}`;

    return (
        <div>
            <div>
                <p>Located at: </p>
                {location}
            </div>
            <div>
                <p>Price: </p>
                {price}
            </div>
        </div>
    )
}