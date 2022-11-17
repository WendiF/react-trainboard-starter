import React, { Dispatch } from 'react';

const stations = [
    ['London Euston', 'EUS'],
    ['Finsbury Park', 'FPK'],
    ['London Kings Cross', 'KGX'],
    ['Cambridge', 'CBG'],
    ['Leeds', 'LDS'],
];

type StationSelectionProps = {
    setter: Dispatch<string>;
}

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setter: Dispatch<string>) => {
    setter(event.target.value);
};

const StationSelection: React.FC<StationSelectionProps> = ({ setter }) => {
    const stationHtml = stations.map((station) => {
        return <option key = { station[0] } value = { station[1] }> {station[0]} </option>;
    });

    return (
        <select onChange = { (e) => handleChange(e, setter) }>
            {stationHtml}
        </select>
    );
};

export default StationSelection;