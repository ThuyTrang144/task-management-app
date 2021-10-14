import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import { channelListUrl } from '../constant';
import { getChannelList } from '../slice/channelSlice';

export const useChannelList = () => {
    const channelList = useSelector(state => state.channel.channelList);
    const channelFetchingStatus = useSelector(state => state.channel.status);
    const activeChannelId = useSelector(state => state.channel.activeChannelId);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (channelFetchingStatus === 'idle') {
            dispatch(getChannelList(channelListUrl));
        }
    });

    const findActiveChannel = (id) => {
        return channelList.find(item => item._id === id);
    };

    
    return { 
        channelList,
        activeChannelId,
        findActiveChannel
    };
};