import React from 'react';
import { FilterPannel, Item, MenuItem } from '../filter-panel';
import './style.scss';
import { ListView } from '../../../../../../component/list-view';
import { workItemMenu } from '../../../../../../constant';

const Menu = React.memo(function() {
    const activeMenuItem = workItemMenu[0].name;
    function renderWorkItem() {
        return <ListView data={workItemMenu} ItemComponent={Item} activeMenuItem={activeMenuItem}/>;
    }

    return (
        <div>
            <FilterPannel title="WORK ITEM">
                <MenuItem>
                    {renderWorkItem()}
                </MenuItem>
            </FilterPannel>
        </div>
        
    );
});
export default Menu;