import React, { useState } from 'react';
import RouteButton from './RouteButton';
import StationSelection from './StationSelection';

const UserPrompt: React.FC = () => {
    const [departure, setDeparture] = useState('EUS');
    const [arrival, setArrival] = useState('EUS');

    return (
        <div>
            <h2> Departure Station </h2>
            <StationSelection code = { departure } setter = { setDeparture }/>
            <h2> Arrival Station </h2>
            <StationSelection code = { arrival } setter = { setArrival }/>
            <RouteButton departure = { departure } arrival = { arrival }/>
        </div>
    );
};
export default UserPrompt;