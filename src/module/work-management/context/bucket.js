import React from 'react';

export const BucketContext = React.createContext({
    bucketList: [
        { id: 1, name: 'Important Tasks 1' },
        { id: 2, name: 'Important Tasks 2' },
        { id: 3, name: 'Important Tasks 3' },
        { id: 4, name: 'Important Tasks 4' },
        { id: 5, name: 'Important Tasks 5' },
    ],
});