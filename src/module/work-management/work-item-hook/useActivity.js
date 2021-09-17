import Moment from 'react-moment';
import { useContext } from 'react/cjs/react.development';
import { activityLabel } from '../../../constant';
import { DataContext } from '../../../context';
import { useWorkItem } from './useWorkItem';

const useActivity = () => {
    const context = useContext(DataContext);
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
    return { 
        activitiesList: workItem.activitiesList,
        addNewActivity
    };
};
export { useActivity };