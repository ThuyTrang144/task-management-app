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
import { useStatus } from '../../../../../../general-data-hook/useStatus';
import { useImportanceLevel } from '../../../../../../general-data-hook/useImportanceLevel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterUserList } from '../../../../../../slice/userSlice';
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

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
    const { findUserByName } = useUserList();
    const userList = useSelector(state => state.users.userList);
    const dispatch = useDispatch();
    const { findStatusByName } = useStatus();
    const { findImportanceLevelByName } = useImportanceLevel();
    const context = useContext(DataContext);

    const onChangeAssignee = (value) => {
        const assigneeList = [];
        for (let i = 0; i < value.length; i++) {
            const assignee = findUserByName(value[i]);
            assigneeList.push(assignee._id);
        }
        dispatch(filterUserList(assigneeList));
    };

    const onChangeTag = (value) => {
        const tagIdList = [];
        for (let i = 0; i < value.length; i++) {
            const tag = findTagsByName(value[i]);
            tagIdList.push(tag.id);
        }
        context.findTagIdFilterList(tagIdList);
    };
    
    const onChangeStatus = (checkedValue) => {
        const statusList = [];
        for (let i = 0; i < checkedValue.length; i++) {
            const status = findStatusByName(checkedValue[i]);
            statusList.push(status.id);
        }
        context.findStatusFilterList(statusList);
    };
    const onChangeImportanceLevel = (checkedValue) => {
        const importanceLevelList = [];
        for (let i = 0; i < checkedValue.length; i++) {
            const importanceLevel = findImportanceLevelByName(checkedValue[i]);
            console.log('importance', importanceLevel);
            importanceLevelList.push(importanceLevel.id);
        }
        context.findImportanceLevelFilterList(importanceLevelList);
    };
    function renderAssignee() {
        return userList.map(item => 
            (
                <Option 
                    className='selector-input' 
                    key={item._id}
                    id={item._id} 
                    value={`${item.first_name} ${item.last_name}`}>
                    {`${item.first_name} ${item.last_name}`}
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
            <Checkbox 
                value={item.name}
                key={item.id}>
                {item.name}
            </Checkbox>);
    }
    function renderImportanceLevel() {
        return importanceLevel.map(item => 
            (
                <Checkbox 
                    key={item.id}
                    value={item.name}
                >
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
                <CheckboxGroup 
                    className='checkbox-filter'
                    onChange={onChangeStatus}
                >
                    {renderStatus()}
                </CheckboxGroup>  
            </SubFilter>
            <SubFilter title='Importance Level'>
                <CheckboxGroup 
                    className='checkbox-filter'
                    onChange={onChangeImportanceLevel}
                >
                    {renderImportanceLevel()}
                </CheckboxGroup>   
            </SubFilter>
        </FilterPannel>
    );
});
 
export default Filter;