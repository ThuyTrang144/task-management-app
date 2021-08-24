import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
class ItemCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() { 
        return ( 
            <div className='item-card'>
                <div className="item-title">
                        <span class="work-item-name">{this.props.name}</span>
                        <span class="work-item-status">{this.props.status}</span>
                    </div>
                    <div className="work-information">
                        <div>
                            <FontAwesomeIcon className='item-icon' icon={faUser} />
                            <span>{this.props.assignee}</span>
                            <span className='created-date'>{this.props.createdDate}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon className='item-icon' icon={faClock} />
                            <span>{this.props.dueDate}</span>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default ItemCard;