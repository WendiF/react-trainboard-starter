export const fetchStations = () => {
    return fetch('https://mobile-api-softwire1.lner.co.uk/v1/stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => data.stations);
};

export const fetchFares = (origin: string, destination: string, datetime: string, children = '0', adults = '1') => {
    return fetch('https://mobile-api-softwire1.lner.co.uk/v1/fares?' + new URLSearchParams({
        originStation: origin,
        destinationStation: destination,
        outboundDateTime: datetime,
        numberOfChildren: children,
        numberOfAdults: adults,
    }), {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => data.outboundJourneys);
};
