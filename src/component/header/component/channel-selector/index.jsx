import React, { useContext, useState } from 'react';
import './style.scss';
import { Select } from 'antd';
import { DataContext } from '../../../../context';
const { Option } = Select;

export function ChannelSelector() {
    const context = useContext(DataContext);
    const [channelName, setChannelNameState] = useState(context.state.channelList[0].name);
    function onChange (option) {
        setChannelNameState( option );
    }
    function rederChannelName() {
        return context.state.channelList.map(item => {
            return <Option key={item.id} value={item.name}>{item.name}</Option>;
        });
    }
    return (
        <Select
            className='channel-selector'
            defaultValue={'Channel: ' + context.state.channelList[0].name.toLocaleUpperCase()}
            onChange={onChange}
            value={'Channel: ' + channelName.toLocaleUpperCase()}
        >
            {rederChannelName()}
        </Select>
    );
}