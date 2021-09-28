/* eslint-disable jsx-a11y/heading-has-content */
import { LeftOutlined, CalendarOutlined, CloseOutlined } from '@ant-design/icons'; 
import React, { useState } from 'react';
import './style.scss';
import { WorkDetailContext } from '../../context';
import { Status } from './Status';
import { ImportanceLevel } from './ImportanceLevel';
import { ActionGroup } from './ActionGroup';
import { DataContext } from '../../../../../../context';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
import { useContext } from 'react/cjs/react.development';
import { Input, Modal } from 'antd';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { EditForm } from './EditForm';

const Header = () => {
    const { findStatusById } = useStatus();
    const { editWorkItemTitle } = useWorkItem();
    const context = useContext(WorkDetailContext);
    const currentStatus = findStatusById(context.workDetailData.statusId);
    const [ isEditTitle, setIsEditTitle ] = useState(false);

    // const handleEditTitleView = () => {
    //     if (isEditTitle) {
    //         setIsEditTitle(false);
    //     } else {
    //         setIsEditTitle(true);
    //     }
    // };

    const handleEditWorkItemTitle = (e) => {
        const text = e.target.value;
        setIsEditTitle(false);
        editWorkItemTitle(context.workDetailData.id, text);
    };
    function handleEditTitleView() {
        setIsEditTitle(true);

    }
    function handleCancle() {
        setIsEditTitle(false);
    }
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
                            <Status workId={value1.workDetailData.id} currentStatus={currentStatus}/>
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
                            <ActionGroup 
                                workId={value1.workDetailData.id} 
                                currentStatus={currentStatus} 
                                handleEditTitleView={handleEditTitleView}/>
                        </div>
                        {/* <Modal 
                            title='Edit Work Item'
                            onCancel={handleCancle}
                            visible={true}>
                            <EditForm 
                                workDetailData={value1.workDetailData}/>
                        </Modal>  */}
                    </div>
                );}
            }
        </WorkDetailContext.Consumer>);
};

export default Header;