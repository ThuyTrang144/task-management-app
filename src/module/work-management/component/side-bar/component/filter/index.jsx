import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';
import { FilterPannel } from '../filter-panel';
import { status, importanceLevel } from '../../../../../../constant';
import './style.scss';
const { Option } = Select;

export function SubFilter ({ title, children }) {
    return (
        <div className='sub-filter'>
            <p className='filter-name'>{title}</p>
            {children}
        </div>
    );
}

const Filter = React.memo(function () {
    const context = useContext(DataContext);
    function renderAssignee() {
        return context.state.userList.map(item => 
            (
                <Option 
                    className='selector-input' 
                    key={item.id} 
                    value={item.name}>
                    {item.name}
                </Option>
            )
        );
    }
    function renderTags() {
        return context.state.tagList.map(item => 
            (
                <Option 
                    className='selector-input' 
                    key={item.id} 
                    value={item.name}>
                    {item.name}
                </Option>
            )
        );
    }
    function renderStatus() {
        return status.map(item => 
            (
                <Checkbox 
                    key={item.id}>
                    {item.name}
                </Checkbox>
            )
        );
    }
    function renderImportanceLevel() {
        return importanceLevel.map(item => 
            (
                <Checkbox 
                    key={item.id}>
                    {item.name}
                </Checkbox>
            )
        );
    }
    return (
        <FilterPannel title='FIlTERS'>
            <SubFilter title='Assignee'>
                <Select 
                    className='selector' 
                    placeholder='Select Asignee'>
                    {renderAssignee()}
                </Select>   
            </SubFilter>
            <SubFilter title='Tags'>
                <Select 
                    className='selector' 
                    placeholder='Select Tags'>
                    {renderTags()}
                </Select>   
            </SubFilter>
            <SubFilter title='Status'>
                <div 
                    className='checkbox-filter'>
                    {renderStatus()}
                </div>   
            </SubFilter>
            <SubFilter title='Importance Level'>
                <div 
                    className='checkbox-filter'>
                    {renderImportanceLevel()}
                </div>   
            </SubFilter>
        </FilterPannel>
    );
});
 
export default Filter;