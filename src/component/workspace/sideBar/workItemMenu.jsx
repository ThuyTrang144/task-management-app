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
        const menu = menuItem.map((item, index) => 
            <li class='item' key={index}>
                <FontAwesomeIcon className='item-icon' icon={item.icon}></FontAwesomeIcon>
                <span className='item-name'>{item.name}</span>
            </li>
        )
        return menu;
    }
    render() { 
        return ( 
            <div class="menu-section">
                <p class="menu-title">WORK ITEM</p>
                <ul class="work-item-list">        
                    {this.renderMenu()}
                </ul>
            </div>
         );
    }
}
 
export default WorkItemMenu;