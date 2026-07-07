import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // if (visited) {
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true);
        // }

        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'country-not-visited' : 'country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Population: {country.population.population}</h3>
            <p>Area: {country.area.area} {country.area.area > 30000 ? 'Big country' : 'Small country'}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;