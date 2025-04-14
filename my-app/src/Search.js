import React from 'react';
import './Search.css';

function Search({ value, onChange }) {

    const handleOnChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <input
                className='SearchInput'
                type='text'
                placeholder={'Search Country'}
                value={value}
                onChange={handleOnChange}
            ></input>
        </div>
    )
}
export default Search