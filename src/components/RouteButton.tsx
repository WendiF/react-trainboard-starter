import React from 'react';
import { fetchFares } from '../helpers/ApiCallHelper';
import { StationContext } from './StationContextProvider';
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