import React from 'react';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ActivityMenu extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuItem: [
                {icon: faArrowRight, name:"Incoming"}, 
                {icon: faArrowLeft, name: "Outgoing"}
            ]
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
                <p class="menu-title">ACTIVITIES</p>
                <ul class="work-item-list">        
                    {this.renderMenu()}
                </ul>
            </div>
         );
    }
}
 
export default ActivityMenu;