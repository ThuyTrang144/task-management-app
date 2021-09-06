import { faArchive, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Bucket } from './Bucket';
import './style.scss';

export class BucketList extends React.PureComponent {
    renderBucketList() {
        const { bucketList } = this.props;
        return bucketList.map(item =>
            <div key={item.id} className='bucket-box'>
                <div className="bucket-title">
                    <span>{item.name.toLocaleUpperCase()}</span>
                    <div className="actions">
                        <FontAwesomeIcon className='bucket-icon' icon={faArchive} />
                        <FontAwesomeIcon className='bucket-icon' icon={faBars} />
                    </div>
                </div>
                <Bucket
                    workItemList={this.props.workItemList}
                    id={item.id}
                    bucketList={this.props.bucketList}
                    searchValue={this.props.searchValue}
                />
            </div>
        );
    }
    render() {
        return (
            <div className='bucket-listing'>
                {this.renderBucketList()}
            </div>
        );
    }
}