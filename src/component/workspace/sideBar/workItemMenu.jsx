import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkItemMenu extends React.PureComponent {
    renderMenu() {
        return this.props.workItemMenu.map(item => 
            <li className='item' key={item.name}>
                <FontAwesomeIcon className='item-icon' icon={item.icon}></FontAwesomeIcon>
                <span className='item-name'>{item.name}</span>
            </li>
        );
    }
    render() {
        return (
            <div className="menu-section">
                <p className="menu-title">WORK ITEM</p>
                <ul className="work-item-list">
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }
}

export default WorkItemMenu;