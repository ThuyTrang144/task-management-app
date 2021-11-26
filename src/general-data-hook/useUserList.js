import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { userListUrl } from '../constant';
import { getList } from '../slice/userSlice';

export const useUserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.users.userList);

    const getUserList = async () => {
        try {
            const { data } = await axios.get(userListUrl);
            return data.results;
        } catch(err) {
            console.log('user list', err);
        }
    };
    
    useEffect( () => {
        (async () => {
            const userList = await getUserList();
            dispatch(getList(userList));
        })();
    },[dispatch]);

    const findUserById = (id) => {
        const user = userList.find(element => element._id === id);
        if (user === undefined) {
            return { name: 'unknown'};
        } else {
            return user;
        }
    };
    const findUserByName = (username) => {
        const user = userList.find(element => `${element.first_name} ${element.last_name}` === username);
        if (user === undefined) {
            return { name: 'unknown'};
        } else {
            return user;
        }
    };
    return {
        userList,
        findUserById,
        findUserByName
    };
};
