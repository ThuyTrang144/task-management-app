import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tagList: [
                'language',
                'code',
                'reading',
                'watching'
            ],
            isAdding: false,
            inputTag: ''
         }
    }
    renderTags() {
        return this.state.tagList.map((item, index) => (
            <Tag className='tag-item' key={index} closable>{item}</Tag>
        ))
    }
    showInput = () => {
        if (this.state.isAdding) {
            this.setState({ isAdding: false })
        } else {
            this.setState({ isAdding: true })
        }
    }
    addTag = (text) => {
        const { tagList } = this.state;
        tagList.push(text)
        this.setState({ tagList: [...tagList] })
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.addTag(this.state.inputTag)
            this.setState({ inputTag: '' }) 
        }
    }
    onChange = (e) => {
        const inputTag = e.target.value
        this.setState({ inputTag })
    }
    render() { 
        return ( 
            <div className="tag">
                {this.renderTags()}
                {this.state.isAdding ? 
                    <Input 
                        type='text' 
                        size="small"
                        className="tag-input add-tag-input"
                        placeholder='Type tag here'
                        value={this.state.inputTag}
                        onChange={this.onChange} 
                        onKeyPress={this.onKeyPress}
                        ></Input> : 
                    <Tag className='add-tag' onClick={this.showInput}>
                        <PlusOutlined /> New Tag
                    </Tag>
                }
           </div>
         );
    }
}
 
export default TagList;