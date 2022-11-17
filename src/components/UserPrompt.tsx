import React, { createContext,useEffect, useState } from 'react';
import { ContextProvider,myContext } from './ContextProvider';
import RouteButton from './RouteButton';
import StationSelection from './StationSelection';

const UserPrompt: React.FC<unknown> = () => {
    const { departure, arrival } = React.useContext(myContext);

    return (
        <div>
            <h2> Departure Station </h2>
            <StationSelection setter = { departure.setCode }/>
            <h2> Arrival Station </h2>
            <StationSelection setter = { arrival.setCode }/>
            <RouteButton/>
        </div>
    );
};
export default UserPrompt;