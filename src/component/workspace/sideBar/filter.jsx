import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
const { Option } = Select;

class Filter extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            assignee: [
                'Anros Nguyen',
                'Trang Nguyen',
                'Thien Huynh'
            ],
            tag: [
                '#english',
                '#coding',
                '#reading',
                '#cooking'
            ],
            status: [
                'New',
                'In Progress',
                'Done'
            ],
            importanceLevel: [
                'Urgent',
                'High', 
                'Normal', 
                'Low',
            ]
        }
    }
    renderAssignee() {
        return this.state.assignee.map((item, index) => 
            <Option class='selector-input' key={index} value={item}>{item}</Option>
        )
    }
    renderTags() {
        return this.state.tag.map((item, index) => 
            <Option class='selector-input' key={index} value={item}>{item}</Option>
        )
    }
    renderStatus() {
        return this.state.status.map((item, index) => 
            <Checkbox key={index} value={item}>{item}</Checkbox>
        )
    }
    renderImportanceLevel() {
        return this.state.importanceLevel.map((item, index) => 
            <Checkbox key={index} value={item}>{item}</Checkbox>
        )
    }
    render() { 
        return ( 
            <div className='menu-section'>
                <p class="menu-title">FILTERS</p>
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