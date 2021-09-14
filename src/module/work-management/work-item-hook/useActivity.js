import Moment from 'react-moment';
import { activityLabel } from '../../../constant';
import { useWorkItem } from './useWorkItem';

const useActivity = () => {
    const { findWorkItemById } = useWorkItem();
    const addNewActivity = (workId, text) => {
        const workItem = findWorkItemById(workId);
        workItem.activitiesList.splice(0, 0, { 
            id: Math.random().toString().substring(2), 
            name: text, 
            assigneeId: workItem.ownerId, 
            createdTime:<Moment fromNow>{new Date().toLocaleString() + ''}</Moment>,
            label: activityLabel[1].name
        });
    };
    return { addNewActivity };
};
export { useActivity };