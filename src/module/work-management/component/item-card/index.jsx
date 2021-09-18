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
    onDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain', id);
    };
    
    render() { 
        let color, backgroundColor;
        if (this.props.status === 'New') {
            color = '#13C2C2';
        } else if (this.props.status === 'In Progress') {
            color = '#FFB41F';
        } else if (this.props.status === 'Done') {
            color = '#43A047';
        } 
        const isViewDetail = this.context.state.isViewDetail;
        const activeId = this.context.state.activeId;
        if (this.props.id === activeId && isViewDetail) {
            backgroundColor = '#CEE5FF';
        } else {
            backgroundColor = null;
        }
        return ( 
            <div className='item-card'  
                style={{backgroundColor: backgroundColor}}
                onClick={this.viewWorkDetail}
                draggable
                onDragStart={(e) => this.onDragStart(e, this.props.id)}
            >
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