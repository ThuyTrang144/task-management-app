import { faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { WorkItemContext } from '../../../../context/workItem';
import './style.scss';

class AddingBox extends React.PureComponent {
    static contextType = WorkItemContext;
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSearch: false
        };
    }
    onChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }
    onSubmit = (e) => {
        if (e.charCode === 13) {
            this.context.addWorkItem(this.state.value);
            this.setState({ value: ''});
        }
    }
    openSearch = () => {
        if (this.state.isSearch) {
            this.setState({isSearch: false});
        } else {
            this.setState({isSearch: true});
        }
    }
    searchWorkItem = (e) => {
        const searchValue = e.target.value;
        this.props.searchWorkItem(searchValue);
    }
    render() {
        return (
            <div className="creation-box">
                <div className="box-heading">
                    <div className="text-heading">
                        <span className="title">Work Stream</span><br></br>
                        <span className="total-work">10 items</span>
                    </div>
                    <FontAwesomeIcon 
                        className="search-icon" 
                        icon={this.state.isSearch ? faTimes : faSearch} 
                        onClick={this.openSearch}/>
                </div>
                {this.state.isSearch ?   
                    <input
                        type='search'
                        className='search-box'
                        placeholder='Enter work item name here'
                        onChange={this.searchWorkItem}/> : null}
                <div className="add-work-item">
                    <input
                        type="text"
                        className="adding-box"
                        placeholder="Enter Something"
                        value={this.state.value}
                        onChange={this.onChange}
                        onKeyPress={this.onSubmit}/>
                    <FontAwesomeIcon className='add-icon' icon={faPlus} />
                </div>
                <div className="instruction">
                    <span>Enter to create a work item</span>
                    <span className="add-detail">Add detail</span>
                </div>
            </div>
        );
    }
}

export default AddingBox;