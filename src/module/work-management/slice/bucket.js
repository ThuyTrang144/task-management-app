import React from 'react';

export const BucketContext = React.createContext({
    bucketList: [],
    addNewBucket: () => {},
    deleteBucket: () => {},
    editBucketName: () => {},
});