import { ListView } from '../../../../component/list-view';
import { settingMenu } from '../../../../constant';
import { FilterPannel, Item, MenuItem } from '../../../work-management/component/side-bar/component/filter-panel';
import './style.scss';

export const SettingMenu = () => {
    const activeMenuItem = settingMenu[0].name;
    function renderSettingMenu() {
        return <ListView data={settingMenu} ItemComponent={Item} activeMenuItem={activeMenuItem}/>;
    }
    return (
        <FilterPannel title="SETTING MENU">
            <MenuItem>
                {renderSettingMenu()}
            </MenuItem>
        </FilterPannel>
    );
};
