import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './stations.css';
import { fetchFares, fetchStations } from '../helpers/ApiCallHelper';
import { journey } from '../models/journey';
import { stationAPI } from '../models/station';

const Stations: React.FC = () => {
    const [allStations, setAllStations] = useState<string[]>();
    const [allStationCodes, setAllStationCodes] = useState<Map<string, string>>();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [journeys, setJourneys] = useState<journey[]>();

    const today = new Date(Date.now());
    today.setHours(today.getHours() + 1);

    const [isLoading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setJourneys(undefined);
        fetchFares(from, to, today.toISOString())
            .then((value) => setJourneys(value.map((journey: any): journey => ({
                arrivalTime: new Date(journey.arrivalTime),
                departureTime: new Date(journey.departureTime),
                destination: journey.destinationStation.displayName,
                origin: journey.originStation.displayName,
                id: journey.journeyId,
            }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
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
            <form>
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
            </form>
            <button type = "button" onClick = { handleClick }>Submit</button>

            {isLoading && <ClipLoader
                loading = { isLoading }
                cssOverride = { { display: 'block', margin:'auto' } }
            />}

            {journeys &&

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

            }
        </>
    );
};

export default Stations;
