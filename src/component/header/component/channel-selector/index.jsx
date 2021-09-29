import React, { useState } from 'react';
import './style.scss';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
import { DownOutlined } from '@ant-design/icons';
import { ChannelItem } from './ChannelItem';
import { Button, Input, Modal } from 'antd';

export function ChannelSelector() {
    const { channelList, currentChannelId, findChannelById, setCurrentActiveChannel, addNewChannel } = useChannelList();   
    const [ currentChannel, setCurrentChannel ] = useState(currentChannelId);
    const [ isAddingChannel, setIsAddingChannel ] = useState(false);
    const [ isViewChannelList, setIsViewChannleList ] = useState(false);
    const channel = findChannelById(currentChannel);
    const handleChangeChannel = (id) => {
        setCurrentActiveChannel(id);
        setCurrentChannel(id);
        setIsViewChannleList(false);
    };
    function rederChannelName() {
        return channelList.map(item => 
            <ChannelItem 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                totalWorkItem={item.totalWorkItem} 
                handleChangeChannel={handleChangeChannel}
                currentChannelId={currentChannelId}
            ></ChannelItem>
        );
    }
    function viewChannelList() {
        setIsViewChannleList(true);

    }
    function handleCancle() {
        setIsViewChannleList(false);
    }
    function openAddingForm() {
        setIsAddingChannel(true);
    }  
    function handleAddChannel(e) {
        var text = e.target.value;
        addNewChannel(text);
    }
    return (
        <>
            <button className='channel-selector' onClick={viewChannelList}>
                <span>{'Channel: ' + channel.name.toLocaleUpperCase()}</span>
                <DownOutlined />
            </button>
            <Modal title='Select Channel'
                className='channel-list'
                onCancel={handleCancle}
                visible={isViewChannelList}
                width={1200}
                footer={
                    <div>
                        <Button type='primary' onClick={openAddingForm}>Create New Channel</Button>
                        {isAddingChannel ? 
                            <Input 
                                style={{marginTop: '20px'}} 
                                placeholder='Enter channel name' 
                                onPressEnter={handleAddChannel}
                            >
                            </Input>: null}
                    </div>
                }>
                {rederChannelName()}
            </Modal> 
        </>
    );
}