import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './style.scss';
import { useContext } from 'react/cjs/react.development';
import { WorkDetailContext } from '../../context';
import { WorkItemContext } from '../../../../context/workItem';

const Description = React.memo(function () {
    const workItemContext = useContext(WorkItemContext);
    const workContext = useContext(WorkDetailContext);
    const { workDetailData } = workContext;
    const [isEdit, setIsEditState] = useState(false);
    function openEditView() {
        if (isEdit) {
            setIsEditState(false);
        } else {
            setIsEditState(true);
        }
    }
    function onKeyPress(e) {
        const value = e.target.value;
        workItemContext.editWorkItemDescription(workDetailData.id, value);
        setIsEditState(false);
    }
    return ( 
        <div className="item-description">
            { isEdit ?
                <Input
                    defaultValue={workDetailData.description}
                    onPressEnter={onKeyPress}
                /> :
                <p>{workDetailData.description}<EditOutlined onClick={openEditView}/></p>}
        </div> );
});
 
export default Description;