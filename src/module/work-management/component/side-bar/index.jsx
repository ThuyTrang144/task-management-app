import React from 'react';
import './style.scss';
import { Filter, Menu}  from './component';

class SideBar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <Menu/>
                <Filter 
                    // assignee={this.props.assignee} 
                    // tagList={this.props.tagList} 
                    // status={this.props.status}
                    // importanceLevel={this.props.importanceLevel}
                />
            </div>
        );
    }
}

export default SideBar;