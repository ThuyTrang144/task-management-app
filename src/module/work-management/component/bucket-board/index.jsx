import React, { useState } from 'react';
import {BucketList, BucketAction}  from './component'; 
import './style.scss';

const BucketBoard = React.memo( function() {
    const [ searchValue, setSearchValueState ] = useState('');
    function searchWorkItem (text) {
        setSearchValueState(text);
    }
    return (
        <div className='bucket-board' >
            <BucketAction             
                searchValue={searchValue}
                searchWorkItem={searchWorkItem}/>
            <BucketList searchValue={searchValue}/>
        </div>
    );
});
export default BucketBoard;