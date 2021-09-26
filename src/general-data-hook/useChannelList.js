import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';

export const useChannelList = () => {
    const context = useContext(DataContext);
    const channelList = context.state.channelList;
    const findChannelById = (id) => {
        return channelList.find(element => element.id === id);
    };
    return { 
        channelList,
        currentChannelId: context.state.currentChannelId, 
        findChannelById,
        setCurrentActiveChannel: context.setCurrentActiveChannel
    };
};