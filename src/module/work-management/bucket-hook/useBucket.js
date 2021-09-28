import { useEffect } from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import { bucketListUrl } from '../../../constant';
import { BucketContext } from '../context/bucket';
import { useWorkItem } from '../work-item-hook/useWorkItem';

const BucketProvider = ( {children} ) => {
    const [ bucketList, setBucketList ] = useState([]);
    const { revertWorkItemToWorkStream } = useWorkItem();

    const getBucketList = async () => {
        try {
            const res = await fetch(bucketListUrl);
            return res.json();
        } catch(err) {
            console.log('bucket', err);
        }
    };

    useEffect(() => {
        (async () => {
            const data = await getBucketList();
            setBucketList(data.results);
        })(); 
    }, []);

    const findBucketById = (id) => {
        return bucketList.find(element => element.id === id);
    };

    const addNewBucket = (text) => {
        const newBucket = { id: Math.random().toString().substring(2), name: text };
        setBucketList([
            newBucket,
            ...bucketList
        ]);
    };

    function editBucketName(bucketId, text) {
        const bucket = findBucketById(bucketId);
        bucket.name = text;
        setBucketList([...bucketList]);
    }
    
    const deleteBucket = (bucketId) => {
        const bucketIndex = bucketList.findIndex(item => item.id === bucketId);
        bucketList.splice(bucketIndex, 1);
        revertWorkItemToWorkStream(bucketId);
        setBucketList([...bucketList]);
    };
    return (
        <BucketContext.Provider
            value={{
                bucketList,
                addNewBucket,
                editBucketName,
                deleteBucket
            }}
        >
            {children}
        </BucketContext.Provider>
    );
};
const useBucket = () => useContext(BucketContext);
export { useBucket, BucketProvider };