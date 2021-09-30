import { useContext} from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useUserList = () => {
    const context = useContext(DataContext);
    const userList = context.state.userList;
    const findUserById = (id) => {
        const user = userList.find(element => element.id === id);
        if (user === undefined) {
            return { name: 'unknown'};
        } else {
            return user;
        }
    };
    const findUserByName = (username) => {
        const user = userList.find(element => element.name === username);
        if (user === undefined) {
            return { name: 'unknown'};
        } else {
            return user;
        }
    };
    return {
        userList: context.state.userList,
        findUserById,
        findUserByName
    };
};
