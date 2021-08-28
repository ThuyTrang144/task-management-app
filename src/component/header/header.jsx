import React from 'react';
import './styles.scss'
import Logo from './logo';
import ChannelSelector from './channelSelector';
import UserInfo from './userInfo';
import Notification from './notification';

class Header extends React.PureComponent {
    render() { 
        return ( 
            <div className='header'>
                <div className='left'>
                    <Logo />
                    <ChannelSelector channelList={this.props.channelList}/>
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