import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { WorkItemContext } from '../../../../context/workItem';

class Todo extends React.PureComponent {
    static contextType = WorkItemContext;
    deleteTodo = () => {
        this.context.deleteTodo(this.props.workId, this.props.id);
    }
    render() {
        console.log('contex', this.context);
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