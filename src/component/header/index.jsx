import React from 'react';
import './style.scss';
import { MenuOutlined } from '@ant-design/icons';
import { ChannelSelector, Notification} from './component';

class Header extends React.PureComponent {
    render() { 
        return ( 
            <div className='header'>
                <div className='left'>
                    <div className="logo">
                        <span className='menu-icon'><MenuOutlined /></span>
                        <span className='app-name'>Work management</span>
                    </div>
                    <ChannelSelector channelList={this.props.channelList}/>
                </div> 
                <div className='right'>  
                    <Notification />
                    <div className='avatar'>
                        <img alt='userAvatar' src='https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0'></img>
                        <span>Anros Nguyen</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;