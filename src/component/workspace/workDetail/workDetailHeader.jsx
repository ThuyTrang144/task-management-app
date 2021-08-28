import { LeftOutlined, CalendarOutlined, ExclamationCircleOutlined, CheckOutlined, GlobalOutlined, EditOutlined, MenuOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
class WorkDetailHeader extends React.Component {
    render() { 
        return ( 
            <div className="work-item-header">
                <div className="work-item-title">
                    <LeftOutlined onClick={this.props.backToBucketBoard} className='back-icon'/>
                    <span className='item-name'>{this.props.workDetailHeaderTitle}</span>
                    <Select defaultValue='New' className="status-selection" >
                        <Option value='New'>New</Option>
                        <Option value='In Progress'>In progress</Option>
                        <Option value='Done'>Done</Option>
                    </Select>
                </div>
                <div className="work-item-actions">
                    <div className="due-date">
                        <CalendarOutlined />
                        <span>Due date<span className="days-left">(1 day left)</span></span><br></br>
                        <span className="date">12/2/2021</span>
                    </div>
                    <h2 className="vertical-line"></h2>
                    <div className="importance-level">
                        <ExclamationCircleOutlined />
                        <span>Importance</span><br></br>
                        <span className="level">High | Urgent</span>
                    </div>
                    <h2 className="vertical-line"></h2>
                    <div className="group-btn">
                        <button className="btn-action mark-done">
                        <CheckOutlined />
                        </button>
                        <button className="btn-action change-privacy">
                        <GlobalOutlined />
                        </button>
                        <button className="btn-action edit-work-item">
                        <EditOutlined />
                        </button>
                        <button className="btn-action menu-action">
                        <MenuOutlined />
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default WorkDetailHeader;