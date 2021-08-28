import { faArchive, faBars, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.scss';
import Bucket from './bucket';
import { Select } from 'antd';
const { Option } = Select;
const option = ['Buckets', 'Tags'];

class BucketList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Buckets',
        };
    }
    renderBucketList() {
        return this.props.bucketList.map(item =>
            <div key={item.name} className='bucket-box'>
                <div className="bucket-title">
                    <a href="#">{item.name.toLocaleUpperCase()}</a>
                    <div className="actions">
                        <FontAwesomeIcon className='bucket-icon' icon={faArchive} />
                        <FontAwesomeIcon className='bucket-icon' icon={faBars} />
                    </div>
                </div>
                <Bucket
                    bucketItemList={this.props.bucketItemList}
                    viewWorkDetailOfBucket={this.props.viewWorkDetailOfBucket}
                />
            </div>
        );
    }
    onChange = (option) => {
        const value = option;
        this.setState({ value });
    }
    render() {
        return (
            <div className='bucket-board'>
                <div className="bucket-actions">
                    <div className="search-box">
                        <FontAwesomeIcon className='search-item' icon={faSearch} />
                        <input type="text" placeholder="Search for work items" />
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
                <div className='bucket-listing'>
                    {this.renderBucketList()}
                </div>
            </div>
        );
    }
}

export default BucketList;