import React, { useState } from 'react';
import './style.scss';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
import { DownOutlined } from '@ant-design/icons';
import { ChannelItem } from './ChannelItem';
import { Modal } from 'antd';

export function ChannelSelector() {
    const { channelList } = useChannelList();
    const [ isViewChannelList, setIsViewChannleList ] = useState(false);
    function rederChannelName() {
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