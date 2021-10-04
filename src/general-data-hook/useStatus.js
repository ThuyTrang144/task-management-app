import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';

const useStatus = () => {
    const context = useContext(DataContext);
    const statusList = context.state.statusList;
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