import React, { Dispatch, useState } from 'react';
import { myContext } from './ContextProvider';

const stations = [
    ['London Euston', 'EUS'],
    ['Finsbury Park', 'FPK'],
    ['London Kings Cross', 'KGX'],
    ['Cambridge', 'CBG'],
    ['Leeds', 'LDS'],
];
//Cambridge (CBG)
//London Kings Cross (KGX)
//Finsbury Park (FPK)
//Leeds (LDS)
//London Euston (EUS)

type StationSelectionProps = {
    setter:  Dispatch<string>;
}

const handleChange = (event: any, setter: Dispatch<string>) => {
    setter(event.target.value);
    console.log(event.target.value);

};

const StationSelection: React.FC<StationSelectionProps> = ({ setter }) => {
    const stationHtml = stations.map((station) =>{
        return <option key = { station[0] } value = { station[1] }> {station[0]} </option>;
    });

    const { value, value2 } = React.useContext(myContext);
    const [departure, setStateValue] = value;
    const [arrival, setStateValue2] = value2;

    return (
        // THIS IS WHERE WE STOPPED
        <select onChange = { (e) => handleChange(e, setter) }>
            {stationHtml}
        </select>
    );
};

export default StationSelection;