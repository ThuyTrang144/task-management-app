import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

class Todo extends React.PureComponent {
    deleteTodo = () => {
        this.props.deleteTodo(this.props.id);
    }
    render() {
        return (
            <div className="todo-item">
                <div>
                    <Checkbox />
                    <span className="todo-name">{this.props.name}</span>
                </div>
                <div className="todo-info">
                    <div className='assignee'>
                        <span>{this.props.assignee}</span>
                        <DownOutlined/>
                    </div>
                    <DeleteOutlined id="delete-icon" onClick={this.deleteTodo}/>
                </div>
            </div>
        );
    }
}

export default Todo;