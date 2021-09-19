import React, { useState } from 'react';
import { faArrowRight, faArrowLeft, faTasks, faUser, faUsers, faArchive } from '@fortawesome/free-solid-svg-icons';
import { FilterPannel, Item, MenuItem } from '../filter-panel';
import { ExclamationCircleOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import './style.scss';
import { ListView } from '../../../../../../component/list-view';
import { useBucket } from '../../../../bucket-hook/useBucket';

const activityMenu = [
    { id: '1', icon: faArrowRight, name:'Incoming', link: './', isActive: false },
    { id: '2', icon: faArrowLeft, name: 'Outgoing', link: './', isActive: false } 
];
const workItemMenu = [
    { id: '1', icon: faTasks, name:'Work Stream', link: './', isActive: true  }, 
    { id: '2', icon: faUser, name: 'Owned Works', link: './', isActive: false }, 
    { id: '3', icon: faUsers, name: 'Participated Works', link: './', isActive: false },
    { id: '4', icon: faArchive, name: 'Archived Works', link: './', isActive: false  }
];
const Menu = React.memo(function() {
    const { bucketList } = useBucket();
    const [isOpen, setIsOpenState] = useState(false);

    function renderActivityItem() {
        return <ListView data={activityMenu} ItemComponent={Item} />;
    }

    function renderWorkItem() {
        return <ListView data={workItemMenu} ItemComponent={Item} />;
    }

    function renderFolderTitle() {
        return(
            <div>
                <span>FOLDERS</span>
                <ExclamationCircleOutlined />
                {isOpen ? 
                    <UpOutlined className='folder-icon' onClick={viewFolder}/> : 
                    <DownOutlined className='folder-icon' onClick={viewFolder}/>
                }
            </div>
        );
    }

    function renderFolderMenu() {
        return <ListView data={bucketList} ItemComponent={Item} />;
    }
    
    function viewFolder() {
        if (isOpen) {
            setIsOpenState(false);
        } 
        else {
            setIsOpenState(true);
        }
    }
    return (
        <div>
            <FilterPannel title="WORK ITEM">
                <MenuItem>
                    {renderWorkItem()}
                </MenuItem>
            </FilterPannel>
            <FilterPannel title="ACTIVITIES">
                <MenuItem>
                    {renderActivityItem()}
                </MenuItem>
            </FilterPannel>
            <FilterPannel title={renderFolderTitle()}>
                {isOpen ? <MenuItem>{renderFolderMenu()}</MenuItem> : <MenuItem></MenuItem>}
            </FilterPannel>
        </div>
        
    );
});
export default Menu;