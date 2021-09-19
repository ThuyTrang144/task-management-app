import { faArchive, faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Input, Menu, Tooltip} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBucket } from '../../../../bucket-hook/useBucket';
import { useState } from 'react/cjs/react.development';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';


export const BucketHeader = (props) => {
    const { editBucketName, deleteBucket } = useBucket();
    const [isEdit, setIsEditState] = useState(false);
    const { archiveCompletedWorkItem, workItemList } = useWorkItem();
    function renderMenuAction() {
        return (
            <Menu>
                <Menu.Item key="0" onClick={() => deleteBucket(props.id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>Delete Buket</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={openEditBucketView}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <span>Edit Buket Name</span>
                </Menu.Item>
            </Menu> 
        );
    };

    function openEditBucketView() {
        setIsEditState(true);
    }

    function editBucket(e) {
        const value = e.target.value;
        editBucketName(props.id, value);
        setIsEditState(false);
    }
    function archiveWorkItem() {
        archiveCompletedWorkItem(props.id);
        console.log('list', workItemList);
    }

    return (
        <div className='bucket-header'>
            <div className="bucket-title">
                { isEdit ? 
                    <Input 
                        defaultValue={props.name} 
                        className='input-text'
                        onPressEnter={editBucket}>
                    </Input> : 
                    <span>{props.name.toLocaleUpperCase()}</span>
                }
            </div>
            <div className="actions">
                <Tooltip placement="top" title='Archive completed work item'>
                    <FontAwesomeIcon 
                        className='bucket-icon' 
                        icon={faArchive} 
                        onClick={archiveWorkItem} />
                </Tooltip> 
                <Dropdown overlay={renderMenuAction} 
                    trigger={['click']} 
                    placement="bottomRight">
                    <FontAwesomeIcon 
                        className='bucket-icon' 
                        icon={faBars}/>
                </Dropdown>         
            </div>
        </div>
    );
};