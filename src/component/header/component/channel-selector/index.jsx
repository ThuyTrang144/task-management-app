import React, { useState } from 'react';
import './style.scss';
import { Select } from 'antd';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
const { Option } = Select;

export function ChannelSelector() {
    const { channelList } = useChannelList();
    const [channelName, setChannelNameState] = useState(channelList[0].name);
    function onChange (option) {
        setChannelNameState( option );
    }
    function rederChannelName() {
        return channelList.map(item => {
            return <Option key={item.id} value={item.name}>{item.name}</Option>;
        });
    }
    return (
        <Select
            className='channel-selector'
            defaultValue={'Channel: ' + channelList[0].name.toLocaleUpperCase()}
            onChange={onChange}
            value={'Channel: ' + channelName.toLocaleUpperCase()}
        >
            {rederChannelName()}
        </Select>
    );
}