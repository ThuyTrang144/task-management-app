import './styles.scss';
import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Todo from './Todo';
import { findUserById, addNewTodo, deleteTodo } from '../../../../../../data';

class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            newTodo: '',
        };
    }
    openTodo = () => {
        if (this.state.isOpen) {
            this.setState({ isOpen: false});
        } else {
            this.setState({ isOpen: true});
        }
    }
    renderTodoList() {
        return this.props.todoList.map(item => {
            const assignee = findUserById(item.assigneeId);
            return <Todo
                key={item.id}
                id={item.id}
                name={item.name}
                assignee={assignee.name}
                deleteTodo={this.deleteTodo}
            />;
        }
        );
    }
    addNewTodo = (e) => {
        if (e.charCode === 13) {
            addNewTodo(this.props.activeId, this.state.newTodo);
            this.setState( {newTodo: ''});
        }
    }
    deleteTodo = (id) => {
        deleteTodo(this.props.activeId, id);
        this.setState( { todoList : [...this.props.todoList]});
    }
    render() { 
        return ( 
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
                        onChange={(e) => this.setState({ newTodo: e.target.value })}
                        value={this.state.newTodo}
                        onKeyPress={this.addNewTodo}/>
                </div>
            </div>
        );
    }
}
 
export default TodoList;


//

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// ReactDOM.render(
//   <Collapse accordion>
//     <Panel header="This is panel header 1" key="1">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 2" key="2">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 3" key="3">
//       <p>{text}</p>
//     </Panel>
//   </Collapse>,
//   mountNode,
// );