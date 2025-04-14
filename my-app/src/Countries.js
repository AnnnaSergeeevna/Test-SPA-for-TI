import React, { useEffect, useState } from 'react';
import './Countries.css';
import Search from './Search';

function Countries() {
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All')
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                let sortedData = data.sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common)
                });
                return sortedData
            })
            .then(
                sortedData => {
                    setCountries(sortedData)
                    console.log(sortedData)
                }
            )
    }, [])
    const regions = ['All', ...new Set(countries.map(country => country.region))]

    let filteredCountries = selectedRegion === "All"
        ? countries
        : countries.filter(country => country.region === selectedRegion);
    filteredCountries = filteredCountries.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div>
            <h2>Countries and Capitals</h2>

            <span className='chooseReg'>Choose region</span>
            <select
                className='selectRegion'
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
            >
                {regions.length !== 0 ? (
                    regions.map((reg, ind) => (
                        <option key={ind} value={reg}>{reg}</option>
                    ))
                ) : (
                    <option>Loading...</option>
                )}
            </select>
            <span className='chooseReg'>Total: {filteredCountries.length}</span>
            <button className='resetButton' onClick={() => setSelectedRegion("All") || setSearchValue('')}>Reset</button>
            <Search value={searchValue} onChange={setSearchValue} />
            <ul>
                {filteredCountries.length !== 0 ? (
                    filteredCountries.map((country, index) => (
                        <li className='column' key={index}><div>{country.flag}</div><div className='leftColumn'>{country.name.common}</div><div className='middleColumn'>{country.capital ? country.capital[0] : '-'}</div><div className='rightColumn'>{country.region}</div></li>
                    ))) : 'No country has been found'
                }
            </ul>
        </div >
    )
}
export default Countries