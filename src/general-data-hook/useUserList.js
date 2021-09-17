import { useContext} from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useUserList = () => {
    const context = useContext(DataContext);
    const userList = context.state.userList;
    const findUserById = (id) => {
        return userList.find(element => element.id === id);
    };
    const findUserByName = (username) => {
        return userList.find(element => element.name === username);
    };
    return {
        userList: context.state.userList,
        findUserById,
        findUserByName
    };
};
