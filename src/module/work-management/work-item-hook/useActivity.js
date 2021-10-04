import axios from 'axios';
import { useEffect } from 'react';
import Moment from 'react-moment';
import { useContext, useState } from 'react/cjs/react.development';
import { activityLabel, activityListUrl } from '../../../constant';
import { DataContext } from '../../../context';
import { useWorkItem } from './useWorkItem';

const useActivity = () => {
    const context = useContext(DataContext);
    const [ activityList, setActivityList] = useState([]);
    const { workItemList, setWorkItemList, findWorkItemById } = useWorkItem();
    const workItem = findWorkItemById(context.state.activeId);
    const addNewActivity = (text) => {
        const newActivity = { 
            id: Math.random().toString().substring(2), 
            name: text, 
            assigneeId: workItem.ownerId, 
            createdTime:<Moment fromNow>{new Date().toLocaleString() + ''}</Moment>,
            label: activityLabel[1].name
        };
        workItem.activitiesList.splice(0, 0, newActivity);
        setWorkItemList([...workItemList]);
    };
    const getActivityList = async () => {
        const { data } = await axios.get(activityListUrl);
        return data;
    };
    useEffect(() => {
        (async () => {
            const data = await getActivityList();
            const activityList = data.results;
            console.log('data', activityList);
            setActivityList(activityList);
        })();
    }, []);
    return { 
        activityList,
        addNewActivity,
        getActivityList
    };
};
export { useActivity };