import React from 'react';
import './style.scss';
import { Filter, Menu}  from './component';

class SideBar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <Menu/>
                <Filter/>
            </div>
        );
    }
}

export default SideBar;