import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import Activity from './activity';
import { SmileOutlined } from '@ant-design/icons';
class ActivitiesList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    renderActivities() {
        return this.props.activitiesList.map((item, index) => 
            (<Activity 
                key={item.name} 
                index={index} 
                name={item.name}
                assignee={item.assignee} 
                createdTime={item.createdTime} 
                label={item.label}>
            </Activity> )
        )
    }
    render() { 
        return ( 
             <div className="activities-section">
                <div className="heading">
                    <span className='title'>Activities</span>
                    <div className="filter">
                        <Checkbox>User</Checkbox>
                        <Checkbox>Communication</Checkbox>
                        <Checkbox>System</Checkbox>
                    </div>
                </div>
                <div className="adding-activities-box">
                    <div className="adding-action">
                        <span>New Activities</span>
                        <SmileOutlined id='emoji-icon'/>
                    </div>
                    <input className="adding-input" type="text" placeholder='Add new activity here'></input>
                </div>
                <div className="activities-list"> 
                    {this.renderActivities()}
                </div>
            </div>
            );
    }
}
 
export default ActivitiesList;