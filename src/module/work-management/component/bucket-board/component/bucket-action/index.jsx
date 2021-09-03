import React from 'react';
import { Select } from 'antd';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Popover, Button, Input } from 'antd';
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
            isOpenBucketForm: false,
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
    addNewBucket = () => {
        this.props.addNewBucket(this.state.newBucket);
        this.setState({ newBucket: ''});
    }
    renderAddBucketForm = () => {
        return (
            <div className='add-bucket-form'>
                <p>Bucket Name</p>
                <Input placeholder="Enter bucket name here"
                    onChange={(e) => this.setState({ newBucket: e.target.value})}
                    value={this.state.newBucket}
                    onPressEnter={this.addNewBucket}
                />
            </div>);
    }
    render() {
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
                    {/* <button className="add-bucket"><FontAwesomeIcon className='add-icon' icon={faPlus} onClick={this.openAddBucketForm}/>Add bucket
                    </button> */}
                    <Popover className='add-bucket' placement="bottomRight" content={this.renderAddBucketForm} trigger="click">
                        <Button><FontAwesomeIcon className='add-icon' icon={faPlus}/>Add Bucket</Button>
                    </Popover>
                    {/* {this.state.isOpenBucketForm} ? <Dropdown overlay={menu} placement="bottomRight"><Button>bottomRight</Button></Dropdown> */}
                </div>
            </div>
        );
    }
}