import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useUserList = () => {
    const context = useContext(DataContext);
    const userList = context.userList;
    const findUserById = (id) => {
        return userList.find(element => element.id === id);
    };
    return { userList, findUserById };
};
