import React from 'react';
import './style.scss';
import { MenuOutlined, SettingOutlined, LogoutOutlined, HomeOutlined} from '@ant-design/icons';
import { ChannelSelector, Notification} from './component';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context';
import { useUserList } from '../../general-data-hook/useUserList';

export const menu = () => {
    return (
        <Menu>
            <Menu.Item key={0}>
                <Link to='/work-management'>
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
                <DataContext.Consumer>
                    {value => {
                        // console.log('user', value.state.user.name);
                        return (
                            <Dropdown overlay={menu} placement='bottomRight' trigger={['click']}>
                                <div className='avatar'>
                                    <img 
                                        alt='userAvatar' 
                                        src={value.state.user !== undefined ? value.state.user.avatar: userList[0].avatar}>
                                    </img>
                                    <span>{value.state.user !== undefined ? value.state.user.name: userList[0].name}</span>
                                </div>
                            </Dropdown>);}}                
                </DataContext.Consumer>
            </div>
        </div>
    );
}