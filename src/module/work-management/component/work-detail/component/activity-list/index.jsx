import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react';
import Activity from './Activity';
import { SmileOutlined } from '@ant-design/icons';
import { useActivity } from '../../../../work-item-hook/useActivity';
import { useUserList } from '../../../../../../general-data-hook/useUserList';
import { useContext } from 'react/cjs/react.development';
import { WorkDetailContext } from '../../context';
import './style.scss';

const ActivitiesList = React.memo(function () {
    const { findUserById } = useUserList();
    const context = useContext(WorkDetailContext);
    const { activityList, addNewActivity } = useActivity();
    const [ activity, setActivityState ] = useState(''); 
    function renderActivities() {
        console.log('activity', activityList);
        const filterList = activityList.filter(item => item.work_item_id === context.workDetailData._id);
        return filterList.map(item => {
            const assignee = findUserById(item.assigneeId);
            return <Activity 
                key={item._id} 
                id={item._id}
                name={item.name}
                assignee={assignee.name}
                createdTime={item._created_at}
                label={item.label}>
            </Activity>; 
        }
        );
    }
    function onChange(e) {
        const newActivity = e.target.value;
        setActivityState(newActivity);
    }
    function onKeyPress(e) {
        if (e.charCode === 13) {
            addNewActivity(activity);
            setActivityState('');
        }
    }
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
                <input 
                    className="adding-input"
                    type="text" 
                    placeholder='Add new activity here'
                    onChange={onChange} 
                    value={activity}
                    onKeyPress={onKeyPress}>
                </input>
            </div>
            <div className="activities-list">
                {renderActivities()}
            </div>
        </div>
    );
});
export default ActivitiesList;