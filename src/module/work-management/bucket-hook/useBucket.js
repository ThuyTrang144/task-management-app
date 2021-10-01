import { message } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import { bucketListUrl } from '../../../constant';
import { BucketContext } from '../context/bucket';

const BucketProvider = ( {children} ) => {
    const [ bucketList, setBucketList ] = useState([]);

    const getBucketList = async () => {
        try {
            const res = await fetch(bucketListUrl);
            return res.json();
        } catch(err) {
            console.log('bucket', err);
        }
    };
    const deleteBucket = async (id) => {
            
        const url = `${bucketListUrl}/${id}`;
        console.log('url', url);
        try {
            let res = await axios.get(`${url}/items`);
            if (res.data.results.length !== 0) {
                return message.warning('Cannot delete the bucket which have work items inside');
            } else {
                let response = await axios.delete(url);
                console.log(response.status);
            }
        } catch (err) {
            console.log(err);
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