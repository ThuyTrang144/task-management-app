import { faArchive, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.scss';
import Bucket from './bucket';
class BucketList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            boardName: [
                { name: 'Important Tasks' },
                { name: 'Important Tasks'},
                { name: 'Important Tasks'},
                { name: 'Important Tasks'},
                { name: 'Important Tasks'},
            ]
         }
    }
    renderBucketList() {
        const {boardName} = this.state
        const bucketList = boardName.map((item, index) =>
            <div key={index} className='bucket-box'>
                <div className="bucket-title">
                        <a href="#">{item.name.toLocaleUpperCase()}</a>
                        <div className="actions">
                            <FontAwesomeIcon className='bucket-icon archive-icon' icon={faArchive} />
                            <FontAwesomeIcon className='bucket-icon favourite-icon' icon={faBars} />
                        </div>
                </div>
                <Bucket />
            </div>
        )
        return bucketList
    }
    render() { 
        return ( 
            <div className='bucket-board'>
                <div className="bucket-actions">
                <div className="search-box">
                    <FontAwesomeIcon className='search-item' icon={faSearch} />
                    <input type="text" placeholder="Search for work items" />
                </div>
                <div>
                    <select className="bucket-selector">
                        <option>Buckets</option>
                        <option>Tags</option>
                    </select>
                    <button class="add-bucket"><i class="fa fa-plus"></i>Add bucket
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