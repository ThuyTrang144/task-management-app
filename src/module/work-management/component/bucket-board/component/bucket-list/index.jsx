import React from 'react';
import { BucketContext } from '../../../../context/bucket';
import Bucket from './Bucket';
import './style.scss';

const BucketList = React.memo(function (props) {
    return (
        <div className='bucket-listing'>
            <BucketContext.Consumer>
                {value => {
                    console.log('props', props);
                    return value.bucketList.map(item =>
                        <Bucket
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            searchValue={props.searchValue}
                        />
                    );
                }}
            </BucketContext.Consumer>
        </div>
    );
});
export default BucketList;