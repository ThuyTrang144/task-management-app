import { Select } from 'antd';
import { Checkbox } from 'antd';
import React from 'react';
import './styles.scss'
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
        const assigneeList = this.state.assignee.map((item, index) => 
            <Option class='selector-input' key={index} value={item}>{item}</Option>
        )
        return assigneeList
    }
    renderTags() {
        const tagList = this.state.tag.map((item, index) => 
            <Option class='selector-input' key={index} value={item}>{item}</Option>
        )
        return tagList
    }
    renderStatus() {
        const statusList = this.state.status.map((item, index) => 
            <Checkbox key={index} value={item}>{item}</Checkbox>
        )
        return statusList
    }
    renderImportanceLevel() {
        const ImportanceLevelList = this.state.importanceLevel.map((item, index) => 
            <Checkbox key={index} value={item}>{item}</Checkbox>
        )
        return ImportanceLevelList
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
{/* <div class="menu-section">
<p class="menu-title">FILTER</p>
<ul class="work-item-list">
    <li class="filter-selector">
        <p>Assignee</p>
        <div class="selector">
            <div class="selector-input" onclick="toggle_visibility('assignee-list')">
                <input placeholder="Select assignee">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div id="assignee-list" class="selector-list">
                <p>Anros Nguyen</p>
                <p>Jessica Jung</option>
                <p>Thien Khung</option>
            </div>
        </div>            
    </li>
    <li class="filter-selector">
        <p>Tag</p>
        <div class="selector">
            <div class="selector-input" onclick="toggle_visibility('tag-list')">
                <input placeholder="Select tags">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div id="tag-list" class="selector-list">
                <p>#pnp</p>
                <p>#pcp</option>
                <p>#david-nguyen</option>
            </div>
        </div>        
    </li>
    <li class="filter-selector">
        <p>Status</p>
        <div class="checkbox-list">
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">New</span><br>
            </div>
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">In progress</span><br>
            </div>
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">Done</span><br>
            </div>
        </div>             
    </li>
    <li class="filter-selector">
        <p>Importance</p>
        <div class="checkbox-list">
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">Critical</span><br>
            </div>
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">High</span><br>
            </div>
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">Low</span><br>
            </div>
            <div class="checkbox-item">
                <input type="checkbox">
                <span class="checkmark">Normal</span><br>
            </div>
        </div>                
    </li>
</ul>
</div>
</div> */}