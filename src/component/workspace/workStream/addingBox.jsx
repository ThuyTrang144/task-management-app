import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
class AddingBox extends React.PureComponent {
    render() { 
        return ( 
            <div className="creation-box">
                <div className="box-heading">
                    <div className="text-heading">
                        <span className="title">Work Stream</span><br></br>
                        <span className="total-work">10 items</span>
                    </div>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                </div>
                <div className="add-work-item">
                    <input type="text" className="adding-box" placeholder="Enter Something" />
                    <FontAwesomeIcon className='add-icon' icon={faPlus} />
                </div>        
                <div className="instruction">
                    <span>Enter to create a work item</span>
                    <a href="#" className="add-detail">Add detail</a>
                </div>
            </div>
         );
    }
}
 
export default AddingBox;