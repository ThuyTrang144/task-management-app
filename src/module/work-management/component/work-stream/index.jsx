import React, { useState } from 'react';
import { AddingBox, WorkList } from './component';
import './styles.scss';

const WorkStream = React.memo(function () {
    const [searchValue, setSearchValueState] = useState('');
    function searchWorkItem(text) {
        setSearchValueState(text);
    }
    return (
        <div className="work-stream">
            <AddingBox
                searchValue={searchValue}
                searchWorkItem={searchWorkItem}
            />
            <WorkList 
                searchValue={searchValue} 
            />
        </div>
    );
});

export default WorkStream;