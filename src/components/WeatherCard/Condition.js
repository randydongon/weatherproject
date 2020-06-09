import React from 'react';
import styled from '@emotion/styled';


const Condition = ({ temp, condition }) => {

    const Temp = styled.h1`
        font-family: "Fira Sans", sans-serif;
        font-size: 2rem;
        font-weight: 200;
        margin: 0;
    `;

    const Condition = styled.h3`
        font-family: "Merriweather", sans-serif;
        font-size: 1.1rem;
        margin-top: 0.5rem;
    `;


    return (
        <>
            <Temp>{temp}°C</Temp>
            <Condition>{condition}</Condition>
        </>
    );
}

export default Condition;