import { LeftOutlined, CalendarOutlined, ExclamationCircleOutlined, CheckOutlined, GlobalOutlined, EditOutlined, MenuOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';
import { DataContext } from '../../../../../../context';
import { status } from '../../../../../../constant';
import './style.scss';
import { WorkDetailContext } from '../../context';
const { Option } = Select;

class Header extends React.PureComponent {
    renderStatus() {
        return status.map(item => (
            <Option key={item.id} value={item.name}>{item.name}</Option>
        ));
    }
    render() {
        return (
            <DataContext.Consumer>
                {value1 => { 
                    return <WorkDetailContext.Consumer>
                        {value2 => { 
                            const statusItem = value1.findStatusById(value2.workDetailData.statusId);
                            const importanceLevel = value1.findImportanceLevelById (value2.workDetailData.importanceLevelId);
                            return ( 
                                <div className="work-item-header">
                                    <div className="work-item-title">
                                        <LeftOutlined 
                                            onClick={this.props.backToBucketBoard} 
                                            className='back-icon'/>
                                        <span className='item-name'>{value2.workDetailData.name}</span>
                                        <Select className="status-selection" value={statusItem.name}>
                                            {this.renderStatus()}
                                        </Select>
                                    </div>
                                    <div className="work-item-actions">
                                        <div className="due-date">
                                            <CalendarOutlined />
                                            <span>Due date <span className="days-left">({value2.workDetailData.dueDate})</span></span><br></br>
                                            <span className="date">{value2.workDetailData.createdDate}</span>
                                        </div>
                                        <h2 className="vertical-line"></h2>
                                        <div className="importance-level">
                                            <ExclamationCircleOutlined />
                                            <span>Importance</span><br></br>
                                            <span className="level">{importanceLevel.name}</span>
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
                            );}
                        }
                    </WorkDetailContext.Consumer>;}}
            </DataContext.Consumer>
        );
    }
}

export default Header;