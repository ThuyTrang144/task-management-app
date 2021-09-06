import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import Activity from './Activity';
import { SmileOutlined } from '@ant-design/icons';

class ActivitiesList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            activitiesList: this.props.activitiesList,
            newActivity: ''
        };
    }
    renderActivities() {
        return this.state.activitiesList.map((item, index) => 
            (<Activity 
                key={item.name} 
                index={index} 
                name={item.name}
                assignee={item.assignee}
                createdTime={item.createdTime}
                label={item.label}>
            </Activity> )
        );
    }
    // addNewActivity = (text) => {
    //     const { activitiesList } = this.state;
    //     activitiesList.splice(0, 0, {name: text, assignee: 'Trang Nguyen', createdTime: , label: 'User'  });
    //     this.setState({ activitiesList: [...activitiesList] });
    //     console.log('im here');
    // }
    onChange = (e) => {
        const newActivity = e.target.value;
        this.setState({ newActivity });
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.addNewActivity(this.state.newActivity);
        }
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
                    <input className="adding-input" type="text" placeholder='Add new activity here' onChange={this.onChange} value={this.state.newActivity} onKeyPress={this.onKeyPress}></input>
                </div>
                <div className="activities-list">
                    {this.renderActivities()}
                </div>
            </div>
        );
    }
}

export default ActivitiesList;