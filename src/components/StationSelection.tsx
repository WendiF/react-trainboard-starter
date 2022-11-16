import React, {useState} from 'react';

const stations = [
    ['London Euston', "EUS"],
    ['Finsbury Park', "FPK"],
    ['London Kings Cross', "KGX"],
    ['Cambridge', "CBG"],
    ['Leeds', "LDS"]
];
//Cambridge (CBG)
//London Kings Cross (KGX)
//Finsbury Park (FPK)
//Leeds (LDS)
//London Euston (EUS)

type StationSelectionProps = {
    setter: Function;
}


const StationSelection: React.FC<StationSelectionProps> = ({setter}) => {
    const stationHtml = stations.map((station) =>{
        return <option key = { station[0] } value = { station[1] }> {station[0]} </option>;
    });

    return (
        // THIS IS WHERE WE STOPPED
        <select onChange={setter(this.value != undefined? this.value:"" || "")}>
            {stationHtml}
        </select>
    );
};

export default StationSelection;