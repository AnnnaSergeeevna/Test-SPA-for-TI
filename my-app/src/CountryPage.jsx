import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function CountryPage() {
    const { name } = useParams();
    const [country, setCountry] = useState('')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                const foundCountry = data.find(c => c.name.common === name)
                setCountry(foundCountry)
            })
    }, [name])

    return (
        <>
            {country.flags?.png && (
                <p><img src={country.flags.png} alt="Flag" width="300" /></p>
            )}
            <h2>{country.name?.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : '—'}</p>
            <p>Region: {country.region}, {country.subregion}</p>
            <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : ''}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Area: {country.area.toLocaleString()} km²</p>
            <p>Timezones: {country.timezones ? country.timezones.join(', ') : ''}</p>
        </>
    )

}
export default CountryPage