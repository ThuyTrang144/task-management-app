import React from 'react';
import './styles.scss';
import { EditOutlined } from '@ant-design/icons';
import TagList from './tagList';
import WorkDetailHeader from './workDetailHeader';
import { Input } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import Todo from './todo';
import ActivitiesList from './activitiesList';
import AssignmentSection from './assignmentSection';
import Attachment from './attachment';

class WorkDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            description: 'This is a work item',
            isEditDes: false,
            isOpen: false,
            todoValue: ''
        };
    }
    openEditView = () => {
        if (this.state.isEditDes) {
            this.setState({ isEditDes: false });
        } else {
            this.setState({ isEditDes: true });
        }
    }
    onChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }
    editDescription = (text) => {
        this.setState( { description: text });
        return this.state.description;
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.editDescription(this.state.description);
            this.setState({ isEditDes: false }) ;
        }
    }
    renderTodoList() {
        return this.props.todoList.map((item, index) =>
            <Todo
                key={item.name}
                index={index}
                name={item.name}
                assignee={item.assignee}
                deleteTodo={this.deleteTodo}
            />
        );
    }
    openTodo = () => {
        if (this.state.isOpen) {
            this.setState({ isOpen: false});
        } else {
            this.setState({ isOpen: true});
        }
    }
    addNewTodo = (text) => {
        const { todoList } = this.props;
        todoList.push({name: text, assignee:''});
        this.setState({ todoList: [...todoList] });
        this.setState( {todoValue: ''});
    }
    onKeyPress = (e) => {
        if (e.charCode === 13) {
            this.addNewTodo(this.state.todoValue);
        }
    }
    deleteTodo = (index) => {
        const { todoList } = this.props;
        todoList.splice(index, 1);
        this.setState({ todoList: [...todoList] });
    }
    render() {
        return (
            <div id="work-detail-board" className="work-detail">
                <WorkDetailHeader backToBucketBoard={this.props.backToBucketBoard} workDetailHeaderTitle={this.props.workDetailHeaderTitle}/>
                <div className='detail-view'>
                    <div className='detail-view-left'>
                        <TagList />
                        <div className="item-description">
                            {this.state.isEditDes ?
                                <Input
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    onKeyPress={this.onKeyPress}/> :
                                <p>{this.state.description}<EditOutlined onClick={this.openEditView}/></p>}
                        </div>
                        <div className="todo-list">
                            <div className="dash-line"></div>
                            <div className="todo-title">
                                <span>Todo list</span>
                                {this.state.isOpen ? <UpOutlined onClick={this.openTodo}/> : <DownOutlined onClick={this.openTodo}/>}
                            </div>
                            <div style={this.state.isOpen ? {display:'block'} : {display:'none'}}>
                                {this.renderTodoList()}
                                <Input
                                    type='text'
                                    placeholder='Add new todo here'
                                    onChange={(e) => this.setState({ todoValue: e.target.value })}
                                    value={this.state.todoValue}
                                    onKeyPress={this.onKeyPress}/>
                            </div>
                        </div>
                        <ActivitiesList activitiesList={this.props.activitiesList} />
                    </div>
                    <div className='detail-view-right'>
                        <AssignmentSection owner={this.props.owner} participant={this.props.participant}/>
                        <Attachment attachmentList={this.props.attachmentList}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkDetail;