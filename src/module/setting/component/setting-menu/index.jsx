import { faBoxes, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FilterPannel, Item, MenuItem } from '../../../work-management/component/side-bar/component/filter-panel';
import './style.scss';

const settingMenu = [
    { id: 1, icon: faUser, name: 'User Info', link: '/setting-page/user-info'},
    { id: 2, icon: faBoxes, name: 'Channel List', link: '/setting-page/channel-setting'},
    { id: 3, icon: faUsers, name: 'User List', link: '/setting-page/user-list-setting'}
];
export const SettingMenu = () => {
    const [ activeId, setActiveId ] = useState(settingMenu[0].id);
    const handleSelectedItem = (id) => {
        for(let i = 0; i < settingMenu.length; i++) {
            if (settingMenu[i].id === id) {
                setActiveId(id);
            }
        }
    };
    function renderSettingMenu() {
        return settingMenu.map(item => {
            
            return <Item 
                style={{backgroundColor: '#13C2C2', color: 'white'}}
                activeId={activeId}
                onClick={handleSelectedItem}
                key={item.id} 
                id={item.id} 
                icon={item.icon}
                name={item.name}
                link={item.link}
            >
            </Item>;
        }
        );
    }
    return (
        <FilterPannel title="SETTING">
            <MenuItem>
                {renderSettingMenu()}
            </MenuItem>
        </FilterPannel>
    );
};