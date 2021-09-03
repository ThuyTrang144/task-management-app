import React from 'react';
import { addNewBucket, editBucketName } from '../../../../data';
import { BucketList, BucketAction } from './component';
import './style.scss';

class BucketBoard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            bucketList: props.bucketList
        };
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text });
    }
    addNewBucket = (text) => {
        const bucketList = addNewBucket(text);
        this.setState({ bucketList });
    }
    deleteBucket = (id) => {
        this.props.deleteBucket(id);
        this.setState({ bucketList: this.props.bucketList});
    }
    editBucketName = (id, text) => {
        const bucketList = editBucketName(id, text);
        this.setState({ bucketList });
    }
    render() {
        return (
            <div className='bucket-board'>
                <BucketAction searchValue={this.state.searchValue} searchWorkItem={this.searchWorkItem} addNewBucket={this.addNewBucket}/>
                <BucketList 
                    bucketList={this.state.bucketList} 
                    workItemList={this.props.workItemList} 
                    searchValue={this.state.searchValue}
                    deleteBucket={this.deleteBucket}
                    editBucketName={this.editBucketName}
                />
            </div>
        );
    }
}

export default BucketBoard;