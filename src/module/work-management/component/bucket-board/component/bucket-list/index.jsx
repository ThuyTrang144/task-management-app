import React from 'react';
import { Bucket } from './Bucket';
import './style.scss';

export class BucketList extends React.PureComponent {
    renderBucketList() {
        const { bucketList } = this.props;
        return bucketList.map(item =>
            <Bucket
                key={item.id}
                name={item.name}
                workItemList={this.props.workItemList}
                id={item.id}
                searchValue={this.props.searchValue}
                deleteBucket={this.props.deleteBucket}
                editBucketName={this.props.editBucketName}
            />
        );
    }
    render() {
        // console.log('bucketList', this.props.bucketList);
        return (
            <div className='bucket-listing'>
                {this.renderBucketList()}
            </div>
        );
    }
}