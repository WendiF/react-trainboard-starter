import React, { useEffect } from 'react';
import { fetchFares, fetchStations } from '../helpers/ApiCallHelper';

type RouteButtonProps = {
    departure: string;
    arrival: string;
}

const RouteButton: React.FC<RouteButtonProps> = ({ departure, arrival }) => {

    return (
        <div>
            <button type = "button" onClick = { () => fetchFares(departure, arrival) }>Click</button>
        </div>
    );
};

export default RouteButton;