import { LeftOutlined, CalendarOutlined, ExclamationCircleOutlined, CheckOutlined, GlobalOutlined, EditOutlined, MenuOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
class WorkDetailHeader extends React.Component {
    render() { 
        return ( 
            <div className="work-item-header">
                <div className="work-item-title">
                    <LeftOutlined onClick={this.props.viewWorkDetail} className='back-icon'/>
                    <span className='item-name'>Call David Nguyen</span>
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
{/* <div id="work-detail-board" className="work-detail">

<div className=detail-view>
    <div className="detail-view-left">
        <div className="todo-list">
            <div className="dash-line"></div>
            <div className="todo-title">
                <span>Todo list</span>
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
            <div className="todo-item">
                <div className="todo-name">
                    <input type="checkbox">
                    <span>Call David</span>
                </div>
                <div className="todo-info">
                    <span>Jessica Jung</span>
                    <i id="assignee-selection" className="fa fa-chevron-down"></i>
                    <i id="delete-icon" className="fa fa-trash"></i>
                </div>
            </div>
            <div className="todo-item">
                <div className="todo-name">
                    <input type="checkbox">
                    <span>Call David</span>
                </div>
                <div className="todo-info">
                    <span>Jessica Jung</span>
                    <i id="assignee-selection" className="fa fa-chevron-down"></i>
                    <i id="delete-icon" className="fa fa-trash"></i>
                </div>
            </div>
            <div className="todo-item">
                <div className="todo-name">
                    <input type="checkbox">
                    <span>Call David</span>
                </div>
                <div className="todo-info">
                    <span>Jessica Jung</span>
                    <i id="assignee-selection" className="fa fa-chevron-down"></i>
                    <i id="delete-icon" className="fa fa-trash"></i>
                </div>
            </div>
        </div>
        <div className="activities-section">
            <div className="heading">
                <span>Activities</span>
                <div className="filter">
                    <input type="checkbox">User
                    <input type="checkbox">Communication System
                    <input type="checkbox">System
                </div>
            </div>
            <div className="adding-activities-box">
                <div className="adding-action">
                    <span>New Activities</span>
                    <div>
                        <i id="emoji" className="fa fa-smile-o" aria-hidden="true"></i>
                        <i id="reply-icon" className="fa fa-reply" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="adding-input" type="text" value="Call me">
            </div>
            <div className="activities-list">
                <div className="activities-item">
                    <div className="activities-info">
                        <div className="info-group">
                            <span className="assignee">Jerry N.</span>
                            <span className="created-time">(8 mins ago)</span>
                            <div className="activities-tag">Communication</div>
                        </div>
                        <div className="activities-actions">
                            <i id="delete-icon" className="fa fa-trash"></i>
                            <i id="comment" className="fa fa-comment"></i>
                        </div>
                    </div>
                    <div className="activities-title">
                        <span>Edit phone number for David Nguyen</span>
                        <hr>
                    </div>
                </div>  
                <div className="activities-item">
                    <div className="activities-info">
                        <div className="info-group">
                            <span className="assignee">Jerry N.</span>
                            <span className="created-time">(8 mins ago)</span>
                            <div className="activities-tag">Communication</div>
                        </div>
                        <div className="activities-actions">
                            <i id="delete-icon" className="fa fa-trash"></i>
                            <i id="comment" className="fa fa-comment"></i>
                        </div>
                    </div>
                    <div className="activities-title">
                        <span>Edit phone number for David Nguyen</span>
                        <hr>
                    </div>
                </div>  
                <div className="activities-item">
                    <div className="activities-info">
                        <div className="info-group">
                            <span className="assignee">Jerry N.</span>
                            <span className="created-time">(8 mins ago)</span>
                            <div className="activities-tag">Communication</div>
                        </div>
                        <div className="activities-actions">
                            <i id="delete-icon" className="fa fa-trash"></i>
                            <i id="comment" className="fa fa-comment"></i>
                        </div>
                    </div>
                    <div className="activities-title">
                        <span>Edit phone number for David Nguyen</span>
                        <hr>
                    </div>
                </div>  
                <div className="activities-item">
                    <div className="activities-info">
                        <div className="info-group">
                            <span className="assignee">Jerry N.</span>
                            <span className="created-time">(8 mins ago)</span>
                            <div className="activities-tag">Communication</div>
                        </div>
                        <div className="activities-actions">
                            <i id="delete-icon" className="fa fa-trash"></i>
                            <i id="comment" className="fa fa-comment"></i>
                        </div>
                    </div>
                    <div className="activities-title">
                        <span>Edit phone number for David Nguyen</span>
                        <hr>
                    </div>
                </div>               
            </div>
        </div>
    </div>
    <div className="detail-view-right">
        <div className="owner-section">
            <span className="owner-title">OWNER</span><br>
            <div className="owner-info-group">
                <div className="owner-name">
                    <img src="images/owner-image.png">
                    <span>Jessica Jung</span>
                </div>
                <div className="transfer-btn">Transfer Owner</div>
            </div>
        </div>
        <div className="participant-section">
            <div className="participant-header">
                <span className="owner-title">PARTICIPANTS (6)</span>
                <div className="participant-group-btn">
                    <span>Leave</span> 
                    <span>|</span>
                    <span>Edit</span>
                </div>
            </div>
            <div className="participant-info-group">
                <img src="images/owner-image.png">
                <img src="images/owner-image.png">
                <img src="images/owner-image.png">
                <img src="images/owner-image.png">
                <img src="images/owner-image.png">
                <img src="images/owner-image.png">
            </div>
        </div>
        <div className="date-section">
            <span className="owner-title">CREATED</span><br>
            <div className="created-date">
                <span style="font-weight: bold;">Jessica Jung </span><span>on 01/01/2020</span>
            </div>
        </div>
        <div className="attachment-section">
            <div className="attachment-title">
                <span>+Add Attachment</span>
                <div className="attachment-dash-line"></div>
            </div>
            <div className="attachment-list">
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
            </div>
        </div>
        <div className="reference-section">
            <div className="attachment-title">
                <span>+Add Reference</span>
                <div className="attachment-dash-line"></div>
            </div>
            <div className="attachment-list">
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
                <div className="attachment-item">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    <span>8.8MB</span>
                    <span>[E Book ] BBC Top 100 E Books</span>
                </div>
            </div> */}