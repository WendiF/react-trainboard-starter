import React from 'react';

type RouteButtonProps = {
    departure: string;
    arrival: string;
}

const RouteButton: React.FC<RouteButtonProps> = ({ departure, arrival }) => {
    const hyperlink = `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${departure}/${arrival}/#LiveDepResults`;

    return (
        <div>
            <a href = { hyperlink }>
                <button type = "button">Click</button>
            </a>
        </div>
    );
};

export default RouteButton;