import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
const { Option } = Select;

class Filter extends React.PureComponent {
    renderAssignee() {
        return this.props.assignee.map(item => 
            <Option className='selector-input' key={item} value={item}>{item}</Option>
        )
    }
    renderTags() {
        return this.props.tag.map(item => 
            <Option className='selector-input' key={item} value={item}>{item}</Option>
        )
    }
    renderStatus() {
        return this.props.status.map(item => 
            <Checkbox key={item} >{item}</Checkbox>
        )
    }
    renderImportanceLevel() {
        return this.props.importanceLevel.map(item => 
            <Checkbox key={item}>{item}</Checkbox>
        )
    }
    render() { 
        return ( 
            <div className='menu-section'>
                <p className="menu-title">FILTERS</p>
                    <div className='sub-filter'>
                        <p className='filter-name'>Assignee</p>
                        <Select className='selector' placeholder='Select Asignee'>
                            {this.renderAssignee()}
                        </Select>
                    </div>
                    <div className='sub-filter'>
                        <p className='filter-name'>Tag</p>
                        <Select className='selector' placeholder='Select Tags'>
                            {this.renderTags()}
                        </Select>
                    </div>
                    <div className='sub-filter'>
                        <p className='filter-name'>Status</p>
                        <div className='checkbox-filter'>
                            {this.renderStatus()}
                        </div>
                    </div>
                    <div className='sub-filter'>
                        <p className='filter-name'>Importance Level</p>
                        <div className='checkbox-filter'>
                            {this.renderImportanceLevel()}
                        </div>
                    </div>
            </div>
         );
    }
}
export default Filter;