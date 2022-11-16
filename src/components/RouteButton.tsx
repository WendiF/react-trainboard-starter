import React, { useEffect, useState, createContext } from 'react';
import StationSelection from "./StationSelection";

const RouteButton: React.FC<unknown> = () => {

    return (
        <div>
            <h2> Departure Station </h2>
            <StationSelection/>
            <h2> Arrival Station </h2>
            <StationSelection/>
            <a href = "src/components/RouteButton#LiveDepResults">
                <button type = "button">Click</button>
            </a>
        </div>
    );
};
export default RouteButton;