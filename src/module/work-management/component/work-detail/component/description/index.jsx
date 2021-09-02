import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './style.scss';
import { editWorkItemDescription } from '../../../../../../data';

class Description extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            isEditDes: false,
            defaultValue: props.description
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('next props', nextProps);
        console.log('prev ', prevState);
        if (nextProps.description !== prevState.description) {
            return {
                description: nextProps.description,
                defaultValue: nextProps.description
            };
        } else return null;
    }
    openEditView = () => {
        if (this.state.isEditDes) {
            this.setState({ isEditDes: false });
        } else {
            this.setState({ isEditDes: true });
        }
    }
    onKeyPress = (e) => {
        const value = e.target.value;
        editWorkItemDescription(this.props.activeId, value);
        this.setState({ isEditDes: false }) ;
    }
    render() { 
        console.log('description', this.state.defaultValue);
        return ( 
            <div className="item-description">
                {this.state.isEditDes ?
                    <Input
                        defaultValue={this.state.defaultValue}
                        onPressEnter={this.onKeyPress}/> :
                    <p>{this.state.defaultValue}<EditOutlined onClick={this.openEditView}/></p>}
            </div> );
    }
}
 
export default Description;