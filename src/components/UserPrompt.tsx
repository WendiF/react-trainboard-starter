import React, { useEffect, useState, createContext } from 'react';
import StationSelection from "./StationSelection";
import RouteButton from "./RouteButton";
import {myContext, ContextProvider} from "./ContextProvider";

const UserPrompt: React.FC<unknown> = () => {
    const { value, value2 } = React.useContext(myContext);
    const [departure, setDeparture] = value;
    const [arrival, setArrival] = value2;
    return (
        <div>
            <ContextProvider>
                <h2> Departure Station </h2>
                <StationSelection setter={setDeparture}/>
                <h2> Arrival Station </h2>
                <StationSelection setter={setArrival}/>
                <RouteButton/>
            </ContextProvider>
        </div>
    );
};
export default UserPrompt;