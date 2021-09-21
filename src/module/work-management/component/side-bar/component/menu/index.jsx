import React, { useContext } from 'react';
import { FilterPannel, Item, MenuItem } from '../filter-panel';
import './style.scss';
import { ListView } from '../../../../../../component/list-view';
import { workItemMenu } from '../../../../../../constant';
import { DataContext } from '../../../../../../context';

const Menu = React.memo(function() {
    const context = useContext(DataContext);
    const activeId = context.state.activeSideBarId;
    function renderWorkItem() {
        return <ListView data={workItemMenu} ItemComponent={Item} activeId={activeId}/>;
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