import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { DataContext } from '../../../../../../context';

class Todo extends React.PureComponent {
    static contextType = DataContext;
    deleteTodo = () => {
        this.context.deleteTodo(this.context.state.activeId, this.props.id);
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