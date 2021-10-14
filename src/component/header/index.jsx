import React from 'react';
import './style.scss';
import { HomeOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
import { ChannelSelector, Notification} from './component';
import { Dropdown, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export const menu = () => {
    return (
        <Menu>
            <Menu.Item key={0}>
                <Link to='/work-management/work-stream'>
                    <HomeOutlined />
                    <span>Work Management</span>
                </Link>
            </Menu.Item>
            <Menu.Item key={1} >
                <Link to='/setting-page/user-info'>
                    <SettingOutlined />
                    <span>Setting</span>
                </Link>
            </Menu.Item>
            <Menu.Item key={2}>
                <Link to='/login-page'>
                    <LogoutOutlined />
                    <span>Logout</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
};
export default function Header() {
    const location = useLocation();
    return ( 
        <div className='header'>
            {location.pathname.includes('/work-management') ? 
                <div className='left'>
                    <div className="logo">
                        <span className='menu-icon'><HomeOutlined /></span>
                        <span className='app-name'>Work management</span>
                    </div>
                    <ChannelSelector/>
                </div> :
                <div className='left'>
                    <div className="logo">
                        <span className='menu-icon'><SettingOutlined /></span>
                        <span className='app-name'>Setting</span>
                    </div>
                </div> 
            }
            <div className='right'>  
                <Notification />
                <Dropdown overlay={menu} placement='bottomRight' trigger={['click']}>
                    <div className='avatar'>
                        <img 
                            alt='userAvatar' 
                            src='https://vcdn-vnexpress.vnecdn.net/2020/09/23/01-4451-1600828895.jpg'>
                        </img>
                        <span>Thien Huynh</span>
                    </div>
                </Dropdown>              
            </div>
        </div>
    );
}