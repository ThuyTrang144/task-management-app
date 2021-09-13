import './style.scss';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DataContext } from '../../../../context';

class ItemCard extends React.PureComponent {
    static contextType = DataContext;
    viewWorkDetail = () => {
        if (this.context.viewWorkDetail) {
            this.context.viewWorkDetail(this.props.id);
        }
    }
    render() { 
        let color;
        if (this.props.status === 'New') {
            color = '#13C2C2';
        } else if (this.props.status === 'In Progress') {
            color = '#FFB41F';
        } else if (this.props.status === 'Done') {
            color = '#43A047';
        } 
        return ( 
            <div className='item-card'  
                onClick={this.viewWorkDetail}>
                <div className="item-title">
                    <span 
                        style={this.props.status === 'Done' ? this.props.style : null}
                        className="work-item-name" 
                        onClick={this.viewWorkDetail}>
                        {this.props.name}
                    </span> 
                    <span className="work-item-status" style={{color: color}}>{this.props.status}</span>
                </div>
                <div className="work-information">
                    <div>
                        <FontAwesomeIcon className='item-icon' icon={faUser} />
                        <span>{this.props.owner}</span>
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