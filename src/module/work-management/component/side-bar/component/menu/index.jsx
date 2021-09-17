import React, { useContext, useState } from 'react';
import { faArrowRight, faArrowLeft, faTasks, faUser, faUsers, faArchive } from '@fortawesome/free-solid-svg-icons';
import { FilterPannel, Item, MenuItem } from '../filter-panel';
import { ExclamationCircleOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import './style.scss';
import { DataContext } from '../../../../../../context';

const activityMenu = [
    { icon: faArrowRight, name:'Incoming', link: './' },
    { icon: faArrowLeft, name: 'Outgoing', link: './' } 
];
const workItemMenu = [
    { icon: faTasks, name:'Work Stream', link: './'  }, 
    { icon: faUser, name: 'Owned Works', link: './'  }, 
    { icon: faUsers, name: 'Participated Works', link: './' },
    { icon: faArchive, name: 'Archived Works', link: './'  }
];
const Menu = React.memo(function() {
    const context = useContext(DataContext);
    const [isOpen, setIsOpenState] = useState(false);
    function renderActivityItem() {
        return activityMenu.map(item =>
            <Item key={item.name} icon={item.icon} name={item.name} link={item.link}></Item>
        );
    }
    function renderWorkItem() {
        return workItemMenu.map(item =>
            <Item key={item.name} icon={item.icon} name={item.name} link={item.link}></Item>
        );
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
        return context.state.bucketList.map(item => 
            <Item key={item.id} name={item.name} icon={null} link={item.link}></Item>
        );
    }
    function viewFolder() {;
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