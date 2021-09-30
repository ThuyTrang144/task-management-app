import React, { useState } from 'react';
import './style.scss';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
import { DownOutlined } from '@ant-design/icons';
import { ChannelItem } from './ChannelItem';
import { Button, Input, Modal } from 'antd';

export function ChannelSelector() {
    const { channelList, currentChannel, findChannelById, addNewChannel, findActiveChannel } = useChannelList();   
    const [ currentActiveChannel, setCurrentActiveChannel ] = useState(currentChannel);
    const [ isAddingChannel, setIsAddingChannel ] = useState(false);
    const [ isViewChannelList, setIsViewChannleList ] = useState(false);
    const handleChangeChannel = (id) => {
        const channel = findChannelById(id);
        setCurrentActiveChannel(channel);
        findActiveChannel(channel);
        setIsViewChannleList(false);
    };

    function rederChannelName() {
        return channelList.map(item => 
            <ChannelItem 
                key={item._id} 
                id={item._id} 
                name={item.name} 
                totalWorkItem={item.totalWorkItem} 
                handleChangeChannel={handleChangeChannel}
                currentChannelId={currentActiveChannel ? currentActiveChannel._id : '5e296837-9cae-4268-87f6-8cb351745ea8'}
            ></ChannelItem>
        );
    }

    function viewChannelList() {
        setIsViewChannleList(true);

    }
    function handleCancle() {
        setIsViewChannleList(false);
        setIsAddingChannel(false);
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
                {currentActiveChannel === undefined ? 
                    <span>{'Channel: ' + 'Default Channel'.toLocaleUpperCase()}</span> : 
                    <span>{'Channel: ' + currentActiveChannel.name.toLocaleUpperCase()}</span>}
                <DownOutlined />
            </button>
            <Modal 
                title='Select Channel'
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