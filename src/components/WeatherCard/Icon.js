import React from 'react';
import styled from '@emotion/styled';

const Icon = ({ condition }) => {

    const Img = styled.img`
        width: 50%;
        margin: 0.5rem 0;
    `;

    let icon = null;
    switch (condition) {
        case 'Storm':
            icon = './img/Storm-128.png';
            break;
        case 'Clouds':
            icon = './img/clouds-128.webp';
            break;
        case 'Mist':
            icon = './img/mist-128.webp';
            break;
        case 'Clear':
            icon = './img/clear-128.webp';
            break;
        case 'Rain':
            icon = './img/rain-weather-128.webp';
            break;
        default:
            icon = './img/day-clear-128.png';
            break;
    }

    return (
        <Img src={icon} alt="" />
    );
}

export default Icon;