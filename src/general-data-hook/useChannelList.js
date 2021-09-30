import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../context';
import { useWorkItem } from '../module/work-management/work-item-hook/useWorkItem';

export const useChannelList = () => {
    const context = useContext(DataContext);
    const { workItemList } = useWorkItem();
    const channelList = context.state.channelList;
    const findChannelById = (id) => {
        return channelList.find(element => element._id === id);
    };
    return { 
        channelList,
        currentChannel: context.state.currentChannel,
        findChannelById,
        addNewChannel: context.addNewChannel,
        countTotalWorkItem: context.countTotalWorkItem(workItemList),
        findActiveChannel: context.findActiveChannel
    };
};