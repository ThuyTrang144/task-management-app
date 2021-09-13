import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './style.scss';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';
import { WorkDetailContext } from '../../context';

const Description = React.memo(function (props) {
    const dataContext = useContext(DataContext);
    const workContext = useContext(WorkDetailContext);
    const { activeId } = dataContext.state;
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
        dataContext.editWorkItemDescription(activeId, value);
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