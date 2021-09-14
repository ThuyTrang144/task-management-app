import React from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

const Todo = React.memo(function (props) {
    const deleteTodo = () => {
        props.deleteTodoItem(props.id);
    };
    return (
        <div className="todo-item">
            <div>
                <Checkbox />
                <span className="todo-name">{props.name}</span>
            </div>
            <div className="todo-info">
                <div className='assignee'>
                    <span>{props.assignee}</span>
                    <DownOutlined/>
                </div>
                <DeleteOutlined id="delete-icon" onClick={deleteTodo}/>
            </div>
        </div>
    );
});

export default Todo;