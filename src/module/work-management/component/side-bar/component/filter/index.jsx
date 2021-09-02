import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
import { FilterPannel } from '../filter-panel';
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

class Filter extends React.PureComponent {
    renderAssignee() {
        return this.props.assignee.map(item => 
            (
                <Option className='selector-input' key={item.id} value={item.name}>{item.name}</Option>
            )
        );
    }
    renderTags() {
        return this.props.tagList.map(item => 
            (
                <Option className='selector-input' key={item.id} value={item.name}>{item.name}</Option>
            )
        );
    }
    renderStatus() {
        return this.props.status.map(item => 
            (
                <Checkbox key={item.id} >{item.name}</Checkbox>
            )
        );
    }
    renderImportanceLevel() {
        return this.props.importanceLevel.map(item => 
            (
                <Checkbox key={item.id}>{item.name}</Checkbox>
            )
        );
    }
    render() {
        return (
            <FilterPannel title='FIlTERS'>
                <SubFilter title='Assignee'>
                    <Select className='selector' placeholder='Select Asignee'>
                        {this.renderAssignee()}
                    </Select>   
                </SubFilter>
                <SubFilter title='Tags'>
                    <Select className='selector' placeholder='Select Tags'>
                        {this.renderTags()}
                    </Select>   
                </SubFilter>
                <SubFilter title='Status'>
                    <div className='checkbox-filter'>
                        {this.renderStatus()}
                    </div>   
                </SubFilter>
                <SubFilter title='Importance Level'>
                    <div className='checkbox-filter'>
                        {this.renderImportanceLevel()}
                    </div>   
                </SubFilter>
            </FilterPannel>
        );
    }
}
export default Filter;