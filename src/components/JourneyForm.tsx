import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ClipLoader from 'react-spinners/ClipLoader';
import { Position } from 'iconoir-react';
import './stations.css';
import { fetchFares, fetchStations } from '../helpers/ApiCallHelper';
import { journey } from '../models/journey';
import { station, stationAPI } from '../models/station';

type selectOption = {
    value: string;
    label: string;
}

const JourneyForm: React.FC<{
    setJourneys: React.Dispatch<React.SetStateAction<journey[] | undefined>>;
}> = ({ setJourneys }) => {
    const [stations, setStations] = useState<station[]>();
    const [stationOptions, setStationOptions] = useState<selectOption[]>();

    const [from, setFrom] = useState<selectOption | undefined>();
    const [to, setTo] = useState<selectOption | undefined>();

    const [isLoading, setLoading] = useState(false);

    const getNearestStation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };

            let bestDist;
            let bestStation;
            if (stations) {
                for (const station of stations) {
                    if (station) {
                        const dist = Math.pow(station.longitude - coords.longitude, 2) + Math.pow(station.latitude - coords.latitude, 2);
                        if (!bestDist || dist < bestDist) {
                            bestDist = dist;
                            bestStation = {
                                value: station.code,
                                label: station.name,
                            };
                        }
                    }
                }
            }

            setFrom(bestStation);
        });
    };

    const handleSubmit = () => {
        const today = new Date(Date.now());
        today.setHours(today.getHours() + 1);

        if (from && to) {
            setLoading(true);
            setJourneys(undefined);
            fetchFares(from.value, to.value, today.toISOString())
                .then((value) => setJourneys(value.map((journey: any): journey => ({
                    arrivalTime: new Date(journey.arrivalTime),
                    departureTime: new Date(journey.departureTime),
                    destination: journey.destinationStation.displayName,
                    origin: journey.originStation.displayName,
                    id: journey.journeyId,
                }))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    };

    useEffect(() => {
        fetchStations()
            .then((value) => {
                setStations(value.map((station: stationAPI) => ({
                    name: station.name,
                    code: station.crs ?? station.nlc,
                    latitude: station.latitude,
                    longitude: station.longitude,
                })));
            })
            .catch((err) => console.log(err))
            .finally(() => {
                console.log('finally');
            });
    }, []);

    useEffect(() => setStationOptions(stations?.map((station) => ({
        value: station.code,
        label: station.name,
    }))), [stations]);

    return (
        <>
            <form>
                <label htmlFor = "from">From:</label>
                <Select
                    options = { stationOptions }
                    onChange = { (option) => option && setFrom(option) }
                    value = { from }
                />

                <button type = "button" onClick = { getNearestStation } style = { { display: 'grid', padding: '0.2em' } }>
                    <Position style = { { alignSelf: 'center' } }/>
                </button>

                <label htmlFor = "to">To:</label>
                <Select options = { stations?.map((station) => ({
                    value: station.code,
                    label: station.name,
                })) } onChange = { (option) => option && setTo(option) }/>
            </form>
            <button type = "button" onClick = { handleSubmit }>Submit</button>

            {isLoading && <ClipLoader
                loading = { isLoading }
                cssOverride = { { display: 'block', margin: 'auto' } }
            />}
        </>
    );
};

export default JourneyForm;
