import React from 'react';
import {MdSearch} from 'react-icons/md';
import '../style/search.css'

const Search = ({handleSearchNote}) => {
    return (
    <div style={{backgroundColor:'white'}} className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input 
            onChange={
                (event)=>handleSearchNote(event.target.value)
            }

            type='text' 
            placeholder='tapez pour chercher...'/>
    </div>
    );
};

export default Search;