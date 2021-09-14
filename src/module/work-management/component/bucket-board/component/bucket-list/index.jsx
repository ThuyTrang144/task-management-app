import React from 'react';
import { DataContext } from '../../../../../../context';
import Bucket from './Bucket';
import './style.scss';

const BucketList = React.memo(function () {
    return (
        <div className='bucket-listing'>
            <DataContext.Consumer>
                {value => {
                    return value.state.bucketList.map(item =>
                        <Bucket
                            key={item.id}
                            name={item.name}
                            id={item.id}
                        />
                    );
                }}
            </DataContext.Consumer>
        </div>
    );
});
export default BucketList;