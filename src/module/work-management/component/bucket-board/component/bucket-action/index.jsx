import React from 'react';
import { Select } from 'antd';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
const { Option } = Select;
const option = ['Buckets', 'Tags'];

export class BucketAction extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Buckets',
            searchValue: props.searchValue,
            newBucket: ''
        };
    }
    onChange = (option) => {
        const value = option;
        this.setState({ value });
    }
    searchWorkItem = (e) => {
        const searchValue = e.target.value;
        this.props.searchWorkItem(searchValue);
    }
    addNewBucket = (e) => {
        if (e.charCode === 13) {
            this.props.addNewBucket(this.state.newBucket);
            this.setState({ newBucket: ''});
        }
    }
    render() {
        console.log('searchValue', this.state.searchValue);
        return (
            <div className="bucket-actions">
                <div className="search-box">
                    <FontAwesomeIcon className='search-item' icon={faSearch} />
                    <input type="text" placeholder="Search for work items" onChange={this.searchWorkItem}/>
                </div>
                <div className='action-group'>
                    <Select
                        className='bucket-selector'
                        defaultValue={'View by: ' + this.state.value}
                        onChange={this.onChange}
                        value={'View By: ' + this.state.value}
                    >
                        <Option value={option[0]}>{option[0]}</Option>
                        <Option value={option[1]}>{option[1]}</Option>
                    </Select>
                    <button className="add-bucket"><FontAwesomeIcon className='add-icon' icon={faPlus} />Add bucket
                    </button>
                </div>
            </div>
        );
    }
}