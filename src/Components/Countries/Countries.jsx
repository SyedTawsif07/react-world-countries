import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log("hello", country);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>React World Countries: {countries.length}</h1>
            <h3>Total visited countries: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;