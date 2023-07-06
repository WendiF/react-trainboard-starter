import React, { useState } from 'react';
import './stations.css';
import { journey } from '../models/journey';
import JourneyForm from './JourneyForm';
import JourneyTable from './JourneyTable';

const Stations: React.FC = () => {
    const [journeys, setJourneys] = useState<journey[]>();

    return (
        <>
            <JourneyForm setJourneys = { setJourneys } />

            <JourneyTable journeys = { journeys } />
        </>
    );
};

export default Stations;
