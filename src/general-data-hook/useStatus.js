import { status } from '../constant';

const useStatus = () => {
    function findStatusById(id) {
        return status.find(element => element.id === id);
    }
    function findStatusByName(name) {
        return status.find(element => element.name === name);
    }
    return { 
        findStatusById, 
        findStatusByName 
    };
};
export { useStatus };