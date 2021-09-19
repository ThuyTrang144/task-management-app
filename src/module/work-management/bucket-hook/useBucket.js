import { useContext, useState } from 'react/cjs/react.development';
import { DATA } from '../../../data';
import { BucketContext } from '../context/bucket';
import { useWorkItem } from '../work-item-hook/useWorkItem';

const BucketProvider = ( {children} ) => {
    const [ bucketList, setBucketList ] = useState(DATA.bucketList);
    const { revertWorkItemToWorkStream } = useWorkItem();
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