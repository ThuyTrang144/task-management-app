import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
import { FilterPannel } from '../filter-panel';
import { status, importanceLevel } from '../../../../../../constant';
import './style.scss';
import { useUserList } from '../../../../../../general-data-hook/useUserList';
import { useGeneralTag } from '../../../../../../general-data-hook/useGeneralTag';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
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
    const { tagList, findTagsByName } = useGeneralTag();
    const { userList, findUserByName } = useUserList();
    const context = useContext(DataContext);

    const onChangeAssignee = (value) => {
        const assigneeList = [];
        for (let i = 0; i < value.length; i++) {
            const assignee = findUserByName(value[i]);
            assigneeList.push(assignee.id);
        }
        context.filterWorkItemByAssignee(assigneeList);
    };

    const onChangeTag = (value) => {
        const tagIdList = [];
        for (let i = 0; i < value.length; i++) {
            const tag = findTagsByName(value[i]);
            tagIdList.push(tag.id);
        }
        context.filterWorkItemByTag(tagIdList);
    };

    function renderAssignee() {
        return userList.map(item => 
            (
                <Option 
                    className='selector-input' 
                    key={item.id}
                    id={item.id} 
                    value={item.name}>
                    {item.name}
                </Option>
            )
        );
    }
    function renderTags() {
        return tagList.map(item => 
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
                    mode="multiple"
                    allowClear
                    className='selector' 
                    placeholder='Select Asignee'
                    onChange={onChangeAssignee}
                >
                    {renderAssignee()}
                </Select>   
            </SubFilter>
            <SubFilter title='Tags'>
                <Select 
                    mode="multiple"
                    allowClear
                    className='selector' 
                    placeholder='Select Tags'
                    onChange={onChangeTag}
                >
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