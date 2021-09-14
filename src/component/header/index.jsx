import React from 'react';
import './style.scss';
import { MenuOutlined } from '@ant-design/icons';
import { ChannelSelector, Notification} from './component';
import { useUserList } from '../../general-data-hook/useUserList';

export default function Header() {
    const { userList } = useUserList();
    return ( 
        <div className='header'>
            <div className='left'>
                <div className="logo">
                    <span className='menu-icon'><MenuOutlined /></span>
                    <span className='app-name'>Work management</span>
                </div>
                <ChannelSelector/>
            </div> 
            <div className='right'>  
                <Notification />
                <div className='avatar'>
                    <img 
                        alt='userAvatar' 
                        src={userList[0].avatar}>
                    </img>
                    <span>{userList[0].name}</span>
                </div>
            </div>
        </div>
    );
}