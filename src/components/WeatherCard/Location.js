import React from 'react';
import styled from '@emotion/styled';


const Location = ({ city, country }) => {

    const City = styled.h1`
        font-family: "Merriweather", sans-serif;
        font-size: 2rem;
        margin: 0;
    `;

    const Country = styled.h3`
        font-family: "Fira Sans", sans-serif;
        font-size: 1.1rem;
        margin: 0;
    `;

    return (
        <div>
            <City>{city}</City>
            <Country>{country}</Country>
        </div>
    );
}

export default Location;