import { CheckOutlined, GlobalOutlined, EditOutlined, MenuOutlined} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useState } from 'react';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
export const ActionGroup = (props) => {
    const { changeWorkItemStatus } = useWorkItem();
    var statusBoolean;
    if (props.currentStatus === 'Done') {
        statusBoolean = true;
    } else {
        statusBoolean = false;
    }
    const [ isDone, setIsDone ] = useState(statusBoolean);
    const markDoneWorkItem = () => {
        if (isDone) {
            changeWorkItemStatus(props.workId, 'New');
            setIsDone(false);
        } else {
            changeWorkItemStatus(props.workId, 'Done');
            setIsDone(true);
        }
    };
    return (
        <div className='group-btn'>
            <Tooltip placement='topRight' color='#2db7f5' title={isDone ? 'Un-mark' : 'Mark as Done'}>
                <button className='btn-action mark-done' 
                    onClick={markDoneWorkItem} 
                    style={isDone ? {backgroundColor: '#64BF68', color: 'white'} : {backgroundColor: '#F0F0F1', color: '#4A4B57'}}>
                    <CheckOutlined />
                </button>
            </Tooltip>
            <Tooltip placement='topRight' color='#2db7f5' title='Set task privacy'>
                <button className="btn-action change-privacy">
                    <GlobalOutlined />
                </button>
            </Tooltip>
            <Tooltip placement='topRight' title='Edit Work Title' color='#2db7f5' >
                <button className='btn-action edit-work-item' onClick={props.handleEditTitleView}>
                    <EditOutlined />
                </button>
            </Tooltip>
            <Tooltip placement='topRight' color='#2db7f5' title='Other Actions'>
                <button className="btn-action menu-action">
                    <MenuOutlined />
                </button>
            </Tooltip>
        </div>
    );
};