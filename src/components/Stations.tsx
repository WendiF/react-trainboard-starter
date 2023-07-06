import React, { useState } from 'react';
import './stations.css';
import { Journey } from '../models/Journey';
import JourneyForm from './JourneyForm';
import JourneyTable from './JourneyTable';

const Stations: React.FC = () => {
    const [journeys, setJourneys] = useState<Journey[]>();
    const [hasCompleted, setHasCompleted] = useState(false);

    return (
        <>
            <JourneyForm setJourneys = { setJourneys } setHasCompleted = { setHasCompleted } />

            <JourneyTable journeys = { journeys } hasCompleted = { hasCompleted }/>
        </>
    );
};

export default Stations;
