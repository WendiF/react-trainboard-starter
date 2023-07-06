import React, { useState } from 'react';
import './stations.css';
import { Journey } from '../models/Journey';
import JourneyForm from './JourneyForm';
import JourneyTable from './JourneyTable';

const Stations: React.FC = () => {
    const [journeys, setJourneys] = useState<Journey[]>();

    return (
        <>
            <JourneyForm setJourneys = { setJourneys } />

            <JourneyTable journeys = { journeys } />
        </>
    );
};

export default Stations;
