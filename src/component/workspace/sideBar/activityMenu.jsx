import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ActivityMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activityMenu: this.props.activityMenu
        };
    }
    renderMenu() {
        return this.state.activityMenu.map(item =>
            <li className='item' key={item.name}>
                <FontAwesomeIcon className='item-icon' icon={item.icon}></FontAwesomeIcon>
                <span className='item-name'>{item.name}</span>
            </li>
        );
    }
    render() {
        return (
            <div className="menu-section">
                <p className="menu-title">ACTIVITIES</p>
                <ul className="work-item-list">
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }
}

export default ActivityMenu;