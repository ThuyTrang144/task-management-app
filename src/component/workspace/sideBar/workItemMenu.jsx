import React from 'react';
import {faTasks, faUser, faUsers, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkItemMenu extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuItem: [
                {icon: faTasks, name:"Work Stream"}, 
                {icon: faUser, name: "Owned Works"}, 
                {icon: faUsers, name: "Participated Works"}, 
                {icon: faArchive, name: "Archived Works"}]
        }
    }
    renderMenu() {
        const { menuItem } = this.state
        return menuItem.map((item, index) => 
            <li className='item' key={index}>
                <FontAwesomeIcon className='item-icon' icon={item.icon}></FontAwesomeIcon>
                <span className='item-name'>{item.name}</span>
            </li>
        )
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