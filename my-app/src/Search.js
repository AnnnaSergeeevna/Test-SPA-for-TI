import React from 'react';
import './Search.css';


function Search({ value, onChange }) {
    const handleOnChange = (e) => {
        onChange(e.target.value)
    }


    return (<div>
        <input className='SearchInput'
            placeholder='Search Country'
            name='search'
            type='text'
            value={value}
            onChange={handleOnChange}></input>
    </div>
    )
}

export default Search