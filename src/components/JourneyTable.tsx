import React from 'react';
import './journeyTable.css';
import { Journey } from '../models/Journey';

const JourneyTable: React.FC<{ journeys: Journey[] | undefined ; hasCompleted: boolean}> = ({ journeys, hasCompleted }) => {
    return (
        <>
            {hasCompleted && (
                !journeys || journeys.length === 0 ?
                    <p>No journeys found</p>
                    :
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
                    </div> )
            }
        </>
    );
};

export default JourneyTable;
