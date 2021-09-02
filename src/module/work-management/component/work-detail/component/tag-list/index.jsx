import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { addTag, findTagsById } from '../../../../../../data';
import './style.scss';

class TagList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            inputTag: ''
        };
    }
    renderTags() {
        const { tagId } = this.props;
        const tagList = [];
        for (let i = 0; i < tagId.length; i++) {
            tagList.push(findTagsById(tagId[i]));
        }
        return tagList.map(item => (
            <Tag className='tag-item' key={item.id} closable onClick={this.deteleTag}>{item.name}</Tag>
        ));
    }
    showInput = () => {
        if (this.state.isAdding) {
            this.setState({ isAdding: false });
        } else {
            this.setState({ isAdding: true });
        }
    }
    addTag = () => {
        addTag(this.props.activeId, this.state.inputTag);
        this.setState({ tagId: [...this.props.tagId]});
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.addTag(this.state.inputTag);
            this.setState({ inputTag: '' });
            this.setState({ isAdding: false });
        }
    }
    onChange = (e) => {
        const inputTag = e.target.value;
        this.setState({ inputTag });
    }
    onBlur = () => {
        this.setState({ isAdding: false });
    }

    render() {
        console.log('isAdiing', this.state.isAdding);
        return (
            <div className="tag">
                {this.renderTags()}
                {this.state.isAdding ?
                    <Input
                        type='text'
                        size="small"
                        className='tag-input add-tag-input'
                        placeholder='Type tag here'
                        value={this.state.inputTag}
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                        onBlur={this.onBlur}
                        autoFocus
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