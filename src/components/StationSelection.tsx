import React from 'react';

const stations = ['London Euston', 'Finsbury Park', 'London Kings Cross', 'Cambridge', 'Leeds'];

const StationSelection: React.FC<unknown> = () => {

    const stationHtml = stations.map((station) =>{
        return <option key = { station } value = { station }> {station} </option>;
    });

    return (
        <select>
            {stationHtml}
        </select>
    );
};

export default StationSelection;