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
                <p className="menu-title">ACTIVITIES</p>
                <ul className="work-item-list">        
                    {this.renderMenu()}
                </ul>
            </div>
         );
    }
}
 
export default ActivityMenu;