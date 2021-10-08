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
import { filterByUser } from '../../../../../../slice/userSlice';
import { filterByStatus } from '../../../../../../slice/statusSlice';
import { filterByImportanceLevel } from '../../../../../../slice/importanceLevelSlice';
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
    const { statusList, findStatusByName } = useStatus();
    const { importanceLevelList, findImportanceLevelByName } = useImportanceLevel();
    const { userList, findUserByName } = useUserList();
    const dispatch = useDispatch();
    const context = useContext(DataContext);

    const onChangeAssignee = (value) => {
        const assigneeList = [];
        for (let i = 0; i < value.length; i++) {
            const assignee = findUserByName(value[i]);
            assigneeList.push(assignee._id);
        }
        dispatch(filterByUser(assigneeList));
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
            statusList.push(status._id);
        }
        dispatch(filterByStatus(statusList));
    };
    const onChangeImportanceLevel = (checkedValue) => {
        const importanceLevelList = [];
        for (let i = 0; i < checkedValue.length; i++) {
            const importanceLevel = findImportanceLevelByName(checkedValue[i]);
            importanceLevelList.push(importanceLevel._id);
        }
        dispatch(filterByImportanceLevel(importanceLevelList));
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
        return statusList.map(item => 
            <Checkbox 
                value={item.label}
                key={item._id}>
                {item.label}
            </Checkbox>);
    }
    function renderImportanceLevel() {
        return importanceLevelList.map(item => 
            (
                <Checkbox 
                    key={item._id}
                    value={item.label}
                >
                    {item.label}
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