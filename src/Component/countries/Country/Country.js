import React from 'react';
import './Country.css'

const country = (props) => {
    const { name, capital, flag, population } = props.country
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <p>Capital  :{capital}</p>
            <p>Population  :{population}</p>
            <img src={flag} alt="" />

        </div>
    );
};

export default country;