import React from 'react';
import RouteButton from './RouteButton';
import { StationContext } from './StationContextProvider';
import StationSelection from './StationSelection';

const UserPrompt: React.FC<unknown> = () => {
    const { departure, arrival } = React.useContext(StationContext);

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