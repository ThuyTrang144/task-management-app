import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { statusUrl } from '.././constant';

const useStatus = () => {
    const [ statusList, setStatusList ] = useState([]);

    const getStatusList = async () => {
        try {
            let response = await fetch(statusUrl);
            return response.json();
        } catch (err) {
            console.log('status', err);
        }
    };

    useEffect(() => {
        (async () => {
            const data = await getStatusList();
            setStatusList(data.results);
        })();
    }, []);

    function findStatusById(id) {
        const status = statusList.find(element => element._id === id);
        if (status === undefined) {
            return { label: 'Unknow'};
        } else {
            return status;
        }
    }

    function findStatusByName(name) {
        const status =  statusList.find(element => element.label === name);
        if (status === undefined) {
            return { label: 'Unknow'};
        } else {
            return status;
        }
    }
    
    return { 
        findStatusById, 
        findStatusByName 
    };
};
export { useStatus };