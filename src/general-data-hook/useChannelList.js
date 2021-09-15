import { useContext, useState } from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useChannelList = () => {
    const context = useContext(DataContext);
    const [channelList] = useState(context.channelList);
    const findChannelById = (id) => {
        return channelList.find(element => element.id === id);
    };
    return { channelList, findChannelById };
};