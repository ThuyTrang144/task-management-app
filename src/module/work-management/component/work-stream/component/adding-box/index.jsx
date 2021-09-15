import { faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import './style.scss';

const AddingBox = React.memo( function (props) {
    const { addWorkItem } = useWorkItem();
    const [value, setValue] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    function onChange(e) {
        const value = e.target.value;
        setValue(value);
    }
    function onSubmit(e) {
        if (e.charCode === 13) {
            addWorkItem(value);
            setValue('');
        }
    }
    const openSearch = () => {
        if (isSearch) {
            setIsSearch(false);
        } else {
            setIsSearch(true);
        }
    };
    const searchWorkItem = (e) => {
        const searchValue = e.target.value;
        props.searchWorkItem(searchValue);
    };
    return (
        <div className="creation-box">
            <div className="box-heading">
                <div className="text-heading">
                    <span className="title">Work Stream</span><br></br>
                    <span className="total-work">10 items</span>
                </div>
                <FontAwesomeIcon 
                    className="search-icon" 
                    icon={isSearch ? faTimes : faSearch} 
                    onClick={openSearch}/>
            </div>
            {isSearch ?   
                <input
                    type='search'
                    className='search-box'
                    placeholder='Enter work item name here'
                    onChange={searchWorkItem}/> : null}
            <div className="add-work-item">
                <input
                    type="text"
                    className="adding-box"
                    placeholder="Enter Something"
                    value={value}
                    onChange={onChange}
                    onKeyPress={onSubmit}/>
                <FontAwesomeIcon className='add-icon' icon={faPlus} />
            </div>
            <div className="instruction">
                <span>Enter to create a work item</span>
                <span className="add-detail">Add detail</span>
            </div>
        </div>
    );
});

export default AddingBox;