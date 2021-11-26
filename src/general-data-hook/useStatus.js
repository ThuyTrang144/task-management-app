import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { statusUrl } from '../constant';
import { getStatus } from '../slice/statusSlice';

const useStatus = () => {
    const dispatch = useDispatch();
    const statusList = useSelector(state => state.status.statusList);

    const getStatusList = async () => {
        try {
            let { data } = await axios.get(statusUrl);
            return data.results;
        } catch (err) {
            console.log('status', err);
        }
    };

    useEffect( () => {
        (async () => {
            const statusList = await getStatusList();
            dispatch(getStatus(statusList));
        })();
    },[dispatch]);

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
        statusList,
        findStatusById, 
        findStatusByName 
    };
};
export { useStatus };