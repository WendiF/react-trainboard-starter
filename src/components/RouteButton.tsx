import React, { createContext, useContext, useEffect, useState } from 'react';
import { myContext } from './ContextProvider';
import StationSelection from './StationSelection';

const RouteButton: React.FC<unknown> = () => {
    const { departure, arrival } = React.useContext(myContext);

    return (
        
        <div>
            <a >
                <button onClick = { (e) => getStations(e, departure, arrival) } type = "button">Click</button>
            </a>
        </div>
    );
};

const getStations = (e: any, departure: string, arrival: string) => {

    console.log(departure, arrival);
};
export default RouteButton;