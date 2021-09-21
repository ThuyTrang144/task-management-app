import { ListView } from '../../../../component/list-view';
import { settingMenu } from '../../../../constant';
import { FilterPannel, Item, MenuItem } from '../../../work-management/component/side-bar/component/filter-panel';
import './style.scss';

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
