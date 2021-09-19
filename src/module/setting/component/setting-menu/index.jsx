import { faBoxes, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ListView } from '../../../../component/list-view';
import { FilterPannel, Item, MenuItem } from '../../../work-management/component/side-bar/component/filter-panel';
import './style.scss';

const settingMenu = [
    { id: 1, icon: faUser, name: 'User Info', link: '/setting-page/user-info', isActive: true},
    { id: 2, icon: faBoxes, name: 'Channel List', link: '/setting-page/channel-setting', isActive: false},
    { id: 3, icon: faUsers, name: 'User List', link: '/setting-page/user-list-setting', isActive: false}
];
export const SettingMenu = () => {
    const activeId = settingMenu[0].id;
    function renderSettingMenu() {
        return <ListView data={settingMenu} ItemComponent={Item} activeId={activeId}/>;
    }
    return (
        <FilterPannel title="SETTING">
            <MenuItem>
                {renderSettingMenu()}
            </MenuItem>
        </FilterPannel>
    );
};
