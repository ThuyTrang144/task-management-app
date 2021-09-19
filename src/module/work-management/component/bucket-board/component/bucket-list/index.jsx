import React from 'react';
import { useBucket } from '../../../../bucket-hook/useBucket';
import { BucketContext } from '../../../../context/bucket';
import Bucket from './Bucket';
import './style.scss';
// import Masonry from "react-masonry-css";

const BucketList = React.memo(function (props) {
    const { bucketList } = useBucket();
    console.log('bucket', bucketList);
    return (
        <div className='bucket-listing'>
            <BucketContext.Consumer>
                {value => {
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