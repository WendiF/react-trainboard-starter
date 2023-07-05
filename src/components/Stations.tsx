import React, { useEffect, useState } from 'react';
import { fetchFares, fetchStations } from '../helpers/ApiCallHelper';
import { journey } from '../models/journey';
import { stationAPI } from '../models/station';

const Stations: React.FC = () => {
    const [allStations, setAllStations] = useState<string[]>();
    const [allStationCodes, setAllStationCodes] = useState<Map<string, string>>();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [journeys, setJourneys] = useState<journey[]>();

    const handleClick = () => {
        fetchFares(from, to, '2023-07-06')
            .then((value) => setJourneys(value.map((journey: any): journey => ({
                arrivalTime: new Date(journey.arrivalTime),
                departureTime: new Date(journey.departureTime),
                destination: journey.destinationStation.displayName,
                origin: journey.originStation.displayName,
                id: journey.journeyId,
            }))))
            .catch((err) => console.log(err))
            .finally(() => console.log('fares'));
    };

    useEffect(() => {
        fetchStations()
            .then((value) => {
                setAllStations(value.map((station: stationAPI) => station.name).sort());
                setAllStationCodes(new Map(value.map((station: stationAPI) => [station.name, station.crs ?? station.nlc])));
            })
            .catch((err) => console.log(err))
            .finally(() => console.log('finally'));
    }, []);

    return (
        <>
            <label htmlFor = "from">From:</label>
            <select name = "from" id = "from" value = { from } onChange = { (event) => setFrom(event.target.value) }>
                {allStations?.map((station) => <option value = { allStationCodes?.get(station) }
                    key = { station }>{station}</option>)}
            </select>

            <label htmlFor = "to">To:</label>
            <select name = "to" id = "to" value = { to } onChange = { (event) => setTo(event.target.value) }>
                {allStations?.map((station) => <option value = { allStationCodes?.get(station) }
                    key = { station }>{station}</option>)}
            </select>

            <button type = "button" onClick = { handleClick }>Submit</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Departure time</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Arrival time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {journeys?.map((journey) =>
                            <tr key = { journey.id }>
                                <td>{journey.departureTime.toLocaleTimeString()}</td>
                                <td>{journey.origin}</td>
                                <td>{journey.destination}</td>
                                <td>{journey.arrivalTime.toLocaleTimeString()}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Stations;
