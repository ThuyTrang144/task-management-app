import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import {BucketList, BucketAction}  from './component'; 
import './style.scss';

export const BucketContext = React.createContext({ 
    searchValue: ''
});
const BucketBoard = React.memo( function() {
    const bucketContext = useContext(BucketContext);
    const [searchValue, setSearchValueState] = useState(bucketContext.searchValue);
    function searchWorkItem (text) {
        setSearchValueState(text);
    }
    return (
        <div className='bucket-board'>
            <BucketContext.Provider
                value = {{
                    searchValue: searchValue,
                    searchWorkItem: searchWorkItem
                }}
            >
                <BucketAction />
                <BucketList />
            </BucketContext.Provider>
        </div>
    );
});
export default BucketBoard;