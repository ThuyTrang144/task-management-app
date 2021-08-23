import React from 'react';
import './style.scss'
import Logo from './logo';
import ChannelSelector from './channelSelector';
import UserInfo from './userInfo';
import Notification from './notification';

class Header extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            channelName: [
                'Personal',
                'Public',
                'Reading',
                'Learning Languages'
            ]
        }
    }
    render() { 
        return ( 
            <div className='header'>
                <div className='left'>
                    <Logo />
                    <ChannelSelector />
                </div> 
                <div className='right'>  
                    <Notification />
                    <UserInfo />
                </div>
            </div>
         );
    }
}
 
export default Header;