import React, { useState } from 'react';
import './style.scss';
import { useChannelList } from '../../../../general-data-hook/useChannelList';
import { DownOutlined } from '@ant-design/icons';
import { ChannelItem } from './ChannelItem';
import { Button, Input, Modal } from 'antd';
import { defaultChannelId, defaultChannelName } from '../../../../constant';
import { useDispatch } from 'react-redux';
import { handleChangeChannel } from '../../../../slice/channelSlice';

export function ChannelSelector() {
    const { channelList, activeChannelId, findActiveChannel, addNewChannel } = useChannelList();
    const dispatch = useDispatch();
    const activeChannel = findActiveChannel(activeChannelId); 
    const [ isAddingChannel, setIsAddingChannel ] = useState(false);
    const [ isViewChannelList, setIsViewChannleList ] = useState(false);
    
    const changeChannel = (id) => {
        dispatch(handleChangeChannel(id));
        setIsViewChannleList(false);
    };

    function rederChannelName() {
        return channelList.map(item => 
            <ChannelItem 
                key={item._id} 
                id={item._id} 
                name={item.name} 
                totalWorkItem={item.totalWorkItem} 
                changeChannel={changeChannel}
                activeChannelId={activeChannelId ? activeChannelId : defaultChannelId}
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
                {activeChannel ? <span>{'Channel: ' + activeChannel.name.toLocaleUpperCase()}</span> :
                    <span>{'Channel: ' + defaultChannelName.toLocaleUpperCase()}</span>}
         
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