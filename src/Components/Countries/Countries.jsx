import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        console.log("hello", country);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        console.log("working", flag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>React World Countries: {countries.length}</h1>
            <h3>Total visited countries: {visitedCountries.length}</h3>
            <h3>Total visited flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3} >{country.name.common}</li>)
                }
            </ol>

            <div>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;