import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';
import { DATA } from '../data';

export const useChannelList = () => {
    const context = useContext(DataContext);
    const channelList = context.state.channelList;
    console.log('channelList', channelList);
    const findChannelById = (id) => {
        return channelList.find(element => element.id === id);
    };
    return { 
        channelList,
        currentChannelId: context.state.currentChannelId, 
        findChannelById,
        setCurrentActiveChannel: context.setCurrentActiveChannel,
        addNewChannel: context.addNewChannel,
        countTotalWorkItem: context.countTotalWorkItem(DATA.workItemList),
    };
};