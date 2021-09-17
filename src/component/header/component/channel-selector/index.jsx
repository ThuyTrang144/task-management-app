import React, { useState } from 'react';
import './style.scss';
import { Select } from 'antd';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
import { Modal, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ChannelItem } from './ChannelItem';
const { Option } = Select;

export function ChannelSelector() {
    const { channelList } = useChannelList();
    const [channelName, setChannelNameState] = useState(channelList[0].name);
    const [ isViewChannelList, setIsViewChannleList ] = useState(false);
    function onChange (option) {
        setChannelNameState( option );
    }
    function rederChannelName() {
        console.log('channel list', channelList);
        return channelList.map(item => 
            <ChannelItem key={item.id} id={item.id} name={item.name}></ChannelItem>
        );
    }
    function viewChannelList() {
        setIsViewChannleList(true);

    }
    function handleCancle() {
        setIsViewChannleList(false);
    }
    return (
        // <Select
        //     className='channel-selector'
        //     defaultValue={'Channel: ' + channelList[0].name.toLocaleUpperCase()}
        //     onChange={onChange}
        //     value={'Channel: ' + channelName.toLocaleUpperCase()}
        // >
        //     {rederChannelName()}
        // </Select>
        <>
            <button className='channel-selector' onClick={viewChannelList}>
                <span>{'Channel: ' + channelList[0].name.toLocaleUpperCase()}</span>
                <DownOutlined />
            </button>
            <Modal title='Select Channel'
                className='channel-list'
                onCancel={handleCancle}
                visible={isViewChannelList}
                width={1200}
                footer={null}>
                {rederChannelName()}
            </Modal> 
        </>
    );
}