import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ClipLoader from 'react-spinners/ClipLoader';
import { Position } from 'iconoir-react';
import './journeyForm.css';
import { fetchFares, fetchStations } from '../helpers/ApiCallHelper';
import { Journey } from '../models/Journey';
import { SelectOption } from '../models/SelectOption';
import { Station, StationAPI } from '../models/Station';

const JourneyForm: React.FC<{
    setJourneys: React.Dispatch<React.SetStateAction<Journey[] | undefined>>;
    setHasCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setJourneys, setHasCompleted }) => {
    const [stations, setStations] = useState<Station[]>();
    const [stationOptions, setStationOptions] = useState<SelectOption[]>();

    const [from, setFrom] = useState<SelectOption | undefined>();
    const [to, setTo] = useState<SelectOption | undefined>();

    const [isLoading, setLoading] = useState(false);

    const getNearestStation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };

            let bestDistance;
            let bestStation;
            if (stations) {
                for (const station of stations) {
                    if (station) {
                        const distance = Math.pow(station.longitude - coords.longitude, 2) + Math.pow(station.latitude - coords.latitude, 2);
                        if (!bestDistance || distance < bestDistance) {
                            bestDistance = distance;
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
            setHasCompleted(false);
            setLoading(true);

            fetchFares(from.value, to.value, today.toISOString())
                .then((returnedJourneys) => setJourneys(returnedJourneys.map((journey: any): Journey => ({
                    arrivalTime: new Date(journey.arrivalTime),
                    departureTime: new Date(journey.departureTime),
                    destination: journey.destinationStation.displayName,
                    origin: journey.originStation.displayName,
                    id: journey.journeyId,
                }))))
                .catch(() => setJourneys([]))
                .finally(() => {
                    setLoading(false);
                    setHasCompleted(true);
                });
        }
    };

    useEffect(() => {
        fetchStations()
            .then((value) => {
                setStations(value.map((station: StationAPI) => ({
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
            <form className = 'centred'>
                <label htmlFor = "from">From:</label>
                <Select
                    options = { stationOptions }
                    onChange = { (option) => option && setFrom(option) }
                    value = { from }
                />

                <button type = "button" className = 'location-button' onClick = { getNearestStation } >
                    <Position style = { { alignSelf: 'center' } }/>
                </button>

                <label htmlFor = "to">To:</label>
                <Select
                    options = { stationOptions }
                    onChange = { (option) => option && setTo(option) }
                    value = { to }
                />
            </form>
            <button type = "button" onClick = { handleSubmit }>Submit</button>

            <div className = 'centred'>
                {isLoading && <ClipLoader
                    loading = { isLoading }
                    cssOverride = { { display: 'block', margin: 'auto' } }
                />}
            </div>
        </>
    );
};

export default JourneyForm;
