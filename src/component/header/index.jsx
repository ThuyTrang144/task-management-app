import React, { useContext } from 'react';
import './style.scss';
import { MenuOutlined } from '@ant-design/icons';
import { ChannelSelector, Notification} from './component';
import { DataContext } from '../../context';

export default function Header() {
    const context = useContext(DataContext);
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
                        src={context.state.userList[0].avatar}>
                    </img>
                    <span>{context.state.userList[0].name}</span>
                </div>
            </div>
        </div>
    );
}