import React, { useEffect, useState } from 'react';
import { fetchStations } from '../helpers/ApiCallHelper';

const Stations: React.FC = () => {
    const [allStations, setAllStations] = useState(['Leeds', 'Paddington', 'King\'s Cross', 'Manchester Piccadilly', 'Brighton']);
    const [allStationCodes, setAllStationCodes] = useState(new Map([
        ['Leeds', 'LDS'],
        ['Paddington', 'PAD'],
        ['King\'s Cross', 'KGX'],
        ['Manchester Piccadilly', 'MAN'],
        ['Brighton', 'BTN'],
    ]));

    const [from, setFrom] = useState('LDS');
    const [to, setTo] = useState('LDS');

    const handleClick = () => {
        window.location.href = `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${from}/${to}/#LiveDepResults`;
    };

    useEffect(() => {
        fetchStations()
            .then((value) => console.log(value))
            .catch((err) => console.log(err))
            .finally(() => console.log('finally'));
    }, []);

    console.log('hello world');

    return (
        <>
            <label htmlFor = "from">From:</label>
            <select name = "from" id = "from" value = { from } onChange = { (event) => setFrom(event.target.value) }>
                {allStations.map((station) => <option value = { allStationCodes.get(station) } key = { station }>{station}</option>)}
            </select>

            <label htmlFor = "to">To:</label>
            <select name = "to" id = "to" value = { to } onChange = { (event) => setTo(event.target.value) }>
                {allStations.map((station) => <option value = { allStationCodes.get(station) } key = { station }>{station}</option>)}
            </select>

            <button type = "button" onClick = { handleClick }>Submit</button>
        </>
    );
};

export default Stations;
