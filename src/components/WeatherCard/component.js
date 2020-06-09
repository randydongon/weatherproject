import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = ({ city, country, temp, condition }) => {

    let highColor = 0;
    let lowColor = 0;
    let bg = null;
    if (temp > 12) {
        highColor = (1 - (temp - 12) / 28) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(255,${highColor},0), rgb(255,${lowColor}, 0))`;
    }
    else if (temp <= 12) {
        highColor = (1 - (temp + 20) / 32) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top, rgb(0,${highColor},255), rgb(0,${lowColor}, 255))`;
    }

    const Card = styled.div`
        background:${bg} ;
        width: auto;
        border-radius: 1rem;
        margin: auto;
        padding: 0rem 0.5rem;
        margin-top: 2rem;
        color: #ffffff;
        flex-direction: column;
        justify-content: space-between;
    `;

    return (
        <Card>
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
}

export default WeatherCard;
