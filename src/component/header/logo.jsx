import React from 'react';
import { Button } from 'antd';
import './style.scss'
import { MenuOutlined } from '@ant-design/icons'
class Logo extends React.Component {
    render() { 
        return ( 
            <div className="logo">
                <span className='menu-icon'><MenuOutlined /></span>
                <span className='app-name'>Work management</span>
            </div>
         );
    }
}
 
export default Logo;