import React from 'react';
import { BucketContext } from '../../../../context/bucket';
import Bucket from './Bucket';
import './style.scss';
import Masonry from 'react-masonry-css';

const BucketList = React.memo(function (props) {
    return (
        <BucketContext.Consumer>    
            {value => {
                return (
                    <Masonry   
                        breakpointCols={2}
                        className='my-masonry-grid'
                        columnClassName='my-masonry-grid_column'
                    >
                        {value.bucketList.map(item =>
                            <Bucket
                                key={item._id}
                                title={item.title}
                                id={item._id}
                                searchValue={props.searchValue}
                            />
                        )}
                    </Masonry>
                );
            }}    
        </BucketContext.Consumer>
    );
});
export default BucketList;