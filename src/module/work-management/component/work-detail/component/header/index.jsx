/* eslint-disable jsx-a11y/heading-has-content */
import { LeftOutlined, CalendarOutlined } from '@ant-design/icons'; 
import React from 'react';
import './style.scss';
import { WorkDetailContext } from '../../context';
import { Status } from './Status';
import { ImportanceLevel } from './ImportanceLevel';
import { ActionGroup } from './ActionGroup';
import { DataContext } from '../../../../../../context';

class Header extends React.PureComponent {
    render() {
        return (
            <WorkDetailContext.Consumer>
                {value1 => { 
                    return ( 
                        <div className="work-item-header">
                            <div className="work-item-title">
                                <DataContext.Consumer>
                                    {value2 => <LeftOutlined 
                                        onClick={value2.backToBucketBoard} 
                                        className='back-icon'/>}
                                </DataContext.Consumer>
                                <span className='item-name'>{value1.workDetailData.name}</span>
                                <Status workId={value1.workDetailData.id}/>
                            </div>
                            <div className="work-item-actions">
                                <div className="due-date">
                                    <CalendarOutlined />
                                    <span>Due date <span className="days-left">({value1.workDetailData.dueDate})</span></span><br></br>
                                    <span className="date">{value1.workDetailData.createdDate}</span>
                                </div>
                                <h2 className="vertical-line"></h2>
                                <ImportanceLevel />
                                <h2 className="vertical-line"></h2>
                                <ActionGroup />
                            </div>
                        </div>
                    );}
                }
            </WorkDetailContext.Consumer>);
    }
}

export default Header;