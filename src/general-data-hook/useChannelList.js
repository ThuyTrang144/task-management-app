import { useContext, useState } from 'react/cjs/react.development';
import { DataContext } from '../context';
import { DATA } from '../data';

export const useChannelList = () => {
    const context = useContext(DataContext);
    const channelList = context.state.channelList;
    console.log('channel', channelList);

 
    
    const findChannelById = (id) => {
        return channelList.find(element => element._id === id);
    };
    return { 
        channelList,
        currentChannel: context.state.currentChannel,
        findChannelById,
        // setCurrentActiveChannel,
        countTotalWorkItem: context.countTotalWorkItem(DATA.workItemList),
        addNewChannel: context.addNewChannel

    };
};